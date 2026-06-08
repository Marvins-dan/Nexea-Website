"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Wallet } from "lucide-react";

export default function MarketOpportunity() {
  return (
    <section id="market" className="py-24 bg-white relative">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-poppins text-nexea-navy mb-6 tracking-tight"
          >
            The Market Opportunity
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Africa is the fastest-growing digital finance market in the world. NEXEA is positioned at the intersection of three massive growth vectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chart 1: Mobile Money */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-xl text-nexea-navy">Mobile Money</h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-center mb-6">
              <div className="text-4xl font-bold text-nexea-blue mb-2">781M+</div>
              <p className="text-sm text-gray-500 font-medium">Registered Accounts in Africa</p>
            </div>

            {/* Animated Bar Chart */}
            <div className="space-y-4">
              {[
                { label: "2021", value: 45, width: "45%" },
                { label: "2022", value: 65, width: "65%" },
                { label: "2023", value: 85, width: "85%" },
                { label: "2024", value: 100, width: "100%" },
              ].map((bar, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-gray-400 w-8">{bar.label}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: bar.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chart 2: Blockchain Adoption */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-nexea-navy rounded-[2rem] p-8 border border-blue-900 flex flex-col text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Wallet size={24} />
              </div>
              <h3 className="font-bold text-xl text-white">Crypto Adoption</h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-center mb-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1,200%</div>
              <p className="text-sm text-white/60 font-medium">Growth in African Crypto Value</p>
            </div>

            {/* Animated Line Chart (SVG) */}
            <div className="h-32 relative w-full mt-auto flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Area Fill */}
                <motion.path 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  d="M0,50 L0,40 Q25,35 50,20 T100,5 L100,50 Z" 
                  fill="url(#cyanGrad)" 
                />
                
                {/* Line */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  d="M0,40 Q25,35 50,20 T100,5" 
                  fill="none" 
                  stroke="#06B6D4" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
          </motion.div>

          {/* Chart 3: Fintech Revenue */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-xl text-nexea-navy">Fintech Revenue</h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-center mb-6">
              <div className="text-4xl font-bold text-emerald-500 mb-2">$30.3B</div>
              <p className="text-sm text-gray-500 font-medium">Projected Revenue by 2025</p>
            </div>

            {/* Animated Donut/Progress Chart */}
            <div className="flex items-center justify-center mt-auto py-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                  <motion.circle 
                    initial={{ strokeDasharray: "0 251.2" }}
                    whileInView={{ strokeDasharray: "188.4 251.2" }} // 75%
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="12" strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">8X</span>
                  <span className="text-[10px] text-gray-500 font-medium uppercase">Growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
