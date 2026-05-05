"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Wasl Agency",
      desc: "A comprehensive digital marketing agency website connecting brands to their target audiences in Kuwait and the Gulf.",
      url: "https://wasl-nine.vercel.app",
      tags: ["Next.js", "Marketing", "Agency", "SEO"],
      color: "from-aurora-blue to-aurora-purple",
    },
    {
      title: "Main Portfolio",
      desc: "My personal digital imprint showcasing my core architecture and design patterns.",
      url: "https://mas3edo.github.io/portfolio/",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-aurora-purple to-aurora-red",
    },
    {
      title: "E-Commerce Platform",
      desc: "A high-performance e-commerce solution with dynamic shopping cart and optimized checkout flow.",
      url: "https://mas3edo.github.io/E-Commerce/",
      tags: ["React", "CSS", "JavaScript"],
      color: "from-aurora-red to-aurora-blue",
    },
    {
      title: "Games Collection",
      desc: "A collection of interactive experiences built entirely utilizing vanilla DOM manipulation.",
      url: "https://mas3edo.github.io/games/",
      tags: ["JavaScript", "HTML5", "CSS3"],
      color: "from-aurora-blue to-aurora-red",
    },
    {
      title: "Fashion Store",
      desc: "A modern, highly aesthetic fashion e-commerce interface showcasing premium products.",
      url: "https://task2-chi-rust.vercel.app",
      tags: ["Next.js", "Tailwind", "JavaScript"],
      color: "from-aurora-purple to-aurora-blue",
    },
    {
      title: "Beige E-Commerce",
      desc: "A next-generation e-commerce platform currently under construction and actively being engineered.",
      url: "https://ecommerce-app-beige-alpha.vercel.app/",
      tags: ["Next.js", "Loading", "In Progress"],
      color: "from-aurora-red to-aurora-purple",
    },
    {
      title: "Sofra Restaurant",
      desc: "A delectable restaurant website demo with an immersive menu and dining UI.",
      url: "https://my-task-flax-five.vercel.app",
      tags: ["React", "Tailwind", "JavaScript"],
      color: "from-aurora-blue to-aurora-purple",
    }
  ];

  return (
    <section className="relative min-h-screen py-32 flex flex-col items-center overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-md">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-purple">Works</span>
            </h2>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl font-medium text-lg drop-shadow-none dark:drop-shadow-md">
            A curated selection of high-performance web applications and interactive experiences engineered for optimal user engagement.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32 w-full">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", type: "spring" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                
                {/* Project Visual */}
                <div className="w-full lg:w-3/5 group">
                  <div className={`relative w-full aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden bg-white/50 dark:bg-white/5 backdrop-blur-md p-2 transition-all duration-500 shadow-md hover:shadow-[0_0_40px_rgba(123,44,191,0.2)] dark:hover:shadow-[0_0_40px_rgba(123,44,191,0.3)] hover:scale-[1.03] hover:-translate-y-2 border border-gray-200 dark:border-white/10`}>
                    
                    <div className="absolute inset-2 z-10 bg-gray-100 dark:bg-[#030014] rounded-2xl overflow-hidden border border-gray-300 dark:border-white/10">
                      {/* Overlay */}
                      <div className="absolute inset-0 z-20 hover:pointer-events-none transition-opacity bg-gradient-to-b from-transparent to-gray-900/40 dark:to-[#030014]/80 group-hover:opacity-0 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/50 dark:bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                           <span className="text-gray-900 dark:text-white text-sm font-bold tracking-widest uppercase">Explore Project</span>
                           <ArrowUpRight className="w-4 h-4 text-gray-900 dark:text-white" />
                        </div>
                      </div>
                      <iframe
                        src={project.url}
                        className="w-full h-full border-0 filter contrast-100 dark:contrast-125 saturate-100 dark:saturate-50 group-hover:saturate-100 transition-all duration-700"
                        title={project.title}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? '' : 'lg:items-end lg:text-right'}`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/10 bg-gradient-to-r ${project.color} bg-opacity-10 dark:bg-opacity-20 backdrop-blur-sm mb-6 shadow-sm`}>
                    <Code2 className="w-4 h-4 text-gray-900 dark:text-white drop-shadow-sm" />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white drop-shadow-sm">Project {idx+1}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 drop-shadow-sm dark:drop-shadow-md">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed text-lg mb-8 max-w-lg drop-shadow-none dark:drop-shadow-md">
                    {project.desc}
                  </p>

                  <div className={`flex flex-wrap gap-2 mb-10 ${isEven ? '' : 'lg:justify-end'}`}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-white/[0.05] backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-800 dark:text-white tracking-widest uppercase shadow-sm transition-all hover:bg-gray-200 dark:hover:bg-white/10 hover:-translate-y-0.5 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`flex items-center gap-4 ${isEven ? '' : 'lg:justify-end'}`}>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] rounded-full flex items-center gap-3 overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">{project.tags.includes("Loading") ? "In Progress" : "Visit Website"}</span>
                      <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0`} />
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
