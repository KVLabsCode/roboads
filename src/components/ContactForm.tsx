'use client'

import { useState, FormEvent } from 'react'
import { palette as p, fonts } from './kovio/palette'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
type ContactType = 'manufacturer' | 'advertiser'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState<ContactType>('manufacturer')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name,
          email,
          type,
          message,
          botcheck: '',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setName('')
        setEmail('')
        setType('manufacturer')
        setMessage('')
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  const cardStyle: React.CSSProperties = {
    background: p.surface,
    border: `1px solid ${p.line}`,
    borderRadius: 16,
    padding: '32px 28px',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: fonts.mono,
    fontSize: 11,
    color: p.fgMute,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: 8,
  }
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 10,
    background: p.bg,
    border: `1px solid ${p.line}`,
    color: p.fg,
    fontFamily: fonts.sans,
    fontSize: 14,
    outline: 'none',
    transition: 'border-color .2s, box-shadow .2s',
  }

  if (status === 'success') {
    return (
      <div style={{ ...cardStyle, textAlign: 'center', padding: '48px 32px' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 999,
            background: `${p.accent}26`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={p.accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: fonts.display,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: p.fg,
            margin: '0 0 8px',
          }}
        >
          Message sent
        </h3>
        <p
          style={{
            color: p.fgDim,
            fontSize: 14,
            lineHeight: 1.5,
            margin: '0 auto',
            maxWidth: 360,
          }}
        >
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            marginTop: 24,
            background: 'transparent',
            border: 'none',
            color: p.accent,
            fontFamily: fonts.mono,
            fontSize: 12,
            letterSpacing: '0.04em',
            cursor: 'pointer',
          }}
        >
          Send another message →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={cardStyle}>
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {status === 'error' && (
        <div
          style={{
            marginBottom: 20,
            padding: 14,
            borderRadius: 10,
            background: 'rgba(199,51,74,0.10)',
            border: '1px solid rgba(199,51,74,0.30)',
            color: '#9A1F2F',
            fontFamily: fonts.mono,
            fontSize: 12,
          }}
        >
          {errorMsg}
        </div>
      )}

      <div style={{ marginBottom: 18 }}>
        <label htmlFor="name" style={labelStyle}>
          Name <span style={{ color: p.accent }}>*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          style={inputStyle}
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

      <div style={{ marginBottom: 18 }}>
        <label htmlFor="email" style={labelStyle}>
          Email <span style={{ color: p.accent }}>*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          style={inputStyle}
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

      <div style={{ marginBottom: 18 }}>
        <label style={labelStyle}>I am a&hellip;</label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {(['manufacturer', 'advertiser'] as const).map((opt) => {
            const isActive = type === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setType(opt)}
                style={{
                  padding: '14px 12px',
                  borderRadius: 10,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  background: isActive ? `${p.accent}1A` : p.bg,
                  border: `1px solid ${isActive ? p.accent : p.line}`,
                  color: isActive ? p.accent : p.fgDim,
                  transition: 'all .2s',
                }}
              >
                {opt === 'manufacturer' ? 'Robot Company' : 'Brand / Advertiser'}
              </button>
            )
          })}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your robots or your campaign goals..."
          style={{ ...inputStyle, resize: 'vertical', fontFamily: fonts.sans }}
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

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          width: '100%',
          padding: '14px 20px',
          borderRadius: 999,
          background: p.accent,
          color: p.accentInk,
          fontFamily: fonts.mono,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.03em',
          border: 'none',
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          opacity: status === 'submitting' ? 0.6 : 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          transition: 'opacity .2s',
        }}
      >
        {status === 'submitting' ? (
          <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              style={{ animation: 'kovioPulse 1.6s linear infinite' }}
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" />
            </svg>
            Sending...
          </>
        ) : (
          'Send message →'
        )}
      </button>
    </form>
  )
}
