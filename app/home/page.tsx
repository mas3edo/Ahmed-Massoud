"use client";

import { motion } from "framer-motion";
import { Palette, Zap, Rocket, ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-12 w-full overflow-hidden">
      
      {/* Subtle Background Glows (Performance optimized) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-aurora-blue/20 dark:bg-aurora-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-aurora-purple/20 dark:bg-aurora-purple/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side: Elegant Typography */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left w-full lg:w-1/2 flex flex-col items-start relative"
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-aurora-blue animate-pulse" />
            <span className="text-gray-900 dark:text-white font-mono text-xs uppercase tracking-[0.2em] font-bold">
              System Online
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6 overflow-visible w-full break-words md:break-normal"
          >
            <span className="block text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-lg">Creative</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 dark:from-white via-aurora-blue to-aurora-purple drop-shadow-sm dark:drop-shadow-md">
              Developer.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg mb-10 font-medium tracking-wide leading-relaxed border-l-2 border-aurora-blue pl-6"
          >
            I architect immersive, high-performance digital experiences that blur the boundary between elegant design and robust system architecture.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] text-center"
            >
              <span className="relative z-10 transition-colors duration-300">
                Explore Core
              </span>
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-100 dark:hover:bg-white/5 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 rounded-full hover:shadow-sm dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-center bg-white/50 dark:bg-transparent"
            >
              Initialize Contact
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: User Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          {/* Elegant Image Container */}
          <div className="relative w-full max-w-[200px] h-[250px] sm:max-w-[250px] sm:h-[320px] md:max-w-[350px] md:h-[450px] flex items-center justify-center perspective-1000 mt-8 lg:mt-0">
            
            {/* Glowing Backdrop */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-full h-full bg-gradient-to-tr from-aurora-blue to-aurora-purple rounded-[2rem] blur-3xl opacity-50"
            />
            
            {/* Profile Image Frame */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full h-full rounded-[2rem] bg-white dark:bg-white/[0.02] backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 dark:from-white/10 to-transparent pointer-events-none z-10" />
              
              <Image
                src="/about.jpg"
                alt="Ahmed Massoud"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-[#030014]/80 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Accent floating elements */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-6 md:-right-8 w-12 h-12 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl z-30 flex items-center justify-center shadow-lg"
            >
              <div className="w-2 h-2 bg-aurora-purple rounded-full" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 -left-6 md:-left-8 w-16 h-16 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full z-30 flex items-center justify-center shadow-lg"
            >
              <div className="w-3 h-3 bg-aurora-blue rounded-full opacity-70" />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Feature Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-7xl px-6 mx-auto w-full z-10"
      >
        {[
          { icon: Palette, title: "Aesthetics", desc: "Minimalist, high-contrast designs focused on pure user engagement.", color: "group-hover:text-gray-900 dark:group-hover:text-white", border: "hover:border-gray-400 dark:hover:border-white/50" },
          { icon: Zap, title: "Velocity", desc: "Blazing fast ecosystems built with modern React architecture.", color: "group-hover:text-aurora-blue", border: "hover:border-aurora-blue/50" },
          { icon: Rocket, title: "Innovation", desc: "Pushing boundaries with robust systems & flawless execution.", color: "group-hover:text-aurora-purple", border: "hover:border-aurora-purple/50" }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className={`group bg-white dark:bg-[#0a0a0a] p-8 rounded-3xl transition-all duration-300 border border-gray-200 dark:border-white/5 cursor-default shadow-sm hover:shadow-md dark:shadow-none ${feature.border}`}
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-6 border border-gray-100 dark:border-white/5 group-hover:bg-gray-100 dark:group-hover:bg-white/10 transition-colors duration-300">
              <feature.icon className={`w-6 h-6 text-gray-500 dark:text-gray-400 ${feature.color} transition-colors duration-300`} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-white/30 hidden md:block"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
