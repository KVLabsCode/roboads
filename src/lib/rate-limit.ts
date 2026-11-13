// App-layer fixed-window rate limiter for the lead endpoint.
//
// HONEST LIMITATION: this is per-instance, in-memory state. On Vercel each
// serverless instance keeps its own Map, so the effective ceiling is
// LIMIT × (number of warm instances), and every deploy (or cold start)
// resets all counters. That still stops the cheap single-source flood the
// lead form actually sees; a real, shared limiter needs infra we don't have
// (Redis / Upstash / an edge KV). This layer sits on top of the honeypot,
// the origin check, and the DB-side rate limit — not instead of them.

const WINDOW_MS = 60 * 60 * 1000 // 1 hour, fixed window
const LIMIT = 5 // submissions per IP per window
// Sweep expired buckets at most this often so the Map can't grow unbounded
// on a long-lived instance.
const SWEEP_EVERY_MS = WINDOW_MS

interface Bucket {
  count: number
  windowStart: number
}

const buckets = new Map<string, Bucket>()
let lastSweep = Date.now()

export interface RateLimitResult {
  allowed: boolean
  // Seconds until the window reopens; 0 when allowed.
  retryAfterSeconds: number
}

// First hop of x-forwarded-for: on Vercel/most proxies that's the client IP
// appended furthest from us. Spoofable by a direct-to-origin caller, which is
// an accepted limit of an app-layer defense.
export function clientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) {
    const first = xff.split(',')[0]?.trim()
    if (first) return first
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown'
}

export function checkRateLimit(ip: string, now: number = Date.now()): RateLimitResult {
  if (now - lastSweep >= SWEEP_EVERY_MS) {
    // forEach, not for..of: this tsconfig targets ES5 (no Map iteration).
    buckets.forEach((b, key) => {
      if (now - b.windowStart >= WINDOW_MS) buckets.delete(key)
    })
    lastSweep = now
  }

  const bucket = buckets.get(ip)
  if (!bucket || now - bucket.windowStart >= WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  bucket.count += 1
  if (bucket.count > LIMIT) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.windowStart + WINDOW_MS - now) / 1000)),
    }
  }
  return { allowed: true, retryAfterSeconds: 0 }
}

// Test-only: module state would otherwise leak between test files/cases.
export function resetRateLimiter() {
  buckets.clear()
  lastSweep = Date.now()
}
