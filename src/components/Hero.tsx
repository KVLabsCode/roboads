"use client";

import { motion } from "framer-motion";
import { useCampaignModal } from "./ModalProvider";

const stats = [
  { value: "40,000+", label: "Active units" },
  { value: "18", label: "Cities" },
  { value: "12", label: "Fleet operators" },
];

export function Hero() {
  const { open } = useCampaignModal();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="hero-grid" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight text-ink"
        >
          <span className="italic block">The world&rsquo;s robots</span>
          <span className="block">are now</span>
          <span className="italic block">advertising.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 max-w-xl text-mute text-[15px] leading-relaxed"
        >
          Kovio is the first programmatic ad platform for autonomous robot
          fleets. One brief, every fleet, full attribution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={() => open()}
            className="bg-gold hover:bg-gold-deep text-ink text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 transition-colors"
          >
            Start a campaign
          </button>
          <a
            href="#how"
            className="border border-line hover:border-ink text-ink text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 transition-colors"
          >
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 flex flex-wrap gap-12 md:gap-20 pt-10 border-t border-line max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-5xl text-ink">{stat.value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-mute">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
