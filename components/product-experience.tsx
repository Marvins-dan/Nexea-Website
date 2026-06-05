"use client";

import { motion } from "framer-motion";

export default function ProductExperience() {
  const screens = ["Home Dashboard", "Wallet", "Swap Screen", "Rewards", "History"];

  return (
    <section className="py-32 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Product Experience</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A premium, intuitive interface designed for everyday use.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {screens.map((screen, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className={`p-4 rounded-xl cursor-pointer transition-colors ${i === 0 ? 'bg-white/10 border-l-4 border-white' : 'glass hover:bg-white/5 border border-white/5 border-l-4 border-transparent'}`}
              >
                <h4 className="font-medium text-lg">{screen}</h4>
              </motion.div>
            ))}
          </div>

          <div className="w-full md:w-2/3 flex justify-center perspective-[1000px]">
            <motion.div 
              initial={{ rotateY: 20, scale: 0.9 }}
              whileInView={{ rotateY: -10, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-[280px] sm:max-w-sm aspect-[9/19] rounded-[2.5rem] border-[8px] border-neutral-900 bg-neutral-950 shadow-2xl relative overflow-hidden"
            >
              {/* Screen Content Mockup */}
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black p-6 flex flex-col">
                <div className="flex justify-between items-center mb-8 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                    <div>
                      <div className="text-xs text-white/50">Good morning</div>
                      <div className="text-sm font-bold">Ahmed O.</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/80 rounded-sm"></div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <div className="text-sm text-white/60 mb-2">Total Balance</div>
                  <div className="text-3xl font-bold mb-4">$4,250.00</div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white/10 py-2 rounded-lg text-center text-sm font-medium">Add Money</div>
                    <div className="flex-1 bg-white text-black py-2 rounded-lg text-center text-sm font-medium">Send</div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="font-medium">Quick Actions</div>
                  <div className="text-xs text-white/50">See all</div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  {['Airtime', 'Data', 'Bills', 'Swap'].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        <div className="w-5 h-5 bg-white/40 rounded-md"></div>
                      </div>
                      <div className="text-[10px] text-white/60">{item}</div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 glass rounded-t-2xl p-4">
                  <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <div className="font-medium mb-4">Recent Activity</div>
                  {[1, 2].map(i => (
                    <div key={i} className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10"></div>
                        <div>
                          <div className="text-sm">MTN Airtime</div>
                          <div className="text-xs text-white/50">Today, 10:30 AM</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium">-$5.00</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
