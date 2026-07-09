// Amber equalizer bars — static (decorative waveforms) or animated (playing).
// Purely decorative: hidden from screen readers.
export function StaticEq({ heights, barH = 26 }: { heights: number[]; barH?: number }) {
  return (
    <div aria-hidden="true" className="flex items-center gap-[3px]" style={{ height: barH }}>
      {heights.map((h, i) => (
        <div key={i} className="w-1 rounded-[2px] bg-[#D97757]" style={{ height: h }} />
      ))}
    </div>
  )
}

const ANIM = ['.7s ease-in-out infinite', '.5s ease-in-out .1s infinite', '.8s ease-in-out .2s infinite', '.6s ease-in-out .05s infinite', '.75s ease-in-out .15s infinite']

export function PlayingEq() {
  return (
    <div aria-hidden="true" className="flex h-6 flex-none items-center gap-[3px]">
      {ANIM.map((a, i) => (
        <div key={i} className="h-[22px] w-1 rounded-[2px] bg-[#D97757]" style={{ animation: `kv-eq ${a}` }} />
      ))}
    </div>
  )
}
