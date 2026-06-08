"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Investors() {
  return (
    <section id="investors" className="py-24 bg-nexea-navy relative text-white">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-nexea-blue/10 blur-[150px] pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 tracking-tight">
              Building Africa's Financial Infrastructure
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl">
              NEXEA is currently raising a seed round to expand our team, secure regulatory licenses, and scale our user base across West Africa.
            </p>

            <div className="space-y-6">
              {[
                { title: "Vision", desc: "To become the unified financial operating system for the African continent." },
                { title: "Why Now", desc: "Smartphone penetration is accelerating, yet 60% of adults remain unbanked or underbanked." },
                { title: "Market Size", desc: "$30B+ projected fintech revenue by 2025 across Sub-Saharan Africa." },
                { title: "Use of Funds", desc: "Product engineering, licensing, and go-to-market execution." },
                { title: "Funding Stage", desc: "Seed Round" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-nexea-cyan pl-4">
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md lg:w-[450px]"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative text-nexea-navy">
              <h3 className="text-2xl font-bold font-poppins mb-2">Request Investor Deck</h3>
              <p className="text-gray-500 text-sm mb-6">Complete the form below to receive our full pitch deck and financial projections.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nexea-blue focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nexea-blue focus:bg-white transition-all" placeholder="john@venturefund.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Company / Fund</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nexea-blue focus:bg-white transition-all" placeholder="Sequoia Capital" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Investor Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nexea-blue focus:bg-white transition-all appearance-none">
                    <option value="" disabled selected>Select an option</option>
                    <option value="vc">Venture Capital</option>
                    <option value="angel">Angel Investor</option>
                    <option value="pe">Private Equity</option>
                    <option value="family_office">Family Office</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <Button className="w-full bg-nexea-blue hover:bg-blue-700 text-white py-6 rounded-xl font-bold mt-2 shadow-lg shadow-blue-500/30">
                  Request Access
                </Button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
