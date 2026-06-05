"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import StellarSection from "@/components/stellar-section";
import ProductExperience from "@/components/product-experience";
import MarketOpportunity from "@/components/market-opportunity";
import Ecosystem from "@/components/ecosystem";
import Roadmap from "@/components/roadmap";
import Team from "@/components/team";
import JoinWaitlist from "@/components/join-waitlist";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
const Background3D = dynamic(() => import("@/components/background-3d"), { ssr: false });

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      <Background3D />
      
      <div className="relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <StellarSection />
        <ProductExperience />
        <MarketOpportunity />
        <Ecosystem />
        <Roadmap />
        <Team />
        <JoinWaitlist />
        <Footer />
      </div>
    </main>
  );
}
