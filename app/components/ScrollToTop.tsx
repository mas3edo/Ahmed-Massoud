"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Plane } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-8 right-8 z-50 pointer-events-none"
    >
      <button
        onClick={scrollToTop}
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-[#030014]/80 backdrop-blur-md shadow-[0_0_20px_rgba(123,44,191,0.3)] border border-white/10 group hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to top"
      >
        {/* SVG Circle Progress */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="26"
            className="stroke-white/10"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="28"
            cy="28"
            r="26"
            className="stroke-aurora-blue"
            strokeWidth="2"
            fill="none"
            style={{
              pathLength: scaleX,
            }}
            strokeDasharray="163.36" // 2 * pi * r (2 * 3.14159 * 26)
          />
        </svg>
        
        {/* Plane Icon */}
        <Plane className="w-5 h-5 text-white group-hover:text-aurora-blue group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 relative z-10" />
      </button>
    </motion.div>
  );
}
