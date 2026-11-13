import Image from "next/image";
import Link from "next/link";

const LIDS = [
  { cls: "kv-lid kv-lid-t", left: "41.832%", top: "6.405%" },
  { cls: "kv-lid kv-lid-b", left: "41.832%", top: "9.041%" },
  { cls: "kv-lid kv-lid-t", left: "53.532%", top: "6.405%" },
  { cls: "kv-lid kv-lid-b", left: "53.532%", top: "9.041%" },
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="hm-hero-grid">
        <div className="hm-hero-copy">
          <p className="hm-eyebrow">MEET BLITZ</p>
          <h1>The robot that pays for itself.</h1>
          <p>The most interactive robot you can buy, with monetization built in. Not bolted on.</p>
          <div className="hm-hero-ctas">
            <Link className="kv-btn kv-btn-dark" href="/reserve">
              Reserve Blitz
            </Link>
            <a className="kv-btn kv-btn-ghost" href="#rooms">
              See it work
            </a>
          </div>
        </div>

        <div className="hm-hero-bot">
          <div aria-hidden="true" className="hm-bot-shadow kv-float-shadow" />
          <div className="hm-fill kv-float">
            <div className="hm-fill kv-sway">
              <div className="hm-fill kv-lean hm-lean">
                <Image
                  src="/images/blitz-hero-front.webp"
                  alt="Blitz, the Kovio robot, facing forward: black and gold, with an LED face and an ad on its chest screen"
                  fill
                  priority
                  sizes="(max-width: 900px) 60vw, 360px"
                />
                {LIDS.map((l, i) => (
                  <span key={i} aria-hidden="true" className={l.cls} style={{ left: l.left, top: l.top, width: "5.298%", height: "1.909%" }} />
                ))}
                <span aria-hidden="true" className="kv-wink kv-winkL" style={{ left: "41.06%", top: "6.095%", width: "7.064%", height: "5.165%" }}>
                  <span className="kv-arc" />
                </span>
                <span aria-hidden="true" className="kv-wink kv-winkR" style={{ left: "52.649%", top: "6.095%", width: "7.064%", height: "5.165%" }}>
                  <span className="kv-arc" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hm-price">
          <span className="hm-price-label">BUY</span>
          <span className="hm-price-amount">$34,900</span>
          <span className="hm-price-label">OR RENT</span>
          <span className="hm-price-amount">
            $2,990<small>/mo</small>
          </span>
          <span className="hm-price-note">$100 refundable deposit</span>
        </div>
      </div>
    </section>
  );
}
