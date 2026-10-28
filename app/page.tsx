import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CursorRing } from "@/components/CursorRing";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <CursorRing />
      <div className="aurora" aria-hidden="true" />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Stats />
        <Experience />
        <Projects />
        <Stack />
        <Credentials />
        <Contact />
        <Footer />
      </main>
      <a href="#top" className="to-top" aria-label="Back to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </>
  );
}
