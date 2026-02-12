"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Step {
  step: number;
  title: string;
  description: string;
}

interface ScenarioBlockProps {
  steps: Step[];
  title?: string;
}

export default function ScenarioBlock({ steps, title }: ScenarioBlockProps) {
  return (
    <div>
      {title && (
        <ScrollReveal>
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            {title}
          </h3>
        </ScrollReveal>
      )}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px animated-connector-line hidden md:block" />

        <div className="space-y-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.15}>
              <motion.div
                className="relative flex items-start gap-3 sm:gap-6 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 glass border border-border-glow rounded-lg flex items-center justify-center group-hover:border-accent/50 group-hover:shadow-glow-sm transition-all">
                  <span className="font-mono text-sm text-accent">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h4 className="text-base font-semibold text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
