"use client";

import { motion } from "framer-motion";
import { Phone, Droplets, Lightbulb, Tv, ArrowRightLeft, Trophy, ArrowRight } from "lucide-react";

const products = [
  {
    title: "Airtime & Topups",
    description: "Instant recharge across all major African telcos with zero hidden fees.",
    icon: <Phone className="text-white" size={24} />,
    color: "bg-blue-500",
  },
  {
    title: "Data Bundles",
    description: "Stay connected with affordable internet packages activated instantly.",
    icon: <Droplets className="text-white" size={24} />,
    color: "bg-cyan-500",
  },
  {
    title: "Electricity",
    description: "Pay your utility bills seamlessly without ever leaving the app.",
    icon: <Lightbulb className="text-white" size={24} />,
    color: "bg-yellow-500",
  },
  {
    title: "TV Subscriptions",
    description: "Renew your DStv, GOTv, and Startimes without service interruption.",
    icon: <Tv className="text-white" size={24} />,
    color: "bg-purple-500",
  },
  {
    title: "USDT Swaps",
    description: "Convert your local currency to digital dollars instantly on Stellar.",
    icon: <ArrowRightLeft className="text-white" size={24} />,
    color: "bg-nexea-navy",
  },
  {
    title: "NEXEA Rewards",
    description: "Earn points on every transaction and redeem for real value.",
    icon: <Trophy className="text-white" size={24} />,
    color: "bg-emerald-500",
  },
];

export default function ProductExperience() {
  return (
    <section id="product" className="py-24 bg-nexea-gray relative">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-poppins text-nexea-navy mb-6 tracking-tight"
          >
            One App. <span className="text-nexea-blue">Endless Possibilities.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Manage your daily expenses, pay bills, and access digital assets—all from a single, beautifully designed interface.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-nexea-blue/5 transition-all group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl ${product.color} flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110`}>
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nexea-blue transition-colors">{product.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="flex items-center text-nexea-blue font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Explore feature <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
