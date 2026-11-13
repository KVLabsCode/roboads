import { NextRequest } from 'next/server'
import Stripe from 'stripe'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const SECRET = 'whsec_test_secret'
process.env.STRIPE_WEBHOOK_SECRET = SECRET

const insert = vi.fn()
const del = vi.fn()
const markRefunded = vi.fn()
const stripeClient = new Stripe('sk_test_dummy')

vi.mock('@/lib/server/clients', () => ({
  stripe: () => stripeClient,
  db: () => ({
    from: () => ({ insert, delete: () => ({ eq: del }) }),
  }),
}))
vi.mock('@/lib/server/reservations', async (orig) => ({
  ...(await orig<typeof import('@/lib/server/reservations')>()),
  markRefunded: (...a: unknown[]) => markRefunded(...a),
}))

const { POST } = await import('../route')

function signed(event: object, secret = SECRET) {
  const payload = JSON.stringify(event)
  const header = stripeClient.webhooks.generateTestHeaderString({ payload, secret })
  return new NextRequest('https://kovio.dev/api/stripe/webhook', {
    method: 'POST',
    body: payload,
    headers: { 'stripe-signature': header },
  })
}

const refund = {
  id: 'evt_refund_1',
  type: 'charge.refunded',
  livemode: false,
  data: { object: { object: 'charge', refunded: true, payment_intent: 'pi_123' } },
}

beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
  insert.mockReset().mockResolvedValue({ error: null })
  del.mockReset().mockResolvedValue({ error: null })
  markRefunded.mockReset().mockResolvedValue(undefined)
})

describe('POST /api/stripe/webhook', () => {
  it('rejects a payload signed with the wrong secret', async () => {
    const res = await POST(signed(refund, 'whsec_wrong'))
    expect(res.status).toBe(400)
    expect(insert).not.toHaveBeenCalled()
  })

  it('marks a fully refunded charge as refunded', async () => {
    const res = await POST(signed(refund))
    expect(res.status).toBe(200)
    expect(insert).toHaveBeenCalledWith({ id: 'evt_refund_1' })
    expect(markRefunded).toHaveBeenCalledWith('pi_123')
  })

  it('ignores partial refunds', async () => {
    await POST(signed({ ...refund, data: { object: { ...refund.data.object, refunded: false } } }))
    expect(markRefunded).not.toHaveBeenCalled()
  })

  it('skips an event it has already processed', async () => {
    insert.mockResolvedValue({ error: { code: '23505', message: 'duplicate key' } })
    const res = await POST(signed(refund))
    expect(await res.json()).toEqual({ received: true, duplicate: true })
    expect(markRefunded).not.toHaveBeenCalled()
  })

  it('releases the event and asks Stripe to retry when handling fails', async () => {
    markRefunded.mockRejectedValue(new Error('db down'))
    const res = await POST(signed(refund))
    expect(res.status).toBe(500)
    expect(del).toHaveBeenCalledWith('id', 'evt_refund_1')
  })

  it('acknowledges event types it does not handle', async () => {
    const res = await POST(signed({ ...refund, id: 'evt_2', type: 'customer.created' }))
    expect(res.status).toBe(200)
    expect(insert).not.toHaveBeenCalled()
  })
})
