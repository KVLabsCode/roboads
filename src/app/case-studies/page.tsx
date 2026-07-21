import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav, Footer } from '@/components/site/Nav'
import { publishedCaseStudies, draftCaseStudies, type CaseStudy } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Kovio Case Studies: Real campaigns, sensor verified',
  description:
    'Real brand activations on real robots, measured by the robots themselves. See what happens when your ad walks through San Francisco.',
}

function CaseCard({ c, draft }: { c: CaseStudy; draft?: boolean }) {
  const inner = (
    <div className="flex h-full flex-col gap-4 rounded-[20px] border-2 border-[#141414] bg-white p-7 transition-transform hover:-translate-y-0.5 md:p-9">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[#141414] px-3.5 py-[7px] text-[12px] font-bold tracking-[1.5px] text-[#D97757]">
          {c.brand.toUpperCase()}
        </span>
        {draft && (
          <span className="rounded-full border-2 border-[#141414] bg-[#D97757] px-3 py-1 text-[12px] font-bold tracking-[1px]">
            DRAFT · NOT PUBLISHED
          </span>
        )}
      </div>
      <div className="font-display text-[24px] uppercase leading-[1.08] md:text-[30px]">{c.headline}</div>
      <div className="mt-auto flex items-end justify-between gap-4">
        <div>
          <div className="font-display text-[40px] text-[#D97757] [-webkit-text-stroke:1.5px_#141414]">{c.heroMetric.value}</div>
          <div className="text-[14px] font-bold">{c.heroMetric.label}</div>
        </div>
        <span className="rounded-full border-2 border-[#141414] px-5 py-2.5 text-[14px] font-bold">Read it →</span>
      </div>
    </div>
  )
  return (
    <Link href={`/case-studies/${c.slug}`} className="no-underline">
      {inner}
    </Link>
  )
}

export default function CaseStudiesPage() {
  const published = publishedCaseStudies()
  const drafts = draftCaseStudies()

  return (
    <div className="mx-auto min-h-screen max-w-[1440px] bg-[#F4F1EA] text-[#141414]">
      <Nav active="cases" cta={{ href: '/contact', label: 'Contact us →' }} />

      <main id="main">
        <div className="flex max-w-[900px] flex-col gap-6 px-5 pb-10 pt-10 md:px-10 md:pb-14 md:pt-[72px]">
          <div className="inline-flex self-start rounded-full bg-[#141414] px-3.5 py-[7px] text-[12px] font-bold tracking-[1.5px] text-[#D97757]">
            CASE STUDIES
          </div>
          <h1 className="m-0 font-display text-[44px] uppercase leading-[.96] tracking-[-1px] min-[900px]:text-[76px] min-[900px]:tracking-[-2px]">
            Proof, not promises.
          </h1>
          <p className="m-0 max-w-[640px] text-[20px] leading-normal text-[#141414]">
            Real brands, real robots, real streets. Every campaign below was measured by the robot itself, with LiDAR
            and depth vision counting verified humans, not estimated foot traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 px-5 pb-12 min-[900px]:grid-cols-2 md:px-10 md:pb-[72px]">
          {published.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
          {published.length === 0 && drafts.length === 0 && (
            <p className="text-[17px]">First case studies land here soon.</p>
          )}
          {/* Drafts are listed with a loud badge until their placeholders are
              resolved and `published` flips to true in lib/case-studies.tsx. */}
          {drafts.map((c) => (
            <CaseCard key={c.slug} c={c} draft />
          ))}
        </div>
      </main>

      <Footer cta={{ href: '/contact', label: 'CONTACT US' }} />
    </div>
  )
}
