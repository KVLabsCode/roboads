"use client";

import { motion } from "framer-motion";
import { useCampaignModal } from "./ModalProvider";

const steps = [
  {
    n: "01",
    title: "Define your audience",
    body: "Set geography, time of day, demographic, and robot category. Bid as granular as you want.",
  },
  {
    n: "02",
    title: "Choose your fleets",
    body: "Pick from delivery robots, humanoids, autonomous vehicles, retail bots, and aerial drones.",
  },
  {
    n: "03",
    title: "Upload your creative",
    body: "16:9 video or static image. One spec runs across every fleet in the buy.",
  },
  {
    n: "04",
    title: "Measure and optimise",
    body: "Real-time dashboard with verified impressions, tap-through rate, and full attribution.",
  },
];

export function HowItWorks() {
  const { open } = useCampaignModal();

  return (
    <section id="how" className="relative py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
            {"// How it Works"}
          </p>
          <h2 className="mt-4 font-display italic text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
            Launch a campaign in four steps.
          </h2>
        </motion.div>

        <div className="relative mt-32">
          <div
            className="hidden lg:block absolute top-[4.5rem] left-[5%] right-[5%] border-t border-dashed border-line"
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className="absolute -top-14 left-0 font-display italic text-[8rem] leading-none text-gold/30 select-none pointer-events-none"
                  aria-hidden
                >
                  {s.n}
                </div>
                <div className="relative bg-bg pt-20 pr-4">
                  <div className="w-3 h-3 rounded-full bg-gold mb-6" />
                  <h3 className="font-display text-2xl text-ink leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-mute leading-relaxed max-w-[18rem]">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <button
            type="button"
            onClick={() => open()}
            className="bg-gold hover:bg-gold-deep text-ink text-xs uppercase tracking-[0.2em] font-medium px-10 py-4 transition-colors"
          >
            Start your first campaign
          </button>
        </div>
      </div>
    </section>
  );
}
