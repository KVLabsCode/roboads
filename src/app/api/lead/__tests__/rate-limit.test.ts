import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { POST } from '../route'
import { checkRateLimit, clientIp, resetRateLimiter } from '@/lib/rate-limit'

const realFetch = global.fetch
const fetchMock = vi.fn()

function req(ip?: string) {
  const fd = new FormData()
  fd.set('kind', 'trial')
  fd.set('name', 'Ada Kovio')
  fd.set('email', 'ada@brand.com')
  fd.set('company', 'Acme')
  return new Request('https://kovio.dev/api/lead', {
    method: 'POST',
    body: fd,
    headers: { host: 'kovio.dev', ...(ip ? { 'x-forwarded-for': ip } : {}) },
  })
}

beforeEach(() => {
  resetRateLimiter()
  fetchMock.mockReset()
  global.fetch = fetchMock as unknown as typeof fetch
  fetchMock.mockResolvedValue(new Response('null', { status: 200 }))
  delete process.env.RESEND_API_KEY
})

afterEach(() => {
  global.fetch = realFetch
})

describe('/api/lead rate limit', () => {
  it('429s the 6th request from the same IP within the hour, with retry-after', async () => {
    for (let i = 0; i < 5; i++) {
      expect((await POST(req('203.0.113.7'))).status).toBe(200)
    }
    const sixth = await POST(req('203.0.113.7'))
    expect(sixth.status).toBe(429)
    const retryAfter = Number(sixth.headers.get('retry-after'))
    expect(retryAfter).toBeGreaterThan(0)
    expect(retryAfter).toBeLessThanOrEqual(3600)
    expect((await sixth.json()).error).toMatch(/Too many submissions/)
    // The blocked request never reached the DB: 5 RPC calls, not 6.
    expect(fetchMock).toHaveBeenCalledTimes(5)
  })

  it('leaves a different IP unaffected while one is blocked', async () => {
    for (let i = 0; i < 6; i++) await POST(req('203.0.113.7'))
    expect((await POST(req('203.0.113.7'))).status).toBe(429)
    expect((await POST(req('198.51.100.9'))).status).toBe(200)
  })

  it('keys on the FIRST hop of x-forwarded-for', async () => {
    for (let i = 0; i < 5; i++) await POST(req('203.0.113.7, 10.0.0.1'))
    // Same client, different proxy chain tail: still the same bucket.
    expect((await POST(req('203.0.113.7, 10.9.9.9'))).status).toBe(429)
  })

  it('resets after the window expires (fixed window)', () => {
    const t0 = 1_000_000
    for (let i = 0; i < 5; i++) {
      expect(checkRateLimit('1.2.3.4', t0 + i).allowed).toBe(true)
    }
    // Still inside the hour: blocked, with the remaining window as retry-after.
    const blocked = checkRateLimit('1.2.3.4', t0 + 30 * 60 * 1000)
    expect(blocked.allowed).toBe(false)
    expect(blocked.retryAfterSeconds).toBe(30 * 60)
    // One hour after the window opened: a fresh window admits again.
    expect(checkRateLimit('1.2.3.4', t0 + 60 * 60 * 1000).allowed).toBe(true)
  })

  it('clientIp falls back to x-real-ip, then "unknown"', () => {
    expect(clientIp(new Request('https://x.test', { headers: { 'x-forwarded-for': ' 9.9.9.9 , 10.0.0.1' } }))).toBe('9.9.9.9')
    expect(clientIp(new Request('https://x.test', { headers: { 'x-real-ip': '8.8.8.8' } }))).toBe('8.8.8.8')
    expect(clientIp(new Request('https://x.test'))).toBe('unknown')
  })
})
