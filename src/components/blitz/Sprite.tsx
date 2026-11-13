"use client";

import { useEffect, useRef } from "react";

// background-position animations repaint every frame, so they only run while on screen.
export default function Sprite({ className, label }: { className: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      el.style.animationPlayState = e.isIntersecting ? "running" : "paused";
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={className} role="img" aria-label={label} />;
}
