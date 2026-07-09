/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { Nav, Footer } from '@/components/site/Nav'
import LeadForm from '@/components/site/LeadForm'
import VoiceCards from '@/components/site/VoiceCards'
import { StaticEq } from '@/components/site/EqBars'

export const metadata: Metadata = {
  title: 'Kovio for Brands — Buy attention nobody can skip',
  description:
    'Your ad on a robot: on screen and out loud, at the moment attention is locked in. Every interaction verified down to the purchase. Free trial in San Francisco.',
}

const TRIAL_STEPS = [
  { n: '01', title: 'Send the form', body: 'Name, email, company, creative. Two minutes, tops.' },
  { n: '02', title: 'We set it up together', body: "We'll contact you, fit your creative to the robot, and write the voice line with you." },
  { n: '03', title: 'The robot hits the street', body: 'Your campaign runs live in San Francisco. Crowds included.' },
  { n: '04', title: 'You get the proof', body: 'A report of every verified interaction, plus the footage people took.' },
]

const LOGOS: Array<{ src: string; alt: string; h: number }> = [
  { src: '/logos/pylon.png', alt: 'Pylon', h: 30 },
  { src: '/logos/brez.png', alt: 'BRĒZ', h: 28 },
  { src: '/logos/smallest-ai.png', alt: 'smallest.ai', h: 21 },
  { src: '/logos/slashy.png', alt: 'Slashy', h: 28 },
  { src: '/logos/speechmatics.png', alt: 'Speechmatics', h: 19 },
  { src: '/logos/natively.png', alt: 'NativelyAI', h: 26 },
]

export default function BrandsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-[1440px] bg-[#F4F1EA] text-[#141414]">
      <Nav active="brands" cta={{ href: '#form', label: 'Free trial →' }} />

      {/* hero */}
      <div className="flex max-w-[900px] flex-col gap-6 px-5 pb-14 pt-[72px] md:px-10">
        <div className="inline-flex self-start rounded-full bg-[#141414] px-3.5 py-[7px] text-[12px] font-bold tracking-[1.5px] text-[#D97757]">
          FOR BRANDS
        </div>
        <h1 className="m-0 font-display text-[44px] uppercase leading-[.96] tracking-[-1px] min-[900px]:text-[76px] min-[900px]:tracking-[-2px]">
          Buy attention nobody can skip.
        </h1>
        <p className="m-0 max-w-[640px] text-[20px] leading-normal text-[#3a3a35]">
          People block your digital ads and walk past your billboards. Nobody walks past a robot. Your ad runs on it, on
          screen and out loud, and you only pay when someone actually engages.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a href="#form" className="rounded-full bg-[#141414] px-[30px] py-4 text-[16px] font-bold text-[#F4F1EA] no-underline">
            Start a free trial →
          </a>
          <a href="#what-you-get" className="rounded-full border-2 border-[#141414] px-7 py-3.5 text-[16px] font-bold no-underline">
            What you get
          </a>
        </div>
      </div>

      {/* comparison */}
      <div className="px-5 pb-[72px] pt-4 md:px-10">
        <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border-2 border-[#141414] bg-white p-7 opacity-60">
            <div className="text-[12px] font-bold tracking-[2px] text-[#8a8578]">BILLBOARDS</div>
            <div className="text-[20px] font-bold">Can&apos;t see. Can&apos;t measure.</div>
            <p className="m-0 text-[15px] leading-normal text-[#55524a]">
              A billboard doesn&apos;t know who walked past, and can&apos;t prove a single sale. You buy it on faith.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border-2 border-[#141414] bg-white p-7 opacity-60">
            <div className="text-[12px] font-bold tracking-[2px] text-[#8a8578]">DIGITAL ADS</div>
            <div className="text-[20px] font-bold">Skipped. Blocked. Ignored.</div>
            <p className="m-0 text-[15px] leading-normal text-[#55524a]">
              You pay more every year for attention that&apos;s worth less. Everyone&apos;s tuned out.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border-2 border-[#141414] bg-[#141414] p-7 text-[#F4F1EA] shadow-[6px_6px_0_#D97757]">
            <div className="text-[12px] font-bold tracking-[2px] text-[#D97757]">ROBOTS</div>
            <div className="text-[20px] font-bold">Unmissable. Fully measured.</div>
            <p className="m-0 text-[15px] leading-normal text-[#b9b6ac]">
              People walk toward robots and film them. Every interaction is verified and traceable to the purchase.
            </p>
          </div>
        </div>
      </div>

      {/* what you get */}
      <div id="what-you-get" className="bg-[#141414] px-5 py-[72px] text-[#F4F1EA] md:px-10">
        <div className="mb-3 text-[13px] font-bold tracking-[2px] text-[#D97757]">WHAT YOUR CAMPAIGN INCLUDES</div>
        <h2 className="m-0 mb-10 font-display text-[30px] uppercase tracking-[-1px] min-[900px]:text-[44px]">Screen. Voice. Proof.</h2>
        <div className="grid grid-cols-1 items-stretch gap-5 min-[900px]:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-2xl bg-[#2a2a26] p-6">
            <div className="text-[12px] font-bold tracking-[2px] text-[#D97757]">01 · SCREEN AD</div>
            <div className="flex h-[150px] items-center justify-center rounded-[10px] border border-[#3a3a35] bg-black">
              <div className="flex flex-col gap-1.5 text-center">
                <div className="font-display text-[18px] text-[#F4F1EA]">YOUR AD HERE</div>
                <div className="text-[11px] tracking-[1.5px] text-[#8a8578]">1024×600 · SCAN FOR 10% OFF</div>
              </div>
            </div>
            <p className="m-0 text-[15px] leading-normal text-[#b9b6ac]">
              Your creative on the robot&apos;s chest screen, shown at the moment someone&apos;s attention is already locked in.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl bg-[#2a2a26] p-6">
            <div className="text-[12px] font-bold tracking-[2px] text-[#D97757]">02 · VOICE AD</div>
            <div className="flex h-[150px] flex-col items-center justify-center gap-3 rounded-[10px] border border-[#3a3a35] bg-black px-5">
              <StaticEq heights={[8, 18, 24, 12, 20, 10, 22, 14, 8]} barH={24} />
              <div className="text-center text-[13px] italic leading-snug text-[#F4F1EA]">&quot;Hey! Scan my screen for 10% off.&quot;</div>
            </div>
            <p className="m-0 text-[15px] leading-normal text-[#b9b6ac]">
              The robot speaks your line during the interaction. It greets people, jokes around, and delivers your message.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl bg-[#2a2a26] p-6">
            <div className="text-[12px] font-bold tracking-[2px] text-[#D97757]">03 · PROOF</div>
            <div className="flex h-[150px] flex-col gap-[9px] rounded-[10px] border border-[#3a3a35] bg-black px-[18px] py-4 text-[12px] tracking-[.5px]">
              <div className="flex justify-between text-[#8a8578]">
                <span>INTERACTION</span>
                <span>VERIFIED</span>
              </div>
              {['Greeting → ad shown', 'Voice line played', 'Code scanned', 'Purchase attributed'].map((t) => (
                <div key={t} className="flex justify-between text-[#F4F1EA]">
                  <span>{t}</span>
                  <span className="text-[#7ec97e]">✓</span>
                </div>
              ))}
            </div>
            <p className="m-0 text-[15px] leading-normal text-[#b9b6ac]">
              Every step verified, down to the purchase. You get a report of real interactions, not estimated impressions.
            </p>
          </div>
        </div>
      </div>

      {/* voice personalities */}
      <div className="px-5 pt-[72px] md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="flex min-w-0 flex-col gap-5">
            <div className="text-[13px] font-bold tracking-[2px] text-[#8a8578]">VOICE PERSONALITY</div>
            <h2 className="m-0 font-display text-[30px] uppercase leading-none tracking-[-1px] min-[900px]:text-[44px]">
              Your robot. Your brand&apos;s voice.
            </h2>
            <p className="m-0 max-w-[480px] text-[17px] leading-[1.55] text-[#3a3a35]">
              We give every robot a personality: a voice, a tone, a sense of humor. Pick one of ours or we&apos;ll craft
              one that sounds exactly like your brand. Hit play to hear them.
            </p>
            <div className="inline-flex items-center gap-2.5 self-start rounded-full bg-[#141414] px-[22px] py-3 text-[13px] font-bold tracking-[1.5px] text-[#F4F1EA]">
              <span className="text-[#D97757]">●</span> HEAR THE VOICES
            </div>
          </div>
          <VoiceCards />
        </div>
      </div>

      {/* dashboard */}
      <div className="px-5 pt-[72px] md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="flex min-w-0 flex-col gap-5">
            <div className="text-[13px] font-bold tracking-[2px] text-[#8a8578]">YOUR DASHBOARD</div>
            <h2 className="m-0 font-display text-[30px] uppercase leading-none tracking-[-1px] min-[900px]:text-[44px]">
              Run it like a digital campaign.
            </h2>
            <p className="m-0 max-w-[480px] text-[17px] leading-[1.55] text-[#3a3a35]">
              Launch, manage, and measure everything from your dashboard: live campaign status, verified interactions,
              and spend, in real time. No spreadsheets from a media agency.
            </p>
            <a
              href="#form"
              className="inline-flex items-center gap-2.5 self-start rounded-full bg-[#141414] px-6 py-[13px] text-[14px] font-bold text-[#F4F1EA] no-underline"
            >
              <span className="text-[#D97757]">●</span> DASHBOARD INCLUDED · LIVE TODAY
            </a>
          </div>
          <div className="min-w-0 overflow-hidden rounded-2xl border-2 border-[#141414] bg-white shadow-[8px_8px_0_#D97757]">
            <div className="flex items-center gap-2.5 bg-[#141414] px-[18px] py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#3a3a35]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#3a3a35]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#D97757]" />
              </div>
              <span className="text-[12px] font-bold tracking-[1px] text-[#8a8578]">KOVIO DASHBOARD</span>
            </div>
            <div className="flex flex-col gap-[18px] p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[3px]">
                  <span className="text-[15px] font-bold">Summer Drop · Market St</span>
                  <span className="text-[12px] font-bold tracking-[1px] text-[#8a8578]">CAMPAIGN · UNIT G1</span>
                </div>
                <span className="rounded-full bg-[#141414] px-3 py-1.5 text-[11px] font-bold tracking-[1.5px] text-[#7ec97e]">● LIVE</span>
              </div>
              <div className="flex h-[90px] items-end gap-2 border-b-2 border-[#141414]">
                {[
                  ['34%', '#E8D9CE'],
                  ['48%', '#E8D9CE'],
                  ['42%', '#E8D9CE'],
                  ['64%', '#D97757'],
                  ['58%', '#D97757'],
                  ['82%', '#D97757'],
                  ['100%', '#D97757'],
                ].map(([h, c], i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: h as string, background: c as string }} />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ['1,284', 'VERIFIED INTERACTIONS'],
                  ['312', 'CODES SCANNED'],
                  ['$0.41', 'AVG COST / INTERACTION'],
                ].map(([v, l]) => (
                  <div key={l} className="flex flex-col gap-0.5">
                    <span className="font-display text-[22px]">{v}</span>
                    <span className="text-[11px] font-bold tracking-[1px] text-[#8a8578]">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* logos */}
      <div className="px-5 py-[72px] md:px-10">
        <div className="flex flex-col gap-6 rounded-2xl border-2 border-[#141414] bg-white px-8 py-7">
          <span className="self-start rounded-full border-2 border-[#141414] bg-[#D97757] px-3 py-1.5 text-[12px] font-bold tracking-[2px]">
            BRANDS WE&apos;VE WORKED WITH
          </span>
          <div className="flex flex-wrap items-center gap-11">
            {LOGOS.map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} style={{ height: l.h, width: 'auto' }} />
            ))}
          </div>
        </div>
      </div>

      {/* trial steps */}
      <div className="px-5 pb-[72px] md:px-10">
        <div className="mb-3 text-[13px] font-bold tracking-[2px] text-[#8a8578]">YOUR FREE TRIAL</div>
        <h2 className="m-0 mb-10 font-display text-[30px] uppercase tracking-[-1px] min-[900px]:text-[44px]">Form to street in days.</h2>
        <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-4">
          {TRIAL_STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-2.5 rounded-2xl border-2 border-[#141414] bg-white p-6">
              <div className="font-display text-[26px] text-[#D97757] [-webkit-text-stroke:1.2px_#141414]">{s.n}</div>
              <div className="text-[17px] font-bold">{s.title}</div>
              <p className="m-0 text-[14px] leading-normal text-[#55524a]">{s.body}</p>
            </div>
          ))}
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
            <p className="m-0 max-w-[460px] text-[17px] leading-[1.55] text-[#b9b6ac]">
              Drop your creative, leave your details, and we&apos;ll get your ad on a robot in San Francisco. No
              contracts, no media plan, no nonsense.
            </p>
            <div className="mt-2 min-h-[300px] flex-1 overflow-hidden rounded-2xl">
              <img src="/photos/hero-robot.webp" alt="Kovio robot with a crowd in San Francisco" className="h-full max-h-[420px] w-full rounded-2xl object-cover" />
            </div>
          </div>
          <LeadForm kind="trial" source="brands" />
        </div>
      </div>

      <Footer cta={{ href: '#form', label: 'FREE TRIAL' }} />
    </div>
  )
}
