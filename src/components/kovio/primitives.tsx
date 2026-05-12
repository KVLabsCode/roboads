'use client'

import { CSSProperties, ReactNode } from 'react'
import Image from 'next/image'
import { palette as p, fonts } from './palette'

export function Tag({
  children,
  color,
  style,
}: {
  children: ReactNode
  color?: string
  style?: CSSProperties
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 9px',
        fontFamily: fonts.mono,
        fontSize: 11,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: color || p.fgDim,
        border: `1px solid ${p.line}`,
        borderRadius: 999,
        background: 'transparent',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

export function LiveDot({ color }: { color?: string }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: 8, height: 8 }}>
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 999,
          background: color || p.accent,
        }}
      />
      <span
        style={{
          position: 'absolute',
          inset: -2,
          borderRadius: 999,
          background: color || p.accent,
          opacity: 0.5,
          animation: 'kovioPulse 1.6s ease-out infinite',
        }}
      />
    </span>
  )
}

export function KovioMark({
  size = 28,
}: {
  // `color` kept in the prop signature for backwards-compat but ignored —
  // the mark is now an image asset (the robot-businessman from the favicon).
  color?: string
  size?: number
}) {
  // Source PNG is 549×454, so keep the aspect ratio (~1.21:1) when sizing.
  const w = Math.round(size * (549 / 454))
  return (
    <Image
      src="/kovio-mark.png"
      alt="Kovio"
      width={w}
      height={size}
      priority
      style={{
        height: size,
        width: 'auto',
        display: 'block',
        objectFit: 'contain',
      }}
    />
  )
}
