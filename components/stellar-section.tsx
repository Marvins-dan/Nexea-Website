"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StellarSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    { title: "Near-Zero Fees", desc: "Transactions cost a fraction of a cent." },
    { title: "Fast Transactions", desc: "Settlement occurs in 3-5 seconds." },
    { title: "Global Accessibility", desc: "Cross-border value transfer natively." },
    { title: "Security & Scalability", desc: "Enterprise-grade blockchain architecture." },
  ];

  return (
    <section ref={containerRef} className="py-40 px-4 relative overflow-hidden">
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center relative">
          <div className="w-[600px] h-[600px] rounded-full border border-white/5 absolute animate-[spin_60s_linear_infinite]"></div>
          <div className="w-[400px] h-[400px] rounded-full border border-white/10 absolute animate-[spin_40s_linear_infinite_reverse]"></div>
          <div className="w-[200px] h-[200px] rounded-full border border-white/20 bg-white/5 absolute"></div>
        </div>
      </motion.div>

      <div className="container max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Stellar?</h2>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            We chose the Stellar network because it was built specifically for financial utility. It allows NEXEA to operate at scale while keeping costs virtually non-existent for our users.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-l-2 border-l-white">
                <h4 className="font-bold mb-2">{f.title}</h4>
                <p className="text-sm text-white/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
