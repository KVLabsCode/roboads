"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[45vh] flex items-center justify-center pt-20">
        <div className="absolute top-20 right-[20%] w-[400px] h-[400px] orb-accent" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg text-text-body max-w-2xl mx-auto leading-relaxed"
          >
            Whether you&apos;re a robot company looking to monetize or a
            brand ready to reach the robot economy, we&apos;d love to hear
            from you.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28 px-5 sm:px-8 max-w-xl mx-auto">
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </section>
    </>
  );
}
