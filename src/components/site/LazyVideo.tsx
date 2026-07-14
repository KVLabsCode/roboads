'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

// Click-to-load YouTube facade: renders the thumbnail plus a play button and
// only injects the iframe (and all of YouTube's JS) after the user clicks.
// Keeps the case-study pages fast on mobile.
export default function LazyVideo({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [play, setPlay] = useState(false)

  if (play) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-[20px] border-2 border-[#141414] bg-black shadow-[8px_8px_0_#D97757]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-[20px] border-2 border-[#141414] bg-black shadow-[8px_8px_0_#D97757]"
    >
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span
          aria-hidden="true"
          className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#141414] bg-[#D97757] shadow-[3px_3px_0_#141414] transition-transform group-hover:scale-105"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#141414" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-4 left-4 rounded-full bg-[#141414] px-4 py-2 text-[13px] font-bold tracking-[1px] text-[#F4F1EA]">
        ▶ WATCH THE CAMPAIGN
      </span>
    </button>
  )
}
