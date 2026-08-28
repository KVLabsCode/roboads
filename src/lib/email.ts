// Server-only transactional email via Resend (REST — no SDK dependency).
// Ported from kovio-web/lib/email.ts so the two apps share one Resend
// implementation shape instead of hand-rolled copies. Only import from server
// code (route handlers): it reads RESEND_API_KEY. Sending is best-effort —
// callers must not fail their operation when email fails — but they SHOULD
// surface the returned status so silent email death is observable.

const ENDPOINT = 'https://api.resend.com/emails'

export interface SendResult {
  ok: boolean
  id?: string
  error?: string
}

// The three observable outcomes for a route's response metadata.
export type EmailStatus = 'sent' | 'skipped' | 'error'

export async function sendEmail(opts: {
  to: string
  subject: string
  html: string
  replyTo?: string
}): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM || 'Kovio <notifications@kovio.dev>'
  if (!key) return { ok: false, error: 'email_not_configured' }
  if (!opts.to) return { ok: false, error: 'no_recipient' }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [opts.to],
        subject: opts.subject,
        html: opts.html,
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      return { ok: false, error: `resend_${res.status}: ${detail.slice(0, 300)}` }
    }
    const body = (await res.json().catch(() => ({}))) as { id?: string }
    return { ok: true, id: body.id }
  } catch {
    return { ok: false, error: 'email_send_failed' }
  }
}

// Collapse a batch of best-effort sends into one honest status:
// 'skipped' only when NOTHING was attempted (no API key configured);
// 'sent' when every attempted send succeeded; 'error' otherwise.
export function emailStatus(results: SendResult[]): EmailStatus {
  if (results.length === 0) return 'skipped'
  if (results.every((r) => r.error === 'email_not_configured')) return 'skipped'
  return results.every((r) => r.ok) ? 'sent' : 'error'
}
