'use client'

import { useState } from 'react'

const inputCls =
  'rounded-xl border-2 border-[#141414] bg-white px-4 py-3.5 text-[16px] text-[#141414] font-[inherit]'
const labelCls = 'flex flex-col gap-[7px] text-[14px] font-bold'

// Stealth-mode waitlist: name + email only, posts to /api/lead with
// kind=waitlist. Same honeypot + same backend pipeline (Supabase +
// Resend ack/notification to supportkovio@gmail.com) as the rest of the
// site's lead capture — see src/app/api/lead/route.ts.
export default function WaitlistForm() {
  const [sub, setSub] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy) return
    setBusy(true)
    setError('')
    const fd = new FormData(e.currentTarget)
    fd.set('kind', 'waitlist')
    fd.set('source', 'home')
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: fd })
      if (!res.ok) throw new Error((await res.json().catch(() => null))?.error ?? 'Something went wrong.')
      setSub(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong — try again.')
    } finally {
      setBusy(false)
    }
  }

  if (sub) {
    return (
      <div role="status" className="flex flex-col items-start gap-2 rounded-[20px] border-2 border-[#141414] bg-white p-6 text-[#141414] md:p-8">
        <div className="font-display text-[26px] uppercase">You&apos;re on the list.</div>
        <p className="m-0 text-[15px] leading-normal text-[#141414]">We&apos;ll be in touch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-[420px] flex-col gap-4 rounded-[20px] border-2 border-[#141414] bg-white p-6 text-[#141414] md:p-8">
      {/* Honeypot — humans never see or fill this; bots that do get a silent
          success from /api/lead. sr-only (clip-based), not a huge negative
          offset — that would blow out the page's horizontal scrollable area. */}
      <div aria-hidden="true" className="sr-only">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className={labelCls}>
        Name
        <input name="name" required placeholder="Your name" className={inputCls} />
      </label>
      <label className={labelCls}>
        Email
        <input name="email" type="email" required placeholder="you@email.com" className={inputCls} />
      </label>
      {error && (
        <div role="alert" className="text-[14px] font-semibold text-[#9a3E1F]">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={busy}
        className="cursor-pointer rounded-full border-2 border-[#141414] bg-[#D97757] px-[26px] py-4 font-[inherit] text-[16px] font-bold shadow-[3px_3px_0_#141414] disabled:opacity-60"
      >
        {busy ? 'Sending…' : 'Get in touch →'}
      </button>
    </form>
  )
}
