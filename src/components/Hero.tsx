"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroProps {
  headline: string;
  subtext: string;
  ctas?: HeroCTA[];
}

export default function Hero({ headline, subtext, ctas = [] }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center pt-16">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] lg:w-[1000px] h-[250px] sm:h-[350px] lg:h-[500px] bg-accent/8 rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 w-[200px] sm:w-[400px] lg:w-[600px] h-[150px] sm:h-[200px] lg:h-[300px] bg-accent-green/5 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gradient-cyan-white leading-tight mb-4 sm:mb-6"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          {subtext}
        </motion.p>

        {ctas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {ctas.map((cta, i) => (
              <CTAButton key={i} href={cta.href} variant={cta.variant || "primary"}>
                {cta.label}
              </CTAButton>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
