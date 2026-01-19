"use client";

import LogoCarousel from "@/components/LogoCarousel";
import HeroBackground from "@/components/HeroBackground";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate text elements
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)"
    });

    gsap.from(".hero-btn", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "back.out(1.7)"
    });

  }, { scope: container });

  return (
    <main ref={container} className="w-full relative">
      <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

        <div className="absolute inset-0 w-full h-full">
          <HeroBackground />
          <div className="absolute inset-0 bg-black/10 -z-10" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="hero-text text-lg md:text-2xl mt-2 font-light tracking-widest text-gray-100">
            Piezas en acrílico que hacen brillar tu espacio
          </p>

          <button className="hero-btn mt-8 px-10 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg shadow-black/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 font-bold uppercase tracking-widest">
            Explorar catálogo
          </button>
        </div>

      </section>

      <LogoCarousel />

      <section className="h-screen bg-white">
      </section>
    </main>
  );
}