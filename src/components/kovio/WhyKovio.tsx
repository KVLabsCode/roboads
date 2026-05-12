'use client'

import { palette as p, fonts } from './palette'
import { Tag } from './primitives'

export default function WhyKovio() {
  const items = [
    {
      kicker: 'An untapped channel',
      title: 'The largest unmonetized surface area in the physical world.',
      body: 'Every robot interaction is an opportunity for brands to reach consumers in the real world. No one has built the economic layer until now.',
      detail: "Estimated total addressable interactions / day, 2027",
      metric: '1.4B',
    },
    {
      kicker: 'Revenue for robot companies',
      title: 'Your fleet already reaches people. Now it earns.',
      body: 'Every greeting, scan, hand-off, or delivery becomes a monetisable touchpoint. Average $184 per robot per month with no operational overhead.',
      detail: 'Average monthly revenue / unit · pilot fleets',
      metric: '$184',
    },
    {
      kicker: 'Attribution for brands',
      title: 'Measurable physical engagement, not impressions.',
      body: 'Robots verify presence, intent, and outcome. Brands see real human interactions they can track, model, and bid against in real time.',
      detail: 'Conversion lift vs digital-only campaigns · 2025 cohort',
      metric: '3.2×',
    },
  ]
  return (
    <section
      id="brands"
      className="kovio-section kovio-section-tight"
      style={{ maxWidth: 1320, margin: '0 auto', padding: '80px 32px 80px' }}
    >
      <div style={{ marginBottom: 56 }}>
        <Tag>SECTION 03 / Why</Tag>
        <h2
          style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            margin: '16px 0 0',
            color: p.fg,
            fontWeight: 500,
            maxWidth: 900,
            textWrap: 'balance',
          }}
        >
          Robots interact with millions of people every day.{' '}
          <span style={{ color: p.fgMute }}>None of it is monetised.</span>{' '}
          <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
            Kovio changes that.
          </span>
        </h2>
      </div>
      <div
        className="kovio-cols-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          borderTop: `1px solid ${p.line}`,
        }}
      >
        {items.map((it, i) => (
          <div
            key={i}
            style={{
              padding: '36px 28px 36px',
              borderRight: i < 2 ? `1px solid ${p.line}` : 'none',
              paddingLeft: i === 0 ? 0 : 28,
              paddingRight: i === 2 ? 0 : 28,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: p.fgMute,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {String(i + 1).padStart(2, '0')} · {it.kicker}
              </span>
            </div>
            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 64,
                color: p.fg,
                letterSpacing: '-0.03em',
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {it.metric}
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 10.5,
                color: p.fgMute,
                letterSpacing: '0.03em',
                marginBottom: 28,
              }}
            >
              {it.detail}
            </div>
            <h3
              style={{
                fontFamily: fonts.display,
                fontSize: 22,
                color: p.fg,
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
                margin: '0 0 14px',
              }}
            >
              {it.title}
            </h3>
            <p style={{ color: p.fgDim, fontSize: 15, lineHeight: 1.55, margin: 0 }}>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
