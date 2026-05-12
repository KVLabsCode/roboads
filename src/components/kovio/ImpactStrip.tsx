'use client'

import { palette as p, fonts } from './palette'
import { Tag } from './primitives'

export default function ImpactStrip() {
  return (
    <section className="kovio-section kovio-section-tight" style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 32px' }}>
      <div className="kovio-header-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Tag>SECTION 05 / Outlook</Tag>
          <h2
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(40px, 5.4vw, 80px)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              margin: '16px 0 24px',
              color: p.fg,
              fontWeight: 500,
              textWrap: 'balance',
            }}
          >
            By 2030, 80 million robots will share{' '}
            <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
              physical
            </span>{' '}
            space with people every day.
          </h2>
          <p style={{ color: p.fgDim, fontSize: 18, lineHeight: 1.5, maxWidth: 540 }}>
            We&apos;re building the infrastructure that turns that shared space into the largest
            new advertising and commerce channel in a generation, the first one that doesn&apos;t
            live behind glass.
          </p>
        </div>
        <BigMatrix />
      </div>
    </section>
  )
}

function BigMatrix() {
  const cols = 18
  const rows = 10
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 4,
          marginBottom: 20,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => {
          const filled = i < cols * rows * 0.62
          const accent = i % 13 === 0 && filled
          return (
            <span
              key={i}
              style={{
                aspectRatio: '1',
                borderRadius: 2,
                background: accent ? p.accent : filled ? p.fgDim : p.line,
                opacity: filled ? 1 : 0.4,
              }}
            />
          )
        })}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 0,
          borderTop: `1px solid ${p.line}`,
          paddingTop: 18,
        }}
      >
        <MetricCol num="62%" label="Robots online & idle most hours of the day" />
        <MetricCol num="$184" label="Avg monthly revenue per unit on Kovio" />
        <MetricCol num="38ms" label="End-to-end interaction latency" />
      </div>
    </div>
  )
}

function MetricCol({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ borderRight: `1px solid ${p.line}`, padding: '0 16px', marginRight: -1 }}>
      <div
        style={{
          fontFamily: fonts.display,
          fontSize: 32,
          color: p.fg,
          fontWeight: 500,
          letterSpacing: '-0.02em',
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: p.fgMute,
          marginTop: 4,
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  )
}
