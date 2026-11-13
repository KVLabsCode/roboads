import { NextRequest } from 'next/server'
import { describe, expect, it } from 'vitest'
import { GET } from '../route'

const visit = (code: string) => GET(new NextRequest(`https://kovio.dev/r/${code}`), { params: Promise.resolve({ code }) })

describe('GET /r/[code]', () => {
  it('sets a 30-day referral cookie and sends the visitor to /reserve', async () => {
    const res = await visit('AdaLove7k2m')
    expect(res.headers.get('location')).toBe('https://kovio.dev/reserve')
    const cookie = res.cookies.get('kovio_ref')
    expect(cookie?.value).toBe('adalove7k2m')
    expect(cookie?.maxAge).toBe(60 * 60 * 24 * 30)
    expect(cookie?.httpOnly).toBe(true)
  })

  it('redirects without a cookie for a malformed code', async () => {
    const res = await visit('not a code!')
    expect(res.headers.get('location')).toBe('https://kovio.dev/reserve')
    expect(res.cookies.get('kovio_ref')).toBeUndefined()
  })
})
