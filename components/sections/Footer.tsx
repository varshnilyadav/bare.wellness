"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Journey", href: "#journey" },
  { name: "Gallery", href: "#gallery" },
  { name: "Benefits", href: "#benefits" },
];

const servicesList = [
  "Traditional Sauna",
  "Cold Plunge Therapy",
  "Compression Therapy",
  "Red Light Therapy",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-dark-surface border-t border-gray-800/50">
      {/* Green Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-primary/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Main Footer */}
        <div className="py-12 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Bare Wellness"
                width={45}
                height={45}
                className="rounded-lg"
              />
              <div>
                <span className="text-white font-[var(--font-heading)] font-bold text-base tracking-wider">
                  BARE
                </span>
                <span className="text-green-primary font-[var(--font-heading)] font-bold text-base tracking-wider ml-1">
                  WELLNESS
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Premium recovery experiences designed to help your body recharge,
              rebuild, and perform at its peak.
            </p>
            <p className="text-xs text-gray-400/60 italic mb-6">
              Reset · Recover · Restart
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/bare.recovery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-primary hover:border-green-primary/30 transition-all duration-300"
                data-cursor="hover"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917670861496?text=Hi!%20I'd%20like%20to%20know%20more%20about%20Bare%20Wellness%20recovery%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-primary hover:border-green-primary/30 transition-all duration-300"
                data-cursor="hover"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-primary hover:border-green-primary/30 transition-all duration-300"
                data-cursor="hover"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-primary hover:border-green-primary/30 transition-all duration-300"
                data-cursor="hover"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-[var(--font-heading)] font-bold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-green-primary text-sm transition-colors duration-300"
                    data-cursor="hover"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-[var(--font-heading)] font-bold text-sm tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-gray-400 hover:text-green-primary text-sm transition-colors duration-300"
                    data-cursor="hover"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-[var(--font-heading)] font-bold text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="https://wa.me/917670861496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-primary transition-colors duration-300"
                  data-cursor="hover"
                >
                  <svg className="w-4 h-4 text-green-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  +91 76708 61496
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bare.recovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-primary transition-colors duration-300"
                  data-cursor="hover"
                >
                  <svg className="w-4 h-4 text-green-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @bare.recovery
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-10"
        >
          <h4 className="text-white font-[var(--font-heading)] font-bold text-sm tracking-wider uppercase mb-5">
            Find Us
          </h4>
          <div className="rounded-2xl overflow-hidden border border-gray-800/50 h-[250px] md:h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1091535790616!2d78.47169421487737!3d17.49472398801198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b632909b247%3A0x94ccb28f855ba47f!2sBare%20Recovery%20Studio!5e0!3m2!1sen!2sin!4v1718107200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bare Wellness Location"
            />
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400/60 text-xs">
            © {new Date().getFullYear()} Bare Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              className="text-gray-400/60 hover:text-gray-400 text-xs transition-colors"
              data-cursor="hover"
            >
              Privacy Policy
            </button>
            <button
              className="text-gray-400/60 hover:text-gray-400 text-xs transition-colors"
              data-cursor="hover"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
