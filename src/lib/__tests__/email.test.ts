import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { sendEmail, emailStatus } from '@/lib/email'

const realFetch = global.fetch
const fetchMock = vi.fn()

beforeEach(() => {
  fetchMock.mockReset()
  global.fetch = fetchMock as unknown as typeof fetch
  delete process.env.RESEND_API_KEY
  delete process.env.RESEND_FROM
})

afterEach(() => {
  global.fetch = realFetch
})

describe('sendEmail', () => {
  it('skips without RESEND_API_KEY and never hits the network', async () => {
    const out = await sendEmail({ to: 'a@b.co', subject: 's', html: '<p>x</p>' })
    expect(out).toEqual({ ok: false, error: 'email_not_configured' })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('POSTs to Resend with the default from, and reply_to when given', async () => {
    process.env.RESEND_API_KEY = 'k'
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ id: 'em_1' }), { status: 200 }))
    const out = await sendEmail({ to: 'a@b.co', subject: 's', html: '<p>x</p>', replyTo: 'lead@co.io' })
    expect(out).toEqual({ ok: true, id: 'em_1' })
    const [url, init] = fetchMock.mock.calls[0]
    expect(String(url)).toBe('https://api.resend.com/emails')
    const body = JSON.parse((init as RequestInit).body as string)
    expect(body.from).toBe('Kovio <notifications@kovio.dev>')
    expect(body.to).toEqual(['a@b.co'])
    expect(body.reply_to).toBe('lead@co.io')
  })

  it('honors the RESEND_FROM env override', async () => {
    process.env.RESEND_API_KEY = 'k'
    process.env.RESEND_FROM = 'Kovio Leads <leads@kovio.dev>'
    fetchMock.mockResolvedValue(new Response('{}', { status: 200 }))
    await sendEmail({ to: 'a@b.co', subject: 's', html: 'x' })
    const body = JSON.parse((fetchMock.mock.calls[0][1] as RequestInit).body as string)
    expect(body.from).toBe('Kovio Leads <leads@kovio.dev>')
  })

  it('returns a typed error on a Resend failure or a thrown fetch', async () => {
    process.env.RESEND_API_KEY = 'k'
    fetchMock.mockResolvedValue(new Response('nope', { status: 422 }))
    expect((await sendEmail({ to: 'a@b.co', subject: 's', html: 'x' })).error).toMatch(/^resend_422/)
    fetchMock.mockRejectedValue(new Error('offline'))
    expect((await sendEmail({ to: 'a@b.co', subject: 's', html: 'x' })).error).toBe('email_send_failed')
  })
})

describe('emailStatus', () => {
  it('maps batches to sent / skipped / error honestly', () => {
    expect(emailStatus([])).toBe('skipped')
    expect(emailStatus([{ ok: false, error: 'email_not_configured' }, { ok: false, error: 'email_not_configured' }])).toBe('skipped')
    expect(emailStatus([{ ok: true }, { ok: true }])).toBe('sent')
    expect(emailStatus([{ ok: true }, { ok: false, error: 'resend_500: x' }])).toBe('error')
    // A partial not-configured mix should never read as skipped.
    expect(emailStatus([{ ok: true }, { ok: false, error: 'email_not_configured' }])).toBe('error')
  })
})
