"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", sectionId: "home" },
  { name: "About", sectionId: "about" },
  { name: "Skills", sectionId: "skills" },
  { name: "Portfolio", sectionId: "portfolio" },
  { name: "Experience", sectionId: "experience" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navItems.map(item => item.sectionId).concat("contact");
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled 
            ? "bg-white/95 dark:bg-[#030014]/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/10" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
              <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                MASSOUD.
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`text-[15px] font-medium transition-colors ${
                      isActive 
                        ? "text-blue-600 dark:text-blue-400" 
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-6">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="text-[15px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 transition-colors"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  Theme
                </button>
              )}
              
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2.5 rounded-full text-[15px] font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
              >
                Let&apos;s Talk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 dark:text-white p-2 -mr-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#030014] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-2xl font-bold text-gray-900 dark:text-white text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-4 rounded-full bg-blue-600 text-white font-medium text-lg"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
