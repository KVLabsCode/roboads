'use client'

import Link from 'next/link'
import { palette as p, fonts } from './palette'

export default function CtaSplit() {
  return (
    <section id="contact" style={{ borderTop: `1px solid ${p.line}` }}>
      <div
        className="kovio-cta-split"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <CtaCard
          kicker="FOR BRANDS"
          title="Buy real-world attention."
          body="Run measurable, geo-fenced campaigns through 12K+ robots across 28 cities. Pay per verified interaction."
          cta="Launch a campaign"
          primaryHref="/early-access"
          secondaryHref="/docs"
          accent
        />
        <CtaCard
          kicker="FOR OEMs"
          title="Turn your fleet into revenue."
          body="A drop-in SDK that unlocks per-interaction earnings across your existing units. Operator dashboard included."
          cta="Connect a fleet"
          primaryHref="/contact"
          secondaryHref="/docs"
        />
      </div>
    </section>
  )
}

function CtaCard({
  kicker,
  title,
  body,
  cta,
  primaryHref,
  secondaryHref,
  accent,
}: {
  kicker: string
  title: string
  body: string
  cta: string
  primaryHref: string
  secondaryHref: string
  accent?: boolean
}) {
  const bg = accent ? p.accent : p.surface
  const fg = accent ? p.accentInk : p.fg
  const dim = accent ? 'rgba(241,237,226,0.78)' : p.fgDim
  const mute = accent ? 'rgba(241,237,226,0.58)' : p.fgMute
  return (
    <div
      style={{
        background: bg,
        color: fg,
        padding: '80px 56px',
        borderRight: accent ? `1px solid ${p.line}` : 'none',
        minHeight: 460,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            letterSpacing: '0.06em',
            color: mute,
          }}
        >
          {kicker}
        </span>
        <h3
          style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(34px, 3.4vw, 52px)',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
            margin: '16px 0 22px',
            textWrap: 'balance',
            color: fg,
          }}
        >
          {title}
        </h3>
        <p style={{ color: dim, fontSize: 17, lineHeight: 1.5, maxWidth: 420 }}>{body}</p>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link
          href={primaryHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            background: accent ? p.fg : p.accent,
            color: accent ? p.accent : p.accentInk,
            fontFamily: fonts.mono,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.03em',
            borderRadius: 999,
            textDecoration: 'none',
          }}
        >
          {cta} →
        </Link>
        <Link
          href={secondaryHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            background: 'transparent',
            color: fg,
            fontFamily: fonts.mono,
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.03em',
            borderRadius: 999,
            textDecoration: 'none',
            border: `1px solid ${accent ? 'rgba(241,237,226,0.45)' : p.lineStrong}`,
          }}
        >
          Read docs
        </Link>
      </div>
    </div>
  )
}
