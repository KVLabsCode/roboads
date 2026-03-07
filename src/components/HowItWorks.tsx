"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "./Icons";
import ScrollReveal from "./ScrollReveal";

interface Step {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export default function HowItWorks({ steps }: { steps: Step[] }) {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });

  return (
    <div>
      {/* ── Desktop: 4-column ──────────────────────────── */}
      <div className="hidden lg:block relative" ref={lineRef}>
        {/* Connector line */}
        <div className="absolute top-[30px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-px bg-border-glow z-0" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={lineInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[30px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-px origin-left z-0"
          style={{ background: "linear-gradient(90deg, #00d4ff, #00ff88)", opacity: 0.4 }}
        />

        <div className="grid grid-cols-4 gap-6 relative z-10">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.12}>
              <div className="flex flex-col items-center text-center px-2 group">
                <div className="w-[60px] h-[60px] glass border border-border-glow rounded-xl flex items-center justify-center mb-4 bg-background text-muted group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-glow-sm transition-all">
                  <Icon name={step.icon} className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-accent mb-2">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h4 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── Mobile: vertical ───────────────────────────── */}
      <div className="lg:hidden">
        {steps.map((step, i) => (
          <ScrollReveal key={step.step} delay={i * 0.1}>
            <div className="relative flex items-start gap-4 pb-8 last:pb-0">
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-px animated-connector-line" />
              )}
              <div className="flex-shrink-0 w-10 h-10 glass border border-border-glow rounded-xl flex items-center justify-center z-10 bg-background text-muted">
                <Icon name={step.icon} className="w-5 h-5" />
              </div>
              <div className="pt-0.5">
                <span className="font-mono text-[10px] text-accent block mb-1">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h4 className="text-sm font-semibold text-foreground mb-1">{step.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
