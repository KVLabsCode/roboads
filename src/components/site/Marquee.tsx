/* eslint-disable @next/next/no-img-element */

// Black ticker strip: "LIVE IN SAN FRANCISCO" + OEM partner logos, looping.
// Two identical runs + translateX(-50%) = a seamless marquee.
// OEM partners only — brand logos stay off the site until confirmed.
// A11y: the whole strip is one labelled image; the animated runs (and their
// duplicate) are hidden from screen readers so nothing is announced twice.
// prefers-reduced-motion stops the animation globally (globals.css).
const LOGOS: Array<{ src: string; alt: string; h: number }> = [
  { src: '/logos/unitree.png', alt: 'Unitree', h: 22 },
  { src: '/logos/robot-com.png', alt: 'Robot.com', h: 24 },
  { src: '/logos/toborlife.png', alt: 'Toborlife AI', h: 24 },
]

function Run() {
  return (
    <div className="flex items-center gap-[38px] pr-[38px]">
      <span className="font-display text-[17px] tracking-[1px]">LIVE IN SAN FRANCISCO</span>
      <span className="text-[15px]">✦</span>
      {LOGOS.map((l) => (
        <span key={l.alt} className="flex items-center gap-[38px]">
          <img src={l.src} alt="" style={{ height: l.h, width: 'auto', filter: 'invert(1)' }} />
          <span className="text-[15px]">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      role="img"
      aria-label="Live in San Francisco with OEM partners Unitree, Robot.com, and Toborlife AI"
      className="overflow-hidden border-y-2 border-[#141414] bg-[#141414] py-[14px] text-[#D97757]"
    >
      <div aria-hidden="true" className="flex w-max whitespace-nowrap [animation:kv-marquee_28s_linear_infinite]">
        <Run />
        <Run />
      </div>
    </div>
  )
}
