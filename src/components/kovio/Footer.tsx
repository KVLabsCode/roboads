'use client'

import Link from 'next/link'
import { palette as p, fonts } from './palette'
import { KovioMark, LiveDot } from './primitives'

const LINKS: { label: string; href: string }[] = [
  { label: 'Brands', href: '/brands' },
  { label: 'OEMs', href: '/oems' },
  { label: 'Docs', href: '/docs' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${p.line}` }}>
      <div className="kovio-section" style={{ maxWidth: 1320, margin: '0 auto', padding: '48px 32px 32px' }}>
        <div
          className="kovio-footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: 32,
            marginBottom: 40,
            alignItems: 'start',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <KovioMark size={26} />
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  letterSpacing: '0.06em',
                  color: p.fg,
                  fontWeight: 500,
                }}
              >
                KOVIO
              </span>
            </div>
            <p
              style={{
                color: p.fgDim,
                fontSize: 13.5,
                lineHeight: 1.5,
                maxWidth: 360,
                margin: 0,
              }}
            >
              The economic interaction layer for autonomous robots.
            </p>
          </div>
          <nav
            className="kovio-footer-links"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px 24px',
              justifyContent: 'flex-end',
            }}
          >
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  color: p.fgDim,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = p.fg
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = p.fgDim
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div
          className="kovio-footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: `1px solid ${p.line}`,
            paddingTop: 20,
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: p.fgMute,
              letterSpacing: '0.04em',
            }}
          >
            © 2026 KOVIO LABS, INC.
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: p.fgMute,
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <LiveDot /> NETWORK · ONLINE
          </span>
        </div>
      </div>
    </footer>
  )
}
