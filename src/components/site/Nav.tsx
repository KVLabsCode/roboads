import Link from 'next/link'

// Shared top nav + footer for the 3-page site. The two audience pages are the
// nav's whole job, so they read as unmissable bordered pills — the active one
// filled amber with the hard offset shadow, the other outlined and filling on
// hover. No CTA pill (each page's hero and form carry the CTAs).
export function Nav({ active }: { active: 'home' | 'brands' | 'fleets' }) {
  const pill =
    'rounded-full border-2 border-[#141414] px-4 py-2 text-[14px] font-bold no-underline transition-colors md:px-[22px] md:py-[10px] md:text-[15px]'
  const activeCls = 'bg-[#D97757] shadow-[3px_3px_0_#141414]'
  const idleCls = 'bg-transparent hover:bg-[#141414] hover:!text-[#F4F1EA] hover:!opacity-100'
  return (
    <header>
      <nav
        aria-label="Main"
        className="flex items-center justify-between gap-x-3 border-b-2 border-[#141414] px-4 py-4 md:px-10 md:py-5"
      >
        <Link href="/" className="font-display text-[20px] tracking-[-0.5px] no-underline md:text-[22px]" aria-label="Kovio home">
          KOVIO<span className="align-super text-[12px]" aria-hidden="true">®</span>
        </Link>
        <div className="flex items-center gap-2.5 md:gap-3.5">
          <Link
            href="/brands"
            aria-current={active === 'brands' ? 'page' : undefined}
            className={`${pill} ${active === 'brands' ? activeCls : idleCls}`}
          >
            Brands
          </Link>
          <Link
            href="/fleets"
            aria-current={active === 'fleets' ? 'page' : undefined}
            className={`${pill} ${active === 'fleets' ? activeCls : idleCls}`}
          >
            Robotic fleets
          </Link>
        </div>
      </nav>
    </header>
  )
}

export function Footer({ cta }: { cta: { href: string; label: string } }) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 bg-[#141414] px-5 py-5 text-[13px] tracking-[1px] text-[#F4F1EA] md:px-10 md:py-6">
      <Link href="/" className="font-display text-[15px] text-[#F4F1EA] no-underline" aria-label="Kovio home">
        KOVIO
      </Link>
      <nav aria-label="Footer" className="flex gap-6 font-bold">
        <Link href="/brands" className="text-[#F4F1EA] no-underline">
          BRANDS
        </Link>
        <Link href="/fleets" className="text-[#F4F1EA] no-underline">
          ROBOTIC FLEETS
        </Link>
        <a href={cta.href} className="text-[#E9A184] no-underline">
          {cta.label}
        </a>
      </nav>
      <span>© 2026 KOVIO LABS · SF</span>
    </footer>
  )
}
