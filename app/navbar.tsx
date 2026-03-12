"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Zap, Briefcase, Code2, Mail } from "lucide-react";

const navItems = [
  { name: "Home", sectionId: "home", icon: Home },
  { name: "About", sectionId: "about", icon: User },
  { name: "Skills", sectionId: "skills", icon: Zap },
  { name: "Portfolio", sectionId: "portfolio", icon: Code2 },
  { name: "Experience", sectionId: "experience", icon: Briefcase },
  { name: "Contact", sectionId: "contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.sectionId);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 300;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Zone */}
          <div 
            className="flex-1 flex items-center gap-4 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative flex items-center justify-center w-12 h-12">
              <svg className="absolute inset-0 w-full h-full text-neon-cyan/20 group-hover:text-neon-cyan/50 transition-colors duration-500 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
              </svg>
              <div className="w-8 h-8 bg-neon-cyan/10 border border-neon-cyan/50 rounded flex items-center justify-center group-hover:bg-neon-cyan/20 transition-all duration-300">
                <span className="text-neon-cyan font-bold tracking-tighter text-sm">AM</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-[0.2em] text-sm uppercase leading-none mb-1">Massoud</span>
              <span className="text-neon-purple font-mono text-[9px] tracking-[0.3em] uppercase leading-none opacity-80">System.Dev</span>
            </div>
          </div>

          {/* Core Routes (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                className="group relative flex flex-col items-center justify-center h-full py-2"
              >
                <span className={`font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 z-10 ${
                  activeSection === item.sectionId
                    ? "text-neon-cyan shadow-neon-cyan font-bold"
                    : "text-gray-400 hover:text-white"
                }`}>
                  {item.name}
                </span>
                
                {/* Underline Active State */}
                {activeSection === item.sectionId && (
                  <motion.div
                    layoutId="desktopActiveLine"
                    className="absolute -bottom-2 w-full h-[2px] bg-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-white/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
              </button>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="h-6 w-px bg-white/10" />
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative px-6 py-2.5 overflow-hidden"
            >
              <div className="absolute inset-0 border border-neon-purple/50 bg-neon-purple/5 skew-x-[-15deg] group-hover:bg-neon-purple/20 transition-colors duration-300" />
              <span className="relative z-10 font-mono text-xs font-bold tracking-widest text-neon-purple group-hover:text-white transition-colors uppercase">
                Initialize Contact
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex-1 flex justify-end lg:hidden">
            <button
              className="relative z-50 p-2 text-white hover:text-neon-cyan transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <nav className="flex flex-col gap-8 items-center relative z-10 w-full px-6">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="group relative flex items-center justify-center w-full"
                >
                  <span className={`text-2xl md:text-3xl font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeSection === item.sectionId
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple scale-110"
                      : "text-gray-500 hover:text-white"
                  }`}>
                    {item.name}
                  </span>
                  {activeSection === item.sectionId && (
                    <motion.div
                      layoutId="mobileActiveItem"
                      className="absolute -left-4 w-1 h-full bg-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 + 0.2 }}
                className="w-full pt-8 mt-4 border-t border-white/10"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-4 bg-neon-purple/20 border border-neon-purple text-neon-purple font-bold tracking-[0.2em] uppercase hover:bg-neon-purple/40 hover:shadow-[0_0_30px_rgba(181,55,242,0.4)] transition-all duration-300"
                >
                  Initialize Contact
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
