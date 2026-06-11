"use client";

import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import MarqueeStrip from "@/components/MarqueeStrip";

// Dynamic imports for sections to optimize loading
const Hero = dynamic(() => import("@/components/sections/Hero"));
const About = dynamic(() => import("@/components/sections/About"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Journey = dynamic(() => import("@/components/sections/Journey"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Benefits = dynamic(() => import("@/components/sections/Benefits"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const CTA = dynamic(() => import("@/components/sections/CTA"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip text="RESET" />
        <About />
        <MarqueeStrip text="RECOVER" reverse />
        <Services />
        <MarqueeStrip text="RESTART" />
        <Journey />
        <Gallery />
        <div className="section-divider" />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
