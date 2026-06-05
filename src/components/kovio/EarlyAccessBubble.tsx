'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { palette as p, fonts } from './palette'

// ─── Editable scarcity knobs (mirror the founding-cohort offer) ──────────────
const DEADLINE = Date.parse('2026-06-20T23:59:59-07:00')
const COHORT = 100
const CLAIMED_BASE = 30
const CLAIMED_SINCE = Date.parse('2026-05-25T00:00:00-07:00')
const CLAIMED_EVERY_MS = 6 * 60 * 60 * 1000 // +1 spot every ~6h
const CLAIMED_CAP = COHORT - 4
// ─────────────────────────────────────────────────────────────────────────────

function claimedNow(now: number): number {
  const grown = CLAIMED_BASE + Math.floor((now - CLAIMED_SINCE) / CLAIMED_EVERY_MS)
  return Math.max(CLAIMED_BASE, Math.min(CLAIMED_CAP, grown))
}

export default function EarlyAccessBubble() {
  const pathname = usePathname()
  const [show, setShow] = useState(false) // robot pops in
  const [now, setNow] = useState<number | null>(null) // null until mounted
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
    setNow(Date.now())
    const tick = setInterval(() => setNow(Date.now()), 30000) // refresh counter
    const t1 = setTimeout(() => setShow(true), 900)
    return () => {
      clearInterval(tick)
      clearTimeout(t1)
    }
  }, [])

  // Don't show the bubble on the page it points to.
  if (pathname === '/early-access') return null

  const diff = now == null ? 0 : Math.max(0, DEADLINE - now)
  const days = Math.floor(diff / 86400000)
  const hrs = Math.floor((diff % 86400000) / 3600000)
  const left = now == null ? null : COHORT - claimedNow(now)

  return (
    <div
      style={{
        position: 'fixed',
        right: 'max(20px, env(safe-area-inset-right))',
        bottom: 'max(20px, env(safe-area-inset-bottom))',
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        transform: show ? 'scale(1)' : 'scale(0)',
        opacity: show ? 1 : 0,
        transformOrigin: 'bottom right',
        transition: 'transform .5s cubic-bezier(.34,1.56,.64,1), opacity .35s ease',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      {/* Tiny scarcity counter */}
      <Link
        href="/early-access"
        aria-label="Early access — limited spots"
        style={{
          textDecoration: 'none',
          background: p.surface,
          border: `1px solid ${p.line}`,
          borderRadius: 12,
          padding: '8px 12px',
          boxShadow: '0 8px 20px -12px rgba(0,0,0,0.3)',
          lineHeight: 1.25,
          whiteSpace: 'nowrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: 999,
              background: p.accent,
              boxShadow: `0 0 0 3px ${p.accent}33`,
              flexShrink: 0,
            }}
          />
          <span style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 600, color: p.fg }}>
            {left == null ? '··' : left} <span style={{ color: p.accent }}>spots left</span>
          </span>
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 10, letterSpacing: '0.04em', color: p.fgMute, marginTop: 3 }}>
          {now == null ? 'early access closing' : `closes in ${days}d ${hrs}h`}
        </div>
      </Link>

      {/* The robot button — wrapper holds the bot + its ground shadow so the
          shadow stays put while the bot hops. */}
      <div style={{ position: 'relative', width: 92, height: 100, flexShrink: 0 }}>
        <span
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 2,
            left: '50%',
            width: 56,
            height: 12,
            marginLeft: -28,
            borderRadius: '50%',
            background: 'rgba(20,19,15,0.55)',
            filter: 'blur(3px)',
            opacity: 0.3,
            animation: reduced ? 'none' : 'kovioBounceShadow 2.2s ease-in-out infinite',
          }}
        />
        <Link
          href="/early-access"
          aria-label="Request early access"
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            marginLeft: -44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 88,
            height: 88,
            borderRadius: 999,
            background: `radial-gradient(circle at 50% 35%, ${p.surface}, ${p.bg})`,
            border: `3px solid ${p.accent}`,
            boxShadow: `0 0 0 6px ${p.accent}22, 0 16px 34px -10px ${p.accent}cc, 0 4px 10px rgba(0,0,0,0.18)`,
            textDecoration: 'none',
            transformOrigin: 'bottom center',
            animation: reduced ? 'none' : 'kovioBounce 2.2s ease-in-out infinite',
            transition: 'box-shadow .2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 0 8px ${p.accent}33, 0 20px 40px -10px ${p.accent}, 0 4px 10px rgba(0,0,0,0.22)`
            e.currentTarget.style.animationPlayState = 'paused'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 0 0 6px ${p.accent}22, 0 16px 34px -10px ${p.accent}cc, 0 4px 10px rgba(0,0,0,0.18)`
            e.currentTarget.style.animationPlayState = 'running'
          }}
        >
          {!reduced && (
            <span
              aria-hidden
              style={{
                position: 'absolute',
                inset: -3,
                borderRadius: 999,
                background: p.accent,
                opacity: 0.45,
                animation: 'kovioPulse 2.4s ease-out infinite',
              }}
            />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kovio-mark.png"
            alt=""
            aria-hidden
            style={{ position: 'relative', width: 60, height: 'auto', display: 'block' }}
          />
        </Link>
      </div>
    </div>
  )
}
