"use client";

import { motion } from "framer-motion";
import {
  EyeLevelIcon,
  ProgrammableIcon,
  TapToConvertIcon,
  VerifiedImpressionsIcon,
  OneBuyIcon,
  FullAttributionIcon,
} from "./icons/AdvantageIcons";

type Advantage = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const advantages: Advantage[] = [
  {
    Icon: EyeLevelIcon,
    title: "Eye-level, not rooftop",
    body: "Robot screens sit at chest height, not up on a roof rack. Pedestrians actually look at them. We see 3x higher dwell time than taxi-top inventory.",
  },
  {
    Icon: ProgrammableIcon,
    title: "Programmable placement",
    body: "Unlike a taxi that follows the driver, robots can be directed to a specific street corner or venue at a specific time. You bid on where, when, and who.",
  },
  {
    Icon: TapToConvertIcon,
    title: "Tap to convert",
    body: "A haptic touch layer lets passers-by tap for coupons, QR codes, or product pages. That unlocks CPC and CPA pricing, not just CPM.",
  },
  {
    Icon: VerifiedImpressionsIcon,
    title: "Verified impressions",
    body: "Onboard edge AI measures crowd density and dwell time locally. Every impression is verified by the device, not estimated from a panel.",
  },
  {
    Icon: OneBuyIcon,
    title: "One buy, all fleets",
    body: "A single campaign brief reaches delivery robots, humanoids, autonomous vehicles, and retail bots through one platform. One creative, every form factor.",
  },
  {
    Icon: FullAttributionIcon,
    title: "Full attribution",
    body: "Impression to tap to purchase, tracked end to end. DSP-compatible reporting plugs into the rest of your stack.",
  },
];

export function Advantages() {
  return (
    <section id="why" className="relative py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium">
            {"// Why Kovio"}
          </p>
          <h2 className="mt-4 font-display font-semibold italic text-5xl md:text-6xl text-ink max-w-3xl leading-[1.02]">
            Why robots outperform every other OOH format.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group bg-cream border border-line p-8 transition-all duration-200 hover:border-gold hover:-translate-y-0.5"
            >
              <a.Icon className="w-9 h-9 text-ink group-hover:text-gold transition-colors" />
              <h3 className="mt-6 font-display font-bold text-[26px] text-ink leading-[1.15]">
                {a.title}
              </h3>
              <p className="mt-4 text-[14px] text-mute leading-[1.65]">
                {a.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
