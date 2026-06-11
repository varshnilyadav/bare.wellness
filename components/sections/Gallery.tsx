"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/gallery-1.png", alt: "Wellness Lounge", span: "col-span-2 row-span-2" },
  { src: "/images/gallery-2.png", alt: "Traditional Sauna", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-3.png", alt: "Cold Plunge Pool", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-4.png", alt: "Relaxation Space", span: "col-span-2 row-span-1" },
  { src: "/images/sauna.png", alt: "Sauna Interior", span: "col-span-1 row-span-1" },
  { src: "/images/coldplunge.png", alt: "Ice Bath Experience", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-black">
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
            Our Space
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold mb-4">
            The <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            A sanctuary designed for performance, recovery, and tranquility.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setLightboxImage(img.src)}
              data-cursor="hover"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4 md:p-6">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  {img.alt}
                </motion.span>
              </div>
              {/* Green border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-primary/30 rounded-2xl transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
            >
              <Image
                src={lightboxImage}
                alt="Gallery Preview"
                fill
                className="object-contain"
              />
            </motion.div>
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-green-primary transition-colors"
              data-cursor="hover"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
