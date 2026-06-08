"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function JoinWaitlist() {
  return (
    <section className="py-24 bg-nexea-blue relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-poppins mb-6 tracking-tight"
        >
          Be the First to Experience NEXEA
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
        >
          Join our waitlist today to get early access to our platform and secure an exclusive lifetime zero-fee trading tier.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-full border border-white/20 flex flex-col md:flex-row gap-2"
        >
          <input 
            type="text" 
            placeholder="Your Name" 
            className="flex-1 bg-transparent border-none text-white px-6 py-4 focus:outline-none placeholder:text-blue-200"
            required
          />
          <div className="hidden md:block w-px h-8 bg-white/20 self-center"></div>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-1 bg-transparent border-none text-white px-6 py-4 focus:outline-none placeholder:text-blue-200"
            required
          />
          <Button className="bg-white text-nexea-blue hover:bg-gray-100 rounded-xl md:rounded-full px-8 py-4 h-auto font-bold shadow-lg w-full md:w-auto">
            Join Waitlist
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
