"use client";

import { motion } from "framer-motion";

export default function MarketOpportunity() {
  return (
    <section className="py-32 px-4 relative border-t border-white/5">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Market Opportunity</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "African Fintech Growth", value: "32%", subtitle: "CAGR Expected by 2030", bars: [30, 45, 60, 80, 100] },
            { title: "Mobile Money Adoption", value: "$836B", subtitle: "Transaction Value in Africa", bars: [40, 50, 75, 90, 100] },
            { title: "Crypto Adoption", value: "#1", subtitle: "Region for retail crypto adoption", bars: [20, 35, 65, 85, 100] },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-lg text-white/60 mb-2">{stat.title}</h3>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-white/40 mb-8">{stat.subtitle}</div>
              
              <div className="flex items-end gap-2 h-24">
                {stat.bars.map((height, j) => (
                  <motion.div 
                    key={j}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (j * 0.1), duration: 0.8, type: "spring" }}
                    className="flex-1 bg-white/20 rounded-t-sm relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white/40 to-transparent"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
