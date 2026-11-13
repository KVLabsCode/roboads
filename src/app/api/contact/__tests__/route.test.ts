import { NextRequest } from 'next/server'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const saveSubmission = vi.fn()
const isRateLimited = vi.fn()
const notifyFounders = vi.fn()

vi.mock('next/server', async (orig) => ({ ...(await orig<typeof import('next/server')>()), after: (fn: () => unknown) => fn() }))
vi.mock('@/lib/server/submissions', async (orig) => ({
  ...(await orig<typeof import('@/lib/server/submissions')>()),
  saveSubmission: (...a: unknown[]) => saveSubmission(...a),
  isRateLimited: (...a: unknown[]) => isRateLimited(...a),
}))
vi.mock('@/lib/server/email', async (orig) => ({
  ...(await orig<typeof import('@/lib/server/email')>()),
  notifyFounders: (...a: unknown[]) => notifyFounders(...a),
}))

const { POST } = await import('../route')

const advertise = { form: 'advertise', name: 'Ada', company: 'Nike', email: 'ada@nike.com', details: 'NYC, May 12' }

function req(body: unknown, headers: Record<string, string> = {}) {
  return new NextRequest('https://kovio.dev/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { host: 'kovio.dev', 'content-type': 'application/json', ...headers },
  })
}

beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
  saveSubmission.mockReset().mockResolvedValue(undefined)
  isRateLimited.mockReset().mockResolvedValue(false)
  notifyFounders.mockReset().mockResolvedValue(undefined)
})

describe('POST /api/contact', () => {
  it('saves the submission and emails founders with reply-to set to the sender', async () => {
    const res = await POST(req(advertise))
    expect(res.status).toBe(200)
    expect(saveSubmission).toHaveBeenCalledWith('advertise', expect.objectContaining({ company: 'Nike' }), expect.any(String))
    expect(notifyFounders).toHaveBeenCalledWith('Campaign enquiry: Nike', expect.anything(), 'ada@nike.com')
  })

  it('subjects careers emails with the role and name', async () => {
    await POST(req({ form: 'careers', name: 'Ada', email: 'a@b.co', role: 'Monetization Lead', link: 'https://x.com/ada' }))
    expect(notifyFounders).toHaveBeenCalledWith('Application: Monetization Lead, Ada', expect.anything(), 'a@b.co')
  })

  it('rejects invalid input with a 400 and a readable error', async () => {
    const res = await POST(req({ ...advertise, email: 'nope' }))
    expect(res.status).toBe(400)
    expect(await res.json()).toEqual({ error: 'Email must be a valid email address.' })
    expect(saveSubmission).not.toHaveBeenCalled()
  })

  it('pretends to succeed for honeypot hits without saving or emailing', async () => {
    const res = await POST(req({ ...advertise, website: 'http://spam.example' }))
    expect(res.status).toBe(200)
    expect(saveSubmission).not.toHaveBeenCalled()
    expect(notifyFounders).not.toHaveBeenCalled()
  })

  it('rejects cross-site browser posts', async () => {
    const res = await POST(req(advertise, { origin: 'https://evil.example' }))
    expect(res.status).toBe(403)
  })

  it('returns 429 when the IP is over the limit', async () => {
    isRateLimited.mockResolvedValue(true)
    const res = await POST(req(advertise))
    expect(res.status).toBe(429)
    expect(saveSubmission).not.toHaveBeenCalled()
  })

  it('still succeeds when the database is down but the email goes out', async () => {
    saveSubmission.mockRejectedValue(new Error('db down'))
    expect((await POST(req(advertise))).status).toBe(200)
  })

  it('fails when both the database and the email fail', async () => {
    saveSubmission.mockRejectedValue(new Error('db down'))
    notifyFounders.mockRejectedValue(new Error('resend down'))
    expect((await POST(req(advertise))).status).toBe(500)
  })
})
