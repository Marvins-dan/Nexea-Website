"use client";

import { motion } from "framer-motion";

export default function Ecosystem() {
  const steps = [
    { label: "Users", icon: "👤" },
    { label: "Transactions", icon: "💸" },
    { label: "Rewards", icon: "🏆" },
    { label: "NEX Token", icon: "🪙" },
    { label: "Merchant Adoption", icon: "🏪" },
    { label: "Network Growth", icon: "📈" },
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-gradient">NEXEA Ecosystem</h2>

        <div className="relative max-w-4xl mx-auto py-10">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 hidden md:block"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center relative">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.2 }}
                  className="w-20 h-20 rounded-full glass border-2 border-white/20 flex items-center justify-center text-3xl mb-4 bg-black/50 backdrop-blur-xl relative z-10"
                >
                  {step.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.2) }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  {step.label}
                </motion.div>
                
                {i < steps.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    className="absolute top-full left-1/2 w-0.5 bg-white/20 -translate-x-1/2 md:hidden my-2"
                    style={{ minHeight: "40px" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
