"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ZapIcon } from "./Icons";
import { Icon } from "./Icons";

const ENVIRONMENTS = [
  { label: "Retail",        icon: "cart"      },
  { label: "Hospitality",   icon: "building"  },
  { label: "Airport",       icon: "plane"     },
  { label: "Healthcare",    icon: "activity"  },
  { label: "Food & Bev",    icon: "utensils"  },
  { label: "Public Space",  icon: "globe"     },
];

const OUTCOMES = [
  {
    label: "Campaign Delivery",
    detail: "Right robot. Right moment. Right consumer.",
    color: "#00d4ff",
  },
  {
    label: "Interaction Data",
    detail: "Every touchpoint logged in real time.",
    color: "#00d4ff",
  },
  {
    label: "Purchase Attribution",
    detail: "Checkout matched back to the robot moment.",
    color: "#00ff88",
  },
];

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="space-y-4">
      {/* ── Main diagram ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="glass border border-border-glow rounded-2xl overflow-hidden"
      >
        {/* 3-column grid */}
        <div className="grid lg:grid-cols-[1fr_1px_180px_1px_1fr]">

          {/* ── Left: Robot Environments ─────────────── */}
          <div className="p-6 sm:p-8">
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-5">
              Robot Environments
            </p>
            <div className="space-y-2">
              {ENVIRONMENTS.map((env, i) => (
                <motion.div
                  key={env.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-3 glass border border-border-glow rounded-lg px-3 py-2.5 hover:border-accent/30 transition-all"
                >
                  <Icon name={env.icon} className="w-4 h-4 text-muted flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{env.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-border-glow relative">
            {/* Arrow pointing right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 z-10">
              <div
                style={{
                  width: 0, height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: "6px solid rgba(0,212,255,0.3)",
                }}
              />
            </div>
          </div>

          {/* ── Center: Kovio ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center justify-center p-8 text-center relative"
            style={{ background: "rgba(0,212,255,0.03)" }}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-4 rounded-2xl border border-accent/10"
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="w-14 h-14 glass border border-accent/50 rounded-2xl flex items-center justify-center mb-4 shadow-glow-sm">
              <ZapIcon className="w-7 h-7 text-accent" />
            </div>

            <p className="font-mono text-base font-bold text-accent mb-1">KOVIO</p>
            <p className="text-[11px] text-muted leading-snug max-w-[120px]">
              Monetization &amp; Attribution Layer
            </p>

            <div className="flex gap-1.5 mt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.4s" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" style={{ animationDelay: "0.8s" }} />
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block bg-border-glow relative">
            {/* Arrow pointing right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 z-10">
              <div
                style={{
                  width: 0, height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: "6px solid rgba(0,255,136,0.3)",
                }}
              />
            </div>
          </div>

          {/* ── Right: Brand Outcomes ─────────────────── */}
          <div className="p-6 sm:p-8">
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-5">
              Brand Outcomes
            </p>
            <div className="space-y-3 h-full flex flex-col justify-center">
              {OUTCOMES.map((outcome, i) => (
                <motion.div
                  key={outcome.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass border border-border-glow rounded-xl p-4 hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: outcome.color }} />
                    <p className="text-sm font-semibold text-foreground">{outcome.label}</p>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-3.5">{outcome.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border-glow px-6 sm:px-8 py-3 flex items-center justify-between">
          <span className="text-[10px] font-mono text-accent/50">← Campaign in</span>
          <span className="text-[10px] font-mono text-muted/50">Any robot. Any fleet. Any environment.</span>
          <span className="text-[10px] font-mono text-accent-green/50">Attribution out →</span>
        </div>
      </motion.div>

      {/* ── Supporting cards ─────────────────────────── */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { headline: "Any Robot. Any Fleet.",         body: "Hardware-agnostic infrastructure that works across every consumer-facing robot network." },
          { headline: "Real-Time. Closed Loop.",       body: "Campaign delivery and attribution happen in real time, connected end-to-end." },
          { headline: "The Rails for Robot Commerce.", body: "Like payment rails for the internet — Kovio is the monetization layer the robot economy has been missing." },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 + i * 0.08 }}
            className="glass border border-border-glow rounded-xl p-5"
          >
            <p className="text-sm font-semibold text-foreground mb-2">{card.headline}</p>
            <p className="text-xs text-muted leading-relaxed">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
