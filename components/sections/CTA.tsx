"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "../MagneticButton";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.png"
          alt="Bare Wellness Studio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Green Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-primary/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-primary text-sm font-medium tracking-[0.2em] uppercase mb-6 block">
            Start Today
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-heading)] font-bold leading-tight mb-6">
            Your Recovery
            <br />
            <span className="text-gradient">Starts Here.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10">
            Book your premium recovery experience today and discover the
            difference that true, science-backed recovery makes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton className="px-10 py-4 bg-green-primary text-black font-bold text-base rounded-full hover:bg-green-light transition-all duration-300 hover:shadow-[0_0_50px_rgba(29,185,84,0.4)] tracking-wide">
              Book a Session
            </MagneticButton>
            <MagneticButton className="px-10 py-4 border border-white/20 text-white font-medium text-base rounded-full hover:border-green-primary/50 hover:text-green-primary transition-all duration-300 tracking-wide">
              Contact Us
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-primary/20 to-transparent" />
    </section>
  );
}
