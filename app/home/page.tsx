"use client";

import { motion } from "framer-motion";
import { Palette, Zap, Rocket, ChevronDown } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 w-full overflow-hidden">
      
      {/* Background glow effects specific to hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 w-full flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border-neon-cyan/30">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span className="text-neon-cyan font-mono text-xs md:text-sm uppercase tracking-widest font-semibold">
            Ahmed Massoud // Creative Dev
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-[10vw] sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 overflow-hidden px-2 w-full max-w-full"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Digital
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple drop-shadow-[0_0_25px_rgba(0,243,255,0.4)]">
            Experience
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light tracking-wide px-4"
        >
          Engineering immersive, high-performance web applications that blur the boundary between cutting-edge design and robust architecture.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden border border-white rounded-full"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View Work
            </span>
            <div className="absolute inset-0 bg-neon-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 hover:border-neon-purple transition-all duration-300 rounded-full"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Feature Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 w-full z-10"
      >
        {[
          { icon: Palette, title: "Design", desc: "Pixel-perfect, hyper-modern aesthetics focused on engagement.", color: "group-hover:text-neon-cyan border-neon-cyan/20", shadow: "hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]" },
          { icon: Zap, title: "Performance", desc: "Blazing fast ecosystems built with Next.js & modern React.", color: "group-hover:text-yellow-400 border-yellow-400/20", shadow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]" },
          { icon: Rocket, title: "Innovation", desc: "Pushing boundaries with micro-interactions & fluid animations.", color: "group-hover:text-neon-purple border-neon-purple/20", shadow: "hover:shadow-[0_0_30px_rgba(181,55,242,0.1)]" }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className={`group glass p-8 rounded-3xl border border-white/5 transition-all duration-500 hover:-translate-y-2 cursor-default ${feature.shadow}`}
          >
            <div className={`w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 border ${feature.color} transition-colors duration-500`}>
              <feature.icon className={`w-7 h-7 text-gray-400 transition-colors duration-500 ${feature.color.split(" ")[0]}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{feature.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-600 hidden md:block"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
