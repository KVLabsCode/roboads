'use client'

import { useState } from 'react'
import LeadForm from './LeadForm'

// One contact form for both audiences: the toggle swaps the segment-specific
// fields (creative upload for brands, fleet size for fleets). Both sides post
// to /api/lead, which stores the lead, emails the acknowledgment via Resend,
// and notifies the team, exactly like the embedded page forms.
export default function ContactSwitcher({ initial }: { initial: 'brand' | 'fleet' }) {
  const [who, setWho] = useState<'brand' | 'fleet'>(initial)

  const pill = 'cursor-pointer rounded-full border-2 border-[#141414] px-5 py-3 text-[15px] font-bold transition-colors'
  const activeCls = 'bg-[#D97757] shadow-[3px_3px_0_#141414]'
  const idleCls = 'bg-white hover:bg-[#FBF7EE]'

  return (
    <div className="flex flex-col gap-5">
      <div role="tablist" aria-label="Who are you contacting us as?" className="flex flex-wrap gap-3">
        <button
          role="tab"
          aria-selected={who === 'brand'}
          onClick={() => setWho('brand')}
          className={`${pill} ${who === 'brand' ? activeCls : idleCls}`}
        >
          I&apos;m a brand
        </button>
        <button
          role="tab"
          aria-selected={who === 'fleet'}
          onClick={() => setWho('fleet')}
          className={`${pill} ${who === 'fleet' ? activeCls : idleCls}`}
        >
          I operate robot fleets
        </button>
      </div>

      <p className="m-0 text-[15px] leading-normal text-[#141414]">
        {who === 'brand'
          ? 'Tell us about your brand and drop a creative if you have one. Your first campaign can be a free trial, we set everything up with you.'
          : 'Tell us about your fleet and we walk you through the SDK, the revenue share, and a pilot, usually within a week.'}
      </p>

      {who === 'brand' ? (
        <LeadForm kind="trial" source="contact" />
      ) : (
        <LeadForm kind="fleet" source="contact" />
      )}
    </div>
  )
}
