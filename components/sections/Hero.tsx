"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "../MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const overlay = containerRef.current.querySelector(
        ".hero-overlay"
      ) as HTMLElement;
      const img = containerRef.current.querySelector(
        ".hero-img"
      ) as HTMLElement;
      if (overlay) overlay.style.opacity = `${Math.min(0.7 + scrollY * 0.001, 1)}`;
      if (img) img.style.transform = `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 hero-img">
        <Image
          src="/images/hero-bg.png"
          alt="Bare Wellness Studio"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />

      {/* Ambient Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-primary/20 animate-float"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Green Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-primary/5 rounded-full blur-[150px] animate-pulse-glow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-primary/30 text-green-primary text-xs font-medium tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 bg-green-primary rounded-full animate-pulse" />
            Reset · Recover · Restart
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[var(--font-heading)] font-bold leading-[0.95] tracking-tight mb-6"
        >
          Recover Better.
          <br />
          <span className="text-gradient">Perform Stronger.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Premium recovery experiences designed to help your body recharge,
          rebuild, and perform at its peak.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollTo("#cta")}
            className="px-8 py-3.5 bg-green-primary text-black font-bold text-sm rounded-full hover:bg-green-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(29,185,84,0.4)] tracking-wide"
          >
            Book a Session
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("#services")}
            className="px-8 py-3.5 border border-white/20 text-white font-medium text-sm rounded-full hover:border-green-primary/50 hover:text-green-primary transition-all duration-300 tracking-wide"
          >
            Explore Services
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-gray-400/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-green-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
