'use client'

import { useEffect, useRef, useState } from 'react'
import { PlayingEq } from './EqBars'

// The three voice personalities on /brands. Real <audio> playback from
// /voices/<id>.mp3; when a clip doesn't exist yet the EQ animates for a few
// seconds anyway (same graceful fallback as the design prototype), so the
// section works before the recordings are dropped in.
const VOICES = [
  { id: 'hype', name: 'The Hype Friend', tag: 'HIGH ENERGY', line: '"Okay stop, you HAVE to see this. Scan me. Right now."' },
  { id: 'concierge', name: 'The Concierge', tag: 'SMOOTH & POLISHED', line: '"Lovely to see you. May I suggest something you\'ll enjoy?"' },
  { id: 'comedian', name: 'The Comedian', tag: 'DEADPAN', line: '"I walked 12 miles today. For you. The least you can do is scan."' },
]

export default function VoiceCards() {
  const [playing, setPlaying] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function stopAll() {
    audioRef.current?.pause()
    audioRef.current = null
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = null
  }

  function play(id: string) {
    stopAll()
    if (playing === id) {
      setPlaying(null)
      return
    }
    const a = new Audio(`/voices/${id}.mp3`)
    a.onended = () => setPlaying(null)
    a.onerror = () => {
      timerRef.current = setTimeout(() => setPlaying((p) => (p === id ? null : p)), 4000)
    }
    a.play().catch(() => {})
    audioRef.current = a
    setPlaying(id)
  }

  useEffect(() => stopAll, [])

  return (
    <div className="flex min-w-0 flex-col gap-3.5">
      {VOICES.map((v) => (
        <div key={v.id} className="flex items-center gap-[18px] rounded-2xl border-2 border-[#141414] bg-white px-[22px] py-[18px]">
          <button
            onClick={() => play(v.id)}
            aria-label={playing === v.id ? `Pause ${v.name} sample` : `Play ${v.name} sample`}
            aria-pressed={playing === v.id}
            className="flex h-[54px] w-[54px] flex-none cursor-pointer items-center justify-center rounded-full border-2 border-[#141414] bg-[#D97757] text-[18px] shadow-[2px_2px_0_#141414]"
          >
            <span aria-hidden="true">{playing === v.id ? '⏸' : '▶'}</span>
          </button>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-wrap items-baseline gap-x-2.5">
              <span className="text-[17px] font-bold">{v.name}</span>
              <span className="text-[12px] font-bold tracking-[1.5px] text-[#5C564A]">{v.tag}</span>
            </div>
            <div className="text-[14px] italic text-[#55524a]">{v.line}</div>
          </div>
          {playing === v.id && <PlayingEq />}
        </div>
      ))}
      <div className="text-[12.5px] text-[#5C564A]">Sample clips. Your robot gets custom lines written with you.</div>
    </div>
  )
}
