'use client'

import { ReactNode } from 'react'
import { palette as p, fonts } from './palette'
import { BrowserChrome, MetricCard } from './BrandsDashboard'

/* ─────────────────────────────────────────────────────────────────────────────
   OEM console dashboard mock — faithful port of the "Roamr · Revenue"
   screen. Shows what a fleet operator sees: earnings, fleet health, live
   campaigns currently running on their robots, pending approvals, and the
   policy controls they own (category blocklist, brand-safety tier, CPM floor).
   ──────────────────────────────────────────────────────────────────────────── */

export function OemSidebar({ active = 'Revenue' }: { active?: string }) {
  const links = [
    { label: 'Revenue', dot: p.accent, badge: null },
    { label: 'Fleet health', dot: null, badge: null },
    { label: 'Approvals', dot: null, badge: '3' },
    { label: 'Advertisers', dot: null, badge: null },
    { label: 'Routes & zones', dot: null, badge: null },
    { label: 'Payouts', dot: null, badge: null },
    { label: 'Configuration', dot: null, badge: null },
    { label: 'API & SDK', dot: null, badge: null },
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
            background: '#2E7D5B',
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
          RR
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontFamily: fonts.display, fontSize: 13, color: p.fg, fontWeight: 500 }}>
            Roamr
          </span>
          <span style={{ fontFamily: fonts.mono, fontSize: 10, color: p.fgMute, letterSpacing: '0.04em' }}>
            Fleet operator · OEM
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
        CONSOLE
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
                  color: p.accentInk,
                  background: p.accent,
                  padding: '2px 7px',
                  borderRadius: 999,
                  letterSpacing: '0.04em',
                  fontWeight: 600,
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
          FLEET STATUS
        </div>
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 22,
            color: p.fg,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            marginBottom: 4,
          }}
        >
          2,134{' '}
          <span style={{ fontFamily: fonts.mono, fontSize: 12, color: p.fgMute, fontWeight: 400 }}>
            / 2,847 online
          </span>
        </div>
        <div style={{ position: 'relative', height: 4, background: p.surface2, borderRadius: 999, marginTop: 8 }}>
          <div
            style={{
              position: 'absolute',
              inset: '0 25% 0 0',
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
          <span>
            <span style={{ color: p.accent }}>●</span> 75% utilization
          </span>
          <span style={{ color: '#C8334A' }}>1 error</span>
        </div>
      </div>
    </aside>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function OemHeader() {
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
          REVENUE · THIS PERIOD
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
          Welcome back,{' '}
          <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>Roamr.</span>
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
          13 active campaigns across 5 advertisers earning on your fleet right now.
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
          }}
        >
          Export ↗
        </button>
        <button
          type="button"
          style={{
            padding: '10px 16px',
            borderRadius: 999,
            background: p.fg,
            color: p.bg,
            border: 'none',
            fontFamily: fonts.mono,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.04em',
            cursor: 'default',
          }}
        >
          Withdraw earnings →
        </button>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function OemMetricsRow() {
  return (
    <div className="kovio-metrics-row" style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
      <MetricCard label="TOTAL EARNINGS" value="$66,030" delta="+18.2%" footnote="OEM net share · 28d" sparkSeed={1} />
      <MetricCard label="IMPRESSIONS SERVED" value="10.1M" delta="+9.6%" footnote="across all units" sparkSeed={2} />
      <MetricCard label="ACTIVE CAMPAIGNS" value="13" delta="+3" footnote="from 5 advertisers" sparkSeed={3} />
      <MetricCard label="FLEET UTILIZATION" value="75%" delta="+4 pp" footnote="2,134 of 2,847 online" sparkSeed={4} />
      <MetricCard label="AVG eCPM" value="$6.54" delta="+0.42" footnote="weighted across zones" sparkSeed={5} />
      <MetricCard
        label="PENDING APPROVALS"
        value="3"
        delta="-2"
        deltaPositive={false}
        footnote="review queue"
        sparkSeed={6}
      />
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function RevenueOverTime() {
  // Monthly fleet earnings (6 months, Dec 25 → May 26).
  const w = 600
  const h = 250
  const padL = 50
  const padR = 30
  const padT = 30
  const padB = 32

  const months = ['Dec 25', 'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26', 'May 26']
  const vals = [2200, 8400, 14800, 19200, 30100, 56400]
  const yMax = 65000

  const innerW = w - padL - padR
  const innerH = h - padT - padB

  const xAt = (i: number) => padL + (i / (vals.length - 1)) * innerW
  const yAt = (v: number) => padT + innerH - (v / yMax) * innerH

  const linePath = vals.map((v, i) => `${i === 0 ? 'M' : 'L'}${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`).join(' ')
  const areaPath = linePath + ` L${xAt(vals.length - 1)},${padT + innerH} L${padL},${padT + innerH} Z`

  const peakIdx = vals.length - 1
  const peakX = xAt(peakIdx)
  const peakY = yAt(vals[peakIdx])

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
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
          Revenue over time
        </h3>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: p.accent,
            fontWeight: 500,
            letterSpacing: '0.03em',
          }}
        >
          ↗ +32% MoM
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
        MONTHLY FLEET EARNINGS · 6 MONTHS
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        style={{ width: '100%', height: 'auto', display: 'block', overflow: 'hidden' }}
      >
        {[0, 16000, 30000, 45000, 65000].map((v) => (
          <g key={v}>
            <line x1={padL} y1={yAt(v)} x2={w - padR} y2={yAt(v)} stroke={p.line} strokeDasharray="2 4" />
            <text
              x={padL - 6}
              y={yAt(v) + 4}
              fontFamily={fonts.mono}
              fontSize="9"
              fill={p.fgMute}
              textAnchor="end"
            >
              ${v === 0 ? '0' : `${(v / 1000).toFixed(0)}k`}
            </text>
          </g>
        ))}

        <path d={areaPath} fill={p.accent} opacity="0.12" />
        <path d={linePath} fill="none" stroke={p.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {vals.map((v, i) => (
          <circle
            key={i}
            cx={xAt(i)}
            cy={yAt(v)}
            r="3.5"
            fill={i === peakIdx ? p.bg : p.accent}
            stroke={p.accent}
            strokeWidth="1.6"
          />
        ))}

        {/* peak label (anchored so it never overflows the right edge of the chart) */}
        <rect
          x={Math.min(peakX - 38, w - padR - 76)}
          y={peakY - 22}
          width="76"
          height="16"
          rx="3"
          fill={p.bg}
          stroke={p.line}
        />
        <text
          x={Math.min(peakX, w - padR - 38)}
          y={peakY - 11}
          fontFamily={fonts.mono}
          fontSize="9.5"
          fill={p.fg}
          textAnchor="middle"
        >
          $56,400
        </text>

        {months.map((m, i) => (
          <text
            key={m}
            x={xAt(i)}
            y={padT + innerH + 18}
            fontFamily={fonts.mono}
            fontSize="9.5"
            fill={p.fgMute}
            textAnchor="middle"
          >
            {m}
          </text>
        ))}
      </svg>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function RevenueByRoute() {
  const rows: { name: string; amount: string; pct: number; color: string }[] = [
    { name: 'University District', amount: '$19.2k', pct: 100, color: p.accent },
    { name: 'Downtown Core', amount: '$14.8k', pct: 77, color: '#4A6FB8' },
    { name: 'Tech Park', amount: '$8.4k', pct: 44, color: p.accent },
    { name: 'Office District', amount: '$6.2k', pct: 32, color: '#2E2D26' },
    { name: 'Residential Zone', amount: '$4.8k', pct: 25, color: '#4A6FB8' },
    { name: 'Suburban Loop', amount: '$3.5k', pct: 18, color: p.accent },
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
          Revenue by route
        </h3>
        <span
          style={{
            display: 'inline-flex',
            width: 22,
            height: 22,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            border: `1px solid ${p.line}`,
            color: p.fgMute,
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          +
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
        TOP PERFORMING DELIVERY ZONES
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rows.map((r) => (
          <div
            key={r.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '108px 1fr 60px',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 12.5,
                color: p.fgDim,
                textAlign: 'right',
                lineHeight: 1.2,
              }}
            >
              {r.name}
            </span>
            <div
              style={{
                height: 8,
                background: p.surface2,
                borderRadius: 999,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: `0 ${100 - r.pct}% 0 0`,
                  background: r.color,
                  borderRadius: 999,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 12,
                color: p.fg,
                fontVariantNumeric: 'tabular-nums',
                textAlign: 'right',
              }}
            >
              {r.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function NowPlaying() {
  type Row = {
    unit: string
    campaign: string
    advertiser: string
    creative: string
    route: string
    started: string
    dot?: string
  }
  const rows: Row[] = [
    { unit: 'KWB-2847', campaign: 'Campus Lunch Rush', advertiser: 'Uber Eats', creative: 'Lunch Route Banner', route: 'University District', started: '12:04 PM', dot: p.accent },
    { unit: 'SRV-0142', campaign: 'Restaurant Handoff Promo', advertiser: 'Chipotle', creative: 'Bowl Season Display', route: 'Downtown Core', started: '12:02 PM', dot: p.accent },
    { unit: 'UTG-0891', campaign: 'Holiday Greeting Drop', advertiser: 'Starbucks', creative: 'Holiday Chest Display', route: 'Tech Park', started: '12:01 PM', dot: p.accent },
    { unit: 'KWB-1203', campaign: 'Campus Lunch Rush', advertiser: 'Coca-Cola', creative: 'Coke Zero Route Pin', route: 'University District', started: '11:58 AM', dot: p.accent },
    { unit: 'UTG-0445', campaign: 'Idle Standing Awareness', advertiser: 'DoorDash', creative: 'Express Delivery Promo', route: 'Office District', started: '11:55 AM', dot: p.accent },
  ]
  return (
    <div
      style={{
        background: p.surface,
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        padding: '20px 22px 10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
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
            Now playing
          </h3>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: fonts.mono,
              fontSize: 10.5,
              color: p.accent,
              letterSpacing: '0.07em',
              border: `1px solid ${p.accent}33`,
              padding: '3px 9px',
              borderRadius: 999,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 999, background: p.accent }} />
            LIVE FEED
          </span>
        </div>
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
          View all 312 →
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
        ROBOTS CURRENTLY SERVING PAID IMPRESSIONS
      </div>

      <div className="kovio-table-scroll">
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: fonts.sans }}>
        <thead>
          <tr>
            {['Robot Unit ID', 'Campaign', 'Advertiser', 'Creative', 'Route', 'Started'].map((h, i) => (
              <th
                key={h}
                style={{
                  textAlign: i === 5 ? 'right' : 'left',
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
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td
                data-label="Unit"
                style={{
                  padding: '14px 12px',
                  borderBottom: `1px dashed ${p.line}`,
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: r.dot ?? p.accent }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 12.5, color: p.fg, letterSpacing: '0.02em' }}>
                    {r.unit}
                  </span>
                </span>
              </td>
              <td
                data-label="Campaign"
                style={{
                  padding: '14px 12px',
                  fontFamily: fonts.display,
                  fontSize: 13.5,
                  color: p.fg,
                  fontWeight: 500,
                  borderBottom: `1px dashed ${p.line}`,
                }}
              >
                {r.campaign}
              </td>
              <td
                data-label="Advertiser"
                style={{
                  padding: '14px 12px',
                  fontFamily: fonts.sans,
                  fontSize: 13,
                  color: p.accent,
                  fontWeight: 500,
                  borderBottom: `1px dashed ${p.line}`,
                }}
              >
                {r.advertiser}
              </td>
              <td
                data-label="Creative"
                style={{
                  padding: '14px 12px',
                  fontFamily: fonts.sans,
                  fontSize: 13,
                  color: p.fgDim,
                  borderBottom: `1px dashed ${p.line}`,
                }}
              >
                {r.creative}
              </td>
              <td
                data-label="Route"
                style={{
                  padding: '14px 12px',
                  fontFamily: fonts.sans,
                  fontSize: 13,
                  color: p.fgDim,
                  borderBottom: `1px dashed ${p.line}`,
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: 999, background: p.fgMute }} />
                  {r.route}
                </span>
              </td>
              <td
                data-label="Started"
                style={{
                  padding: '14px 12px',
                  textAlign: 'right',
                  fontFamily: fonts.mono,
                  fontSize: 12.5,
                  color: p.fg,
                  fontVariantNumeric: 'tabular-nums',
                  borderBottom: `1px dashed ${p.line}`,
                }}
              >
                {r.started}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

type Approval = {
  title: string
  by: string
  submitted: string
  robotOem: string
  moment: string
  budget: string
  schedule: string
  bidding: string
  creatives: { name: string; kind: string }[]
  warning?: string
}

export function CampaignApprovals() {
  const approvals: Approval[] = [
    {
      title: 'Summer Splash Route Ads',
      by: 'Coca-Cola',
      submitted: 'Mar 22, 2026 · 02:00 PM',
      robotOem: 'Roamr',
      moment: 'Route sponsorship',
      budget: '$12,000',
      schedule: 'Apr 1 – Jun 30',
      bidding: 'CPM',
      creatives: [{ name: 'Summer Splash Banner', kind: 'Screen display' }],
    },
    {
      title: 'Humanoid Greeting · Nike',
      by: 'Nike',
      submitted: 'Mar 23, 2026 · 09:30 AM',
      robotOem: 'Unitree G1',
      moment: 'Greeting window',
      budget: '$25,000',
      schedule: 'Apr 15 – Jul 15',
      bidding: 'CPE',
      creatives: [
        { name: 'Nike Greeting Chest Display', kind: 'Chest display' },
        { name: 'Nike Verbal Greeting', kind: 'Verbal script' },
      ],
      warning:
        'competitor_brands · mentions brand name in verbal script. Verify your policy allows competitor advertising.',
    },
  ]

  return (
    <div
      style={{
        background: p.surface,
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        padding: '20px 22px',
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
          Campaign approvals
        </h3>
        <div
          style={{
            display: 'flex',
            background: p.bg,
            border: `1px solid ${p.line}`,
            borderRadius: 999,
            padding: 3,
            gap: 2,
          }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              padding: '5px 12px',
              borderRadius: 999,
              background: p.surface,
              color: p.fg,
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Pending{' '}
            <span style={{ color: p.accent, fontWeight: 600 }}>3</span>
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              padding: '5px 12px',
              borderRadius: 999,
              color: p.fgDim,
            }}
          >
            All 17
          </span>
        </div>
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginBottom: 16,
        }}
      >
        REVIEW CAMPAIGNS TARGETING YOUR FLEET · 3 PENDING
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {approvals.map((a) => (
          <ApprovalCard key={a.title} a={a} />
        ))}
      </div>
    </div>
  )
}

function ApprovalCard({ a }: { a: Approval }) {
  return (
    <div
      style={{
        background: p.bg,
        border: `1px solid ${p.line}`,
        borderRadius: 12,
        padding: '16px 18px',
      }}
    >
      <div className="kovio-approval-head" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <h4
              style={{
                margin: 0,
                fontFamily: fonts.display,
                fontSize: 17,
                color: p.fg,
                fontWeight: 500,
                letterSpacing: '-0.015em',
              }}
            >
              {a.title}
            </h4>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: fonts.mono,
                fontSize: 10.5,
                color: p.accent,
                letterSpacing: '0.06em',
                fontWeight: 500,
                padding: '3px 9px',
                borderRadius: 999,
                background: `${p.accent}1A`,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: p.accent }} />
              PENDING
            </span>
          </div>
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 12.5,
              color: p.fgDim,
              marginTop: 4,
            }}
          >
            by <span style={{ color: p.accent, fontWeight: 500 }}>{a.by}</span> · submitted {a.submitted}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '7px 14px',
              borderRadius: 999,
              background: '#2E7D5B',
              color: '#FFFFFF',
              fontFamily: fonts.mono,
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: '0.03em',
              border: 'none',
              cursor: 'default',
            }}
          >
            ✓ Approve
          </button>
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '7px 14px',
              borderRadius: 999,
              background: 'transparent',
              color: '#A8202A',
              fontFamily: fonts.mono,
              fontSize: 11.5,
              fontWeight: 500,
              letterSpacing: '0.03em',
              border: '1px solid #C8334A',
              cursor: 'default',
            }}
          >
            × Reject
          </button>
        </div>
      </div>

      <div
        className="kovio-approval-fields"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 12,
          marginTop: 18,
          paddingTop: 16,
          borderTop: `1px dashed ${p.line}`,
        }}
      >
        <Field icon="◆" label="ROBOT / OEM" value={a.robotOem} />
        <Field icon="◆" label="MOMENT" value={a.moment} />
        <Field icon="$" label="BUDGET" value={`${a.budget} (total)`} />
        <Field icon="◷" label="SCHEDULE" value={a.schedule} />
        <Field icon="◇" label="BIDDING MODEL" value={a.bidding} chip />
      </div>

      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.07em',
          marginTop: 18,
          marginBottom: 8,
        }}
      >
        CREATIVES ({a.creatives.length})
      </div>
      <div
        className="kovio-approval-creatives"
        style={{ display: 'grid', gridTemplateColumns: `repeat(${a.creatives.length}, 1fr)`, gap: 10 }}
      >
        {a.creatives.map((c) => (
          <div
            key={c.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 12px',
              background: p.surface,
              border: `1px solid ${p.line}`,
              borderRadius: 10,
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: 6,
                background: p.surface2,
                color: p.fgMute,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontFamily: fonts.mono,
              }}
            >
              ▤
            </span>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 13,
                  color: p.fg,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {c.name}
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: 11, color: p.fgMute, letterSpacing: '0.03em' }}>
                {c.kind}
              </div>
            </div>
          </div>
        ))}
      </div>

      {a.warning && (
        <div
          style={{
            marginTop: 14,
            padding: '10px 14px',
            background: '#F4E4C3',
            border: `1px solid #D4A742`,
            borderRadius: 10,
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            fontFamily: fonts.mono,
            fontSize: 11.5,
            color: '#6B4A1C',
            lineHeight: 1.45,
          }}
        >
          <span style={{ flexShrink: 0 }}>⚠</span>
          <span>{a.warning}</span>
        </div>
      )}
    </div>
  )
}

function Field({
  icon,
  label,
  value,
  chip,
}: {
  icon: string
  label: string
  value: string
  chip?: boolean
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.07em',
          marginBottom: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span style={{ color: p.fgMute }}>{icon}</span>
        {label}
      </div>
      {chip ? (
        <span
          style={{
            display: 'inline-block',
            padding: '4px 10px',
            background: p.surface2,
            border: `1px solid ${p.line}`,
            borderRadius: 6,
            fontFamily: fonts.mono,
            fontSize: 12,
            color: p.fg,
            letterSpacing: '0.03em',
          }}
        >
          {value}
        </span>
      ) : (
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 14,
            color: p.fg,
            fontWeight: 500,
          }}
        >
          {value}
        </div>
      )}
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function ContentPolicy() {
  const cats = [
    { label: 'Alcohol', blocked: true },
    { label: 'Political', blocked: true },
    { label: 'Competitor brands', blocked: false },
    { label: 'Adult content', blocked: true, span2: true },
    { label: 'Gambling', blocked: false },
    { label: 'Tobacco', blocked: false },
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
          fontSize: 17,
          color: p.fg,
          fontWeight: 500,
          letterSpacing: '-0.01em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ color: p.fgMute, fontFamily: fonts.mono }}>∅</span>
        Content policy · category blocklist
      </h3>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginTop: 6,
          marginBottom: 16,
        }}
      >
        CHECKED CATEGORIES ARE BLOCKED FROM RUNNING ON YOUR FLEET
      </div>

      <div className="kovio-policy-grid">
        {cats.map((c) => (
          <div
            key={c.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 12px',
              background: c.blocked ? `${p.accent}10` : p.bg,
              border: `1px solid ${c.blocked ? `${p.accent}55` : p.line}`,
              borderRadius: 10,
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: c.blocked ? p.accent : 'transparent',
                border: `1.5px solid ${c.blocked ? p.accent : p.lineStrong}`,
                color: p.accentInk,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                flexShrink: 0,
              }}
            >
              {c.blocked ? '✓' : ''}
            </span>
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 13,
                color: p.fg,
                fontWeight: 500,
                flex: 1,
                lineHeight: 1.2,
              }}
            >
              {c.label}
            </span>
            {c.blocked && (
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 9.5,
                  color: p.accent,
                  letterSpacing: '0.06em',
                  background: `${p.accent}1A`,
                  padding: '2px 6px',
                  borderRadius: 4,
                }}
              >
                BLOCKED
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        className="kovio-policy-safety"
        style={{
          marginTop: 18,
          paddingTop: 16,
          borderTop: `1px dashed ${p.line}`,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: 14,
              color: p.fg,
              fontWeight: 500,
            }}
          >
            Brand safety rating
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: p.fgMute,
              marginTop: 4,
              letterSpacing: '0.02em',
            }}
          >
            How strictly creatives are screened before going live
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            background: p.bg,
            border: `1px solid ${p.line}`,
            borderRadius: 999,
            padding: 3,
            gap: 2,
          }}
        >
          {['Standard', 'Enhanced', 'Strict'].map((r) => {
            const isActive = r === 'Enhanced'
            return (
              <span
                key={r}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: isActive ? p.surface : 'transparent',
                  color: isActive ? p.fg : p.fgDim,
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: '0.03em',
                }}
              >
                {r}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function CpmFloor() {
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
          fontSize: 17,
          color: p.fg,
          fontWeight: 500,
          letterSpacing: '-0.01em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ color: p.fgMute, fontFamily: fonts.mono }}>$</span>
        CPM floor
      </h3>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginTop: 6,
          marginBottom: 22,
        }}
      >
        MINIMUM BID REQUIRED TO RUN ON YOUR FLEET
      </div>

      <div
        className="kovio-cpm-row"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 24,
          alignItems: 'center',
          marginBottom: 22,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 10,
              color: p.fgMute,
              letterSpacing: '0.07em',
              marginBottom: 4,
            }}
          >
            MINIMUM CPM
          </div>
          <p style={{ margin: 0, fontSize: 13, color: p.fgDim, lineHeight: 1.5, maxWidth: 260 }}>
            Bids below this don&apos;t run on your robots.
          </p>
        </div>
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 48,
            color: p.accent,
            fontWeight: 500,
            letterSpacing: '-0.025em',
            lineHeight: 1,
          }}
        >
          $3.50
        </div>
      </div>

      {/* slider */}
      <div style={{ position: 'relative', padding: '8px 0' }}>
        <div
          style={{
            height: 4,
            background: p.surface2,
            borderRadius: 999,
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '0 82.5% 0 0',
              background: p.accent,
              borderRadius: 999,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 'calc(17.5% - 8px)',
              top: -6,
              width: 16,
              height: 16,
              borderRadius: 999,
              background: '#FFFFFF',
              border: `2px solid ${p.accent}`,
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 10,
            fontFamily: fonts.mono,
            fontSize: 11,
            color: p.fgMute,
            letterSpacing: '0.04em',
          }}
        >
          <span>$0.00</span>
          <span>$10.00</span>
          <span>$20.00</span>
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────── */

export function OemDashboardFrame({ children }: { children: ReactNode }) {
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
      <BrowserChrome url="/roamr/revenue" />
      <div className="kovio-dashboard-frame" style={{ display: 'flex' }}>
        <OemSidebar />
        <div className="kovio-dashboard-main" style={{ flex: 1, padding: '28px 28px 32px', minWidth: 0 }}>
          {children}
        </div>
      </div>
    </div>
  )
}
