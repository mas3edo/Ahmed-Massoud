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
      color: "aurora-blue",
      gradient: "from-aurora-blue to-aurora-purple"
    },
    {
      year: "Mid 2024",
      title: "First Portfolio Projects",
      desc: "Created my first portfolio website and interactive games. Translated design concepts into working code.",
      icon: Code2,
      color: "aurora-purple",
      gradient: "from-aurora-purple to-aurora-red"
    },
    {
      year: "Late 2024",
      title: "Advanced Development",
      desc: "Architected complex systems including an E-Commerce platform and custom blog engine using React ecosystem.",
      icon: Cpu,
      color: "aurora-red",
      gradient: "from-aurora-red to-aurora-blue"
    },
    {
      year: "2025",
      title: "Modern Stack Mastery",
      desc: "Specialized in Next.js, TypeScript, and Tailwind CSS. Building professional-grade, highly optimized applications.",
      icon: Rocket,
      color: "aurora-blue",
      gradient: "from-aurora-blue to-aurora-purple"
    }
  ];

  return (
    <section className="relative min-h-screen py-32 flex flex-col items-center overflow-hidden">
      
      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 relative z-20">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 drop-shadow-sm dark:drop-shadow-md">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-purple">Journey</span>
            </h2>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-lg font-medium text-lg drop-shadow-none dark:drop-shadow-md">
            A timeline of my professional growth and technical evolution as a frontend developer.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Trace */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gray-300 dark:bg-white/10 z-0">
            <motion.div 
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute top-0 w-full bg-gradient-to-b from-aurora-blue via-aurora-purple to-aurora-red shadow-[0_0_15px_rgba(123,44,191,0.5)]" 
            />
          </div>

          <div className="space-y-16 md:space-y-24 relative z-10">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 50 }}
                  className={`relative flex flex-col md:flex-row items-center group/card ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Center Node */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-[#030014] border-2 border-gray-300 dark:border-white/20 z-20 flex items-center justify-center transition-all duration-500 group-hover/card:scale-125 group-hover/card:border-${exp.color} group-hover/card:shadow-[0_0_30px_rgba(0,85,255,0.4)] shadow-sm dark:shadow-none`}>
                    <div className={`w-4 h-4 rounded-full bg-gray-200 dark:bg-white/20 group-hover/card:bg-${exp.color} transition-colors duration-500 shadow-inner`} />
                  </div>

                  {/* Spacer for empty side */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full pl-16 sm:pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className={`glass-vibrant p-6 md:p-8 rounded-3xl transition-all duration-500 cursor-default hover:shadow-[0_0_40px_rgba(123,44,191,0.2)] hover:-translate-y-2 relative overflow-hidden`}>
                      
                      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${exp.gradient} rounded-full blur-3xl opacity-10 dark:opacity-20 group-hover/card:opacity-30 dark:group-hover/card:opacity-40 transition-opacity duration-500 pointer-events-none`} />

                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className={`font-bold text-xs md:text-sm tracking-widest text-white bg-gradient-to-r ${exp.gradient} px-4 py-1.5 rounded-full shadow-md`}>
                          {exp.year}
                        </span>
                        <exp.icon className={`w-6 h-6 text-gray-400 group-hover/card:text-${exp.color} transition-colors duration-500`} />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide drop-shadow-sm dark:drop-shadow-md relative z-10">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed text-sm md:text-base relative z-10">{exp.desc}</p>
                    
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
