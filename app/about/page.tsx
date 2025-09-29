"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      {/* Hero Section with Photo */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="relative group">
                {/* Photo Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="aspect-[4/5] relative">
                    {/* Your Photo */}
                    <Image
                      src="/about.jpg"
                      alt="RYAD - Frontend Developer"
                      fill
                      className="object-cover object-center rounded-3xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      onError={() => setImageError(true)}
                    />

                    {/* Show placeholder only if image fails to load */}
                    {imageError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400/20 to-purple-600/20 border border-white/20 dark:border-gray-700/20 rounded-3xl">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <svg
                              className="w-12 h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">
                            RYAD
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                            Frontend Developer
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -right-6 top-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200/20 dark:border-gray-700/20 transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💻</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Developer
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        5+ Years
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-6 bottom-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200/20 dark:border-gray-700/20 transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎨</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Designer
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Creative
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    About <br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Ahmed Massoud
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Frontend Developer & Creative Problem Solver
                  </p>
                </div>

                {/* Story */}
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hello! I&apos;m Massoud, a passionate developer and designer
                    who loves creating digital experiences that make a
                    difference. With over 5 years of experience in web
                    development, I specialize in building modern, responsive
                    applications that users love.
                  </p>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My journey started with curiosity about how websites work,
                    and it has evolved into a deep passion for crafting
                    beautiful, functional, and accessible web experiences. I
                    believe that great design and clean code go hand in hand.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#portfolio"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    View My Work
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
    </main>
  );
}
