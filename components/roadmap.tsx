"use client";

import { motion } from "framer-motion";

export default function Roadmap() {
  const phases = [
    { title: "MVP Launch", phase: "Phase 1" },
    { title: "Swap Infrastructure", phase: "Phase 2" },
    { title: "NEX Token", phase: "Phase 3" },
    { title: "Regional Expansion", phase: "Phase 4" },
    { title: "DeFi Ecosystem", phase: "Phase 5" },
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">Roadmap</h2>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block"></div>
          
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex-1 flex flex-col items-center"
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${i === 0 ? 'text-blue-400' : 'text-white/50'}`}>
                  {phase.phase}
                </div>
                <div className={`w-6 h-6 rounded-full border-4 border-background z-10 mb-6 ${i === 0 ? 'bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/20'}`}></div>
                <div className="glass p-6 rounded-2xl w-full text-center border-t border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
                  <h4 className="font-bold">{phase.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
