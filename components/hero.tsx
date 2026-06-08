"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import PhoneMockups from "./phone-mockups";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-20 px-4 overflow-hidden bg-nexea-gray">
      {/* Background Particles Placeholder */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-nexea-blue/5 blur-[120px]"></div>
        <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] rounded-full bg-nexea-cyan/5 blur-[120px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Side: Text and CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-nexea-blue animate-pulse"></span>
            <span className="text-sm font-semibold text-nexea-navy">Powered by Stellar</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-nexea-navy font-poppins"
          >
            Finance <br className="hidden lg:block" /> Without Borders
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-600 max-w-2xl lg:max-w-xl mb-10"
          >
            NEXEA combines payments, blockchain utility, rewards, and digital assets into one seamless ecosystem powered by Stellar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="bg-nexea-navy text-white hover:bg-gray-800 text-base px-8 h-14 rounded-full font-medium shadow-xl shadow-nexea-navy/10">
              Request Investor Deck
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-14 rounded-full font-medium border-gray-200 text-nexea-navy hover:bg-gray-50 bg-white">
              Join Waitlist
            </Button>
          </motion.div>
        </div>
        
        {/* Right Side: 3D Phone Mockups */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex-1 w-full max-w-2xl flex justify-center lg:justify-end relative"
        >
          {/* Decorative rings behind mockups */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border-[0.5px] border-nexea-blue/10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full border-[0.5px] border-nexea-cyan/10 pointer-events-none"></div>
          
          <PhoneMockups />
        </motion.div>
      </div>
    </section>
  );
}
