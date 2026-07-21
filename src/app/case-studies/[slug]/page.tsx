import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav, Footer } from '@/components/site/Nav'
import LazyVideo from '@/components/site/LazyVideo'
import { CASE_STUDIES, getCaseStudy, withPlaceholders } from '@/lib/case-studies'

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCaseStudy(params.slug)
  if (!c) return {}
  return {
    title: `${c.brand} x Kovio, a Kovio case study`,
    description: c.subhead,
    // Draft entries stay out of search indexes until published.
    robots: c.published ? undefined : { index: false, follow: false },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug)
  if (!c) notFound()

  return (
    <div className="mx-auto min-h-screen max-w-[1440px] bg-[#F4F1EA] text-[#141414]">
      <Nav active="cases" cta={{ href: '/contact', label: 'Contact us →' }} />

      <main id="main">
        {!c.published && (
          <div className="border-b-2 border-[#141414] bg-[#D97757] px-5 py-3 text-center text-[14px] font-bold tracking-[1px] md:px-10">
            DRAFT · unpublished. Highlighted items are unresolved placeholders.
          </div>
        )}

        {/* hero */}
        <div className="flex max-w-[980px] flex-col gap-6 px-5 pb-10 pt-10 md:px-10 md:pt-[64px]">
          <Link href="/case-studies" className="self-start text-[14px] font-bold no-underline">
            ← All case studies
          </Link>
          <div className="inline-flex self-start rounded-full bg-[#141414] px-3.5 py-[7px] text-[12px] font-bold tracking-[1.5px] text-[#D97757]">
            CASE STUDY · {c.brand.toUpperCase()}
          </div>
          <h1 className="m-0 font-display text-[38px] uppercase leading-[.98] tracking-[-1px] min-[900px]:text-[64px] min-[900px]:tracking-[-2px]">
            {c.headline}
          </h1>
          <p className="m-0 max-w-[720px] text-[19px] leading-normal text-[#141414] md:text-[21px]">{c.subhead}</p>
        </div>

        {/* video */}
        <div className="px-5 pb-12 md:px-10">
          <div className="mx-auto max-w-[980px]">
            <LazyVideo youtubeId={c.youtubeId} title={`${c.brand} x Kovio campaign video`} />
          </div>
        </div>

        {/* brand + campaign */}
        <div className="grid grid-cols-1 gap-5 px-5 pb-12 min-[900px]:grid-cols-2 md:px-10 md:pb-[72px]">
          <div className="flex flex-col gap-4 rounded-[20px] border-2 border-[#141414] bg-white p-7 md:p-9">
            <div className="text-[13px] font-bold tracking-[2px]">THE BRAND</div>
            <p className="m-0 text-[17px] leading-[1.6]">{withPlaceholders(c.theBrand)}</p>
          </div>
          <div className="flex flex-col gap-4 rounded-[20px] border-2 border-[#141414] bg-[#D97757] p-7 md:p-9">
            <div className="text-[13px] font-bold tracking-[2px]">THE CAMPAIGN</div>
            <p className="m-0 text-[17px] leading-[1.6]">{withPlaceholders(c.theCampaign)}</p>
          </div>
        </div>

        {/* results dashboard */}
        <div className="bg-[#141414] px-5 py-12 text-[#F4F1EA] md:px-10 md:py-[72px]">
          <div className="mb-3 flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#7ec97e]" />
            <span className="text-[13px] font-bold tracking-[2px] text-[#D97757]">SENSOR VERIFIED RESULTS</span>
          </div>
          <h2 className="m-0 font-display text-[30px] uppercase tracking-[-1px] min-[900px]:text-[44px]">
            Measured by the robot itself.
          </h2>
          <p className="m-0 mt-4 max-w-[680px] text-[17px] leading-[1.6] text-[#F4F1EA]">{c.resultsIntro}</p>

          <div className="mt-10 grid grid-cols-1 gap-5 min-[640px]:grid-cols-2 min-[1100px]:grid-cols-3">
            {c.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2.5 rounded-2xl bg-[#2a2a26] p-6 md:p-7">
                <div className="font-display text-[44px] leading-none text-[#D97757] [font-variant-numeric:tabular-nums] md:text-[52px]">
                  {withPlaceholders(m.value)}
                </div>
                <div className="text-[16px] font-bold leading-snug">{m.label}</div>
                <div className="mt-auto border-t border-[#3a3a35] pt-2.5 text-[13.5px] leading-normal text-[#F4F1EA] opacity-80">
                  {withPlaceholders(m.benchmark)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* why a robot beats the alternatives */}
        <div className="px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mb-3 text-[13px] font-bold tracking-[2px] text-[#141414]">WHY A ROBOT BEATS THE ALTERNATIVES</div>
          <h2 className="m-0 mb-10 font-display text-[30px] uppercase tracking-[-1px] min-[900px]:text-[44px]">
            Nobody scrolls past a robot.
          </h2>
          <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
            {c.sections.map((s) => (
              <div key={s.heading} className="flex flex-col gap-3.5 rounded-2xl border-2 border-[#141414] bg-white p-7">
                <div className="text-[19px] font-bold">{s.heading}</div>
                <p className="m-0 text-[15px] leading-[1.6]">{withPlaceholders(s.body)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* what they got + testimonial */}
        <div className="grid grid-cols-1 gap-5 px-5 pb-12 min-[900px]:grid-cols-2 md:px-10 md:pb-[72px]">
          <div className={`flex flex-col gap-5 rounded-[20px] border-2 border-[#141414] bg-white p-7 md:p-9 ${c.testimonial ? '' : 'min-[900px]:col-span-2'}`}>
            <div className="text-[13px] font-bold tracking-[2px]">WHAT {c.brand.toUpperCase()} GOT</div>
            <ul className={`m-0 grid list-none gap-3.5 p-0 text-[16px] ${c.testimonial ? '' : 'min-[900px]:grid-cols-2'}`}>
              {c.whatTheyGot.map((t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-[#141414] bg-[#D97757] text-[12px] font-bold">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {c.testimonial && (
            <figure className="m-0 flex flex-col justify-between gap-6 rounded-[20px] border-2 border-[#141414] bg-[#141414] p-7 text-[#F4F1EA] md:p-9">
              <blockquote className="m-0 text-[20px] font-medium leading-[1.5] md:text-[22px]">
                “{withPlaceholders(c.testimonial.quote)}”
              </blockquote>
              <figcaption className="text-[15px]">
                <span className="font-bold">{withPlaceholders(c.testimonial.name)}</span>
                <span className="text-[#F4F1EA] opacity-80"> · {withPlaceholders(c.testimonial.title)}</span>
              </figcaption>
            </figure>
          )}
        </div>

        {/* closing CTA */}
        <div id="cta" className="bg-[#D97757] px-5 py-12 md:px-10 md:py-[72px]">
          <div className="mx-auto flex max-w-[900px] flex-col items-start gap-6">
            <h2 className="m-0 font-display text-[30px] uppercase leading-[1.02] tracking-[-1px] min-[900px]:text-[48px]">
              Your brand could be next.
            </h2>
            <p className="m-0 max-w-[680px] text-[18px] leading-[1.6]">
              Kovio is the advertising exchange for commercial robots, with humanoids live in San Francisco and 1,000+
              robots onboarded through partners like Robot.com. One creative file gets your brand on the fleet.
            </p>
            <Link
              href="/contact"
              className="rounded-full border-2 border-[#141414] bg-[#141414] px-8 py-4 text-[17px] font-bold text-[#F4F1EA] no-underline shadow-[3px_3px_0_rgba(20,20,20,0.35)]"
            >
              Book a campaign →
            </Link>
          </div>
        </div>
      </main>

      <Footer cta={{ href: '/contact', label: 'CONTACT US' }} />
    </div>
  )
}
