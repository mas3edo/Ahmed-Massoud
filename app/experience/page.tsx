export default function Experience() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One year of passionate frontend development with multiple successful
            projects
          </p>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <span className="text-2xl font-bold text-white">1+</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Year of Development Experience
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Dedicated to creating modern, responsive web applications with
                cutting-edge technologies
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-6 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center p-6 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Learning & Growing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            My Development Journey
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Started Learning */}
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Started Frontend Development
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      2024
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Began my journey with HTML, CSS, and JavaScript fundamentals
                  </p>
                </div>
              </div>

              {/* First Projects */}
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      First Portfolio Projects
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Mid 2024
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Created my first portfolio website and interactive games
                    using vanilla JavaScript
                  </p>
                </div>
              </div>

              {/* Advanced Projects */}
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Advanced Development
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Late 2024
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built complex projects including E-Commerce platform and
                    blog system with React
                  </p>
                </div>
              </div>

              {/* Current */}
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Modern Stack Mastery
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      2025
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Currently working with Next.js, TypeScript, and Tailwind CSS
                    for professional-grade applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let&apos;s create something amazing with my one year of experience
              and passion for development
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
