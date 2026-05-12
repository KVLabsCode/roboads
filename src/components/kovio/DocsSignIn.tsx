'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { palette as p, fonts } from './palette'
import { KovioMark, LiveDot, Tag } from './primitives'

type Status = 'idle' | 'submitting' | 'invalid'

export default function DocsSignIn() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    // No public sign-up. Access is provisioned out-of-band.
    // Always returns "invalid" until a real auth backend is wired up.
    await new Promise((r) => setTimeout(r, 700))
    setStatus('invalid')
  }

  return (
    <section
      className="kovio-section"
      style={{
        position: 'relative',
        maxWidth: 1320,
        margin: '0 auto',
        padding: '80px 32px 120px',
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
          maskImage: 'radial-gradient(ellipse at 50% 40%, #000 28%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, #000 28%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="kovio-docs-grid"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        {/* LEFT — invite-only narrative */}
        <div>
          <Tag>
            <LiveDot /> Invite only
          </Tag>
          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(40px, 4.6vw, 64px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              fontWeight: 500,
              margin: '20px 0 22px',
              color: p.fg,
              textWrap: 'balance',
            }}
          >
            Kovio{' '}
            <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
              developer
            </span>{' '}
            docs.
          </h1>
          <p
            style={{
              color: p.fgDim,
              fontSize: 17,
              lineHeight: 1.55,
              maxWidth: 480,
              margin: '0 0 28px',
            }}
          >
            The SDK, network APIs, and attribution endpoints are private until launch. Access is
            granted to pilot partners directly. If you weren&apos;t issued credentials, we
            haven&apos;t given you access yet.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 0,
              border: `1px solid ${p.line}`,
              borderRadius: 14,
              overflow: 'hidden',
              maxWidth: 460,
            }}
          >
            {[
              { k: 'SDK', v: 'Drop-in for fleet operators · iOS / Android / ROS 2' },
              { k: 'NETWORK', v: 'Real-time bid graph, sub-50ms decisioning' },
              { k: 'ATTRIBUTION', v: 'Verified human interaction events with chain of custody' },
            ].map((row) => (
              <div
                key={row.k}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  padding: '14px 18px',
                  borderTop: `1px solid ${p.line}`,
                  gap: 16,
                  background: p.surface,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    color: p.fgMute,
                    letterSpacing: '0.07em',
                  }}
                >
                  {row.k}
                </span>
                <span style={{ fontFamily: fonts.sans, fontSize: 13.5, color: p.fgDim }}>
                  {row.v}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: 28,
              fontFamily: fonts.mono,
              fontSize: 12,
              color: p.fgMute,
              letterSpacing: '0.05em',
              maxWidth: 460,
              lineHeight: 1.5,
            }}
          >
            NOT A PARTNER YET?{' '}
            <Link href="/contact" style={{ color: p.accent, textDecoration: 'none' }}>
              Request access →
            </Link>
          </p>
        </div>

        {/* RIGHT — sign-in card */}
        <div
          style={{
            position: 'relative',
            background: p.surface,
            border: `1px solid ${p.line}`,
            borderRadius: 20,
            padding: '36px 32px',
            boxShadow: '0 30px 80px -30px rgba(0,0,0,0.18)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              borderBottom: `1px solid ${p.line}`,
              paddingBottom: 18,
              marginBottom: 24,
            }}
          >
            <KovioMark size={22} />
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                color: p.fg,
                fontWeight: 500,
                letterSpacing: '0.06em',
              }}
            >
              KOVIO / DOCS
            </span>
            <span style={{ flex: 1 }} />
            <Tag color={p.fgMute} style={{ border: `1px solid ${p.line}` }}>
              SIGN IN
            </Tag>
          </div>

          <h2
            style={{
              fontFamily: fonts.display,
              fontSize: 26,
              fontWeight: 500,
              color: p.fg,
              letterSpacing: '-0.015em',
              margin: '0 0 6px',
            }}
          >
            Partner sign in
          </h2>
          <p
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: p.fgMute,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: '0 0 22px',
            }}
          >
            Credentials issued by Kovio · No public registration
          </p>

          <form onSubmit={handleSubmit}>
            <Field
              label="Partner email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@your-fleet.com"
              autoComplete="email"
              required
            />
            <Field
              label="Access code"
              type="password"
              value={code}
              onChange={setCode}
              placeholder="••••-••••-••••"
              autoComplete="one-time-code"
              required
            />

            {status === 'invalid' && (
              <div
                style={{
                  marginBottom: 16,
                  padding: '12px 14px',
                  borderRadius: 10,
                  background: 'rgba(199,51,74,0.08)',
                  border: '1px solid rgba(199,51,74,0.25)',
                  color: '#9A1F2F',
                  fontFamily: fonts.mono,
                  fontSize: 11.5,
                  letterSpacing: '0.04em',
                  lineHeight: 1.5,
                }}
              >
                Those credentials don&apos;t match an active partner. Reach out at{' '}
                <Link href="/contact" style={{ color: p.accent, textDecoration: 'none' }}>
                  /contact
                </Link>{' '}
                to be invited.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: 999,
                background: p.fg,
                color: p.bg,
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.04em',
                border: 'none',
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                opacity: status === 'submitting' ? 0.6 : 1,
                transition: 'opacity .2s',
              }}
            >
              {status === 'submitting' ? 'Verifying…' : 'Sign in →'}
            </button>
          </form>

          <div
            style={{
              marginTop: 24,
              paddingTop: 18,
              borderTop: `1px solid ${p.line}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: fonts.mono,
              fontSize: 10.5,
              color: p.fgMute,
              letterSpacing: '0.06em',
            }}
          >
            <span>NO REGISTRATION</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <LiveDot /> SSO · KOVIO ID
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  required,
}: {
  label: string
  type: 'email' | 'password' | 'text'
  value: string
  onChange: (v: string) => void
  placeholder?: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: 'block',
          fontFamily: fonts.mono,
          fontSize: 11,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: p.fgMute,
          marginBottom: 8,
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        style={{
          width: '100%',
          padding: '12px 14px',
          borderRadius: 10,
          background: p.bg,
          border: `1px solid ${p.line}`,
          color: p.fg,
          fontFamily: type === 'password' ? fonts.mono : fonts.sans,
          fontSize: 14,
          letterSpacing: type === 'password' ? '0.15em' : 'normal',
          outline: 'none',
          transition: 'border-color .2s, box-shadow .2s',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = p.accent
          e.currentTarget.style.boxShadow = `0 0 0 3px ${p.accent}1A`
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = p.line
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}
