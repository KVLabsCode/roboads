"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16">
        {/* Gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] lg:w-[1000px] h-[250px] sm:h-[350px] lg:h-[500px] bg-accent/8 rounded-full blur-[100px] sm:blur-[150px]" />
          <div className="absolute top-1/3 left-1/3 w-[200px] sm:w-[400px] lg:w-[600px] h-[150px] sm:h-[200px] lg:h-[300px] bg-accent-green/5 rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-cyan-white leading-tight mb-4 sm:mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto"
          >
            Whether you&apos;re a robot manufacturer looking to monetize or an
            advertiser ready to reach the robot economy, we&apos;d love to hear
            from you.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto">
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </section>
    </>
  );
}
