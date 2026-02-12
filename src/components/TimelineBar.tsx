"use client";

import { motion } from "framer-motion";
import { TIMELINE_ERAS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function TimelineBar() {
  return (
    <ScrollReveal>
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-6 left-0 right-0 h-px bg-border-glow hidden md:block" />
        <motion.div
          className="absolute top-6 left-0 h-px timeline-gradient-line hidden md:block"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {TIMELINE_ERAS.map((era, i) => (
            <motion.div
              key={era.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Dot */}
              <div className="hidden md:flex w-3 h-3 bg-accent rounded-full mx-auto mb-4 relative z-10 animate-pulse-glow" />

              <div className="font-mono text-xs text-accent mb-1">
                {era.year}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {era.label}
              </div>
              <div className="text-xs text-muted">{era.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
