"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Figma, MonitorSmartphone, Settings, Cpu } from "lucide-react";

export default function Skills() {
  const skillsRow1 = [
    { name: "React", icon: Code2, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: MonitorSmartphone, color: "text-white" },
    { name: "TypeScript", icon: FileCode2, color: "text-[#3178C6]" },
    { name: "Tailwind CSS", icon: Layout, color: "text-[#38B2AC]" },
    { name: "Framer Motion", icon: Cpu, color: "text-neon-purple" },
    { name: "Node.js", icon: Terminal, color: "text-[#339933]" },
  ];

  const skillsRow2 = [
    { name: "Figma", icon: Figma, color: "text-[#F24E1E]" },
    { name: "UI/UX Design", icon: Layout, color: "text-neon-magenta" },
    { name: "PostgreSQL", icon: Database, color: "text-[#336791]" },
    { name: "Git", icon: Settings, color: "text-[#F05032]" },
    { name: "WebGL", icon: Code2, color: "text-[#990000]" },
    { name: "GraphQL", icon: Database, color: "text-[#E10098]" },
  ];

  // Helper component to fix the icon import issue inline for the first row since we didn't import FileCode2
  return (
    <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block relative group"
        >
          <div className="absolute inset-0 bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white relative z-10">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-magenta">Stack</span>
          </h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto font-light tracking-wide"
        >
          Equipped with advanced toolsets to architect high-performance, visually stunning applications.
        </motion.p>
      </div>

      {/* Marquee Container 1 (Left to Right) */}
      <div className="relative w-full flex overflow-hidden py-4 -rotate-2 transform scale-110 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
        {/* We render the row twice to create the infinite scroll effect */}
        <div className="flex animate-marquee whitespace-nowrap min-w-full group">
          {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, idx) => (
            <div 
              key={idx} 
              className="mx-4 flex items-center justify-center glass px-8 py-4 rounded-full border border-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all duration-300 gap-4"
            >
              <skill.icon className={`w-6 h-6 ${skill.color}`} />
              <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Container 2 (Right to Left) */}
      <div className="relative w-full flex overflow-hidden py-4 rotate-2 transform scale-110">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap min-w-full flex-row-reverse group select-none">
          {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, idx) => (
            <div 
              key={idx} 
              className="mx-4 flex items-center justify-center glass px-8 py-4 rounded-full border border-white/5 hover:border-neon-purple/50 hover:shadow-[0_0_20px_rgba(181,55,242,0.2)] transition-all duration-300 gap-4"
            >
              <skill.icon className={`w-6 h-6 ${skill.color}`} />
              <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

function FileCode2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 18 3-3-3-3" />
      <path d="m5 12-3 3 3 3" />
    </svg>
  );
}
