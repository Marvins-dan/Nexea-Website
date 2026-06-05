"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ahmedImage from "../Ahmedee-obada.png";
import danielImage from "../Daniel.png";
import godsonImage from "../Godson.png";
import maryannImage from "../Maryannn.png";

export default function Team() {
  const team = [
    { name: "Ahmed Obada", role: "Founder", bio: "Visionary leader with a passion for fintech and blockchain integration in emerging markets.", image: ahmedImage },
    { name: "Daniel Adebayo", role: "CTO & Co-Founder", bio: "Technical architect specializing in scalable decentralized applications and financial infrastructure.", image: danielImage },
    { name: "Godson Christian", role: "Marketing Strategist", bio: "Growth expert driving user acquisition and brand presence across key African markets.", image: godsonImage },
    { name: "MaryAnn Chima", role: "UI/UX Designer", bio: "Design thinking specialist creating intuitive and premium digital experiences for everyday users.", image: maryannImage },
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center text-gradient">Meet The Team</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 mx-auto mb-6 border border-white/10 flex items-center justify-center overflow-hidden relative">
                {member.image ? (
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                ) : (
                  <span className="text-2xl font-bold text-white/30">{member.name.charAt(0)}</span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
              <div className="text-sm text-center text-blue-400 mb-4">{member.role}</div>
              <p className="text-sm text-white/60 text-center leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
