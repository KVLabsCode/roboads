import type { Metadata } from "next";
import BookForm from "./BookForm";
import AdvertiseHero from "./HeroCarousel";
import "./advertise.css";

export const metadata: Metadata = {
  title: "Advertise",
  description: "The ad people walk up to. Book Blitz for events at $1,000 an hour, or buy on the network priced on measured views.",
};

const FORMATS = [
  ["Screen ads", "Front and back, in both directions as it walks."],
  ["Spoken ads", "Your line, in the character's own voice."],
  ["Face takeovers", "The whole face becomes your brand."],
  ["Branded photos", "Your logo on every photo people take home."],
  ["Lead capture", "Offers handed out and leads collected in conversation."],
] as const;

const PERKS = ["First build slots", "Your brand on Blitz at our CES launch", "A co-branded case study", "Launch pricing locked in"];

function slotsLeft() {
  const n = Number.parseInt(process.env.LAUNCH_PARTNER_SLOTS_LEFT ?? "", 10);
  return Number.isFinite(n) ? Math.max(0, Math.min(20, n)) : 20;
}

export default function AdvertisePage() {
  return (
    <main id="main">
      <AdvertiseHero />

      <section className="kv-section ad-formats">
        <h2 className="kv-h2 ad-h2" style={{ textAlign: "center" }}>
          Every surface sells.
        </h2>
        <ul>
          {FORMATS.map(([t, d]) => (
            <li key={t}>
              <strong>{t}</strong>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="kv-section">
        <h2 className="kv-h2 ad-h2" style={{ textAlign: "center" }}>
          Two ways in.
        </h2>
        <div className="ad-pricing">
          <div>
            <span className="ad-tier">Events</span>
            <span className="ad-price">$1,000</span>
            <span className="ad-unit">an hour plus travel, Kovio operated</span>
          </div>
          <div>
            <span className="ad-tier">The network</span>
            <span className="ad-price">vCPM</span>
            <span className="ad-unit">robots in venues, priced on measured views</span>
          </div>
        </div>
      </section>

      <section id="partners" className="kv-section kv-center ad-partners">
        <h2 className="kv-h2">20 Launch Partners.</h2>
        <p className="kv-lead">For the brands and agencies that move first.</p>
        <ul className="ad-perks">
          {PERKS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p role="status" className="ad-slots">
          Launch Partner slots left: {slotsLeft()}
        </p>
        <a className="kv-btn kv-btn-dark" href="#book">
          Apply to be a Launch Partner
        </a>
      </section>

      <section id="book" className="kv-section kv-section-last kv-narrow">
        <h2 className="kv-h2 ad-h2" style={{ textAlign: "center" }}>
          Book a campaign.
        </h2>
        <BookForm />
      </section>
    </main>
  );
}
