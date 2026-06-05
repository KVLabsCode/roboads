import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const COLUMNS = [
  'Timestamp',
  'Name',
  'Email',
  'Brand',
  "What they'd run",
  'Would pay',
  'Source',
] as const

// Map a row object (from the Apps Script doGet) to the fixed column order.
function rowToCells(r: Record<string, unknown>): string[] {
  return [
    r.timestamp,
    r.name,
    r.email,
    r.brand,
    r.idea,
    r.pay,
    r.source,
  ].map((v) => (v == null ? '' : String(v)))
}

function csvField(value: string): string {
  // Quote if the field contains comma, quote, or newline; escape quotes by doubling.
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`
  }
  return value
}

function toCsv(rows: Record<string, unknown>[]): string {
  const lines = [COLUMNS.map(csvField).join(',')]
  for (const r of rows) {
    lines.push(rowToCells(r).map(csvField).join(','))
  }
  return lines.join('\r\n')
}

export async function GET(req: NextRequest) {
  const password = process.env.LEADS_EXPORT_PASSWORD
  if (!password) {
    return NextResponse.json(
      { error: 'Export is not configured. Set LEADS_EXPORT_PASSWORD.' },
      { status: 503 },
    )
  }

  // Accept the password via ?key= or the Authorization: Bearer header.
  const url = new URL(req.url)
  const provided =
    url.searchParams.get('key') ||
    req.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ||
    ''
  if (provided !== password) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const webhook = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL
  if (!webhook) {
    // No sheet configured — still return a valid (header-only) CSV.
    return csvResponse(toCsv([]))
  }

  let rows: Record<string, unknown>[] = []
  try {
    const res = await fetch(webhook, { method: 'GET' })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data)) rows = data
      else if (Array.isArray(data?.rows)) rows = data.rows
    } else {
      console.error('[leads/export] sheet read non-OK:', res.status)
    }
  } catch (err) {
    console.error('[leads/export] sheet read threw:', err)
  }

  return csvResponse(toCsv(rows))
}

function csvResponse(body: string): NextResponse {
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="kovio-early-access-leads.csv"',
      'Cache-Control': 'no-store',
    },
  })
}
