"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function JoinWaitlist() {
  const [type, setType] = useState<"investor" | "user">("investor");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to database here
  };

  return (
    <section className="py-32 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="glass p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Building The Future Of Everyday Finance</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Join us in revolutionizing financial utility. Whether you&apos;re an investor looking for the next big opportunity or a user wanting early access.
            </p>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
              <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
              <p className="text-white/60">We&apos;ve received your request and will be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative z-10">
              <div className="flex gap-2 p-1 bg-white/5 rounded-full mb-8">
                <button
                  type="button"
                  onClick={() => setType("investor")}
                  className={`flex-1 py-3 rounded-full text-sm font-medium transition-colors ${type === 'investor' ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
                >
                  For Investors
                </button>
                <button
                  type="button"
                  onClick={() => setType("user")}
                  className={`flex-1 py-3 rounded-full text-sm font-medium transition-colors ${type === 'user' ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
                >
                  For Users
                </button>
              </div>

              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 transition-colors"
                />
                <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base bg-white text-black hover:bg-white/90">
                  {type === "investor" ? "Request Investor Deck" : "Join Waitlist"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
