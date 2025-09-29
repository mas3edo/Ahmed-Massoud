function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      {/* Add some top padding to account for fixed navbar */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ahmed Massoud
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
              Frontend Developer creating amazing web experiences with modern
              technologies
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#portfolio"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Additional content to showcase dark mode */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/20">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beautiful, modern interfaces that captivate users
              </p>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lightning-fast applications built for speed
              </p>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/20">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cutting-edge solutions for tomorrow&apos;s challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
