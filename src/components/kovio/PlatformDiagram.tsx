'use client'

import { useEffect, useState } from 'react'
import { palette as p, fonts } from './palette'
import { KovioMark, Tag } from './primitives'

export default function PlatformDiagram() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 5), 1700)
    return () => clearInterval(id)
  }, [])
  const steps = ['Fund campaigns', 'Route to fleets', 'Engage humans', 'Capture data', 'Measure ROI']
  return (
    <section
      id="oems"
      style={{
        background: p.surface,
        borderTop: `1px solid ${p.line}`,
        borderBottom: `1px solid ${p.line}`,
      }}
    >
      <div className="kovio-section kovio-section-tight" style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 32px' }}>
        <div
          className="kovio-header-2col"
          style={{
            marginBottom: 56,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'end',
          }}
        >
          <div>
            <Tag>SECTION 04 / Platform</Tag>
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
              One platform.
              <br />
              Two ecosystems.{' '}
              <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
                Infinite
              </span>{' '}
              value.
            </h2>
          </div>
          <p style={{ color: p.fgDim, fontSize: 17, lineHeight: 1.5, maxWidth: 440 }}>
            Brands fund real-world interactions. Robot fleets deliver them. Kovio connects
            both sides, routes every dollar, and measures every outcome.
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            padding: '32px 24px',
            background: p.bg,
            border: `1px solid ${p.line}`,
            borderRadius: 18,
          }}
        >
          <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
            {steps.map((s, i) => (
              <span
                key={i}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  padding: '6px 11px',
                  border: `1px solid ${i === step ? p.accent : p.line}`,
                  borderRadius: 999,
                  color: i === step ? p.accent : p.fgDim,
                  letterSpacing: '0.03em',
                  transition: 'all .3s',
                  background: i === step ? `${p.accent}11` : 'transparent',
                }}
              >
                {String(i + 1).padStart(2, '0')} · {s}
              </span>
            ))}
          </div>

          <FlowDiagram step={step} />
        </div>
      </div>
    </section>
  )
}

function FlowDiagram({ step }: { step: number }) {
  return (
    <div
      className="kovio-flow-5"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 72px 1.15fr 72px 1fr',
        gap: 0,
        alignItems: 'center',
        minHeight: 380,
      }}
    >
      <FlowColumn
        kicker="LEFT SIDE"
        title="Brands"
        sub="Campaigns & budgets"
        items={[
          { name: 'Coca-Cola', spend: '$48K/mo', color: '#E61C2E' },
          { name: 'Chipotle', spend: '$22K/mo', color: '#A8202A' },
          { name: 'Nike', spend: '$31K/mo', color: p.fg },
          { name: 'DoorDash', spend: '$17K/mo', color: '#FF3008' },
        ]}
        active={step <= 1}
      />
      <Connector active={step === 0 || step === 1} label="FUND" />
      <KovioCore active={step >= 1 && step <= 4} step={step} />
      <Connector active={step === 2 || step === 3} label="ROUTE" />
      <FlowColumn
        kicker="RIGHT SIDE"
        title="Robot Fleets"
        sub="Deliver interactions"
        items={[
          { name: 'Bear Robotics', spend: '', color: p.cool },
          { name: 'Starship', spend: '', color: p.warm },
          { name: '1X Tech', spend: '', color: p.accent },
          { name: 'Avidbots', spend: '', color: p.fg },
        ]}
        right
        active={step >= 2}
      />
    </div>
  )
}

function Connector({ active, label }: { active: boolean; label: string }) {
  const stroke = active ? p.accent : p.lineStrong
  return (
    <div
      className="kovio-flow-connector"
      style={{
        position: 'relative',
        height: 18,
        margin: '0 4px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <svg
        width="100%"
        height="18"
        viewBox="0 0 100 18"
        preserveAspectRatio="none"
        style={{ overflow: 'visible', display: 'block' }}
        aria-hidden
      >
        <line
          x1="0"
          y1="9"
          x2="92"
          y2="9"
          stroke={stroke}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ transition: 'stroke .3s' }}
        />
        <polygon
          points="92,3 100,9 92,15"
          fill={stroke}
          style={{ transition: 'fill .3s' }}
        />
      </svg>
      {active && (
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: 8,
            height: 8,
            marginTop: -4,
            background: p.accent,
            borderRadius: 999,
            boxShadow: `0 0 12px ${p.accent}`,
            animation: `kovioTravel 1.4s linear infinite`,
          }}
        />
      )}
      <span
        style={{
          position: 'absolute',
          top: -18,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: fonts.mono,
          fontSize: 9.5,
          letterSpacing: '0.08em',
          color: active ? p.accent : p.fgMute,
          whiteSpace: 'nowrap',
          transition: 'color .3s',
        }}
      >
        {label}
      </span>
    </div>
  )
}

function FlowColumn({
  kicker,
  title,
  sub,
  items,
  right,
  active,
}: {
  kicker: string
  title: string
  sub: string
  items: { name: string; spend: string; color: string }[]
  right?: boolean
  active: boolean
}) {
  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10.5,
          color: p.fgMute,
          letterSpacing: '0.06em',
          marginBottom: 6,
          textAlign: right ? 'right' : 'left',
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: right ? 'flex-end' : 'flex-start',
          gap: 10,
          marginBottom: 4,
        }}
      >
        <h3
          style={{
            fontFamily: fonts.display,
            fontSize: 28,
            fontWeight: 500,
            color: p.fg,
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h3>
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: p.fgDim,
          marginBottom: 22,
          textAlign: right ? 'right' : 'left',
        }}
      >
        {sub}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: right ? 'flex-end' : 'flex-start',
              gap: 10,
              padding: '10px 12px',
              background: p.surface,
              border: `1px solid ${p.line}`,
              borderRadius: 10,
              transition: 'all .4s',
              opacity: active ? 1 : 0.6,
              flexDirection: right ? 'row-reverse' : 'row',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: it.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: fonts.display,
                fontSize: 14,
                color: p.fg,
                fontWeight: 500,
                flex: 1,
                textAlign: right ? 'right' : 'left',
              }}
            >
              {it.name}
            </span>
            {it.spend && (
              <span style={{ fontFamily: fonts.mono, fontSize: 11, color: p.fgMute }}>{it.spend}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function KovioCore({ active, step }: { active: boolean; step: number }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          background: `radial-gradient(circle at center, ${p.accent}1f, transparent 70%)`,
          border: `1px solid ${active ? p.accent : p.lineStrong}`,
          borderRadius: 20,
          padding: '28px 24px',
          textAlign: 'center',
          transition: 'all .4s',
          boxShadow: active ? `0 0 0 4px ${p.accent}1f, 0 30px 80px -20px ${p.accent}33` : 'none',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <KovioMark color={p.accent} size={36} />
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: p.fgMute,
            letterSpacing: '0.06em',
            marginBottom: 6,
          }}
        >
          ECONOMIC LAYER
        </div>
        <h3
          style={{
            fontFamily: fonts.display,
            fontSize: 22,
            color: p.fg,
            fontWeight: 500,
            margin: '0 0 18px',
            letterSpacing: '-0.01em',
          }}
        >
          Kovio Network
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 14 }}>
          {[
            { label: 'Bids/sec', val: '412' },
            { label: 'Latency', val: '38ms' },
            { label: 'Fill rate', val: '94%' },
            { label: 'Reconciled', val: '$2.4M' },
          ].map((m) => (
            <div
              key={m.label}
              style={{
                background: p.surface2,
                borderRadius: 6,
                padding: '8px 10px',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 9,
                  color: p.fgMute,
                  letterSpacing: '0.05em',
                }}
              >
                {m.label.toUpperCase()}
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  color: p.fg,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {m.val}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: p.fgDim,
            letterSpacing: '0.04em',
          }}
        >
          STEP {String(step + 1).padStart(2, '0')} / 05
        </div>
      </div>
    </div>
  )
}
