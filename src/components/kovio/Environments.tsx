'use client'

import { useState } from 'react'
import { palette as p, fonts } from './palette'
import { Tag } from './primitives'

type EnvIconKind =
  | 'retail'
  | 'delivery'
  | 'home'
  | 'hotel'
  | 'health'
  | 'humanoid'
  | 'restaurant'
  | 'clean'

const ENVIRONMENTS: {
  num: string
  name: string
  desc: string
  stat: string
  icon: EnvIconKind
}[] = [
  { num: '01', name: 'Retail', desc: 'Shelf-scanning and shopper-assist robots in stores.', stat: '1.2K units', icon: 'retail' },
  { num: '02', name: 'Delivery', desc: 'Last-mile sidewalk and aerial delivery robots.', stat: '880 units', icon: 'delivery' },
  { num: '03', name: 'Home', desc: 'Household robots making natural product recommendations.', stat: "Q3 '26", icon: 'home' },
  { num: '04', name: 'Hospitality', desc: 'Concierge and room-service robots in hotels.', stat: '420 units', icon: 'hotel' },
  { num: '05', name: 'Healthcare', desc: 'Patient guidance and delivery robots in hospitals.', stat: '290 units', icon: 'health' },
  { num: '06', name: 'Humanoid', desc: 'General-purpose humanoid robots in consumer settings.', stat: '180 units', icon: 'humanoid' },
  { num: '07', name: 'Restaurant', desc: 'Tableside service and order delivery robots in dining.', stat: '640 units', icon: 'restaurant' },
  { num: '08', name: 'Cleaning', desc: 'Autonomous floor-cleaning robots in consumer spaces.', stat: '3.4K units', icon: 'clean' },
]

export default function Environments() {
  const [active, setActive] = useState(0)
  return (
    <section
      id="network"
      className="kovio-section kovio-section-tight"
      style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 32px 80px' }}
    >
      <div
        className="kovio-header-2col"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          marginBottom: 56,
          alignItems: 'end',
        }}
      >
        <div>
          <Tag>SECTION 02 / Reach</Tag>
          <h2
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: '16px 0 0',
              color: p.fg,
              fontWeight: 500,
              textWrap: 'balance',
            }}
          >
            Robots are becoming
            <br />
            part of{' '}
            <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
              everyday
            </span>{' '}
            life.
          </h2>
        </div>
        <p style={{ color: p.fgDim, fontSize: 17, lineHeight: 1.5, maxWidth: 460, marginBottom: 8 }}>
          From grocery stores to hospitals, autonomous robots are entering every
          environment, creating millions of daily interactions with no economic
          infrastructure behind them. Kovio plugs in everywhere they already roam.
        </p>
      </div>

      <div
        className="kovio-cols-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          border: `1px solid ${p.line}`,
          borderRadius: 16,
          overflow: 'hidden',
        }}
      >
        {ENVIRONMENTS.map((e, i) => (
          <EnvCell
            key={e.num}
            env={e}
            active={i === active}
            onHover={() => setActive(i)}
            edgeR={(i + 1) % 4 !== 0}
            edgeB={i < 4}
          />
        ))}
      </div>
    </section>
  )
}

function EnvCell({
  env,
  active,
  onHover,
  edgeR,
  edgeB,
}: {
  env: (typeof ENVIRONMENTS)[number]
  active: boolean
  onHover: () => void
  edgeR: boolean
  edgeB: boolean
}) {
  return (
    <div
      onMouseEnter={onHover}
      style={{
        position: 'relative',
        padding: '32px 24px 28px',
        background: active ? p.surface : 'transparent',
        borderRight: edgeR ? `1px solid ${p.line}` : 'none',
        borderBottom: edgeB ? `1px solid ${p.line}` : 'none',
        transition: 'background .25s',
        minHeight: 240,
        cursor: 'default',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: p.fgMute,
            letterSpacing: '0.08em',
          }}
        >
          {env.num}
        </span>
        <EnvIcon kind={env.icon} color={active ? p.accent : p.fg} />
      </div>
      <h3
        style={{
          fontFamily: fonts.display,
          fontSize: 22,
          fontWeight: 500,
          color: p.fg,
          margin: '0 0 8px',
          letterSpacing: '-0.01em',
        }}
      >
        {env.name}
      </h3>
      <p
        style={{
          color: p.fgDim,
          fontSize: 13.5,
          lineHeight: 1.45,
          margin: 0,
          marginBottom: 16,
        }}
      >
        {env.desc}
      </p>
      <div
        style={{
          position: 'absolute',
          left: 24,
          right: 24,
          bottom: 18,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontFamily: fonts.mono, fontSize: 11, color: p.fgMute }}>NETWORK</span>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: active ? p.accent : p.fgDim,
          }}
        >
          {env.stat}
        </span>
      </div>
    </div>
  )
}

function EnvIcon({ kind, color }: { kind: EnvIconKind; color: string }) {
  const s = {
    width: 24,
    height: 24,
    stroke: color,
    fill: 'none',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (kind) {
    case 'retail':
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path d="M3 7h18l-2 12H5L3 7Z" />
          <path d="M8 7V5a4 4 0 0 1 8 0v2" />
        </svg>
      )
    case 'delivery':
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <rect x="2" y="8" width="13" height="9" rx="1" />
          <path d="M15 11h4l2 3v3h-6" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
        </svg>
      )
    case 'hotel':
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path d="M4 20V5h16v15" />
          <path d="M4 14h16" />
          <path d="M9 9h2M13 9h2" />
        </svg>
      )
    case 'clean':
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <circle cx="12" cy="14" r="6" />
          <path d="M12 8V4M8 5l1 3M16 5l-1 3" />
        </svg>
      )
    case 'home':
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path d="M3 11 12 4l9 7v9H3v-9Z" />
          <path d="M9 20v-6h6v6" />
        </svg>
      )
    case 'health':
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6.5-7 11-7 11Z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      )
    case 'humanoid':
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <circle cx="12" cy="6" r="3" />
          <path d="M8 22v-7a4 4 0 0 1 8 0v7" />
          <path d="M8 17h8" />
        </svg>
      )
    case 'restaurant':
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path d="M6 2v8a3 3 0 0 0 6 0V2" />
          <path d="M9 12v10" />
          <path d="M16 2v20" />
          <path d="M16 12c2 0 3-2 3-5s-1-5-3-5" />
        </svg>
      )
    default:
      return null
  }
}
