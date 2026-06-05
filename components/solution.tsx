"use client";

import { motion } from "framer-motion";

export default function Solution() {
  const cards = [
    { title: "Airtime", icon: "📶", color: "from-blue-500/20 to-blue-900/5" },
    { title: "Data", icon: "🌐", color: "from-indigo-500/20 to-indigo-900/5" },
    { title: "Bills", icon: "💡", color: "from-yellow-500/20 to-yellow-900/5" },
    { title: "Swaps", icon: "🔄", color: "from-cyan-500/20 to-cyan-900/5" },
    { title: "Rewards", icon: "🎁", color: "from-purple-500/20 to-purple-900/5" },
    { title: "Wallet", icon: "👛", color: "from-rose-500/20 to-rose-900/5" },
  ];

  return (
    <section className="py-32 px-4">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">The Solution</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-20">
          Everything exists inside one ecosystem. NEXEA unifies essential financial utilities, powering them with the speed and efficiency of the blockchain.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass p-8 rounded-3xl border border-white/5 bg-gradient-to-br ${card.color} flex flex-col items-center justify-center gap-4 cursor-pointer`}
            >
              <div className="text-5xl mb-2 filter drop-shadow-lg">{card.icon}</div>
              <h3 className="text-xl font-bold">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
