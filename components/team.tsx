"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

import ahmedImg from "../Ahmedee-obada.png";
import danielImg from "../Daniel.png";
import godsonImg from "../Godson.png";
import maryannImg from "../Maryannn.png";

const team = [
  {
    name: "Ahmed Obada",
    role: "Founder",
    bio: "Visionary leader driving the strategic direction of NEXEA. Expertise in blockchain technology and African financial markets.",
    image: ahmedImg,
    linkedin: "#",
  },
  {
    name: "Daniel Adebayo",
    role: "CTO & Co-Founder",
    bio: "Technical architect scaling NEXEA's infrastructure. Previously built high-availability payment systems across Africa.",
    image: danielImg,
    linkedin: "#",
  },
  {
    name: "Godson Christian",
    role: "Marketing Strategist",
    bio: "Growth expert focused on user acquisition and brand positioning within the competitive fintech landscape.",
    image: godsonImg,
    linkedin: "#",
  },
  {
    name: "MaryAnn Chima",
    role: "UI/UX Designer",
    bio: "Creating intuitive and beautiful digital experiences that make complex financial tools accessible to everyone.",
    image: maryannImg,
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-poppins text-nexea-navy mb-6 tracking-tight"
          >
            Built by Industry Experts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Our team brings together decades of experience in traditional finance, blockchain technology, and consumer software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 bg-white flex items-center justify-center">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-nexea-navy mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-nexea-blue mb-4">{member.role}</p>
              <p className="text-sm text-gray-600 mb-6 flex-1">
                {member.bio}
              </p>
              <a 
                href={member.linkedin} 
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-nexea-blue hover:border-nexea-blue transition-colors"
                aria-label={`LinkedIn of ${member.name}`}
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
