'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

type LazyVideoProps =
  | { youtubeId: string; title: string; aspect?: string; src?: undefined; poster?: undefined }
  | { src: string; poster: string; title: string; aspect?: string; youtubeId?: undefined }

// Click-to-load video facade: renders a thumbnail plus a play button and only
// injects the real player (YouTube iframe, or a <video> for self-hosted
// clips) after the user clicks. Keeps the case-study pages fast on mobile.
export default function LazyVideo({ title, aspect, ...source }: LazyVideoProps) {
  const [play, setPlay] = useState(false)
  const box = aspect ?? (source.youtubeId ? 'aspect-video' : 'aspect-[9/16]')
  const thumbnail = source.youtubeId ? `https://i.ytimg.com/vi/${source.youtubeId}/hqdefault.jpg` : source.poster

  if (play) {
    return (
      <div className={`${box} w-full overflow-hidden rounded-[20px] border-2 border-[#141414] bg-black shadow-[8px_8px_0_#D97757]`}>
        {source.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${source.youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <video src={source.src} poster={source.poster} controls autoPlay playsInline className="h-full w-full object-contain" />
        )}
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block ${box} w-full cursor-pointer overflow-hidden rounded-[20px] border-2 border-[#141414] bg-black shadow-[8px_8px_0_#D97757]`}
    >
      <img
        src={thumbnail}
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
