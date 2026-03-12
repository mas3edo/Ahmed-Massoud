"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Code2, Rocket } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Started Frontend Development",
      desc: "Began my journey with HTML, CSS, and JavaScript fundamentals. Built core problem-solving logic.",
      icon: Terminal,
      nodeBorder: "border-neon-cyan",
      nodeBg: "bg-neon-cyan",
      shadow: "hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] hover:border-neon-cyan/50",
      textCol: "text-neon-cyan"
    },
    {
      year: "Mid 2024",
      title: "First Portfolio Projects",
      desc: "Created my first portfolio website and interactive games. Translated design concepts into working code.",
      icon: Code2,
      nodeBorder: "border-neon-magenta",
      nodeBg: "bg-neon-magenta",
      shadow: "hover:shadow-[0_0_30px_rgba(255,0,255,0.15)] hover:border-neon-magenta/50",
      textCol: "text-neon-magenta"
    },
    {
      year: "Late 2024",
      title: "Advanced Development",
      desc: "Architected complex systems including an E-Commerce platform and custom blog engine using React ecosystem.",
      icon: Cpu,
      nodeBorder: "border-neon-purple",
      nodeBg: "bg-neon-purple",
      shadow: "hover:shadow-[0_0_30px_rgba(181,55,242,0.15)] hover:border-neon-purple/50",
      textCol: "text-neon-purple"
    },
    {
      year: "2025",
      title: "Modern Stack Mastery",
      desc: "Specialized in Next.js, TypeScript, and Tailwind CSS. Building professional-grade, highly optimized applications.",
      icon: Rocket,
      nodeBorder: "border-white",
      nodeBg: "bg-white",
      shadow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-white/50",
      textCol: "text-white"
    }
  ];

  return (
    <section className="relative min-h-screen py-32 flex flex-col items-center">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-10" />

      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 relative z-20">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em] text-white">
              Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Logs</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-neon-cyan rounded-full shadow-[0_0_15px_rgba(0,243,255,0.8)]" />
          </div>
          <p className="mt-8 text-gray-400 font-mono tracking-widest text-xs md:text-sm uppercase">1+ Year Operational Time // 15+ System Deployments</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Glowing Trace */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-white/10 z-0">
            <motion.div 
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta shadow-[0_0_10px_rgba(0,243,255,0.5)]" 
            />
          </div>

          <div className="space-y-16 md:space-y-24 relative z-10">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center group/card ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Center Node */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050505] border-2 ${exp.nodeBorder} z-20 flex items-center justify-center transition-all duration-300 group-hover/card:scale-125 group-hover/card:shadow-[0_0_20px_var(--tw-shadow-color)] shadow-${exp.nodeBorder.split('-')[1]}`}>
                    <div className={`w-3 h-3 rounded-full ${exp.nodeBg} group-hover/card:animate-ping`} />
                  </div>

                  {/* Spacer for empty side */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'} w-full`}>
                    <div className={`glass p-6 md:p-8 rounded-2xl border border-white/5 transition-all duration-300 cursor-default ${exp.shadow}`}>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-mono text-xs md:text-sm tracking-widest font-bold ${exp.textCol}`}>
                          [{exp.year}]
                        </span>
                        <exp.icon className="w-6 h-6 text-gray-500 group-hover/card:text-white transition-colors" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wider">{exp.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">{exp.desc}</p>
                    
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
