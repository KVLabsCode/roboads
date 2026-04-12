"use client";

import { motion } from "framer-motion";
import { useCampaignModal } from "./ModalProvider";
import {
  AudienceIcon,
  FleetsIcon,
  CreativeIcon,
  MeasureIcon,
} from "./icons/StepIcons";

const steps = [
  {
    n: "01",
    Icon: AudienceIcon,
    title: "Define your audience",
    body: "Set geography, time of day, demographic, and robot category. Bid as granular as you want.",
  },
  {
    n: "02",
    Icon: FleetsIcon,
    title: "Choose your fleets",
    body: "Pick from delivery robots, humanoids, autonomous vehicles, retail bots, and aerial drones.",
  },
  {
    n: "03",
    Icon: CreativeIcon,
    title: "Upload your creative",
    body: "16:9 video or static image. One spec runs across every fleet in the buy.",
  },
  {
    n: "04",
    Icon: MeasureIcon,
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
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium">
            {"// How it Works"}
          </p>
          <h2 className="mt-4 font-display font-semibold italic text-5xl md:text-6xl text-ink max-w-3xl leading-[1.02]">
            Launch a campaign in four steps.
          </h2>
        </motion.div>

        <div className="relative mt-32">
          <div
            className="hidden lg:block absolute top-[5.5rem] left-[8%] right-[8%] border-t-2 border-dashed border-line"
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-6">
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
                  className="absolute -top-20 -left-4 font-display italic font-bold text-[10rem] leading-none text-gold/40 select-none pointer-events-none"
                  aria-hidden
                >
                  {s.n}
                </div>
                <div className="relative pt-24 pr-4">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 border border-line bg-bg mb-6">
                    <s.Icon className="text-ink" />
                  </div>
                  <h3 className="font-display font-bold text-[26px] text-ink leading-[1.15]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-mute leading-[1.65] max-w-[18rem]">
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
            className="bg-gold hover:bg-gold-deep text-ink text-xs uppercase tracking-[0.2em] font-semibold px-10 py-4 transition-colors"
          >
            Start your first campaign
          </button>
        </div>
      </div>
    </section>
  );
}
