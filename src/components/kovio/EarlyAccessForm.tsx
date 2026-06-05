'use client'

import { useState, FormEvent } from 'react'
import { palette as p, fonts } from './palette'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
type PayAnswer = '' | 'Yes' | 'Maybe' | 'Just exploring'

// Log the lead to the Google Sheet by POSTing to the Apps Script web app
// directly from the browser. `no-cors` (the script returns no CORS headers) —
// the row still gets written; we just can't read the response. Best-effort.
async function logToSheet(fields: {
  name: string
  email: string
  brand: string
  idea: string
  pay: string
}): Promise<void> {
  const webhook = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL
  if (!webhook) return
  try {
    await fetch(webhook, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ ...fields, source: 'early-access' }),
    })
  } catch {
    /* best-effort */
  }
}

export default function EarlyAccessForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [brand, setBrand] = useState('')
  const [idea, setIdea] = useState('')
  const [pay, setPay] = useState<PayAnswer>('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !brand.trim()) {
      setStatus('error')
      setErrorMsg('Name, work email, and brand are required.')
      return
    }
    setStatus('submitting')
    setErrorMsg('')

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    if (!accessKey) {
      setStatus('error')
      setErrorMsg('Form is not configured yet. Please try again shortly.')
      return
    }

    try {
      // Email delivery — submitted straight from the browser to Web3Forms,
      // exactly like the "Get in touch" form (their free plan blocks
      // server-side calls). The recipient is set on the key's dashboard.
      const wf = new FormData()
      wf.append('access_key', accessKey)
      wf.append('subject', `Early Access — ${name} (${brand})`)
      wf.append('from_name', 'Kovio Early Access')
      wf.append('name', name)
      wf.append('email', email)
      wf.append('brand', brand)
      wf.append('what_would_you_run', idea || '—')
      wf.append('would_pay_once_live', pay || '—')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: wf,
      })
      const data = await res.json().catch(() => null)

      if (res.ok && data?.success) {
        setStatus('success')
        // Best-effort: log the lead to the Google Sheet. Never blocks success.
        void logToSheet({ name, email, brand, idea, pay })
      } else {
        setStatus('error')
        setErrorMsg(data?.message || 'Something went wrong. Please try again.')
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
  const focusOn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = p.accent
    e.currentTarget.style.boxShadow = `0 0 0 3px ${p.accent}1A`
  }
  const focusOff = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = p.line
    e.currentTarget.style.boxShadow = 'none'
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
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: p.fg,
            margin: '0 0 8px',
          }}
        >
          You&apos;re on the list
        </h3>
        <p
          style={{
            color: p.fgDim,
            fontSize: 14,
            lineHeight: 1.5,
            margin: '0 auto',
            maxWidth: 380,
          }}
        >
          Thanks{name ? `, ${name.split(' ')[0]}` : ''} — your founding spot is reserved. We&apos;ll
          reach out within days to set up your first campaign.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={cardStyle} noValidate>
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
        <label htmlFor="ea-name" style={labelStyle}>
          Name <span style={{ color: p.accent }}>*</span>
        </label>
        <input
          id="ea-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          style={inputStyle}
          onFocus={focusOn}
          onBlur={focusOff}
        />
      </div>

      <div style={{ marginBottom: 18 }}>
        <label htmlFor="ea-email" style={labelStyle}>
          Work email <span style={{ color: p.accent }}>*</span>
        </label>
        <input
          id="ea-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          style={inputStyle}
          onFocus={focusOn}
          onBlur={focusOff}
        />
      </div>

      <div style={{ marginBottom: 18 }}>
        <label htmlFor="ea-brand" style={labelStyle}>
          Brand / company <span style={{ color: p.accent }}>*</span>
        </label>
        <input
          id="ea-brand"
          type="text"
          required
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="The brand you'd advertise"
          style={inputStyle}
          onFocus={focusOn}
          onBlur={focusOff}
        />
      </div>

      <div style={{ marginBottom: 18 }}>
        <label htmlFor="ea-idea" style={labelStyle}>
          What would you run?
        </label>
        <textarea
          id="ea-idea"
          rows={4}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="A product, an offer, a moment you'd want robots to deliver..."
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={focusOn}
          onBlur={focusOff}
        />
      </div>

      <div style={{ marginBottom: 24 }}>
        <label htmlFor="ea-pay" style={labelStyle}>
          Would you pay once live?
        </label>
        <select
          id="ea-pay"
          value={pay}
          onChange={(e) => setPay(e.target.value as PayAnswer)}
          style={{ ...inputStyle, fontFamily: fonts.sans, cursor: 'pointer' }}
          onFocus={focusOn}
          onBlur={focusOff}
        >
          <option value="">Select an answer (optional)</option>
          <option value="Yes">Yes</option>
          <option value="Maybe">Maybe</option>
          <option value="Just exploring">Just exploring</option>
        </select>
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
            Reserving your spot...
          </>
        ) : (
          'Claim your founding spot →'
        )}
      </button>
    </form>
  )
}
