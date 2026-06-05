"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
// Using absolute path for logo since we can't easily move it to public
// Wait, in Next.js you need a relative path from this file if it's outside src/public, let's use the correct relative path
import logo from "../NEXEA logo1.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute top-8 left-8 md:left-16 z-50">
        <Image src={logo} alt="NEXEA Logo" width={180} height={60} className="object-contain" priority />
      </div>

      <div className="container max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-4 mb-8 glass px-4 py-2 rounded-full border border-white/10"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-medium text-white/80">Built on Stellar</span>
          <span className="w-px h-4 bg-white/20"></span>
          <span className="text-sm font-medium text-white/80">Coming Soon</span>
          <span className="w-px h-4 bg-white/20"></span>
          <span className="text-sm font-medium text-white/80">Microtransactions from $0.50</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-gradient"
        >
          Finance Without Borders
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mb-12"
        >
          NEXEA combines everyday payments, blockchain utility, and digital rewards into one seamless ecosystem powered by Stellar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="bg-white text-black hover:bg-white/90 text-base px-8 h-14 rounded-full font-medium">
            Join Waitlist
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 h-14 rounded-full font-medium glass border-white/10 hover:bg-white/5">
            Request Investor Deck
          </Button>
        </motion.div>
      </div>
      
      {/* Abstract Phone Mockup visualization below hero text */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto mt-20 relative perspective-[1000px]"
      >
        <div className="w-full aspect-[21/9] rounded-t-3xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden relative" style={{ transform: "rotateX(20deg)", boxShadow: "0 -20px 100px rgba(255,255,255,0.05)" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
          {/* Mockup UI placeholders */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 rounded-[2rem] border border-white/20 bg-black/60 backdrop-blur-xl flex flex-col p-4 shadow-2xl">
            <div className="w-full flex justify-between items-center mb-6">
              <div className="w-8 h-8 rounded-full bg-white/10"></div>
              <div className="w-20 h-3 rounded-full bg-white/10"></div>
            </div>
            <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 mb-4 p-4 flex flex-col justify-end">
              <div className="text-xs text-white/50 mb-1">Total Balance</div>
              <div className="text-2xl font-bold">$12,450.00</div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-xl bg-white/5 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/20"></div>
                </div>
              ))}
            </div>
            <div className="flex-1 rounded-xl bg-white/5 border border-white/5 mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
