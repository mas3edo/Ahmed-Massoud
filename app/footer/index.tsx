"use client";

import { Github, Linkedin, Mail, Smartphone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] overflow-hidden pt-24 pb-12">
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-neon-cyan/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Massive text background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none opacity-5">
          <h2 className="text-[15vw] leading-none font-black text-white tracking-tighter mix-blend-overlay">
            MASSOUD
          </h2>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 w-full mt-12 md:mt-32">
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com/mas3edo" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-black border border-white/10 hover:border-white hover:text-white transition-all text-gray-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group hover:-translate-y-1">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-masshoud-b495b730b" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-black border border-white/10 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all text-gray-500 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] group hover:-translate-y-1">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ahmedmasshoud929@gmail.com" className="p-4 rounded-xl bg-black border border-white/10 hover:border-red-500 hover:text-red-500 transition-all text-gray-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] group hover:-translate-y-1">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+201063308758" className="p-4 rounded-xl bg-black border border-white/10 hover:border-green-500 hover:text-green-500 transition-all text-gray-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] group hover:-translate-y-1">
              <Smartphone className="w-6 h-6" />
            </a>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-12 pt-8 border-t border-white/10 text-sm font-mono text-gray-500 tracking-widest uppercase">
            <span>&copy; {currentYear} Ahmed Massoud.</span>
            <div className="flex gap-4 sm:gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="hidden sm:inline">Systems</span> Online
              </span>
              <span className="text-white/20">|</span>
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Back To Top</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
