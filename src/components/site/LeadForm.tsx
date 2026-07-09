'use client'

import { useState } from 'react'

const inputCls =
  'rounded-xl border-2 border-[#141414] bg-white px-4 py-3.5 text-[16px] text-[#141414] font-[inherit]'
const labelCls = 'flex flex-col gap-[7px] text-[14px] font-bold'

// The site's one lead capture: `trial` (landing + /brands, with a 1024×600
// creative upload) or `fleet` (/fleets, with a fleet-size field). Posts
// multipart to /api/lead, which stores the lead, uploads the creative, and
// sends the acknowledgment + internal notification emails.
export default function LeadForm({ kind, source }: { kind: 'trial' | 'fleet'; source: string }) {
  const [sub, setSub] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [creative, setCreative] = useState<File | null>(null)
  const [preview, setPreview] = useState('')

  function onCreative(f: File | null) {
    if (!f) return
    if (!f.type.startsWith('image/')) {
      setError('The creative must be an image (PNG/JPG).')
      return
    }
    if (f.size > 10 * 1024 * 1024) {
      setError('Creative is over the 10 MB limit.')
      return
    }
    setError('')
    setCreative(f)
    setPreview(URL.createObjectURL(f))
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy) return
    setBusy(true)
    setError('')
    const fd = new FormData(e.currentTarget)
    fd.set('kind', kind)
    fd.set('source', source)
    if (creative) fd.set('creative', creative)
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
      <div role="status" className="flex flex-col items-start gap-3.5 rounded-[20px] bg-[#F4F1EA] p-10 text-[#141414]">
        <div className="font-display text-[34px] uppercase">{kind === 'trial' ? "You're in." : 'Talk soon.'}{' '}<span aria-hidden="true">🤖</span></div>
        <p className="m-0 text-[16px] leading-normal text-[#55524a]">
          {kind === 'trial'
            ? 'We got your details — check your inbox for a confirmation. A human (not a robot) will contact you within 48 hours to get your ad on the street.'
            : "We got your details — check your inbox for a confirmation. We'll reach out within 48 hours to talk SDK, revenue share, and a pilot for your fleet."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 rounded-[20px] bg-[#F4F1EA] p-8 text-[#141414]">
      <label className={labelCls}>
        Name
        <input name="name" required placeholder="Ada Kovio" className={inputCls} />
      </label>
      <label className={labelCls}>
        Work email
        <input name="email" type="email" required placeholder={kind === 'trial' ? 'ada@brand.com' : 'robin@oem.com'} className={inputCls} />
      </label>
      <label className={labelCls}>
        Company
        <input name="company" required placeholder={kind === 'trial' ? 'Your brand' : 'Your robotics company'} className={inputCls} />
      </label>

      {kind === 'fleet' ? (
        <label className={labelCls}>
          Fleet size &amp; type
          <input name="fleet" required placeholder="e.g. 40 humanoids, 200 delivery bots" className={inputCls} />
        </label>
      ) : (
        <div className={labelCls}>
          <span>
            Your creative <span className="font-medium text-[#5C564A]">1024×600 px, shown exactly as it&apos;ll appear on the robot</span>
          </span>
          <div className="rounded-[14px] border-2 border-[#141414] bg-[#141414] p-2.5">
            <label className="block h-[250px] w-full cursor-pointer overflow-hidden rounded-lg bg-black">
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview} alt="Your creative" className="h-full w-full object-contain" />
              ) : (
                <span className="flex h-full w-full items-center justify-center px-4 text-center text-[13px] font-medium text-[#A9A294]">
                  Upload your creative · 1024×600 px — click to choose
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                aria-label="Upload your ad creative, 1024 by 600 pixels, PNG or JPG"
                className="sr-only"
                onChange={(e) => onCreative(e.target.files?.[0] ?? null)}
              />
            </label>
            <div className="mt-2 flex justify-between text-[12px] font-bold tracking-[1.5px] text-[#A9A294]">
              <span>KOVIO UNIT-G1</span>
              <span>1024×600 PX</span>
            </div>
          </div>
        </div>
      )}

      {kind === 'trial' && (
        <div className="text-[13px] leading-normal text-[#55524a]">No creative yet? Send the form anyway. We&apos;ll help you make one.</div>
      )}
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
        {busy ? 'Sending…' : kind === 'trial' ? 'Claim my free trial →' : 'Talk to us →'}
      </button>
      <div className="text-center text-[12px] text-[#5C564A]">We&apos;ll contact you within 48h. Zero spam.</div>
    </form>
  )
}
