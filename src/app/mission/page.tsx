import type { Metadata } from "next";
import Link from "next/link";
import "./mission.css";

export const metadata: Metadata = {
  title: "Mission",
  description: "Robots that pay for themselves. Everywhere. Kovio turns robots from a cost into a business.",
};

const STEPS = [
  { n: "01", badge: "DONE", now: false, title: "Prove it.", body: "Our own robots in San Francisco and New York. Real brand campaigns, sold by us.", bg: "#FFE9C4", h: 200 },
  { n: "02", badge: "NOW", now: true, title: "Sell robots that earn.", body: "Blitz ships with monetization built in. Owners keep the majority.", bg: "#FFD39A", h: 270 },
  { n: "03", badge: "NEXT", now: false, title: "Open the network.", body: "Partner fleets plug in. Every robot becomes ad inventory.", bg: "#F2B632", h: 340 },
  { n: "04", badge: "GOAL", now: false, title: "Every robot pays for itself.", body: "One exchange, one measurement standard, demand from every channel.", bg: "#FF7A45", h: 410 },
];

function Arrow({ id, w, h, left, top, d }: { id: string; w: number; h: number; left: number; top: number; d: string }) {
  return (
    <svg aria-hidden="true" width={w} height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ left, top, width: w, height: h }}>
      <defs>
        <marker id={id} orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2" overflow="visible">
          <path d="M0 0 L4 2 L0 4 Z" fill="#111110" stroke="none" />
        </marker>
      </defs>
      <path d={d} markerEnd={`url(#${id})`} />
    </svg>
  );
}

export default function MissionPage() {
  return (
    <main>
      <section className="kv-section kv-center ms-hero">
        <h1>Robots that pay for themselves. Everywhere.</h1>
        <p>Kovio turns robots from a cost into a business.</p>
      </section>

      <section className="kv-section ms-letter" aria-label="A letter from the founders">
        <div>
          <p>
            Robots are all over San Francisco.
            <br />
            Almost nowhere else.
          </p>
          <p>Why? They cost money and make none.</p>
          <p>We&apos;re fixing that.</p>
          <p>
            Screens. A face. A voice. A personality.
            <br />
            People stop. Talk. Take the photo.
            <br />
            Brands pay for that.
          </p>
          <p>The robot pays for itself.</p>
          <p>Now put one in every mall, airport and stadium on earth.</p>
          <p>
            That&apos;s the robot economy.
            <br />
            We&apos;re building it here.
          </p>
          <p className="ms-sign">Koushik and Vivek, San Francisco</p>
        </div>
      </section>

      <section className="kv-section">
        <div className="kv-center ms-build-head">
          <h2 className="kv-h2 ms-h2">How we build it.</h2>
          <p className="kv-lead">One step at a time. Each step stands on the last.</p>
        </div>
        <ol className="ms-steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <div className="ms-step" style={{ background: s.bg, minHeight: s.h }}>
                <div className="ms-step-top">
                  <span>STEP {s.n}</span>
                  <span className={s.now ? "ms-badge ms-badge-now" : "ms-badge"}>{s.badge}</span>
                </div>
                <strong>{s.title}</strong>
                <span>{s.body}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="kv-section ms-loop-section">
        <div className="ms-loop-copy">
          <h2 className="kv-h2 ms-h2">It feeds itself.</h2>
          <p className="kv-lead">More robots bring more brands. More brands pay for more robots.</p>
        </div>
        <div
          className="ms-loop"
          role="img"
          aria-label="A loop: more robots, then more to sell, then more brands, then more revenue, then back to more robots"
        >
          <div className="ms-loop-box">
            <Arrow id="ms-arrow-1" w={63} h={8} left={136} top={28} d="M 0 4 L 59 4" />
            <Arrow id="ms-arrow-2" w={8} h={87} left={264} top={64} d="M 4 0 L 4 83" />
            <Arrow id="ms-arrow-3" w={63} h={8} left={137} top={180} d="M 63 4 L 4 4" />
            <Arrow id="ms-arrow-4" w={8} h={87} left={64} top={65} d="M 4 87 L 4 4" />
            <div className="ms-pill" style={{ left: 0, top: 0 }}>More robots</div>
            <div className="ms-pill" style={{ left: 200, top: 0 }}>More to sell</div>
            <div className="ms-pill" style={{ left: 200, top: 152 }}>More brands</div>
            <div className="ms-pill" style={{ left: 0, top: 152 }}>More revenue</div>
          </div>
        </div>
      </section>

      <section className="kv-section kv-section-last kv-center ms-cta">
        <h2 className="kv-h2 ms-h2">Build it with us.</h2>
        <div className="kv-btn-row">
          <Link className="kv-btn kv-btn-dark" href="/careers">
            See open roles
          </Link>
          <Link className="kv-btn kv-btn-ghost" href="/advertise#book">
            Book a campaign
          </Link>
        </div>
      </section>
    </main>
  );
}
