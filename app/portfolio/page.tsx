export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of web development projects, from e-commerce
            platforms to interactive games
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1: Main Portfolio */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-900">
              <iframe
                src="https://mas3edo.github.io/portfolio/"
                className="w-full h-full border-0"
                title="Main Portfolio"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Portfolio
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Main Portfolio
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My personal portfolio showcasing my work and skills
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
              </div>
              <a
                href="https://mas3edo.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium inline-block"
              >
                Visit Site
              </a>
            </div>
          </div>

          {/* Project 2: E-Commerce */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-900">
              <iframe
                src="https://mas3edo.github.io/E-Commerce/"
                className="w-full h-full border-0"
                title="E-Commerce Platform"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  E-Commerce
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                E-Commerce Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A modern e-commerce solution with shopping cart functionality
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
              </div>
              <a
                href="https://mas3edo.github.io/E-Commerce/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium inline-block"
              >
                Visit Site
              </a>
            </div>
          </div>

          {/* Project 3: Games */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-900">
              <iframe
                src="https://mas3edo.github.io/games/"
                className="w-full h-full border-0"
                title="Games Collection"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Games
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Games Collection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Interactive games built with vanilla JavaScript
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  HTML5
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  CSS3
                </span>
              </div>
              <a
                href="https://mas3edo.github.io/games/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium inline-block"
              >
                Visit Site
              </a>
            </div>
          </div>

          {/* Project 4: Blog */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-900">
              <iframe
                src="https://mas3edo.github.io/posts/"
                className="w-full h-full border-0"
                title="Blog & Posts"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Blog
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Blog & Posts
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A clean and modern blog platform for sharing thoughts
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
              </div>
              <a
                href="https://mas3edo.github.io/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium inline-block"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
