"use client";

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import MarqueeStrip from "@/components/MarqueeStrip";
import WhatsAppFab from "@/components/WhatsAppFab";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Journey from "@/components/sections/Journey";
import Gallery from "@/components/sections/Gallery";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

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
      <WhatsAppFab />
    </SmoothScroll>
  );
}
