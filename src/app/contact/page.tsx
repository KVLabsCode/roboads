import type { Metadata } from 'next'
import { Nav, Footer } from '@/components/site/Nav'
import ContactSwitcher from '@/components/site/ContactSwitcher'

export const metadata: Metadata = {
  title: 'Contact Kovio: Brands and robot fleets',
  description:
    'Talk to Kovio. Brands get their creative on a real robot in San Francisco, fleets get the SDK and a revenue share. We reply within 48 hours.',
}

export default function ContactPage({ searchParams }: { searchParams: { type?: string } }) {
  const initial = searchParams.type === 'fleet' ? 'fleet' : 'brand'

  return (
    <div className="mx-auto min-h-screen max-w-[1440px] bg-[#F4F1EA] text-[#141414]">
      <Nav active="home" />

      <main id="main">
        <div className="grid grid-cols-1 items-start gap-10 px-5 pb-12 pt-10 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] min-[900px]:gap-14 md:px-10 md:pb-[72px] md:pt-[64px]">
          <div className="flex min-w-0 flex-col gap-6">
            <div className="inline-flex self-start rounded-full bg-[#141414] px-3.5 py-[7px] text-[12px] font-bold tracking-[1.5px] text-[#D97757]">
              CONTACT US
            </div>
            <h1 className="m-0 font-display text-[44px] uppercase leading-[.96] tracking-[-1px] min-[900px]:text-[64px] min-[900px]:tracking-[-2px]">
              Talk to Kovio.
            </h1>
            <p className="m-0 max-w-[520px] text-[19px] leading-normal">
              One form, a human reply within 48 hours. Whether you want your brand on a robot or your robots earning,
              it starts here.
            </p>
            <ul className="m-0 mt-2 flex list-none flex-col gap-3 p-0 text-[16px]">
              {[
                'Brands: your creative on a real robot in San Francisco, first campaign can be a free trial',
                'Fleets: one drop-in SDK, revenue share, automatic settlement',
                'Every campaign measured by the robot itself, verified humans, not estimates',
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-[#D97757]">
                    ✦
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <ContactSwitcher initial={initial} />
        </div>
      </main>

      <Footer cta={{ href: '/contact', label: 'CONTACT US' }} />
    </div>
  )
}
