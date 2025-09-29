"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu after clicking
      setIsMenuOpen(false);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - The Brand Story */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <span className="text-white text-xl font-bold tracking-tight">
                  M
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-2xl font-bold transition-colors duration-300 hover:opacity-80 ${
                  isScrolled
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                Massoud
              </button>
              <div
                className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Frontend Developer
              </div>
            </div>
          </div>

          {/* Desktop Navigation - The Journey */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: "Home", sectionId: "home", icon: "🏠" },
              { name: "About", sectionId: "about", icon: "👨‍💼" },
              { name: "Skills", sectionId: "skills", icon: "⚡" },
              { name: "Portfolio", sectionId: "portfolio", icon: "🎨" },
              { name: "Experience", sectionId: "experience", icon: "🚀" },
              { name: "Contact", sectionId: "contact", icon: "📞" },
            ].map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                className={`group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/50 ${
                  isScrolled
                    ? "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-gray-800 dark:text-white/90 hover:text-blue-600 dark:hover:text-white"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* CTA Button - The Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-gray-800 dark:text-white hover:bg-gray-100/20 dark:hover:bg-white/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                // Sun icon for light mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Let&apos;s Connect</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-gray-800 dark:text-white hover:bg-gray-100/20 dark:hover:bg-white/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-gray-800 dark:text-white hover:bg-gray-100/20 dark:hover:bg-white/10"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - The Mobile Experience */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 px-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl mx-4 my-4 shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
            <div className="space-y-3">
              {[
                { name: "Home", sectionId: "home", icon: "🏠" },
                { name: "About", sectionId: "about", icon: "👨‍💼" },
                { name: "Skills", sectionId: "skills", icon: "⚡" },
                { name: "Portfolio", sectionId: "portfolio", icon: "🎨" },
                { name: "Experience", sectionId: "experience", icon: "🚀" },
                { name: "Contact", sectionId: "contact", icon: "📞" },
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 bg-gray-50/50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md w-full text-left"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen
                      ? "slideInFromRight 0.5s ease-out forwards"
                      : "none",
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-lg">{item.name}</span>
                  <div className="ml-auto">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              ))}

              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700/50">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 w-full"
                >
                  <span>Let&apos;s Connect</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
