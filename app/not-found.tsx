"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] lg:text-[15rem] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-none animate-pulse">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have wandered off into the
            digital void. Don&apos;t worry, even the best developers lose their
            way sometimes!
          </p>
        </div>

        {/* Floating Elements Animation */}
        <div className="relative mb-12 h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Floating Icons */}
            <div
              className="absolute animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "2s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl transform -translate-x-20 -translate-y-4">
                🔍
              </div>
            </div>
            <div
              className="absolute animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl transform translate-x-16 translate-y-6">
                💻
              </div>
            </div>
            <div
              className="absolute animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "3s" }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl transform -translate-x-8 translate-y-8">
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Home */}
          <Link
            href="/"
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-white">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Go Home
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Return to the main portfolio page
            </p>
          </Link>

          {/* Portfolio */}
          <button
            onClick={() => {
              window.location.href = "/#portfolio";
              setTimeout(() => scrollToSection("portfolio"), 100);
            }}
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-white">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              View Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Check out my latest projects
            </p>
          </button>

          {/* Contact */}
          <button
            onClick={() => {
              window.location.href = "/#contact";
              setTimeout(() => scrollToSection("contact"), 100);
            }}
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-white">📞</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Let&apos;s discuss your next project
            </p>
          </button>
        </div>

        {/* Fun Error Messages */}
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            What might have happened?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔗</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Broken Link
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The link you followed might be outdated
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⌨️</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Typo in URL
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Check the address bar for any mistakes
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🚧</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Under Construction
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This page might be coming soon
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🌐</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Moved or Deleted
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The page might have been relocated
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.history.back()}
            className="group bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Go Back</span>
          </button>

          <Link
            href="/"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Visit Homepage</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Lost? No worries! Even the best developers encounter 404s.
            <br className="hidden sm:block" />
            Let&apos;s get you back on track! 🚀
          </p>
        </div>
      </div>
    </main>
  );
}
