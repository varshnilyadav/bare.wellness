"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(false);

    // Artificial short delay for premium loading experience
    setTimeout(() => {
      // Correct password is "bare" (case-insensitive)
      if (password.trim().toLowerCase() === "bare") {
        localStorage.setItem("bare_unlocked", "true");
        onUnlock();
      } else {
        setError(true);
        setLoading(false);
        // Shake feedback
        const input = document.getElementById("password-input");
        if (input) {
          input.classList.add("animate-shake");
          setTimeout(() => input.classList.remove("animate-shake"), 500);
        }
      }
    }, 800);
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden px-6">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-green-primary/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="glass-card max-w-[420px] w-full p-8 md:p-10 text-center relative overflow-hidden"
      >
        {/* Subtle glow border */}
        <div className="absolute inset-[1px] rounded-[19px] border border-white/5 pointer-events-none" />

        {/* Logo / Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-900 border border-gray-800 flex items-center justify-center p-3"
          >
            <Image
              src="/images/logo.png"
              alt="Bare Wellness"
              width={48}
              height={48}
              className="object-contain"
            />
          </motion.div>
          <div>
            <h1 className="text-xl font-[var(--font-heading)] font-bold tracking-widest text-white uppercase">
              BARE <span className="text-green-primary">WELLNESS</span>
            </h1>
            <p className="text-xs text-gray-500 tracking-[0.25em] uppercase mt-1">
              Private Preview
            </p>
          </div>
        </div>

        {/* Info */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          This website is currently in private development. Please enter the access code to preview the build.
        </p>

        {/* Lock Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              id="password-input"
              type="password"
              placeholder="Enter Access Code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-5 py-3.5 bg-black/60 border rounded-xl text-white placeholder-gray-600 text-sm tracking-widest text-center focus:outline-none transition-all duration-300 font-medium ${
                error
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-green-primary/50 focus:shadow-[0_0_20px_rgba(29,185,84,0.1)]"
              }`}
              disabled={loading}
              autoFocus
            />
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs tracking-wider"
              >
                Access code invalid. Hint: Use 'bare'
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3.5 bg-green-primary text-black font-bold text-sm rounded-xl hover:bg-green-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(29,185,84,0.25)] flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              "Unlock Preview"
            )}
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-8 text-[10px] text-gray-600 tracking-wider">
          © {new Date().getFullYear()} Bare Wellness Studio. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
}
