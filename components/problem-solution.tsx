"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-poppins text-nexea-navy mb-6 tracking-tight"
          >
            A Fragmented System. <span className="text-nexea-blue">Unified.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We are replacing a broken, multi-app experience with a single, powerful financial hub.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          {/* Problem Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-200 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <XCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Old Way</h3>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-red-100 border-4 border-white flex items-center justify-center text-red-500 font-bold z-10 shadow-sm">
                YOU
              </div>
              
              {/* Floating fragmented apps */}
              <div className="h-[300px] relative w-full">
                {[
                  { text: "Banking App", top: "10%", left: "10%", delay: 0 },
                  { text: "Crypto Exchange", top: "20%", right: "10%", delay: 0.2 },
                  { text: "Bill Payment App", bottom: "20%", left: "15%", delay: 0.4 },
                  { text: "Remittance Service", bottom: "10%", right: "20%", delay: 0.6 },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm text-sm font-medium text-gray-600"
                    style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
                  >
                    {item.text}
                  </motion.div>
                ))}
                
                {/* Connecting broken lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <path d="M 50% 50% L 20% 20%" stroke="red" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 50% 50% L 80% 30%" stroke="red" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 50% 50% L 25% 80%" stroke="red" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 50% 50% L 70% 85%" stroke="red" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
            
            <div className="mt-8 space-y-3">
              {["Multiple login credentials", "High cross-platform transfer fees", "Scattered transaction history", "Zero loyalty rewards"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-600">
                  <XCircle size={16} className="text-red-400 shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Arrow (Desktop) */}
          <div className="hidden lg:flex items-center justify-center shrink-0 w-16">
            <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-nexea-blue border border-gray-100 z-20">
              <ArrowRight size={24} />
            </div>
          </div>

          {/* Solution Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-gradient-to-br from-nexea-navy to-[#0A1A3A] rounded-[2.5rem] p-8 md:p-12 border border-blue-900/50 flex flex-col text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-nexea-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-nexea-cyan">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">The NEXEA Way</h3>
            </div>
            
            <div className="flex-1 relative z-10 flex items-center justify-center">
              {/* Unified Core */}
              <div className="relative w-[280px] h-[280px]">
                {/* Orbit rings */}
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Core App */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-tr from-nexea-blue to-nexea-cyan shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center text-white font-bold text-xl z-20">
                  NEXEA
                </div>
                
                {/* Connected Nodes */}
                {[
                  { text: "Payments", angle: 0 },
                  { text: "Crypto", angle: 72 },
                  { text: "Bills", angle: 144 },
                  { text: "Remittance", angle: 216 },
                  { text: "Rewards", angle: 288 },
                ].map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 140;
                  const y = Math.sin(rad) * 140;
                  
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="absolute top-1/2 left-1/2 w-auto h-auto bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-xs font-medium text-white border border-white/20 whitespace-nowrap"
                      style={{ 
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      {node.text}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8 space-y-3 relative z-10">
              {["One unified account", "Zero or near-zero fees via Stellar", "Consolidated financial history", "Automatic point accumulation"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={16} className="text-nexea-cyan shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
