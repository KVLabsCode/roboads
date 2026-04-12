"use client";

import { motion } from "framer-motion";
import { useCampaignModal } from "./ModalProvider";

export function BottomCTA() {
  const { open } = useCampaignModal();

  return (
    <section className="relative py-40 border-t border-line">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-6xl italic text-ink leading-[1.05]"
        >
          Ready to put your brand in motion?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-mute text-[14px]"
        >
          No minimum spend. Campaign live in 48 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12"
        >
          <button
            type="button"
            onClick={() => open()}
            className="bg-gold hover:bg-gold-deep text-ink text-xs uppercase tracking-[0.2em] font-medium px-12 py-5 transition-colors"
          >
            Start a campaign
          </button>
          <p className="mt-6 text-[11px] tracking-wider text-mute">
            <a
              href="mailto:team@kovio.dev"
              className="hover:text-ink transition-colors"
            >
              team@kovio.dev
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
