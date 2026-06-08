"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    phase: "Phase 1",
    title: "Foundation & MVP",
    date: "Q3 2026",
    status: "completed",
    items: ["Core Wallet Architecture", "Stellar Network Integration", "Basic UI/UX Design", "Internal Testing"],
  },
  {
    phase: "Phase 2",
    title: "Utility Integration",
    date: "Q4 2026",
    status: "in-progress",
    items: ["Airtime & Data Topups", "Electricity Bill Payments", "NEXEA Rewards System Alpha", "Waitlist Launch"],
  },
  {
    phase: "Phase 3",
    title: "Asset Swaps & Cards",
    date: "Q1 2027",
    status: "upcoming",
    items: ["NGN/USDT Swaps via Stellar", "Virtual USD Cards", "Public Beta Release", "Agent Network Setup"],
  },
  {
    phase: "Phase 4",
    title: "Scale & Expansion",
    date: "Q2 2027",
    status: "upcoming",
    items: ["Cross-border Remittances", "B2B Payment API", "Pan-African Expansion", "Series A Funding"],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-32 bg-nexea-gray relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-poppins text-nexea-navy mb-6 tracking-tight"
          >
            Our Product Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We are building a comprehensive financial ecosystem. Here is our path to revolutionizing digital finance in Africa.
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal Line Background */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>

          {/* Animated Horizontal Line Progress */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden lg:block absolute top-1/2 left-0 h-1 bg-nexea-blue -translate-y-1/2"
          ></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'lg:justify-end lg:pb-16' : 'lg:justify-start lg:pt-16 lg:mt-0'}`}
              >
                {/* Node on the line */}
                <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 ${index % 2 === 0 ? 'bottom-0 translate-y-1/2' : 'top-0 -translate-y-1/2'} w-6 h-6 rounded-full border-4 border-white ${milestone.status === 'completed' ? 'bg-nexea-blue' : milestone.status === 'in-progress' ? 'bg-nexea-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-pulse' : 'bg-gray-300'} z-10`}></div>
                
                {/* Connecting Line (Vertical) */}
                <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 ${index % 2 === 0 ? 'bottom-6 h-10' : 'top-6 h-10'} w-0.5 ${milestone.status === 'completed' ? 'bg-nexea-blue' : milestone.status === 'in-progress' ? 'bg-nexea-cyan' : 'bg-gray-200'}`}></div>

                {/* Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative z-20 w-full max-w-sm mx-auto lg:w-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${milestone.status === 'completed' ? 'bg-blue-50 text-nexea-blue' : milestone.status === 'in-progress' ? 'bg-cyan-50 text-nexea-cyan' : 'bg-gray-100 text-gray-500'}`}>
                      {milestone.phase}
                    </span>
                    <span className="text-sm font-semibold text-gray-400">{milestone.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-nexea-navy mb-4">{milestone.title}</h3>
                  <ul className="space-y-3">
                    {milestone.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${milestone.status === 'completed' ? 'bg-nexea-blue' : 'bg-gray-300'}`}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
