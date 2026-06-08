"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/hero";
import TrustBadges from "@/components/trust-badges";
import ProductExperience from "@/components/product-experience";
import ProblemSolution from "@/components/problem-solution";
import MarketOpportunity from "@/components/market-opportunity";
import Roadmap from "@/components/roadmap";
import Team from "@/components/team";
import Investors from "@/components/investors";
import JoinWaitlist from "@/components/join-waitlist";
import Footer from "@/components/footer";

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
    <main className="relative min-h-screen overflow-x-hidden bg-nexea-gray text-nexea-navy">
      <Hero />
      <TrustBadges />
      <ProductExperience />
      <ProblemSolution />
      <MarketOpportunity />
      <Roadmap />
      <Team />
      <Investors />
      <JoinWaitlist />
      <Footer />
    </main>
  );
}
