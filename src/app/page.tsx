import WaitlistForm from '@/components/site/WaitlistForm'

// Stealth mode: the site is this one page. Every other route (brands,
// fleets, agencies, case studies, contact) has been pulled out to
// /disabled-pages — not deleted — and next.config.mjs redirects those
// paths here. See disabled-pages/README.md to restore the full site.
export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col bg-[#F4F1EA] text-[#141414]">
      <header className="px-5 py-6 md:px-10 md:py-8">
        <span className="font-display text-[20px] tracking-[-0.5px] md:text-[22px]" aria-label="Kovio">
          KOVIO<span className="align-super text-[12px]" aria-hidden="true">®</span>
        </span>
      </header>

      <main id="main" className="flex flex-1 flex-col items-center justify-center gap-10 px-5 py-16 text-center md:px-10">
        <div className="flex w-full flex-col items-center gap-5">
          <h1 className="m-0 w-full font-display text-[36px] uppercase leading-[.96] tracking-[-1px] min-[420px]:text-[44px] md:text-[72px] md:tracking-[-2px]">
            Kovio Robotics
          </h1>
          <p className="m-0 text-[19px] leading-normal text-[#141414] md:text-[21px]">Something new is coming.</p>
        </div>
        <WaitlistForm />
      </main>

      <footer className="px-5 py-6 text-center text-[13px] tracking-[1px] text-[#141414] md:px-10">
        © 2026 KOVIO LABS
      </footer>
    </div>
  )
}
