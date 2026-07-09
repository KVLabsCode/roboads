/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { Nav, Footer } from '@/components/site/Nav'
import LeadForm from '@/components/site/LeadForm'

export const metadata: Metadata = {
  title: 'Kovio for Robotic Fleets — Your robots, finally earning',
  description:
    'One drop-in SDK turns every robot interaction into revenue, paid out automatically. Live OEM partners in production. Connect your fleet.',
}

const STEPS = [
  {
    n: '01',
    title: 'Drop in the SDK',
    body: "One integration across your whole fleet. The SDK hooks into your robot's perception to spot qualified moments. No new hardware.",
  },
  {
    n: '02',
    title: 'The exchange fills the moment',
    body: 'Brand campaigns are matched to the right moment in real time. Your robot shows the ad, speaks the line, and keeps doing its job.',
  },
  {
    n: '03',
    title: 'You get paid per interaction',
    body: 'Every verified interaction earns. Settlement is automatic: revenue share paid straight to you, with full reporting.',
  },
]

const UNITS = [
  { unit: 'G1 · Market St', live: true, earn: '$38.20' },
  { unit: 'G1 · Embarcadero', live: true, earn: '$29.75' },
  { unit: 'Go2 · Mission Bay', live: false, earn: '$11.40' },
]

export default function FleetsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-[1440px] bg-[#F4F1EA] text-[#141414]">
      <Nav active="fleets" cta={{ href: '#contact', label: 'Talk to us →' }} />

      <main id="main">
      {/* hero */}
      <div className="grid grid-cols-1 items-center gap-12 px-5 pb-16 pt-[72px] min-[900px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:px-10">
        <div className="flex min-w-0 flex-col gap-6">
          <div className="inline-flex self-start rounded-full bg-[#141414] px-3.5 py-[7px] text-[12px] font-bold tracking-[1.5px] text-[#D97757]">
            FOR OEMS &amp; FLEET OPERATORS
          </div>
          <h1 className="m-0 font-display text-[44px] uppercase leading-[.96] tracking-[-1px] min-[900px]:text-[76px] min-[900px]:tracking-[-2px]">
            Your robots, finally earning.
          </h1>
          <p className="m-0 max-w-[560px] text-[20px] leading-normal text-[#3a3a35]">
            Your fleet already reaches people every day and earns nothing for it. One drop-in SDK turns every
            interaction into revenue, paid out automatically.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="rounded-full bg-[#141414] px-[30px] py-4 text-[16px] font-bold text-[#F4F1EA] no-underline">
              Connect my fleet →
            </a>
            <a href="#how" className="rounded-full border-2 border-[#141414] px-7 py-3.5 text-[16px] font-bold no-underline">
              How it works
            </a>
          </div>
        </div>
        {/* SDK terminal */}
        <div
          role="img"
          aria-label="Terminal demo: running kovio connect fleet links the SDK to the perception stack, connects the ad exchange, readies the settlement account — the fleet is now earning"
          className="min-w-0 rounded-[20px] border-2 border-[#141414] bg-[#141414] p-7 font-mono text-[14.5px] leading-loose text-[#D2CEC2] shadow-[8px_8px_0_#D97757]"
        >
          <div aria-hidden="true">
          <div className="mb-[18px] flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#3a3a35]" />
            <div className="h-3 w-3 rounded-full bg-[#3a3a35]" />
            <div className="h-3 w-3 rounded-full bg-[#D97757]" />
          </div>
          <div>
            <span className="text-[#C2BDAF]">$</span> kovio connect --fleet
          </div>
          <div className="text-[#7ec97e]">✓ SDK linked to perception stack</div>
          <div className="text-[#7ec97e]">✓ Ad exchange connected</div>
          <div className="text-[#7ec97e]">✓ Settlement account ready</div>
          <div className="mt-3 text-[#F4F1EA]">
            robot.on(<span className="text-[#D97757]">&apos;qualified_moment&apos;</span>, kovio.serve)
          </div>
          <div className="mt-3">
            <span className="text-[#C2BDAF]">→</span> <span className="font-bold text-[#D97757]">fleet is now earning</span>
          </div>
          </div>
        </div>
      </div>

      {/* partners strip */}
      <div className="flex flex-wrap items-center gap-10 border-y-2 border-[#141414] bg-[#141414] px-5 py-[26px] text-[#F4F1EA] md:px-10">
        <span className="text-[12px] font-bold tracking-[2px] text-[#D97757]">LIVE OEM PARTNERS</span>
        <img src="/logos/unitree.png" alt="Unitree" className="h-[22px] w-auto opacity-[.92] invert" />
        <img src="/logos/robot-com.png" alt="Robot.com" className="h-6 w-auto opacity-[.92] invert" />
        <img src="/logos/toborlife.png" alt="Toborlife AI" className="h-6 w-auto opacity-[.92] invert" />
        <span className="text-[13px] text-[#C2BDAF] min-[900px]:ml-auto">Multi-OEM ecosystem, in production</span>
      </div>

      {/* how it works */}
      <div id="how" className="px-5 py-[72px] md:px-10">
        <div className="mb-3 text-[13px] font-bold tracking-[2px] text-[#4A4438]">HOW IT WORKS</div>
        <h2 className="m-0 mb-10 font-display text-[30px] uppercase tracking-[-1px] min-[900px]:text-[44px]">
          One integration. Every robot earns.
        </h2>
        <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-3.5 rounded-2xl border-2 border-[#141414] bg-white p-7">
              <div className="font-display text-[34px] text-[#D97757] [-webkit-text-stroke:1.5px_#141414]">{s.n}</div>
              <div className="text-[20px] font-bold">{s.title}</div>
              <p className="m-0 text-[15px] leading-normal text-[#33302A]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* why */}
      <div className="px-5 pb-[72px] md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-5 min-[900px]:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-[20px] border-2 border-[#141414] bg-[#D97757] p-9">
            <div className="text-[12px] font-bold tracking-[2px]">THE PROBLEM</div>
            <div className="font-display text-[30px] uppercase leading-[1.05]">
              Robots are expensive. Attention is free money you&apos;re leaving out.
            </div>
            <p className="m-0 text-[16px] leading-normal text-[#2c2c28]">
              Your robots interact with people all day: greetings, deliveries, head-turns on the sidewalk. None of it
              generates a dollar. That&apos;s inventory with no economic layer behind it.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-[20px] border-2 border-[#141414] bg-[#141414] p-9 text-[#F4F1EA]">
            <div className="text-[12px] font-bold tracking-[2px] text-[#D97757]">WITH KOVIO</div>
            <div className="font-display text-[30px] uppercase leading-[1.05]">
              Earnings from day one. A reason to deploy more robots.
            </div>
            <p className="m-0 text-[16px] leading-normal text-[#D2CEC2]">
              Kovio makes every robot revenue-positive on attention it already earns. We&apos;re the neutral exchange:
              you keep your hardware, your customers, and a new revenue line.
            </p>
          </div>
        </div>
      </div>

      {/* operator dashboard */}
      <div className="px-5 pb-[72px] md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div
            role="img"
            aria-label="Kovio operator dashboard preview: unit G1 on Market Street live earning 38 dollars 20 today, unit G1 at Embarcadero live earning 29 dollars 75, unit Go2 in Mission Bay matching at 11 dollars 40, next payout automatic on Friday"
            className="min-w-0 overflow-hidden rounded-2xl border-2 border-[#141414] bg-white shadow-[8px_8px_0_#D97757]"
          >
            <div aria-hidden="true">
            <div className="flex items-center gap-2.5 bg-[#141414] px-[18px] py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#3a3a35]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#3a3a35]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#D97757]" />
              </div>
              <span className="text-[12px] font-bold tracking-[1px] text-[#C2BDAF]">KOVIO OPERATOR DASHBOARD</span>
            </div>
            <div className="flex flex-col gap-3 p-6">
              <div className="grid grid-cols-[1.5fr_1.1fr_.9fr] items-center border-b-2 border-[#141414] pb-2.5 text-[12px] font-bold tracking-[1.5px] text-[#4A4438]">
                <span>UNIT</span>
                <span>STATUS</span>
                <span className="text-right">EARNINGS TODAY</span>
              </div>
              {UNITS.map((u) => (
                <div key={u.unit} className={`grid grid-cols-[1.5fr_1.1fr_.9fr] items-center text-[14px] font-semibold ${u.live ? '' : 'text-[#4A4438]'}`}>
                  <span>{u.unit}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 justify-self-start rounded-full px-2.5 py-1 text-[12px] font-bold tracking-[1px] ${
                      u.live ? 'border-[1.5px] border-[#1f6b3a] bg-[#E4F2E4] text-[#1f6b3a]' : 'border-[1.5px] border-[#6B6558] bg-[#F0EDE6] text-[#4A4438]'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${u.live ? 'bg-[#1f6b3a]' : 'bg-[#6B6558]'}`} />
                    {u.live ? 'LIVE' : 'MATCHING'}
                  </span>
                  <span className="text-right font-display">{u.earn}</span>
                </div>
              ))}
              <div className="mt-1.5 flex items-center justify-between rounded-[10px] bg-[#141414] px-4 py-3 text-[#F4F1EA]">
                <span className="text-[12px] font-bold tracking-[1.5px] text-[#D97757]">NEXT PAYOUT · AUTOMATIC</span>
                <span className="font-display text-[16px]">FRI</span>
              </div>
            </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-5">
            <div className="text-[13px] font-bold tracking-[2px] text-[#4A4438]">OPERATOR DASHBOARD</div>
            <h2 className="m-0 font-display text-[30px] uppercase leading-none tracking-[-1px] min-[900px]:text-[44px]">
              See every robot earning.
            </h2>
            <p className="m-0 max-w-[480px] text-[17px] leading-[1.55] text-[#3a3a35]">
              Your operator dashboard comes with the SDK: live status per unit, campaigns running on your fleet,
              earnings per interaction, and payout history. All in one place.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 self-start rounded-full bg-[#141414] px-6 py-[13px] text-[14px] font-bold text-[#F4F1EA] no-underline"
            >
              <span aria-hidden="true" className="text-[#D97757]">●</span> INCLUDED WITH THE SDK
            </a>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div id="contact" className="bg-[#141414] px-5 py-[72px] text-[#F4F1EA] md:px-10">
        <div className="grid grid-cols-1 items-start gap-14 min-[900px]:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-5">
            <div className="text-[12px] font-bold tracking-[2px] text-[#D97757]">CONNECT YOUR FLEET</div>
            <h2 className="m-0 font-display text-[30px] uppercase leading-none tracking-[-1px] min-[900px]:text-[48px]">
              Let&apos;s get your robots earning.
            </h2>
            <p className="m-0 max-w-[460px] text-[17px] leading-[1.55] text-[#D2CEC2]">
              Tell us about your fleet and we&apos;ll walk you through the SDK, the revenue share, and a pilot, usually
              within a week.
            </p>
            <ul className="m-0 mt-2 flex list-none flex-col gap-3 p-0 text-[15px] text-[#D2CEC2]">
              {['One SDK, any form factor', 'Revenue share aligned with you', 'Automatic settlement + full reporting'].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-[#D97757]">✦</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm kind="fleet" source="fleets" />
        </div>
      </div>

      </main>
      <Footer cta={{ href: '#contact', label: 'TALK TO US' }} />
    </div>
  )
}
