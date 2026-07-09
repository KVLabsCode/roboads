import Link from 'next/link'

// Shared top nav + footer for the 3-page site. Active page gets the amber
// underline; the CTA pill anchors to the page's own form.
export function Nav({ active, cta }: { active: 'home' | 'brands' | 'fleets'; cta: { href: string; label: string } }) {
  const link = 'no-underline font-semibold'
  const activeCls = 'border-b-[3px] border-[#D97757] pb-[2px]'
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b-2 border-[#141414] px-5 py-4 md:px-10 md:py-5">
      <Link href="/" className="font-display text-[22px] tracking-[-0.5px] no-underline">
        KOVIO<span className="align-super text-[11px]">®</span>
      </Link>
      <div className="flex gap-7 text-[14px]">
        <Link href="/brands" className={`${link} ${active === 'brands' ? activeCls : ''}`}>
          Brands
        </Link>
        <Link href="/fleets" className={`${link} ${active === 'fleets' ? activeCls : ''}`}>
          Robotic fleets
        </Link>
      </div>
      <a
        href={cta.href}
        className="rounded-full border-2 border-[#141414] bg-[#D97757] px-[22px] py-[10px] text-[14px] font-bold no-underline shadow-[3px_3px_0_#141414]"
      >
        {cta.label}
      </a>
    </div>
  )
}

export function Footer({ cta }: { cta: { href: string; label: string } }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 bg-[#141414] px-5 py-5 text-[12px] tracking-[1px] text-[#8a8578] md:px-10 md:py-6">
      <Link href="/" className="font-display text-[15px] text-[#F4F1EA] no-underline">
        KOVIO
      </Link>
      <div className="flex gap-6 font-bold">
        <Link href="/brands" className="text-[#F4F1EA] no-underline">
          BRANDS
        </Link>
        <Link href="/fleets" className="text-[#F4F1EA] no-underline">
          ROBOTIC FLEETS
        </Link>
        <a href={cta.href} className="text-[#D97757] no-underline">
          {cta.label}
        </a>
      </div>
      <span>© 2026 KOVIO LABS · SF</span>
    </div>
  )
}
