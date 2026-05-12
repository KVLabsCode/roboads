'use client'

import { ReactNode } from 'react'
import { palette as p, fonts } from './palette'

/* ─────────────────────────────────────────────────────────────────────────────
   Brand-console dashboard mock — faithful port of the "DoorDash · Overview"
   screen. All visuals (sparklines, charts, bars, tables) are inline SVG / divs
   so the page is fully self-contained, prerenderable, and uses the paper
   palette tokens.
   ──────────────────────────────────────────────────────────────────────────── */

export function BrowserChrome({ url, version = 'v4.18' }: { url: string; version?: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 18px',
        background: p.surface2,
        borderBottom: `1px solid ${p.line}`,
        fontFamily: fonts.mono,
        fontSize: 11,
        color: p.fgMute,
        letterSpacing: '0.03em',
      }}
    >
      <span style={{ display: 'inline-flex', gap: 6, flexShrink: 0 }}>
        <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ff5f57' }} />
        <span style={{ width: 11, height: 11, borderRadius: 999, background: '#febc2e' }} />
        <span style={{ width: 11, height: 11, borderRadius: 999, background: '#28c840' }} />
      </span>
      <span style={{ flex: 1 }} />
      <span
        className="kovio-browser-url"
        style={{
          padding: '6px 14px',
          background: p.bg,
          border: `1px solid ${p.line}`,
          borderRadius: 999,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          color: p.fgDim,
          minWidth: 280,
          justifyContent: 'center',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={p.fgMute} strokeWidth="2" style={{ flexShrink: 0 }}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <span style={{ color: p.fg, fontWeight: 500 }}>brands.kovio.com</span>
          {url}
        </span>
      </span>
      <span style={{ flex: 1 }} />
      <span className="kovio-browser-version" style={{ color: p.fgMute, flexShrink: 0 }}>
        {version}
      </span>
    </div>
  )
}

export function Sidebar({ active = 'Overview' }: { active?: string }) {
  const links = [
    { label: 'Overview', dot: p.accent, badge: null },
    { label: 'Campaigns', dot: null, badge: '4' },
    { label: 'Bid manager', dot: null, badge: null },
    { label: 'Creatives', dot: null, badge: null },
    { label: 'Robot fleets', dot: null, badge: null },
    { label: 'Audiences', dot: null, badge: null },
    { label: 'Attribution', dot: null, badge: null },
    { label: 'Billing', dot: null, badge: null },
  ]
  return (
    <aside
      className="kovio-dashboard-sidebar"
      style={{
        width: 220,
        flexShrink: 0,
        borderRight: `1px solid ${p.line}`,
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {/* Brand pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 12px',
          background: p.surface,
          border: `1px solid ${p.line}`,
          borderRadius: 12,
          marginBottom: 18,
        }}
      >
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: '#E61C2E',
            color: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: '0.04em',
          }}
        >
          CC
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontFamily: fonts.display, fontSize: 13, color: p.fg, fontWeight: 500 }}>
            Coca-Cola
          </span>
          <span style={{ fontFamily: fonts.mono, fontSize: 10, color: p.fgMute, letterSpacing: '0.04em' }}>
            Advertiser
          </span>
        </div>
      </div>

      <span
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.08em',
          padding: '0 10px 8px',
        }}
      >
        WORKSPACE
      </span>

      {links.map((l) => {
        const isActive = l.label === active
        return (
          <button
            key={l.label}
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 10px',
              borderRadius: 8,
              background: isActive ? p.surface : 'transparent',
              border: isActive ? `1px solid ${p.line}` : '1px solid transparent',
              cursor: 'default',
              textAlign: 'left',
              fontFamily: fonts.sans,
              fontSize: 13,
              color: isActive ? p.fg : p.fgDim,
              fontWeight: isActive ? 500 : 400,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 2,
                background: l.dot ?? 'transparent',
                border: l.dot ? 'none' : `1px solid ${p.lineStrong}`,
              }}
            />
            <span style={{ flex: 1 }}>{l.label}</span>
            {l.badge && (
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: p.fgMute,
                  background: p.surface2,
                  padding: '2px 7px',
                  borderRadius: 999,
                  letterSpacing: '0.04em',
                }}
              >
                {l.badge}
              </span>
            )}
          </button>
        )
      })}

      <div style={{ flex: 1 }} />

      <div
        style={{
          marginTop: 24,
          padding: '14px 12px',
          background: p.surface,
          border: `1px solid ${p.line}`,
          borderRadius: 12,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: p.fgMute,
            letterSpacing: '0.07em',
            marginBottom: 6,
          }}
        >
          BID BALANCE
        </div>
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 22,
            color: p.fg,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            marginBottom: 8,
          }}
        >
          $48,210
        </div>
        <div style={{ position: 'relative', height: 4, background: p.surface2, borderRadius: 999 }}>
          <div
            style={{
              position: 'absolute',
              inset: '0 38% 0 0',
              background: p.accent,
              borderRadius: 999,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: fonts.mono,
            fontSize: 10,
            color: p.fgMute,
            marginTop: 6,
            letterSpacing: '0.04em',
          }}
        >
          <span>$30K spent</span>
          <span>62%</span>
        </div>
      </div>
    </aside>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function MetricCard({
  label,
  value,
  delta,
  deltaPositive = true,
  footnote,
  sparkSeed = 0,
}: {
  label: string
  value: string
  delta: string
  deltaPositive?: boolean
  footnote: string
  sparkSeed?: number
}) {
  return (
    <div
      style={{
        flex: '1 1 0',
        minWidth: 0,
        background: p.surface,
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        padding: '18px 20px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.10em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: fonts.display,
          fontSize: 30,
          color: p.fg,
          fontWeight: 500,
          letterSpacing: '-0.025em',
          lineHeight: 1.05,
          fontVariantNumeric: 'tabular-nums',
          whiteSpace: 'nowrap',
        }}
      >
        {value}
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          marginTop: 2,
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: deltaPositive ? p.accent : '#1F5BCC',
            fontWeight: 500,
            letterSpacing: '0.02em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            fontVariantNumeric: 'tabular-nums',
            whiteSpace: 'nowrap',
          }}
        >
          {deltaPositive ? '↗' : '↘'} {delta}
        </span>
        <Sparkline seed={sparkSeed} trendUp={deltaPositive} />
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10.5,
          color: p.fgMute,
          letterSpacing: '0.02em',
          lineHeight: 1.4,
          paddingTop: 8,
          borderTop: `1px dashed ${p.line}`,
        }}
      >
        {footnote}
      </div>
    </div>
  )
}

function Sparkline({ seed = 0, trendUp = true }: { seed?: number; trendUp?: boolean }) {
  // Stable wave with a slight trend so the visuals match the screenshot
  // (smooth amber lines with subtle variation per card).
  const w = 72
  const h = 22
  // Inset the path slightly so stroke caps + amplitude never escape the box.
  const xPad = 2
  const yPad = 3
  const points: [number, number][] = []
  for (let i = 0; i <= 14; i++) {
    const x = xPad + (i / 14) * (w - xPad * 2)
    const base = trendUp ? 0.7 - i / 35 : 0.3 + i / 35
    const wave = Math.sin((i + seed * 1.7) * 0.9 + seed) * 0.16
    const y = (base + wave) * (h - yPad * 2) + yPad
    points.push([x, Math.max(yPad, Math.min(h - yPad, y))])
  }
  const path = points
    .map((pt, i) => (i === 0 ? `M${pt[0].toFixed(1)},${pt[1].toFixed(1)}` : `L${pt[0].toFixed(1)},${pt[1].toFixed(1)}`))
    .join(' ')
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      style={{ flex: 'none', overflow: 'hidden', display: 'block' }}
      aria-hidden
    >
      <path
        d={path}
        fill="none"
        stroke={trendUp ? p.accent : '#1F5BCC'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function PerformanceChart() {
  // Hand-tuned to match the screenshot: two series over 28 days,
  // amber solid line for spend, blue dashed line for engagement %.
  const w = 600
  const h = 280
  const padL = 50
  const padR = 50
  const padT = 30
  const padB = 38

  const xs = [
    'Apr 15',
    'Apr 22',
    'Apr 29',
    'May 6',
    'May 12',
  ]
  // Spend points (28 days, $0–$1300 scale)
  const spendVals = [
    340, 400, 380, 420, 500, 470, 540, 580,
    560, 620, 700, 740, 720, 780, 860, 900,
    880, 940, 980, 1020, 1000, 1050, 1090, 1060,
    1080, 1110, 1100, 1137,
  ]
  // Engagement % points (0–5%)
  const engVals = [
    3.5, 3.4, 3.6, 3.5, 3.7, 3.6, 3.4, 3.3,
    3.5, 3.8, 4.0, 3.9, 3.6, 3.5, 3.7, 4.0,
    4.2, 4.4, 4.3, 4.0, 3.6, 3.4, 3.5, 3.7,
    3.9, 4.2, 4.5, 3.5,
  ]

  const innerW = w - padL - padR
  const innerH = h - padT - padB

  const xAt = (i: number) => padL + (i / (spendVals.length - 1)) * innerW
  const ySpendAt = (v: number) => padT + innerH - (v / 1300) * innerH
  const yEngAt = (v: number) => padT + innerH - (v / 5) * innerH

  const spendPath = spendVals
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${xAt(i).toFixed(1)},${ySpendAt(v).toFixed(1)}`)
    .join(' ')
  const spendArea =
    spendPath +
    ` L${xAt(spendVals.length - 1).toFixed(1)},${padT + innerH} L${padL},${padT + innerH} Z`

  const engPath = engVals
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${xAt(i).toFixed(1)},${yEngAt(v).toFixed(1)}`)
    .join(' ')

  const peakIdx = spendVals.indexOf(1137)
  const peakX = xAt(peakIdx)
  const peakY = ySpendAt(1137)

  return (
    <div
      style={{
        flex: 1,
        background: p.surface,
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        padding: '20px 24px',
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: fonts.display,
            fontSize: 18,
            color: p.fg,
            fontWeight: 500,
            letterSpacing: '-0.01em',
          }}
        >
          Performance over time
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: fonts.mono, fontSize: 11 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: p.fgDim }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: p.accent }} />
            Spend ($)
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: p.fgDim }}>
            <svg width="14" height="2">
              <line x1="0" y1="1" x2="14" y2="1" stroke="#1F5BCC" strokeWidth="2" strokeDasharray="3 2" />
            </svg>
            Engagement %
          </span>
        </div>
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginBottom: 14,
        }}
      >
        DAILY SPEND VS ENGAGEMENT RATE · 28 DAYS
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        style={{ width: '100%', height: 'auto', display: 'block', overflow: 'hidden' }}
      >
        {/* y-axis grid (left, $) */}
        {[0, 300, 600, 980, 1300].map((v) => (
          <g key={`yl-${v}`}>
            <line
              x1={padL}
              y1={ySpendAt(v)}
              x2={w - padR}
              y2={ySpendAt(v)}
              stroke={p.line}
              strokeDasharray="2 4"
            />
            <text
              x={padL - 6}
              y={ySpendAt(v) + 4}
              fontFamily={fonts.mono}
              fontSize="9"
              fill={p.fgMute}
              textAnchor="end"
            >
              ${v}
            </text>
          </g>
        ))}
        {/* y-axis labels (right, %) */}
        {[0, 1.2, 2.3, 3.5, 4.7].map((v) => (
          <text
            key={`yr-${v}`}
            x={w - padR + 6}
            y={yEngAt(v) + 4}
            fontFamily={fonts.mono}
            fontSize="9"
            fill={p.fgMute}
          >
            {v.toFixed(1)}%
          </text>
        ))}

        {/* spend area */}
        <path d={spendArea} fill={p.accent} opacity="0.10" />
        {/* spend line */}
        <path
          d={spendPath}
          fill="none"
          stroke={p.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* engagement dashed line */}
        <path
          d={engPath}
          fill="none"
          stroke="#1F5BCC"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* peak marker */}
        <g>
          <line x1={peakX} y1={padT} x2={peakX} y2={padT + innerH} stroke={p.lineStrong} strokeDasharray="2 3" />
          <rect
            x={peakX - 38}
            y={peakY - 24}
            width="76"
            height="16"
            rx="3"
            fill={p.bg}
            stroke={p.line}
          />
          <text
            x={peakX}
            y={peakY - 13}
            fontFamily={fonts.mono}
            fontSize="9.5"
            fill={p.fg}
            textAnchor="middle"
          >
            Peak · $1137
          </text>
          <circle cx={peakX} cy={peakY} r="4" fill={p.accent} stroke={p.bg} strokeWidth="2" />
          <circle cx={peakX} cy={yEngAt(engVals[peakIdx])} r="3" fill="#1F5BCC" stroke={p.bg} strokeWidth="1.5" />
        </g>

        {/* x-axis labels */}
        {xs.map((label, i) => {
          const idx = Math.round((i / (xs.length - 1)) * (spendVals.length - 1))
          return (
            <text
              key={label}
              x={xAt(idx)}
              y={padT + innerH + 18}
              fontFamily={fonts.mono}
              fontSize="9.5"
              fill={p.fgMute}
              textAnchor="middle"
            >
              {label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function EnvironmentList() {
  const rows: { name: string; spend: string; scans: string; pct: number; conv: string; warm?: boolean }[] = [
    { name: 'Retail aisle', spend: '$12.4K', scans: '3,184', pct: 82, conv: '4.8%', warm: true },
    { name: 'Sidewalk delivery', spend: '$8.2K', scans: '2,041', pct: 68, conv: '3.6%', warm: true },
    { name: 'Hospitality', spend: '$5.6K', scans: '1,428', pct: 51, conv: '3.1%', warm: true },
    { name: 'Home robots', spend: '$2.8K', scans: '892', pct: 34, conv: '5.2%', warm: false },
    { name: 'Healthcare', spend: '$1.1K', scans: '412', pct: 22, conv: '2.4%', warm: false },
  ]
  return (
    <div
      style={{
        flex: 1,
        background: p.surface,
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        padding: '20px 22px',
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: fonts.display,
            fontSize: 18,
            color: p.fg,
            fontWeight: 500,
            letterSpacing: '-0.01em',
          }}
        >
          Performance by environment
        </h3>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: p.accent,
            letterSpacing: '0.07em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: 999, background: p.accent }} />
          LIVE
        </span>
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginBottom: 18,
        }}
      >
        SHARE OF SPEND · SCANS · CONVERSION
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {rows.map((r) => (
          <div key={r.name}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <span style={{ fontFamily: fonts.display, fontSize: 14, color: p.fg, fontWeight: 500 }}>
                {r.name}
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 11, color: p.fgDim }}>
                {r.spend} · {r.scans} scans
              </span>
            </div>
            <div
              style={{
                position: 'relative',
                height: 6,
                background: p.surface2,
                borderRadius: 999,
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: `0 ${100 - r.pct}% 0 0`,
                  background: r.warm ? p.accent : '#4A6FB8',
                  borderRadius: 999,
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: fonts.mono,
                fontSize: 10.5,
                color: p.fgMute,
                letterSpacing: '0.03em',
              }}
            >
              <span>Conv. {r.conv}</span>
              <span>{r.pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function CampaignsTable() {
  type Row = {
    name: string
    env: string
    status: 'LIVE' | 'PAUSED' | 'DRAFT'
    spend: string
    impressions: string
    er: string
    scans: string
    cpe: string
  }
  const rows: Row[] = [
    { name: 'Campus lunch rush', env: 'Sidewalk · Stanford', status: 'LIVE', spend: '$18,400', impressions: '342,100', er: '4.2%', scans: '4,447', cpe: '$0.78' },
    { name: 'Free drink offer · drop', env: 'Sidewalk · SF SoMa', status: 'LIVE', spend: '$14,200', impressions: '289,600', er: '3.8%', scans: '3,765', cpe: '$0.82' },
    { name: 'Late-night cravings', env: 'Hotel lobby · MIA', status: 'LIVE', spend: '$9,840', impressions: '184,200', er: '5.1%', scans: '2,402', cpe: '$0.71' },
    { name: 'Weekend surge', env: 'Suburban loop · PAO', status: 'PAUSED', spend: '$12,600', impressions: '260,700', er: '3.2%', scans: '3,389', cpe: '$0.94' },
    { name: 'Concierge upsell · A/B', env: 'Hospitality · LAX', status: 'DRAFT', spend: '—', impressions: '—', er: '—', scans: '—', cpe: '—' },
  ]
  const statusStyles: Record<Row['status'], { bg: string; color: string; dot: string }> = {
    LIVE: { bg: `${p.accent}1A`, color: p.accent, dot: p.accent },
    PAUSED: { bg: `${p.fgMute}1A`, color: p.fgDim, dot: '#4A6FB8' },
    DRAFT: { bg: p.surface2, color: p.fgMute, dot: p.fgMute },
  }
  return (
    <div
      style={{
        background: p.surface,
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        padding: '20px 22px 12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: fonts.display,
            fontSize: 18,
            color: p.fg,
            fontWeight: 500,
            letterSpacing: '-0.01em',
          }}
        >
          Your campaigns
        </h3>
        <a
          href="#"
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: p.accent,
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          View all →
        </a>
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginBottom: 14,
        }}
      >
        5 TOTAL · 3 LIVE · 1 PAUSED · 1 DRAFT
      </div>

      <div className="kovio-table-scroll">
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: fonts.sans }}>
        <thead>
          <tr>
            {['Campaign', 'Environment', 'Status', 'Spend', 'Impressions', 'ER', 'Scans', 'CPE'].map((h, i) => (
              <th
                key={h}
                style={{
                  textAlign: i >= 3 ? 'right' : 'left',
                  padding: '10px 12px',
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: p.fgMute,
                  letterSpacing: '0.06em',
                  fontWeight: 500,
                  borderBottom: `1px solid ${p.line}`,
                  textTransform: 'uppercase',
                }}
              >
                {h}
              </th>
            ))}
            <th style={{ width: 24, borderBottom: `1px solid ${p.line}` }} />
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const isDraft = r.status === 'DRAFT'
            const s = statusStyles[r.status]
            const labelMap = {
              spend: 'Spend',
              impressions: 'Impressions',
              er: 'ER',
              scans: 'Scans',
            }
            return (
              <tr key={i}>
                <td
                  data-label="Campaign"
                  style={{
                    padding: '14px 12px',
                    fontFamily: fonts.display,
                    fontSize: 14,
                    color: p.fg,
                    fontWeight: 500,
                    borderBottom: `1px dashed ${p.line}`,
                  }}
                >
                  {r.name}
                </td>
                <td
                  data-label="Environment"
                  style={{
                    padding: '14px 12px',
                    fontFamily: fonts.sans,
                    fontSize: 13,
                    color: p.fgDim,
                    borderBottom: `1px dashed ${p.line}`,
                  }}
                >
                  {r.env}
                </td>
                <td data-label="Status" style={{ padding: '14px 12px', borderBottom: `1px dashed ${p.line}` }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '4px 10px',
                      background: s.bg,
                      borderRadius: 999,
                      fontFamily: fonts.mono,
                      fontSize: 10.5,
                      color: s.color,
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: s.dot }} />
                    {r.status}
                  </span>
                </td>
                {(['spend', 'impressions', 'er', 'scans'] as const).map((k) => (
                  <td
                    key={k}
                    data-label={labelMap[k]}
                    style={{
                      padding: '14px 12px',
                      textAlign: 'right',
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      color: isDraft ? p.fgMute : p.fg,
                      fontVariantNumeric: 'tabular-nums',
                      borderBottom: `1px dashed ${p.line}`,
                    }}
                  >
                    {r[k]}
                  </td>
                ))}
                <td
                  data-label="CPE"
                  style={{
                    padding: '14px 12px',
                    textAlign: 'right',
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    color: isDraft ? p.fgMute : p.accent,
                    fontVariantNumeric: 'tabular-nums',
                    borderBottom: `1px dashed ${p.line}`,
                  }}
                >
                  {r.cpe}
                </td>
                <td
                  className="kovio-hide-mobile-cell"
                  style={{
                    padding: '14px 6px',
                    textAlign: 'right',
                    color: p.fgMute,
                    borderBottom: `1px dashed ${p.line}`,
                  }}
                >
                  ⋯
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function OEMBreakdown() {
  const partners = [
    { name: 'Starship', units: '120 units', reach: '412K', pct: 52, color: p.accent },
    { name: 'Bear Robotics', units: '86 units', reach: '284K', pct: 34, color: '#4A6FB8' },
    { name: 'Pudu', units: '62 units', reach: '112K', pct: 14, color: '#D89B47' },
  ]
  return (
    <div
      style={{
        flex: 1,
        background: p.surface,
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        padding: '20px 22px',
        minWidth: 0,
      }}
    >
      <h3
        style={{
          margin: 0,
          fontFamily: fonts.display,
          fontSize: 18,
          color: p.fg,
          fontWeight: 500,
          letterSpacing: '-0.01em',
        }}
      >
        Breakdown by OEM partner
      </h3>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginTop: 6,
          marginBottom: 18,
        }}
      >
        REACH ACROSS 3 FLEET OPERATORS
      </div>

      {/* stacked bar */}
      <div
        style={{
          display: 'flex',
          height: 10,
          borderRadius: 999,
          overflow: 'hidden',
          marginBottom: 18,
        }}
      >
        {partners.map((p2) => (
          <div key={p2.name} style={{ width: `${p2.pct}%`, background: p2.color }} />
        ))}
      </div>

      {/* legend */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {partners.map((p2) => (
          <div
            key={p2.name}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto auto',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: p2.color,
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: fonts.display, fontSize: 14, color: p.fg, fontWeight: 500 }}>
              {p2.name}
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: 12, color: p.fgDim }}>{p2.units}</span>
            <span style={{ fontFamily: fonts.mono, fontSize: 12, color: p.fgDim, minWidth: 80, textAlign: 'right' }}>
              {p2.reach} <span style={{ color: p.fg, fontWeight: 600, marginLeft: 6 }}>{p2.pct}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function ActivityFeed() {
  const events = [
    { t: 'now', kind: 'QR scan · Free drink offer', loc: 'Stanford · Palm Café', amt: '+$0.82', dot: p.accent },
    { t: '12s', kind: 'Engagement · 6.4s dwell', loc: 'Concourse C · MIA', amt: '+$0.34', dot: p.accent },
    { t: '31s', kind: 'Impression · sidewalk panel', loc: 'Route 4A · SoMa', amt: '+$0.04', dot: '#4A6FB8' },
    { t: '1m 02s', kind: 'Verbal completion', loc: 'Lobby · Le Méridien', amt: '+$0.41', dot: p.accent },
  ]
  return (
    <div
      style={{
        flex: 1,
        background: p.surface,
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        padding: '20px 22px',
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: fonts.display,
            fontSize: 18,
            color: p.fg,
            fontWeight: 500,
            letterSpacing: '-0.01em',
          }}
        >
          Live activity
        </h3>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: p.accent,
            letterSpacing: '0.07em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: 999, background: p.accent }} />
          STREAMING
        </span>
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginBottom: 14,
        }}
      >
        VERIFIED EVENTS · LAST 2 MINUTES
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {events.map((e, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr auto',
              gap: 12,
              alignItems: 'baseline',
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: p.fgMute,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {e.t}
            </span>
            <div>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 13.5,
                  color: p.fg,
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: 999, background: e.dot }} />
                {e.kind}
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: p.fgMute,
                  marginTop: 2,
                  letterSpacing: '0.02em',
                }}
              >
                {e.loc}
              </div>
            </div>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 12,
                color: p.accent,
                fontWeight: 500,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {e.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function DashboardHeader() {
  return (
    <div className="kovio-dash-header" style={{ display: 'flex', alignItems: 'flex-end', gap: 24, marginBottom: 24 }}>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: p.fgMute,
            letterSpacing: '0.08em',
            marginBottom: 10,
          }}
        >
          OVERVIEW · LAST 28 DAYS
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: fonts.display,
            fontSize: 'clamp(28px, 3.4vw, 44px)',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            color: p.fg,
            lineHeight: 1.1,
          }}
        >
          Good afternoon,{' '}
          <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>Maya.</span>
        </h2>
        <p
          style={{
            margin: '8px 0 0',
            fontFamily: fonts.sans,
            fontSize: 14,
            color: p.fgDim,
            lineHeight: 1.5,
          }}
        >
          4 campaigns live across 312 robots in 9 environments.
        </p>
      </div>

      <div className="kovio-dash-actions" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            display: 'flex',
            background: p.surface,
            border: `1px solid ${p.line}`,
            borderRadius: 999,
            padding: 3,
            gap: 2,
          }}
        >
          {['24h', '7d', '28d', '90d'].map((r) => {
            const isActive = r === '28d'
            return (
              <span
                key={r}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  padding: '6px 12px',
                  borderRadius: 999,
                  background: isActive ? p.bg : 'transparent',
                  color: isActive ? p.fg : p.fgDim,
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: '0.04em',
                }}
              >
                {r}
              </span>
            )
          })}
        </div>
        <button
          type="button"
          style={{
            padding: '9px 16px',
            borderRadius: 999,
            background: 'transparent',
            border: `1px solid ${p.lineStrong}`,
            color: p.fg,
            fontFamily: fonts.mono,
            fontSize: 12,
            letterSpacing: '0.04em',
            cursor: 'default',
            whiteSpace: 'nowrap',
          }}
        >
          Export ↗
        </button>
        <button
          type="button"
          style={{
            padding: '10px 16px',
            borderRadius: 999,
            background: p.accent,
            color: p.accentInk,
            border: 'none',
            fontFamily: fonts.mono,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.04em',
            cursor: 'default',
            whiteSpace: 'nowrap',
          }}
        >
          + New campaign
        </button>
      </div>
    </div>
  )
}

export function MetricsRow() {
  return (
    <div className="kovio-metrics-row" style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
      <MetricCard label="SPEND" value="$30,142" delta="+12.4%" footnote="of $48.2K budget" sparkSeed={1} />
      <MetricCard label="IMPRESSIONS" value="612K" delta="+8.1%" footnote="across 312 units" sparkSeed={2} />
      <MetricCard label="ENGAGEMENT RATE" value="4.2%" delta="+0.6pp" footnote="industry avg 2.8%" sparkSeed={3} />
      <MetricCard label="QR SCANS" value="8,212" delta="+18.0%" footnote="1.34% of impressions" sparkSeed={4} />
      <MetricCard label="AVG DWELL" value="7.8s" delta="+1.1s" footnote="weighted across buckets" sparkSeed={5} />
      <MetricCard
        label="COST / 1K VIEWS"
        value="$51.61"
        delta="-4.3%"
        deltaPositive={false}
        footnote="vs $53.94 last month"
        sparkSeed={6}
      />
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function DashboardFrame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: p.bg,
        border: `1px solid ${p.line}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 30px 80px -30px rgba(0,0,0,0.20)',
      }}
    >
      <BrowserChrome url="/coca-cola/campaigns" />
      <div className="kovio-dashboard-frame" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="kovio-dashboard-main" style={{ flex: 1, padding: '28px 28px 32px', minWidth: 0 }}>
          {children}
        </div>
      </div>
    </div>
  )
}
