"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: 10000, suffix: "+", label: "Recovery Sessions" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "", label: "Premium Services" },
  { value: 500, suffix: "+", label: "Active Members" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-gradient">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/about.png"
                alt="Recovery at Bare Wellness"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 glass-card px-6 py-4 glow-green">
              <span className="text-green-primary font-[var(--font-heading)] font-bold text-2xl">
                #1
              </span>
              <p className="text-gray-400 text-sm">Recovery Studio</p>
            </div>
            {/* Green accent line */}
            <div className="absolute -left-4 top-12 w-1 h-24 bg-gradient-to-b from-green-primary to-transparent rounded-full" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            ref={ref}
          >
            <span className="text-green-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              About Bare Wellness
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold leading-tight mb-6">
              Science-Backed
              <br />
              <span className="text-gradient">Recovery</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              At Bare Wellness, we blend cutting-edge recovery technology with
              time-tested traditions to create the ultimate wellness experience.
              Every session is designed to optimize your body&apos;s natural healing
              processes.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-10">
              {[
                "Stress reduction & mental clarity",
                "Improved athletic performance",
                "Faster muscle recovery & repair",
                "Better sleep & overall wellbeing",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-green-primary flex-shrink-0" />
                  <span className="text-gray-100 text-sm md:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
