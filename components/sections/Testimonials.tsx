"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Professional Athlete",
    text: "Bare Wellness has completely transformed my recovery routine. The combination of cold plunge and compression therapy has cut my recovery time in half. I can't train without it now.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Marathon Runner",
    text: "After years of dealing with muscle soreness, I found Bare Wellness. The traditional sauna followed by cold plunge is the perfect protocol. My sleep has never been better.",
    rating: 5,
  },
  {
    name: "James Rivera",
    role: "CrossFit Coach",
    text: "I recommend Bare Wellness to all my athletes. The quality of their facilities and the attention to detail is unmatched. It's a true premium recovery experience.",
    rating: 5,
  },
  {
    name: "Emily Park",
    role: "Wellness Entrepreneur",
    text: "The red light therapy sessions have been a game-changer for my skin and energy levels. The entire studio feels like stepping into a luxury retreat. Absolutely world-class.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Tech Executive",
    text: "As someone who sits at a desk all day, Bare Wellness is my sanctuary. The compression therapy relieves all my tension, and the cold plunge sharpens my mental clarity instantly.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-green-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold mb-4">
            What Our <span className="text-gradient">Members</span> Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-green-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="text-white font-[var(--font-heading)] font-bold text-lg">
                  {testimonials[current].name}
                </p>
                <p className="text-green-primary text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-green-primary"
                    : "w-2 bg-gray-800 hover:bg-gray-600"
                }`}
                data-cursor="hover"
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
