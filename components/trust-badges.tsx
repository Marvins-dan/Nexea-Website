"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Globe } from "lucide-react";

const badges = [
  { icon: <Zap className="text-nexea-blue" size={24} />, text: "Built on Stellar" },
  { icon: <ShieldCheck className="text-nexea-blue" size={24} />, text: "Blockchain Powered" },
  { icon: <CheckCircle2 className="text-nexea-blue" size={24} />, text: "Low Fee Transactions" },
  { icon: <Globe className="text-nexea-blue" size={24} />, text: "Cross Border Ready" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center md:text-left">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                {badge.icon}
              </div>
              <span className="font-semibold text-gray-800 tracking-tight">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
