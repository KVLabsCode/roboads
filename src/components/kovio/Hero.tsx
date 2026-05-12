'use client'

import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import { palette as p, fonts, fmtMoney } from './palette'
import { LiveDot, Tag } from './primitives'

function useTicker(rate = 12) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const elapsed = (t - start) / 1000
      setN(elapsed * rate)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [rate])
  return n
}

export default function Hero() {
  const revenue = useTicker(0.84)
  return (
    <section
      id="top"
      className="kovio-section"
      style={{
        position: 'relative',
        maxWidth: 1320,
        margin: '0 auto',
        padding: '60px 32px 100px',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${p.line} 1px, transparent 1px), linear-gradient(90deg, ${p.line} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at 60% 30%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 60% 30%, #000 30%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="kovio-hero"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 56,
          position: 'relative',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <Tag>
              <LiveDot /> Live · 14 fleets · 312 robots online
            </Tag>
          </div>
          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(48px, 6.4vw, 96px)',
              lineHeight: 0.96,
              letterSpacing: '-0.035em',
              fontWeight: 500,
              margin: 0,
              color: p.fg,
              textWrap: 'balance',
            }}
          >
            The monetization
            <br />
            layer for{' '}
            <span
              style={{
                fontFamily: fonts.serif,
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              autonomous
            </span>
            <br />
            robots.
          </h1>
          <p
            style={{
              marginTop: 28,
              maxWidth: 540,
              fontSize: 19,
              lineHeight: 1.45,
              color: p.fgDim,
              fontWeight: 400,
              textWrap: 'pretty',
            }}
          >
            Robot fleets are everywhere, stores, hotels, sidewalks, hospitals. None of it
            is monetized. Kovio is the economic layer that turns every real-world robot
            interaction into a measurable, revenue-generating moment.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a
              href="#brands"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 20px',
                background: p.accent,
                color: p.accentInk,
                fontFamily: fonts.mono,
                fontSize: 13,
                letterSpacing: '0.03em',
                fontWeight: 600,
                borderRadius: 999,
                textDecoration: 'none',
              }}
            >
              I run a brand →
            </a>
            <a
              href="#oems"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 20px',
                background: 'transparent',
                color: p.fg,
                fontFamily: fonts.mono,
                fontSize: 13,
                letterSpacing: '0.03em',
                fontWeight: 500,
                borderRadius: 999,
                textDecoration: 'none',
                border: `1px solid ${p.lineStrong}`,
              }}
            >
              I run a robot fleet →
            </a>
          </div>

          <div
            style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: `1px solid ${p.line}`,
              paddingTop: 22,
              gap: 24,
            }}
          >
            <StatBlock label="GMV routed Q4 '25" value="$2.41M" />
            <StatBlock label="Avg revenue / robot / mo" value="$184" />
            <StatBlock label="Attribution accuracy" value="99.2%" />
          </div>
        </div>

        <HeroDemoCluster revenue={revenue} />
      </div>
    </section>
  )
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: p.fgMute,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: fonts.display,
          fontSize: 30,
          color: p.fg,
          letterSpacing: '-0.02em',
          fontWeight: 500,
        }}
      >
        {value}
      </div>
    </div>
  )
}

function HeroDemoCluster({ revenue }: { revenue: number }) {
  return (
    <div className="kovio-hero-visual" style={{ position: 'relative', height: 560 }}>
      <div
        style={{
          position: 'absolute',
          inset: '20px 80px 60px 0',
          background: p.surface,
          border: `1px solid ${p.line}`,
          borderRadius: 22,
          overflow: 'hidden',
          boxShadow: `0 30px 80px -20px rgba(0,0,0,0.18)`,
        }}
      >
        <div
          className="kovio-hero-chrome"
          style={{
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            borderBottom: `1px solid ${p.line}`,
            background: p.surface2,
          }}
        >
          <span style={{ display: 'inline-flex', gap: 5, flexShrink: 0 }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: '#ff5f57' }} />
            <span style={{ width: 9, height: 9, borderRadius: 999, background: '#febc2e' }} />
            <span style={{ width: 9, height: 9, borderRadius: 999, background: '#28c840' }} />
          </span>
          <span
            className="kovio-hero-chrome-meta"
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: p.fgMute,
              letterSpacing: '0.04em',
              minWidth: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            unit-A14 · concierge · Le Méridien lobby
          </span>
          <div style={{ flex: 1 }} />
          <Tag style={{ flexShrink: 0 }}>
            <LiveDot /> ONLINE
          </Tag>
        </div>
        <div
          style={{
            position: 'relative',
            height: 320,
            background: `radial-gradient(at 50% 80%, ${p.surface2}, ${p.surface})`,
          }}
        >
          <RobotSilhouette color={p.fg} dim={p.fgMute} accent={p.accent} />
          <FloatingBubble top={28} left={32} delay={0} pos="tl">
            <MiniBrand brand="Starbucks" msg="Coffee, 2 min" amt={0.35} />
          </FloatingBubble>
          <FloatingBubble top={68} right={28} delay={0.6} pos="tr">
            <MiniBrand brand="Chipotle" msg="Hungry? 10% off" amt={0.45} />
          </FloatingBubble>
          <FloatingBubble bottom={48} left={48} delay={1.2} pos="bl">
            <MiniBrand brand="DoorDash" msg="Free drink w/ order" amt={0.4} />
          </FloatingBubble>
        </div>
        <div
          className="kovio-hero-footer"
          style={{
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            borderTop: `1px solid ${p.line}`,
          }}
        >
          <span
            className="kovio-hero-footer-label"
            style={{ fontFamily: fonts.mono, fontSize: 11, color: p.fgMute }}
          >
            SESSION REVENUE
          </span>
          <span
            className="kovio-hero-footer-value"
            style={{
              fontFamily: fonts.mono,
              fontSize: 22,
              color: p.accent,
              fontVariantNumeric: 'tabular-nums',
              fontWeight: 600,
            }}
          >
            ${revenue.toFixed(2)}
          </span>
          <div className="kovio-hero-footer-spacer" style={{ flex: 1 }} />
          <span
            className="kovio-hero-footer-trend"
            style={{ fontFamily: fonts.mono, fontSize: 11, color: p.fgDim }}
          >
            <span style={{ color: p.accent }}>↑</span> +18% vs avg
          </span>
        </div>
      </div>
    </div>
  )
}

function FloatingBubble({
  children,
  delay = 0,
  top,
  left,
  right,
  bottom,
  pos,
}: {
  children: ReactNode
  delay?: number
  top?: number
  left?: number
  right?: number
  bottom?: number
  pos?: 'tl' | 'tr' | 'bl'
}) {
  const style: CSSProperties = {}
  if (top != null) style.top = top
  if (left != null) style.left = left
  if (right != null) style.right = right
  if (bottom != null) style.bottom = bottom
  return (
    <div
      className="kovio-hero-bubble"
      data-pos={pos}
      style={{
        position: 'absolute',
        animation: `kovioFloat 4.8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function MiniBrand({ brand, msg, amt }: { brand: string; msg: string; amt: number }) {
  return (
    <div
      style={{
        background: p.bg,
        border: `1px solid ${p.lineStrong}`,
        borderRadius: 12,
        padding: '10px 12px',
        minWidth: 180,
        boxShadow: '0 8px 24px -8px rgba(0,0,0,0.20)',
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 10,
          color: p.fgMute,
          letterSpacing: '0.04em',
          marginBottom: 4,
        }}
      >
        {brand.toUpperCase()}
      </div>
      <div
        style={{
          fontFamily: fonts.display,
          fontSize: 14,
          color: p.fg,
          marginBottom: 6,
          lineHeight: 1.3,
        }}
      >
        {msg}
      </div>
      <div style={{ fontFamily: fonts.mono, fontSize: 11, color: p.accent }}>+{fmtMoney(amt)}</div>
    </div>
  )
}

function RobotSilhouette({
  color,
  dim,
  accent,
}: {
  color: string
  dim: string
  accent: string
}) {
  return (
    <svg
      viewBox="0 0 400 320"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.85 }}
      aria-hidden
    >
      <line x1="0" y1="280" x2="400" y2="280" stroke={dim} strokeDasharray="2 6" />
      <g transform="translate(160 80)" stroke={color} strokeWidth="1.4" fill="none">
        <rect x="10" y="0" width="60" height="44" rx="10" />
        <rect x="22" y="14" width="36" height="16" rx="4" fill={accent} stroke="none" opacity="0.95" />
        <line x1="40" y1="44" x2="40" y2="58" />
        <rect x="6" y="58" width="68" height="80" rx="14" />
        <line x1="6" y1="80" x2="-16" y2="120" />
        <line x1="74" y1="80" x2="96" y2="120" />
        <circle cx="-16" cy="120" r="5" />
        <circle cx="96" cy="120" r="5" />
        <ellipse cx="40" cy="160" rx="44" ry="10" />
        <line x1="20" y1="138" x2="20" y2="156" />
        <line x1="60" y1="138" x2="60" y2="156" />
      </g>
      <g stroke={accent} fill="none" opacity="0.6" strokeWidth="1.2">
        <path d="M200 100 a40 40 0 0 1 0 -40" />
        <path d="M200 100 a60 60 0 0 1 0 -60" />
        <path d="M200 100 a80 80 0 0 1 0 -80" />
      </g>
    </svg>
  )
}
