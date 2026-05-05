"use client";

import { motion } from "framer-motion";
import { User, Code, Layout, Coffee } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen py-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 z-10 relative">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="h-px bg-gradient-to-r from-transparent to-aurora-purple/50 flex-1" />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-md">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-purple">Me</span>
          </h2>
          <div className="h-px bg-gradient-to-l from-transparent to-aurora-blue/50 flex-1" />
        </motion.div>

        {/* Text Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col justify-center"
        >
          <div className="bg-white/50 dark:bg-white/[0.03] backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 md:p-14 rounded-[2rem] relative overflow-hidden group shadow-lg dark:shadow-none hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(0,85,255,0.2)] transition-shadow duration-500">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-aurora-red/10 dark:bg-aurora-red/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-aurora-blue/10 dark:bg-aurora-blue/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold tracking-wide mb-8 text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-md text-center">
                Crafting Digital Experiences
              </h3>

              <div className="space-y-6 text-gray-600 dark:text-gray-300 font-medium leading-relaxed text-lg text-center max-w-2xl mx-auto">
                <p>
                  I am Ahmed Massoud, a dedicated Frontend Developer specializing in constructing high-fidelity digital interfaces. With over a year of rigorous specialized experience, I architect web applications that execute flawlessly.
                </p>
                <p>
                  My objective is bridging the gap between highly aesthetic design systems and optimal algorithmic performance. I believe that an exceptional user interface requires an uncompromising foundation of clean, scalable logic.
                </p>
              </div>

              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                {[
                  { icon: Code, label: "Experience", value: "1+ YRS", color: "text-aurora-blue" },
                  { icon: Layout, label: "Projects", value: "15+", color: "text-aurora-purple" },
                  { icon: User, label: "Architecture", value: "Next.js", color: "text-aurora-red" },
                  { icon: Coffee, label: "Styling", value: "Tailwind", color: "text-gray-900 dark:text-white" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="border border-gray-200 dark:border-white/10 rounded-2xl p-3 sm:p-5 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md shadow-md dark:shadow-lg transition-all duration-300 group/stat flex flex-col items-center justify-center text-center relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-white/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300`} />
                    <stat.icon className={`w-8 h-8 mb-4 ${stat.color} drop-shadow-sm`} />
                    <span className="block text-gray-900 dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-1 w-full truncate">{stat.value}</span>
                    <span className="block text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold w-full truncate">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} 
                  className="relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex items-center justify-center gap-3 overflow-hidden group/btn"
                >
                  <span className="relative z-10 transition-colors duration-300">Let's Connect</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-purple transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
