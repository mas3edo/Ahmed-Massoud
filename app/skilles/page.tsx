"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Figma, MonitorSmartphone, Settings, Cpu } from "lucide-react";

export default function Skills() {
  const skillsRow1 = [
    { name: "React", icon: Code2, color: "group-hover:text-aurora-blue", border: "hover:border-aurora-blue" },
    { name: "Next.js", icon: MonitorSmartphone, color: "group-hover:text-gray-900 dark:group-hover:text-white", border: "hover:border-gray-900 dark:hover:border-white" },
    { name: "TypeScript", icon: FileCode2, color: "group-hover:text-aurora-blue", border: "hover:border-aurora-blue" },
    { name: "Tailwind CSS", icon: Layout, color: "group-hover:text-aurora-purple", border: "hover:border-aurora-purple" },
    { name: "Framer Motion", icon: Cpu, color: "group-hover:text-aurora-red", border: "hover:border-aurora-red" },
    { name: "Node.js", icon: Terminal, color: "group-hover:text-aurora-blue", border: "hover:border-aurora-blue" },
  ];

  const skillsRow2 = [
    { name: "Figma", icon: Figma, color: "group-hover:text-aurora-red", border: "hover:border-aurora-red" },
    { name: "UI/UX Design", icon: Layout, color: "group-hover:text-aurora-purple", border: "hover:border-aurora-purple" },
    { name: "PostgreSQL", icon: Database, color: "group-hover:text-aurora-blue", border: "hover:border-aurora-blue" },
    { name: "Git", icon: Settings, color: "group-hover:text-aurora-red", border: "hover:border-aurora-red" },
    { name: "WebGL", icon: Code2, color: "group-hover:text-aurora-purple", border: "hover:border-aurora-purple" },
    { name: "GraphQL", icon: Database, color: "group-hover:text-aurora-blue", border: "hover:border-aurora-blue" },
  ];

  return (
    <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block relative group"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white relative z-10 drop-shadow-sm dark:drop-shadow-md">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-red">Stack</span>
          </h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium tracking-wide text-lg drop-shadow-none dark:drop-shadow-md"
        >
          Equipped with advanced toolsets to architect high-performance, visually stunning applications.
        </motion.p>
      </div>

      {/* Marquee Container 1 (Left to Right) */}
      <div className="relative w-full flex overflow-hidden py-6 -rotate-2 transform scale-110 mb-8" style={{ transform: "scale(1.1) rotate(-2deg) translateZ(0)" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-[#030014] dark:via-transparent dark:to-[#030014] z-10 pointer-events-none" />
        {/* We render the row twice to create the infinite scroll effect */}
        <div className="flex animate-marquee whitespace-nowrap min-w-full will-change-transform">
          {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, idx) => (
            <div 
              key={idx} 
              className={`mx-3 flex items-center justify-center bg-white dark:bg-[#0a0a0a] px-8 py-4 rounded-full border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors duration-300 gap-4 cursor-default group ${skill.border}`}
            >
              <skill.icon className={`w-6 h-6 text-gray-500 dark:text-gray-400 ${skill.color} transition-colors duration-300`} />
              <span className="text-gray-900 dark:text-white font-bold tracking-widest uppercase text-sm transition-colors duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Container 2 (Right to Left) */}
      <div className="relative w-full flex overflow-hidden py-6 rotate-2 transform scale-110" style={{ transform: "scale(1.1) rotate(2deg) translateZ(0)" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-[#030014] dark:via-transparent dark:to-[#030014] z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap min-w-full flex-row-reverse select-none will-change-transform">
          {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, idx) => (
            <div 
              key={idx} 
              className={`mx-3 flex items-center justify-center bg-white dark:bg-[#0a0a0a] px-8 py-4 rounded-full border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors duration-300 gap-4 cursor-default group ${skill.border}`}
            >
              <skill.icon className={`w-6 h-6 text-gray-500 dark:text-gray-400 ${skill.color} transition-colors duration-300`} />
              <span className="text-gray-900 dark:text-white font-bold tracking-widest uppercase text-sm transition-colors duration-300">{skill.name}</span>
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
