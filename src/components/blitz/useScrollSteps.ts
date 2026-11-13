"use client";

import { type RefObject, useCallback, useEffect, useRef, useState } from "react";

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduce;
}

// Pin in any real browser window; only an absurdly tall frame (design-canvas style) falls back to timed cycling.
export function usePin() {
  const [pin, setPin] = useState(true);
  useEffect(() => {
    const sync = () => {
      const ih = window.innerHeight || 800;
      const iw = window.innerWidth || 1200;
      setPin(ih < 1600 || ih / iw < 2.4);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);
  return pin;
}

type Opts = {
  pin: boolean;
  reduce: boolean;
  period: number;
  onFrame?: (now: number, step: number, local: number) => void;
};

export function useScrollSteps(ref: RefObject<HTMLElement | null>, count: number, opts: Opts) {
  const [step, setStep] = useState(0);
  const stepRef = useRef(0);
  const hold = useRef<{ i: number; until: number } | null>(null);
  const optsRef = useRef(opts);

  useEffect(() => {
    optsRef.current = opts;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let running = false;

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const { pin, reduce, period, onFrame } = optsRef.current;
      let s = stepRef.current;
      let local = 0.5;
      if (pin) {
        const r = el.getBoundingClientRect();
        const p = clamp01(-r.top / Math.max(1, r.height - window.innerHeight)) * count;
        s = Math.min(count - 1, Math.floor(p));
        local = clamp01(p - s);
      } else {
        const t = now / 1000;
        if (!reduce) {
          s = Math.floor(t / period) % count;
          local = (t / period) % 1;
        }
        const h = hold.current;
        if (h && now < h.until) {
          s = h.i;
          local = 0.5;
        }
      }
      if (s !== stepRef.current) {
        stepRef.current = s;
        setStep(s);
      }
      onFrame?.(now, s, local);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(tick);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: "100px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [ref, count]);

  const jump = useCallback(
    (i: number) => {
      const el = ref.current;
      const { pin, reduce } = optsRef.current;
      if (!pin || !el) {
        hold.current = { i, until: performance.now() + 12_000 };
        stepRef.current = i;
        setStep(i);
        return;
      }
      const r = el.getBoundingClientRect();
      const span = Math.max(1, r.height - window.innerHeight);
      window.scrollTo({ top: window.scrollY + r.top + (span * (i + 0.5)) / count, behavior: reduce ? "auto" : "smooth" });
    },
    [ref, count],
  );

  return { step, jump };
}
