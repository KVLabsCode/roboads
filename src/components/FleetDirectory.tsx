"use client";

import { motion } from "framer-motion";
import { fleetCategories } from "@/lib/fleets";
import { FleetCard } from "./FleetCard";

export function FleetDirectory() {
  return (
    <section id="fleets" className="relative py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
            {"// Fleet Directory"}
          </p>
          <h2 className="mt-4 font-display italic text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
            Robot fleets available today.
          </h2>
          <p className="mt-6 text-mute text-[14px]">
            Click any fleet to start a campaign.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24">
          {fleetCategories.map((cat) => (
            <div key={cat.id}>
              <div className="flex items-center gap-3 mb-10">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: cat.dotColor }}
                  aria-hidden
                />
                <span className="text-[11px] uppercase tracking-[0.25em] text-ink">
                  {cat.label}
                </span>
                <span className="flex-1 border-t border-line ml-4" aria-hidden />
              </div>

              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
                  cat.fleets.length <= 2 ? "lg:grid-cols-2 max-w-2xl" : "lg:grid-cols-4"
                }`}
              >
                {cat.fleets.map((f, i) => (
                  <motion.div
                    key={f.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <FleetCard fleet={f} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
