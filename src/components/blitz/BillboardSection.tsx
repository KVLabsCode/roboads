"use client";

import Image from "next/image";
import { useRef } from "react";
import StepDots from "./StepDots";
import { usePin, useReducedMotion, useScrollSteps } from "./useScrollSteps";

const SCENES = [
  {
    n: "01",
    brand: "Madison Square Garden",
    place: "Crowd at the doors.",
    src: "/images/case-msg.webp",
    alt: "Blitz outside Madison Square Garden with a campaign on its chest screen, people queuing behind",
  },
  {
    n: "02",
    brand: "Knicks game night",
    place: "C4 Energy on the chest screen.",
    src: "/images/case-knicks-c4.webp",
    alt: "Blitz standing beside a C4 Energy truck at night with a C4 drink ad on its chest screen",
  },
  {
    n: "03",
    brand: "Times Square",
    place: "Shows your ad. Hands out a code.",
    src: "/images/case-times-square.jpg",
    alt: "Blitz in Times Square at night, smiling LED face, an offer on its chest screen",
  },
];

const DOT_LABELS = SCENES.map((s) => `Show ${s.brand}`);

export default function BillboardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const pin = usePin();
  const reduce = useReducedMotion();
  const { step, jump } = useScrollSteps(ref, SCENES.length, { pin, reduce, period: 4 });
  const scene = SCENES[step];

  return (
    <section id="rooms" className="kv-section">
      <div ref={ref} className={`hm-scroll hm-bb-scroll${pin ? " is-pinned" : ""}`}>
        <div className="hm-sticky">
          <div className="hm-bb-stage">
            <div className="hm-bb-copy">
              <div className="hm-bb-head">
                <h2 className="kv-h2">Its body is the billboard.</h2>
                <p className="kv-lead">LED screens on the chest and back. The brand changes in real time, by venue, by hour, by crowd.</p>
              </div>
              <div className="hm-now hm-bb-now">
                <span className="hm-num">{scene.n} / 03</span>
                <span role="status" className="hm-bb-brand">
                  {scene.brand}
                </span>
                <span className="hm-now-sub">{scene.place}</span>
                <StepDots labels={DOT_LABELS} active={step} onPick={jump} groupLabel="Choose a photo" />
              </div>
            </div>
            <div className="hm-bb-photo">
              {SCENES.map((s, i) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 900px) 70vw, 520px"
                  aria-hidden={i === step ? undefined : true}
                  style={{ opacity: i === step ? 1 : 0, transform: i === step ? "scale(1.04)" : "scale(1)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
