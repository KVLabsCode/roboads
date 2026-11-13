"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import StepDots from "@/components/blitz/StepDots";

const SHOTS = [
  {
    src: "/images/advertise-times-square-crowd.webp",
    pos: "50% 50%",
    alt: "Blitz in Times Square at night with a big crowd around it, nearly everyone holding up a phone to film it",
  },
  {
    src: "/images/advertise-handshake.webp",
    pos: "50% 40%",
    alt: "A child shaking hands with Blitz while a crowd watches and films, a drink ad on its chest screen",
  },
];

const DOT_LABELS = SHOTS.map((_, i) => `Show photo ${i + 1}`);

function HeroPhotos({ index }: { index: number }) {
  return (
    <div className="ad-hero-photo">
      {SHOTS.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          priority={i === 0}
          sizes="(max-width: 600px) 100vw, 520px"
          style={{ objectPosition: s.pos, opacity: i === index ? 1 : 0 }}
          aria-hidden={i === index ? undefined : true}
        />
      ))}
    </div>
  );
}

function useHeroCarousel() {
  const [index, setIndex] = useState(0);
  const holdUntil = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (Date.now() < holdUntil.current || document.hidden) return;
      setIndex((i) => (i + 1) % SHOTS.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const pick = (i: number) => {
    holdUntil.current = Date.now() + 12_000;
    setIndex(i);
  };

  return { index, pick };
}

export default function AdvertiseHero() {
  const { index, pick } = useHeroCarousel();
  return (
    <section className="ad-hero">
      <div className="ad-hero-copy">
        <h1>The ad people walk up to.</h1>
        <p>It pulls a crowd. The phones come out. Your brand is in every shot.</p>
        <a className="kv-btn kv-btn-dark" href="#book">
          Book a campaign
        </a>
        <StepDots labels={DOT_LABELS} active={index} onPick={pick} groupLabel="Choose a photo" />
      </div>
      <HeroPhotos index={index} />
    </section>
  );
}
