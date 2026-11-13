import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BillboardSection from "@/components/blitz/BillboardSection";
import HeadSection from "@/components/blitz/HeadSection";
import Hero from "@/components/blitz/Hero";
import "./home.css";

export const metadata: Metadata = {
  title: { absolute: "Blitz, the Kovio robot" },
};

const STEPS = [
  ["01", "A brand books.", "On Kovio, or you sell your own from the dashboard."],
  ["02", "It goes live.", "The creative lands on the robot over the air."],
  ["03", "It works the room.", "Screens, face and voice run the ad while it greets people."],
  ["04", "Every view counts.", "Its cameras measure real views. Brands pay per view."],
  ["05", "You get paid.", "You keep the majority of the revenue."],
] as const;

const PLANS = [
  {
    name: "Buy",
    price: "$34,900",
    unit: "one time",
    pitch: "Pays for itself in 35 booked hours at $1,000 an hour.",
    items: ["The robot, Kovio head and screens", "Setup at your venue", "Year one of Kovio OS and the ad network", "Ships 4 to 8 weeks after order"],
  },
  {
    name: "Rent",
    price: "$2,990",
    unit: "a month, 12 month minimum",
    pitch: "No upfront cost for the robot.",
    items: ["The robot and Kovio OS", "The ad network", "Maintenance", "A replacement unit if it breaks"],
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      <BillboardSection />

      <section className="kv-section">
        <div className="kv-center hm-layer-head">
          <h2 className="kv-h2">Kovio is the monetization layer for robots.</h2>
          <p className="kv-lead">Other robots are a cost. Blitz ships with a business model, built into Kovio OS from day one.</p>
        </div>
      </section>

      <HeadSection />

      <section id="moves" className="kv-section hm-moves">
        <div className="hm-moves-copy">
          <h2 className="kv-h2">It walks. It dances. People stop.</h2>
          <p className="kv-lead">Built on the Unitree G1. It works the floor on its own two feet.</p>
        </div>
        <div className="hm-moves-figs">
          <figure>
            <div className="kv-sp kv-sp-arena hm-sprite" role="img" aria-label="Blitz walking toward the camera through an arena concourse" />
            <figcaption>Walks</figcaption>
          </figure>
          <figure>
            <div className="kv-sp kv-sp-mall hm-sprite" role="img" aria-label="Blitz dancing on the spot in a shopping mall while shoppers watch" />
            <figcaption>Dances</figcaption>
          </figure>
        </div>
      </section>

      <section className="kv-section">
        <div className="kv-center hm-people-head">
          <h2 className="kv-h2">Best around people.</h2>
          <p>Greets first. Holds a real conversation. Switches language mid chat. Stops for the photo. Dances on cue.</p>
        </div>
        <div className="hm-people-grid">
          <figure>
            <Image
              src="/images/street-selfie.jpg"
              alt="Two friends taking a selfie with Blitz on a city street at night"
              width={1024}
              height={688}
              sizes="(max-width: 760px) 100vw, 620px"
            />
            <figcaption>Every photo carries your brand.</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/sidewalk-walk-away.jpg"
              alt="Blitz walking away down a sidewalk at dusk, a second ad screen on its back"
              width={1022}
              height={688}
              sizes="(max-width: 760px) 100vw, 620px"
            />
            <figcaption>A second screen on its back.</figcaption>
          </figure>
        </div>
      </section>

      <section id="earns" className="kv-section hm-earns">
        <h2 className="kv-h2">How it makes money.</h2>
        <ol>
          {STEPS.map(([n, title, body]) => (
            <li key={n}>
              <span>{n}</span>
              <strong>{title}</strong>
              <span>{body}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="buy" className="kv-section kv-section-last">
        <div className="kv-center hm-buy-head">
          <h2 className="kv-h2">Buy Blitz or rent it.</h2>
          <p className="kv-lead">Both start with a $100 refundable deposit.</p>
        </div>
        <div className="hm-plans">
          {PLANS.map((p) => (
            <div key={p.name} className="hm-plan">
              <span className="hm-plan-name">{p.name}</span>
              <p className="hm-plan-price">
                <span>{p.price}</span>
                <span>{p.unit}</span>
              </p>
              <p className="hm-plan-pitch">{p.pitch}</p>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <Link className="kv-btn kv-btn-dark" href={`/reserve?choice=${p.name.toLowerCase()}`}>
                Reserve Blitz
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
