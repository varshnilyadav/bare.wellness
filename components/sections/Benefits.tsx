"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Faster Recovery",
    description: "Cut recovery time in half with science-backed modalities that accelerate your body's natural healing.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Better Sleep",
    description: "Regulate your nervous system and improve sleep quality through thermal contrast and deep relaxation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: "Reduced Stress",
    description: "Lower cortisol levels and activate your parasympathetic system for deep mental and physical relief.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Improved Circulation",
    description: "Enhance blood flow and oxygen delivery to muscles through thermal therapy and compression technology.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Athletic Performance",
    description: "Train harder and bounce back faster. Optimize your performance cycle with strategic recovery protocols.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Mental Clarity",
    description: "Clear the mental fog and sharpen your focus. Cold exposure and heat therapy reset your cognitive state.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-dark">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-green-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-green-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Why Bare Wellness
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold mb-4">
            Transform Your <span className="text-gradient">Body & Mind</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Experience the transformative benefits of consistent, premium recovery.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card p-6 md:p-8 hover:border-green-primary/20 transition-all duration-500"
              data-cursor="hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-green-primary/10 border border-green-primary/20 flex items-center justify-center text-green-primary mb-5 group-hover:bg-green-primary/20 group-hover:shadow-[0_0_20px_rgba(29,185,84,0.2)] transition-all duration-300">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-[var(--font-heading)] font-bold mb-2 group-hover:text-green-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
