"use client";

import { motion } from "framer-motion";
import { Code2, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Main Portfolio",
      desc: "My personal digital imprint showcasing my core architecture and design patterns.",
      url: "https://mas3edo.github.io/portfolio/",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-neon-cyan/20 to-transparent border-neon-cyan/50 text-neon-cyan"
    },
    {
      title: "E-Commerce Platform",
      desc: "A high-performance e-commerce solution with dynamic shopping cart and optimized checkout flow.",
      url: "https://mas3edo.github.io/E-Commerce/",
      tags: ["React", "CSS", "JavaScript"],
      color: "from-green-500/20 to-transparent border-green-500/50 text-green-400"
    },
    {
      title: "Games Collection",
      desc: "A collection of interactive experiences built entirely utilizing vanilla DOM manipulation.",
      url: "https://mas3edo.github.io/games/",
      tags: ["JavaScript", "HTML5", "CSS3"],
      color: "from-neon-magenta/20 to-transparent border-neon-magenta/50 text-neon-magenta"
    },
    {
      title: "Fashion Store",
      desc: "A modern, highly aesthetic fashion e-commerce interface showcasing premium products.",
      url: "https://task2-chi-rust.vercel.app",
      tags: ["Next.js", "Tailwind", "JavaScript"],
      color: "from-pink-500/20 to-transparent border-pink-500/50 text-pink-400"
    },
    {
      title: "Sofra Restaurant",
      desc: "A delectable restaurant website demo with an immersive menu and dining UI.",
      url: "https://my-task-flax-five.vercel.app",
      tags: ["React", "Tailwind", "JavaScript"],
      color: "from-amber-500/20 to-transparent border-amber-500/50 text-amber-400"
    }
  ];

  return (
    <section className="relative min-h-screen py-32 flex flex-col items-center overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
              Featured
            </h2>
            <div className="h-2 flex-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDBmM2ZmIiAvPgo8L3N2Zz4=')] opacity-50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 ml-12 md:ml-24">
            Deployments
          </h2>
          <p className="mt-8 ml-12 md:ml-24 text-gray-400 max-w-xl font-light text-lg">
            A curated selection of high-performance web applications and interactive experiences engineered for optimal user engagement.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32 w-full">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                
                {/* Project Visual (Iframe wrapper) */}
                <div className="w-full lg:w-3/5 group">
                  <div className={`relative w-full aspect-[16/10] sm:aspect-video rounded-xl md:rounded-3xl overflow-hidden glass border-2 transition-all duration-500 ${project.color.split(' ')[1]}`}>
                    
                    {/* Cyber-deck window header */}
                    <div className="absolute top-0 inset-x-0 h-8 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-2 z-20">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <div className="ml-4 font-mono text-[10px] text-gray-400 tracking-widest uppercase">{project.title.replace(/\s+/g, '_').toLowerCase()}.exe</div>
                    </div>

                    <div className="absolute inset-0 pt-8 z-10 bg-[#050505]">
                      {/* Overlay to prevent accidental iframe capture taking over scroll */}
                      <div className="absolute inset-0 z-20 hover:pointer-events-none transition-opacity bg-black/20 group-hover:opacity-0" />
                      <iframe
                        src={project.url}
                        className="w-full h-full border-0 filter grayscale-[50%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
                        title={project.title}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? '' : 'lg:items-end lg:text-right'}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${project.color.split(' ')[0]} border ${project.color.split(' ')[1]} mb-6`}>
                    <Code2 className={`w-4 h-4 ${project.color.split(' ')[2]}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${project.color.split(' ')[2]}`}>System.{idx+1}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 font-light leading-relaxed text-lg mb-8 max-w-lg">
                    {project.desc}
                  </p>

                  <div className={`flex flex-wrap gap-2 mb-10 ${isEven ? '' : 'lg:justify-end'}`}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-gray-300 tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`flex items-center gap-4 ${isEven ? '' : 'lg:justify-end'}`}>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn relative px-6 py-3 bg-white text-black font-mono font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300 hover:bg-gray-200 flex items-center gap-3 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                      <span className="relative z-10">INITIALIZE</span>
                      <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
