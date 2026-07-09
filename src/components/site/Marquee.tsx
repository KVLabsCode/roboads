/* eslint-disable @next/next/no-img-element */

// Black ticker strip: "LIVE IN SAN FRANCISCO" + brand logos, looping.
// Two identical runs + translateX(-50%) = a seamless marquee.
const LOGOS: Array<{ src: string; alt: string; h: number }> = [
  { src: '/logos/pylon.png', alt: 'Pylon', h: 26 },
  { src: '/logos/brez.png', alt: 'BRĒZ', h: 24 },
  { src: '/logos/smallest-ai.png', alt: 'smallest.ai', h: 18 },
  { src: '/logos/slashy.png', alt: 'Slashy', h: 24 },
  { src: '/logos/speechmatics.png', alt: 'Speechmatics', h: 17 },
  { src: '/logos/natively.png', alt: 'NativelyAI', h: 23 },
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
