"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Arrive",
    description:
      "Step into a premium, calming environment designed to help you disconnect from the outside world and transition into recovery mode.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Reset",
    description:
      "Begin your session with our expert-guided protocols. Whether it's sauna, cold plunge, or compression—your body begins the reset process.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Recover",
    description:
      "Your body activates its natural healing mechanisms. Inflammation reduces, circulation improves, and deep recovery begins at the cellular level.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Perform",
    description:
      "Leave feeling recharged, stronger, and ready to perform at your absolute best. Experience the difference that true recovery makes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-primary/3 rounded-full blur-[200px] pointer-events-none" />

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
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold mb-4">
            Your Recovery <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            A seamless four-step experience designed for peak performance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-transparent via-green-primary/30 to-transparent" />
          </div>
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-[1px]">
            <div className="h-full bg-gradient-to-b from-transparent via-green-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                <div className="glass-card p-6 md:p-8 hover:border-green-primary/30 transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-green-primary/10 border border-green-primary/20 flex items-center justify-center text-green-primary group-hover:bg-green-primary/20 group-hover:border-green-primary/40 transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-[var(--font-heading)] font-bold text-gray-800/50 group-hover:text-green-primary/20 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-[var(--font-heading)] font-bold mb-3 group-hover:text-green-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Active dot on timeline */}
                <div className="hidden lg:block absolute -bottom-[25px] left-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-green-primary/50 group-hover:bg-green-primary group-hover:shadow-[0_0_20px_rgba(29,185,84,0.5)] transition-all duration-300" />
                </div>
                <div className="lg:hidden absolute top-1/2 -left-[13px] -translate-y-1/2">
                  <div className="w-3 h-3 rounded-full bg-green-primary/50 group-hover:bg-green-primary transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
