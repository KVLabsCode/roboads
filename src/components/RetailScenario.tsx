"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TargetIcon, ZapIcon, BotIcon, UserIcon, TrendingUpIcon } from "./Icons";

const STEPS = [
  {
    Icon: TargetIcon,
    step: "01",
    label: "Brand Sets Campaign",
    copy: "A brand launches a campaign in Kovio — targeting consumers near the dairy aisle with a contextual promotion.",
    accent: "#00d4ff",
  },
  {
    Icon: ZapIcon,
    step: "02",
    label: "Kovio Routes It",
    copy: "Kovio delivers the campaign to the right robots in the right stores, in real time.",
    accent: "#00d4ff",
  },
  {
    Icon: BotIcon,
    step: "03",
    label: "Robot Surfaces Campaign",
    copy: "The retail robot detects a nearby shopper and surfaces the brand promotion on its screen.",
    accent: "#00ff88",
  },
  {
    Icon: UserIcon,
    step: "04",
    label: "Shopper Interacts",
    copy: "The shopper engages with the campaign. The interaction is logged by Kovio in real time.",
    accent: "#00ff88",
  },
  {
    Icon: TrendingUpIcon,
    step: "05",
    label: "Attribution Confirmed",
    copy: "The shopper's purchase at checkout is matched back to the robot interaction. The brand sees the full loop.",
    accent: "#00ff88",
  },
];

export default function RetailScenario() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      {/* Desktop: horizontal steps */}
      <div className="hidden lg:block">
        {/* Step cards */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass border border-border-glow rounded-xl p-5 flex flex-col"
            >
              {/* Icon + step number */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 glass border border-border-glow rounded-lg flex items-center justify-center" style={{ color: s.accent }}>
                  <s.Icon className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] text-muted">{s.step}</span>
              </div>
              <p className="text-sm font-semibold text-foreground mb-2 leading-snug">{s.label}</p>
              <p className="text-xs text-muted leading-relaxed">{s.copy}</p>
            </motion.div>
          ))}
        </div>

        {/* Connector bar below cards */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          className="h-px origin-left mx-4"
          style={{ background: "linear-gradient(90deg, #00d4ff 0%, #00d4ff 40%, #00ff88 60%, #00ff88 100%)" }}
        />

        {/* Attribution return label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-end gap-2 mt-2 pr-4"
        >
          <span className="text-[10px] font-mono text-accent-green/60">
            ← attribution data returns to brand
          </span>
        </motion.div>
      </div>

      {/* Mobile: vertical */}
      <div className="lg:hidden space-y-0">
        {STEPS.map((s, i) => (
          <div key={s.step}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-9 h-9 glass border border-border-glow rounded-lg flex items-center justify-center" style={{ color: s.accent }}>
                  <s.Icon className="w-4 h-4" />
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 mt-2 mb-0" style={{ background: "rgba(0,212,255,0.15)", minHeight: 24 }} />
                )}
              </div>
              <div className="pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-muted">{s.step}</span>
                  <p className="text-sm font-semibold text-foreground">{s.label}</p>
                </div>
                <p className="text-xs text-muted leading-relaxed">{s.copy}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
