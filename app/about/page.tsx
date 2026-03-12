"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Database, Cpu } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-screen py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="h-px bg-gradient-to-r from-transparent to-neon-cyan flex-1 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white">
            System <span className="text-neon-cyan text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">Overview</span>
          </h2>
          <div className="h-px bg-gradient-to-l from-transparent to-neon-cyan flex-1 opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Holographic Avatar Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto group">
              {/* Sci-fi framing */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none transition-all duration-500 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]" />
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-neon-cyan rounded-tl-2xl z-20 pointer-events-none transition-all group-hover:scale-110 origin-top-left" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-neon-purple rounded-br-2xl z-20 pointer-events-none transition-all group-hover:scale-110 origin-bottom-right" />
              
              <div className="absolute inset-2 bg-[#050505] rounded-xl overflow-hidden glass">
                <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
                
                <Image
                  src="/about.jpg"
                  alt="Ahmed Massoud"
                  fill
                  className={`object-cover object-center filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 ${imageError ? 'hidden' : 'block'}`}
                  onError={() => setImageError(true)}
                />
                
                {imageError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-0">
                    <Cpu className="w-16 h-16 text-neon-cyan mb-4 animate-pulse-slow" />
                    <p className="text-neon-cyan font-mono text-xs tracking-widest uppercase">Entity ID: Massoud</p>
                  </div>
                )}
                
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-20 pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>
            </div>
            
            {/* Floating Data Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-2 md:-right-8 top-20 glass-neon px-4 py-2 rounded-lg flex items-center gap-3 z-30"
            >
              <Terminal className="text-neon-cyan w-4 h-4" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-mono">Core Status</span>
                <span className="text-xs text-white font-bold tracking-wider">ONLINE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Console Text Container */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="glass p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-3">
                  <Database className="w-6 h-6 text-neon-purple" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Data Imprint
                  </span>
                </h3>

                <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                  <p>
                    <strong className="inline-block text-neon-cyan font-mono mr-3 tracking-widest">&gt; INIT:</strong>
                    I am Massoud, a dedicated Frontend Developer specializing in constructing high-fidelity digital interfaces. With over a year of rigorous specialized experience, I architect web applications that execute flawlessly.
                  </p>
                  <p>
                    <strong className="inline-block text-neon-purple font-mono mr-3 tracking-widest">&gt; DIRECTIVE:</strong>
                    My objective is bridging the gap between highly aesthetic design systems and optimal algorithmic performance. I believe that an exceptional user interface requires an uncompromising foundation of clean, scalable logic.
                  </p>
                </div>

                {/* Micro Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  {[
                    { label: "Experience", value: "1+ YRS" },
                    { label: "Projects", value: "15+" },
                    { label: "Architecture", value: "Next.js" },
                    { label: "Styling", value: "Tailwind" },
                  ].map((stat, idx) => (
                    <div key={idx} className="border border-white/5 rounded-xl p-4 bg-black/40 hover:bg-black/60 hover:border-neon-cyan/30 transition-all duration-300 group/stat">
                      <span className="block text-white group-hover/stat:text-neon-cyan transition-colors text-2xl font-black mb-1">{stat.value}</span>
                      <span className="block text-[10px] text-gray-500 font-mono uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="group relative px-6 py-3 bg-white/5 border border-white/10 hover:border-white/30 text-white text-sm font-bold uppercase tracking-widest transition-all rounded-full overflow-hidden flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-purple group-hover:animate-ping" />
                    Initialize Contact
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
