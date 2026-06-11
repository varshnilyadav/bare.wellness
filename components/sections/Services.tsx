"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Traditional Sauna",
    description:
      "Immerse yourself in the ancient tradition of heat therapy. Our premium saunas promote deep detoxification, improve circulation, and provide total relaxation for body and mind.",
    image: "/images/sauna.png",
    features: ["Detoxification", "Relaxation", "Improved Circulation"],
  },
  {
    title: "Cold Plunge",
    description:
      "Activate your body's natural recovery mechanisms with controlled cold water immersion. Reduce inflammation, boost energy, and accelerate post-workout recovery.",
    image: "/images/coldplunge.png",
    features: ["Reduce Inflammation", "Boost Energy", "Accelerate Recovery"],
  },
  {
    title: "Compression Therapy",
    description:
      "Experience advanced pneumatic compression technology that enhances blood flow, reduces muscle soreness, and speeds up recovery for peak athletic performance.",
    image: "/images/compression.png",
    features: ["Enhanced Blood Flow", "Reduce Soreness", "Faster Recovery"],
  },
  {
    title: "Red Light Therapy",
    description:
      "Harness the power of targeted wavelengths to support cellular regeneration, reduce pain, and promote deep healing at the cellular level.",
    image: "/images/redlight.png",
    features: ["Cellular Regeneration", "Pain Relief", "Deep Healing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-black">
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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold mb-4">
            Premium <span className="text-gradient">Recovery</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Four science-backed modalities designed for optimal performance and
            recovery.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-dark-surface border border-gray-800/50 hover:border-green-primary/30 transition-all duration-500"
              data-cursor="hover"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8 -mt-8">
                <h3 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold mb-3 group-hover:text-green-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-gray-800 text-gray-400 group-hover:border-green-primary/30 group-hover:text-green-primary transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-green-primary text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl glow-green" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
