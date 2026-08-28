import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { POST } from '../route'

const realFetch = global.fetch
const fetchMock = vi.fn()

function form(fields: Record<string, string>) {
  const fd = new FormData()
  for (const [k, v] of Object.entries(fields)) fd.set(k, v)
  return fd
}

const validFields = {
  kind: 'trial',
  name: 'Ada Kovio',
  email: 'ada@brand.com',
  company: 'Acme',
  source: 'landing',
}

function req(fields: Record<string, string>, headers: Record<string, string> = {}) {
  return new Request('https://kovio.dev/api/lead', {
    method: 'POST',
    body: form(fields),
    headers: { host: 'kovio.dev', ...headers },
  })
}

beforeEach(() => {
  fetchMock.mockReset()
  global.fetch = fetchMock as unknown as typeof fetch
  // RPC success by default.
  fetchMock.mockResolvedValue(new Response('null', { status: 200 }))
  delete process.env.RESEND_API_KEY
})

afterEach(() => {
  global.fetch = realFetch
})

describe('POST /api/lead', () => {
  it('silently succeeds on a filled honeypot without touching the DB or email', async () => {
    const res = await POST(req({ ...validFields, website: 'https://spam.biz' }))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ ok: true })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('403s a cross-site POST (Origin from another host)', async () => {
    const res = await POST(req(validFields, { origin: 'https://evil.example' }))
    expect(res.status).toBe(403)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('403s a cross-site POST (Referer from another host, no Origin)', async () => {
    const res = await POST(req(validFields, { referer: 'https://evil.example/page' }))
    expect(res.status).toBe(403)
  })

  it('allows same-origin and missing-Origin requests (non-browser correctness)', async () => {
    expect((await POST(req(validFields, { origin: 'https://kovio.dev' }))).status).toBe(200)
    expect((await POST(req(validFields))).status).toBe(200)
  })

  it('422s when a field exceeds its length cap', async () => {
    const cases = [
      { name: 'x'.repeat(201) },
      { company: 'x'.repeat(201) },
      { email: `${'x'.repeat(320)}@a.io` },
      { fleet: 'x'.repeat(2001) },
    ]
    for (const overlong of cases) {
      const res = await POST(req({ ...validFields, ...overlong }))
      expect(res.status, JSON.stringify(Object.keys(overlong))).toBe(422)
    }
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('422s when required fields are missing', async () => {
    const res = await POST(req({ kind: 'trial', name: 'Ada' }))
    expect(res.status).toBe(422)
  })

  it('happy path stores the lead via kovio_submit_lead with the right args', async () => {
    const res = await POST(req(validFields, { origin: 'https://kovio.dev' }))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ ok: true })
    // No creative and no RESEND_API_KEY → exactly one fetch: the RPC.
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0]
    expect(String(url)).toMatch(/\/rest\/v1\/rpc\/kovio_submit_lead$/)
    expect(JSON.parse((init as RequestInit).body as string)).toEqual({
      p_kind: 'trial',
      p_name: 'Ada Kovio',
      p_email: 'ada@brand.com',
      p_company: 'Acme',
      p_fleet: null,
      p_creative_url: null,
      p_source: 'landing',
    })
  })

  it('sends the two best-effort emails when RESEND_API_KEY is set', async () => {
    process.env.RESEND_API_KEY = 'test-key'
    await POST(req(validFields))
    const resendCalls = fetchMock.mock.calls.filter(([u]) => String(u).includes('api.resend.com'))
    expect(resendCalls).toHaveLength(2)
  })

  it('maps a rate-limited RPC to a friendly 422', async () => {
    fetchMock.mockResolvedValue(new Response('rate_limited', { status: 429 }))
    const res = await POST(req(validFields))
    expect(res.status).toBe(422)
    expect((await res.json()).error).toMatch(/Too many submissions/)
  })
})
