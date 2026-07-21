import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav, Footer } from '@/components/site/Nav'
import LeadForm from '@/components/site/LeadForm'

export const metadata: Metadata = {
  title: 'Kovio for OOH Agencies: Inventory your clients have never seen',
  description:
    'Add humanoid robots to your OOH portfolio. Sensor verified impressions, premium San Francisco placement, campaign reporting your clients can actually audit.',
}

const PILLARS = [
  {
    n: '01',
    title: 'Sell what nobody else has',
    body: 'A humanoid robot is the first walking OOH unit. It stops crowds, gets filmed, and turns one placement into earned media. Your clients have seen every billboard. They have not seen this.',
  },
  {
    n: '02',
    title: 'Bill on verified numbers',
    body: 'Every impression is a real person counted by the robot’s LiDAR and depth camera, streamed to a live dashboard. No modeled foot traffic, no estimated circulation. Reporting your clients can audit.',
  },
  {
    n: '03',
    title: 'We run everything',
    body: 'You bring the client and the creative. Kovio handles deployment, operation, measurement and the wrap report. One creative file, on the street in days, your margin intact.',
  },
]

export default function AgenciesPage() {
  return (
    <div className="mx-auto min-h-screen max-w-[1440px] bg-[#F4F1EA] text-[#141414]">
      <Nav active="agencies" cta={{ href: '#contact', label: 'Partner with us →' }} />

      <main id="main">
        {/* hero */}
        <div className="flex max-w-[920px] flex-col gap-6 px-5 pb-10 pt-10 md:px-10 md:pb-14 md:pt-[72px]">
          <div className="inline-flex self-start rounded-full bg-[#141414] px-3.5 py-[7px] text-[12px] font-bold tracking-[1.5px] text-[#D97757]">
            FOR OOH AGENCIES
          </div>
          <h1 className="m-0 font-display text-[44px] uppercase leading-[.96] tracking-[-1px] min-[900px]:text-[76px] min-[900px]:tracking-[-2px]">
            Inventory your clients have never seen.
          </h1>
          <p className="m-0 max-w-[640px] text-[20px] leading-normal">
            Add humanoid robots to your OOH portfolio. Premium San Francisco placement, sensor verified impressions,
            and a format that earns social coverage on top of the buy.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="rounded-full bg-[#141414] px-[30px] py-4 text-center text-[16px] font-bold text-[#F4F1EA] no-underline max-md:w-full">
              Partner with Kovio →
            </a>
            <Link href="/case-studies" className="rounded-full border-2 border-[#141414] px-7 py-3.5 text-center text-[16px] font-bold no-underline max-md:w-full">
              See the numbers →
            </Link>
          </div>
        </div>

        {/* pillars */}
        <div className="px-5 pb-12 md:px-10 md:pb-[72px]">
          <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.n} className="flex flex-col gap-3.5 rounded-2xl border-2 border-[#141414] bg-white p-7">
                <div className="font-display text-[34px] text-[#D97757] [-webkit-text-stroke:1.5px_#141414]">{p.n}</div>
                <div className="text-[20px] font-bold">{p.title}</div>
                <p className="m-0 text-[16px] leading-normal">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* proof strip */}
        <div className="bg-[#141414] px-5 py-12 text-[#F4F1EA] md:px-10 md:py-[72px]">
          <div className="mb-3 text-[13px] font-bold tracking-[2px] text-[#D97757]">PROOF FOR YOUR CLIENT DECK</div>
          <h2 className="m-0 font-display text-[30px] uppercase tracking-[-1px] min-[900px]:text-[44px]">
            Numbers a billboard can&apos;t show you.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 min-[640px]:grid-cols-3">
            {[
              ['6,567', 'verified impressions in one 2 hour activation'],
              ['10%', 'attention rate, confirmed by on device vision'],
              ['73', 'people filmed a single campaign, earned media included'],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col gap-2 rounded-2xl bg-[#2a2a26] p-6">
                <div className="font-display text-[44px] leading-none text-[#D97757] [font-variant-numeric:tabular-nums]">{v}</div>
                <div className="text-[15px] font-bold leading-snug">{l}</div>
              </div>
            ))}
          </div>
          <Link href="/case-studies" className="mt-8 inline-block rounded-full bg-[#D97757] px-7 py-3.5 text-[15px] font-bold text-[#141414] no-underline">
            Read the case studies →
          </Link>
        </div>

        {/* contact */}
        <div id="contact" className="grid grid-cols-1 items-start gap-10 px-5 py-12 min-[900px]:grid-cols-2 min-[900px]:gap-14 md:px-10 md:py-[72px]">
          <div className="flex min-w-0 flex-col gap-5">
            <div className="text-[13px] font-bold tracking-[2px]">PARTNER WITH KOVIO</div>
            <h2 className="m-0 font-display text-[30px] uppercase leading-none tracking-[-1px] min-[900px]:text-[48px]">
              Bring the client. We bring the robot.
            </h2>
            <p className="m-0 max-w-[460px] text-[17px] leading-[1.55]">
              Tell us about the client or campaign and we come back within 48 hours with availability, creative specs,
              measurement reporting, and partner terms.
            </p>
            <ul className="m-0 mt-2 flex list-none flex-col gap-3 p-0 text-[15px]">
              {['Flexible: one off activations or planned buys', 'Wrap reports with sensor verified data', 'Your client relationship stays yours'].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-[#D97757]">✦</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm kind="agency" source="agencies" />
        </div>
      </main>

      <Footer cta={{ href: '#contact', label: 'PARTNER WITH US' }} />
    </div>
  )
}
