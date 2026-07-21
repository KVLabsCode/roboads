import { NextResponse } from 'next/server'

// Lead capture for the marketing site. Pipeline:
//   1. optional creative image → Supabase storage (creatives/leads/*, an
//      anon-INSERT-scoped prefix — the anon key is public by design)
//   2. kovio_submit_lead RPC → marketing_leads table (validates + rate-limits
//      server-side; readable in the app.kovio.dev admin panel)
//   3. Resend: branded acknowledgment to the lead + notification to the team
// Emails are best-effort: without RESEND_API_KEY the lead still lands in the
// table and the submission succeeds.
const SUPABASE_URL = 'https://acughqaekwknfowlntcl.supabase.co'
const SUPABASE_ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjdWdocWFla3drbmZvd2xudGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MDEyOTUsImV4cCI6MjA5NzE3NzI5NX0.RXcnjN5erOwowfJ37tlIwRhk8VTPEpaiANxFGbHOD7c'
const NOTIFY_TO = 'supportkovio@gmail.com'
const FROM = 'Kovio <notifications@kovio.dev>'

async function sendEmail(to: string, subject: string, html: string) {
  const key = process.env.RESEND_API_KEY
  if (!key) return
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [to], subject, html }),
    })
  } catch {
    // best-effort
  }
}

function esc(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string)
}

function shell(inner: string) {
  return `<div style="background:#F4F1EA;padding:32px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
    <table role="presentation" width="540" cellpadding="0" cellspacing="0" style="max-width:540px;background:#F4F1EA;border:2px solid #141414;border-radius:16px;padding:36px 38px">
      ${inner}
    </table>
  </td></tr></table>
</div>`
}

function ackHtml(kind: 'trial' | 'fleet' | 'agency', name: string) {
  const first = esc(name.split(' ')[0] || name)
  const headline =
    kind === 'trial'
      ? 'THANKS FOR SIGNING UP FOR THE FREE TRIAL — WE&rsquo;LL KEEP YOU UPDATED!'
      : kind === 'agency'
        ? 'WE GOT YOUR BRIEF — LET&rsquo;S PUT YOUR CLIENTS ON ROBOTS!'
        : 'WE GOT YOUR FLEET DETAILS — TALK SOON!'
  const body =
    kind === 'trial'
      ? `Hey ${first} — your spot is locked in. A human (not a robot) will contact you within 48 hours to fit your creative to the robot, write the voice line with you, and get your ad on the streets of San Francisco.`
      : kind === 'agency'
        ? `Hey ${first} — we received your details. We&rsquo;ll come back within 48 hours with availability, creative specs, sensor verified measurement reporting, and partner terms for your clients.`
        : `Hey ${first} — we received your fleet details. We&rsquo;ll reach out within 48 hours to walk you through the SDK, the revenue share, and a pilot for your fleet.`
  return shell(`
      <tr><td style="font-weight:900;font-size:20px;letter-spacing:-0.5px;color:#141414;padding-bottom:20px">KOVIO<span style="font-size:10px;vertical-align:super">&reg;</span></td></tr>
      <tr><td style="font-size:24px;line-height:1.25;font-weight:800;color:#141414;text-transform:uppercase;padding-bottom:14px">${headline}</td></tr>
      <tr><td style="font-size:15px;line-height:1.6;color:#3a3a35;padding-bottom:24px">${body}</td></tr>
      <tr><td><span style="display:inline-block;background:#D97757;border:2px solid #141414;border-radius:999px;padding:10px 20px;font-size:13px;font-weight:700;color:#141414">100% UNSKIPPABLE</span></td></tr>
      <tr><td style="padding-top:28px;border-top:2px solid #141414;margin-top:24px;font-size:14px;font-weight:700;color:#141414">— TEAM KOVIO</td></tr>
      <tr><td style="padding-top:6px;font-size:12px;color:#8a8578">Live on the streets of San Francisco &middot; kovio.dev</td></tr>`)
}

function notifyHtml(kind: string, fields: Array<[string, string]>) {
  const rows = fields
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-size:12px;font-weight:700;letter-spacing:1px;color:#8a8578;vertical-align:top">${k.toUpperCase()}</td><td style="padding:6px 0;font-size:14px;color:#141414">${esc(v)}</td></tr>`
    )
    .join('')
  return shell(`
      <tr><td style="font-weight:900;font-size:18px;color:#141414;padding-bottom:16px">🔥 New ${kind === 'trial' ? 'FREE-TRIAL' : kind === 'agency' ? 'OOH AGENCY' : 'FLEET'} lead</td></tr>
      <tr><td><table role="presentation" cellpadding="0" cellspacing="0">${rows}</table></td></tr>
      <tr><td style="padding-top:20px;font-size:12px;color:#8a8578">Full list: app.kovio.dev/admin &middot; they got the acknowledgment email automatically.</td></tr>`)
}

export async function POST(request: Request) {
  let fd: FormData
  try {
    fd = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  }

  const raw = fd.get('kind')
  const kind = raw === 'fleet' ? 'fleet' : raw === 'agency' ? 'agency' : 'trial'
  const name = String(fd.get('name') ?? '').trim()
  const email = String(fd.get('email') ?? '').trim()
  const company = String(fd.get('company') ?? '').trim()
  const fleet = String(fd.get('fleet') ?? '').trim()
  const source = String(fd.get('source') ?? '').trim()
  if (!name || !email || !company) {
    return NextResponse.json({ error: 'Name, email and company are required.' }, { status: 422 })
  }

  // 1. creative upload (optional, images only, ≤10MB)
  let creativeUrl = ''
  const creative = fd.get('creative')
  if (creative instanceof File && creative.size > 0) {
    if (!creative.type.startsWith('image/') || creative.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'Creative must be an image up to 10 MB.' }, { status: 422 })
    }
    const safe = (creative.name || 'creative').replace(/[^a-zA-Z0-9._-]/g, '_')
    const path = `leads/${Date.now()}-${safe}`
    const up = await fetch(`${SUPABASE_URL}/storage/v1/object/creatives/${path}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON}`,
        apikey: SUPABASE_ANON,
        'Content-Type': creative.type,
      },
      body: Buffer.from(await creative.arrayBuffer()),
    })
    if (up.ok) creativeUrl = `${SUPABASE_URL}/storage/v1/object/public/creatives/${path}`
  }

  // 2. store the lead
  const rpc = await fetch(`${SUPABASE_URL}/rest/v1/rpc/kovio_submit_lead`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${SUPABASE_ANON}`,
      apikey: SUPABASE_ANON,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      p_kind: kind,
      p_name: name,
      p_email: email,
      p_company: company,
      p_fleet: fleet || null,
      p_creative_url: creativeUrl || null,
      p_source: source || null,
    }),
  })
  if (!rpc.ok) {
    const detail = await rpc.text().catch(() => '')
    const friendly = detail.includes('invalid_email')
      ? 'That email address doesn’t look right.'
      : detail.includes('rate_limited')
        ? 'Too many submissions — we already have your details.'
        : 'Could not save your details — try again.'
    return NextResponse.json({ error: friendly }, { status: 422 })
  }

  // 3. emails (best-effort)
  await Promise.all([
    sendEmail(
      email,
      kind === 'trial' ? 'You’re in — Kovio free trial 🤖' : kind === 'agency' ? 'Robots for your clients — Kovio' : 'We got your fleet details — Kovio',
      ackHtml(kind, name)
    ),
    sendEmail(
      NOTIFY_TO,
      `🔥 New ${kind === 'trial' ? 'free-trial' : kind === 'agency' ? 'AGENCY' : 'fleet'} lead — ${company}`,
      notifyHtml(kind, [
        ['Name', name],
        ['Email', email],
        ['Company', company],
        [kind === 'agency' ? 'Brief' : 'Fleet', fleet],
        ['Creative', creativeUrl],
        ['Page', source],
      ])
    ),
  ])

  return NextResponse.json({ ok: true })
}
