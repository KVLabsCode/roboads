'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { palette as p, fonts } from './palette'
import { KovioMark } from './primitives'

const LINKS = [
  { label: 'Brands', href: '/brands' },
  { label: 'OEMs', href: '/oems' },
  { label: 'Docs', href: '/docs' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The navbar is always visible — even at the top of the page it has a clear
  // surface, a divider line, and a subtle shadow on scroll so users can
  // always find their way to /brands, /oems, /docs.
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? `${p.bg}f2` : `${p.bg}e6`,
        backdropFilter: 'blur(16px) saturate(160%)',
        WebkitBackdropFilter: 'blur(16px) saturate(160%)',
        borderBottom: `1px solid ${scrolled ? p.lineStrong : p.line}`,
        boxShadow: scrolled ? '0 8px 24px -16px rgba(0,0,0,0.18)' : 'none',
        transition: 'background .25s, border-color .25s, box-shadow .25s',
      }}
    >
      <div
        className="kovio-nav-inner"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '18px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 28,
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: p.fg,
            textDecoration: 'none',
          }}
        >
          <KovioMark size={26} />
          <span
            className="kovio-nav-wordmark"
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              letterSpacing: '0.08em',
              fontWeight: 600,
              color: p.fg,
            }}
          >
            KOVIO
          </span>
        </Link>
        <span
          className="kovio-nav-tagline"
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: p.fgMute,
            letterSpacing: '0.05em',
            paddingLeft: 14,
            borderLeft: `1px solid ${p.line}`,
          }}
        >
          The Robot Economy
        </span>
        <div style={{ flex: 1 }} />
        <nav
          className="kovio-nav-pill"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            background: `${p.surface}88`,
            border: `1px solid ${p.line}`,
            borderRadius: 999,
            padding: '4px 6px',
          }}
        >
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{
                fontFamily: fonts.mono,
                fontSize: 12.5,
                letterSpacing: '0.05em',
                color: p.fg,
                padding: '8px 14px',
                textDecoration: 'none',
                fontWeight: 500,
                borderRadius: 999,
                transition: 'background .15s, color .15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = p.bg
                e.currentTarget.style.color = p.accent
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = p.fg
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="kovio-nav-cta"
          style={{
            fontFamily: fonts.mono,
            fontSize: 12.5,
            letterSpacing: '0.04em',
            padding: '11px 18px',
            background: p.accent,
            color: p.accentInk,
            borderRadius: 999,
            textDecoration: 'none',
            marginLeft: 4,
            fontWeight: 600,
            boxShadow: `0 6px 16px -6px ${p.accent}66`,
            transition: 'transform .15s, box-shadow .15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = `0 10px 22px -6px ${p.accent}88`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = `0 6px 16px -6px ${p.accent}66`
          }}
        >
          Get in touch ↗
        </Link>
      </div>
    </header>
  )
}
