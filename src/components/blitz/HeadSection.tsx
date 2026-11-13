"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { HeadStage } from "./headStage";
import StepDots from "./StepDots";
import { usePin, useReducedMotion, useScrollSteps } from "./useScrollSteps";

const FEATURES = [
  { n: "01", title: "A face for every moment", body: "Expressions one second. Your brand the next." },
  { n: "02", title: "Ears and speakers", body: "Motorized ears. A speaker in each gold ring." },
  { n: "03", title: "Cameras and mics", body: "Sees you coming. Hears you in a crowd." },
  { n: "04", title: "Kovio OS", body: "Its own computer on board. 5G and WiFi." },
];

const DOT_LABELS = FEATURES.map((f) => `Show ${f.title}`);

export default function HeadSection() {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HeadStage | null>(null);
  const [has3d, setHas3d] = useState(false);
  const pin = usePin();
  const reduce = useReducedMotion();

  const onFrame = useCallback((now: number, step: number, local: number) => {
    const cv = canvasRef.current;
    const stage = stageRef.current;
    if (!cv || !stage) return;
    const r = cv.getBoundingClientRect();
    if (r.width < 2 || r.bottom < -60 || r.top > window.innerHeight + 60) return;
    stage.frame(now, step, local, r.width, r.height);
  }, []);

  const { step, jump } = useScrollSteps(ref, FEATURES.length, { pin, reduce, period: 5, onFrame });

  // three.js only loads once the section is close, so it stays out of the first paint on phones.
  useEffect(() => {
    const el = ref.current;
    const cv = canvasRef.current;
    if (!el || !cv) return;
    let cancelled = false;
    const onLost = (e: Event) => {
      e.preventDefault();
      stageRef.current?.dispose();
      stageRef.current = null;
      setHas3d(false);
    };
    cv.addEventListener("webglcontextlost", onLost);
    const io = new IntersectionObserver(
      async (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        try {
          const { createHeadStage } = await import("./headStage");
          if (cancelled) return;
          stageRef.current = createHeadStage(cv, reduce);
          setHas3d(true);
        } catch (err) {
          console.warn("[kovio] 3D head unavailable, showing the photo", err);
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
      cv.removeEventListener("webglcontextlost", onLost);
      stageRef.current?.dispose();
      stageRef.current = null;
    };
  }, [reduce]);

  const f = FEATURES[step];

  return (
    <section id="head" className="kv-section">
      <div ref={ref} className={`hm-scroll hm-hd-scroll${pin ? " is-pinned" : ""}`}>
        <div className="hm-sticky">
          <div className="hm-two">
            <div className="hm-hd-vis">
              <div className="kv-layer kv-turn" aria-hidden="true" style={{ opacity: has3d ? 0 : 1 }} />
              <canvas
                ref={canvasRef}
                role="img"
                aria-label="3D model of the Blitz head: black helmet, LED face in a gold bezel, gold ring speakers and pointed ears. It turns as you scroll."
                style={{ opacity: has3d ? 1 : 0 }}
              />
            </div>
            <div className="hm-hd-copy">
              <h2 className="kv-h2">All the personality lives up here.</h2>
              <div className="hm-now">
                <span className="hm-num">{f.n} / 04</span>
                <span role="status" className="hm-hd-title">
                  {f.title}
                </span>
                <span className="hm-now-sub">{f.body}</span>
                <StepDots labels={DOT_LABELS} active={step} onPick={jump} groupLabel="Choose a feature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
