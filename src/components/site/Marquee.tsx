/* eslint-disable @next/next/no-img-element */

// Black ticker strip: "LIVE IN SAN FRANCISCO" + OEM partner logos, looping.
// Two identical runs + translateX(-50%) = a seamless marquee.
// OEM partners only — brand logos stay off the site until confirmed.
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
          <img src={l.src} alt={l.alt} style={{ height: l.h, width: 'auto', filter: 'invert(1)' }} />
          <span className="text-[15px]">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y-2 border-[#141414] bg-[#141414] py-[14px] text-[#D97757]">
      <div className="flex w-max whitespace-nowrap [animation:kv-marquee_28s_linear_infinite]">
        <Run />
        <Run />
      </div>
    </div>
  )
}
