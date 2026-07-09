/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { Nav, Footer } from '@/components/site/Nav'
import Marquee from '@/components/site/Marquee'
import LeadForm from '@/components/site/LeadForm'
import { StaticEq } from '@/components/site/EqBars'
import heroPhoto from '../../public/photos/hero-robot.webp'

const STEPS = [
  {
    n: '01',
    title: 'A robot walks the street',
    body: 'Humanoid robots roam where people already are. Everyone stops. Everyone films it.',
  },
  {
    n: '02',
    title: 'Your ad plays at the right moment',
    body: "The robot sees who's nearby and what's happening, then shows your ad on screen and speaks it out loud, with a code people can grab.",
  },
  {
    n: '03',
    title: 'You only pay for proof',
    body: 'Every look, laugh, and scan is verified and traced to outcomes. No faith-based billboards. Pay per real interaction.',
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-[1440px] bg-[#F4F1EA] text-[#141414]">
      <Nav active="home" cta={{ href: '#form', label: 'Free trial →' }} />

      <main id="main">
      {/* hero */}
      <div className="grid grid-cols-1 items-center gap-12 px-5 pb-14 pt-16 min-[900px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:px-10">
        <div className="flex min-w-0 flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#141414] px-3.5 py-[7px] text-[12px] font-bold tracking-[1.5px] text-[#D97757]">
            ● LIVE ON THE STREETS OF SF
          </div>
          <h1 className="m-0 font-display text-[44px] uppercase leading-[.94] tracking-[-1px] min-[900px]:text-[92px] min-[900px]:tracking-[-2px]">
            We put ads on robots.
          </h1>
          <p className="m-0 max-w-[520px] text-[20px] leading-normal text-[#141414]">
            It&apos;s a billboard that walks up to you. Says hi. Shows your ad. Hands out a discount code. And proves
            every single interaction actually happened.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#form" className="rounded-full bg-[#141414] px-[30px] py-4 text-[16px] font-bold text-[#F4F1EA] no-underline">
              Put my ad on a robot →
            </a>
            <Link href="/fleets" className="rounded-full border-2 border-[#141414] px-7 py-3.5 text-[16px] font-bold no-underline">
              Robotic fleets →
            </Link>
          </div>
        </div>
        <div className="relative min-w-0">
          <div className="h-[380px] w-full overflow-hidden rounded-[20px] border-2 border-[#141414] shadow-[8px_8px_0_#D97757] min-[900px]:h-[560px]">
            <Image src={heroPhoto} alt="Kovio robot showing an ad to a crowd in San Francisco" priority className="h-full w-full object-cover" />
          </div>
          <div className="pointer-events-none absolute -top-[18px] right-2 rotate-6 rounded-full border-2 border-[#141414] bg-[#D97757] px-[18px] py-3 font-display text-[14px] min-[900px]:-right-3.5">
            100% UNSKIPPABLE
          </div>
        </div>
      </div>

      <Marquee />

      {/* how it works */}
      <div className="px-5 py-[72px] md:px-10">
        <div className="mb-3 text-[13px] font-bold tracking-[2px] text-[#141414]">HOW IT WORKS</div>
        <h2 className="m-0 mb-10 font-display text-[30px] uppercase tracking-[-1px] min-[900px]:text-[44px]">Stupidly simple.</h2>
        <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-3.5 rounded-2xl border-2 border-[#141414] bg-white p-7">
              <div className="font-display text-[34px] text-[#D97757] [-webkit-text-stroke:1.5px_#141414]">{s.n}</div>
              <div className="text-[20px] font-bold">{s.title}</div>
              <p className="m-0 text-[16px] leading-normal text-[#141414]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* two audiences */}
      <div className="grid grid-cols-1 gap-5 px-5 pb-[72px] min-[900px]:grid-cols-2 md:px-10">
        <div className="flex flex-col gap-4 rounded-[20px] border-2 border-[#141414] bg-[#D97757] p-9">
          <div className="text-[12px] font-bold tracking-[2px]">FOR BRANDS</div>
          <div className="font-display text-[32px] uppercase leading-[1.05]">Buy attention nobody can skip.</div>
          <p className="m-0 text-[16px] leading-normal text-[#141414]">
            Digital ads get blocked. Billboards get ignored. Robots draw a crowd for free, and you only pay when a real
            person actually engages.
          </p>
          <Link href="/brands" className="self-start rounded-full bg-[#141414] px-[26px] py-3.5 text-[15px] font-bold text-[#F4F1EA] no-underline">
            For brands →
          </Link>
        </div>
        <div className="flex flex-col gap-4 rounded-[20px] border-2 border-[#141414] bg-[#141414] p-9 text-[#F4F1EA]">
          <div className="text-[12px] font-bold tracking-[2px] text-[#D97757]">FOR OEMS &amp; FLEETS</div>
          <div className="font-display text-[32px] uppercase leading-[1.05]">Your robots, finally earning.</div>
          <p className="m-0 text-[16px] leading-normal text-[#F4F1EA]">
            One drop-in SDK turns your whole fleet into revenue. Live OEM partners are already in production, with
            earnings per interaction paid automatically.
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-8">
            <img src="/logos/unitree.png" alt="Unitree" className="h-5 w-auto opacity-[.92] invert" />
            <img src="/logos/robot-com.png" alt="Robot.com" className="h-[22px] w-auto opacity-[.92] invert" />
            <img src="/logos/toborlife.png" alt="Toborlife AI" className="h-[22px] w-auto opacity-[.92] invert" />
          </div>
          <Link href="/fleets" className="self-start rounded-full bg-[#D97757] px-[26px] py-3.5 text-[15px] font-bold text-[#141414] no-underline">
            For robotic fleets →
          </Link>
        </div>
      </div>

      {/* free trial form */}
      <div id="form" className="bg-[#141414] px-5 py-[72px] text-[#F4F1EA] md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-14 min-[900px]:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-5">
            <div className="text-[12px] font-bold tracking-[2px] text-[#D97757]">FREE TRIAL</div>
            <h2 className="m-0 font-display text-[30px] uppercase leading-none tracking-[-1px] min-[900px]:text-[48px]">
              Get your brand on a robot.
            </h2>
            <p className="m-0 max-w-[460px] text-[17px] leading-[1.55] text-[#F4F1EA]">
              Drop your creative, leave your details, and we&apos;ll get your ad on a robot in San Francisco. We&apos;ll
              contact you to set it up. No contracts, no media plan, no nonsense.
            </p>
            <ul className="m-0 mt-2 flex list-none flex-col gap-3 p-0 text-[15px] text-[#F4F1EA]">
              {[
                'Your creative runs on a real robot in SF',
                'The robot speaks your ad out loud, too',
                'You get proof of every interaction',
                "Free. We'll set everything up with you",
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-[#D97757]">✦</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex max-w-[460px] flex-col gap-3.5 rounded-2xl bg-[#2a2a26] px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold tracking-[2px] text-[#D97757]">● VOICE AD · DURING THE INTERACTION</span>
                <span className="text-[12px] font-bold tracking-[1px] text-[#F4F1EA]">00:07</span>
              </div>
              <StaticEq heights={[8, 16, 24, 12, 20, 26, 10, 18, 24, 14, 22, 8, 16, 10, 20, 12, 6]} />
              <div className="text-[16px] italic leading-normal text-[#F4F1EA]">
                &quot;Hey! I&apos;ve got 10% off just for you. Scan my screen before I roll away.&quot;
              </div>
            </div>
          </div>
          <LeadForm kind="trial" source="home" />
        </div>
      </div>

      </main>
      <Footer cta={{ href: '#form', label: 'FREE TRIAL' }} />
    </div>
  )
}
