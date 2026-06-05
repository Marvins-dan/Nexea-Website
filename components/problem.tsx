"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Problem() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const transforms = [y1, y2, y3];

  return (
    <section ref={containerRef} className="py-32 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Current Reality</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Financial services in emerging markets are fragmented, expensive, and lack meaningful rewards for everyday users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "High Transaction Fees",
              desc: "Traditional payment gateways eat into micro-transactions, making everyday digital finance costly.",
              icon: "💸"
            },
            {
              title: "Fragmented Services",
              desc: "Users switch between multiple apps for airtime, data, bills, and swaps, losing time and money.",
              icon: "📱"
            },
            {
              title: "Poor Rewards",
              desc: "Loyalty systems are non-existent or lack real-world utility, failing to incentivize continued usage.",
              icon: "❌"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              style={{ y: transforms[i] }}
              className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
