"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Journey", href: "#journey" },
  { name: "Gallery", href: "#gallery" },
  { name: "Benefits", href: "#benefits" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "glass py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative z-10 flex items-center gap-3"
            data-cursor="hover"
          >
            <Image
              src="/images/logo.png"
              alt="Bare Wellness"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <span className="text-white font-[var(--font-heading)] font-bold text-lg tracking-wider">
                BARE
              </span>
              <span className="text-green-primary font-[var(--font-heading)] font-bold text-lg tracking-wider ml-1">
                WELLNESS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                data-cursor="hover"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("#cta")}
            className="hidden lg:block px-6 py-2.5 bg-green-primary text-black font-semibold text-sm rounded-full hover:bg-green-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(29,185,84,0.3)]"
            data-cursor="hover"
          >
            Book a Session
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[1001] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            data-cursor="hover"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white transition-colors"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white transition-colors"
            />
          </button>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-3xl md:text-5xl font-[var(--font-heading)] font-bold text-white hover:text-green-primary transition-colors duration-300"
                  data-cursor="hover"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                onClick={() => scrollTo("#cta")}
                className="mt-4 px-8 py-3 bg-green-primary text-black font-bold text-lg rounded-full hover:bg-green-light transition-all duration-300"
                data-cursor="hover"
              >
                Book a Session
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
