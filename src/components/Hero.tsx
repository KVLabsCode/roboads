"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroBadge {
  value: string;
  label: string;
}

interface HeroProps {
  headline: string;
  subtext: string;
  ctas?: HeroCTA[];
  badges?: HeroBadge[];
  eyebrow?: string;
}

export default function Hero({ headline, subtext, ctas = [], badges, eyebrow }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center pt-20">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-[20%] w-[400px] h-[400px] orb-accent" />
      <div className="absolute bottom-20 left-[15%] w-[300px] h-[300px] orb-teal" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent-light px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg sm:text-xl text-text-body max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {subtext}
        </motion.p>

        {ctas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {ctas.map((cta, i) => (
              <CTAButton key={i} href={cta.href} variant={cta.variant || "primary"}>
                {cta.label}
              </CTAButton>
            ))}
          </motion.div>
        )}

        {badges && badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-accent">{badge.value}</span>
                <span className="text-text-muted text-xs">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
