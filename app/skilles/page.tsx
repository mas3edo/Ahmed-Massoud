export default function Skills() {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I specialize in frontend development, creating beautiful and
              interactive user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚛️",
                title: "React & Next.js",
                skills: ["React", "Next.js", "TypeScript", "JavaScript"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🎨",
                title: "Styling & Design",
                skills: ["Tailwind CSS", "CSS3", "SASS", "Styled Components"],
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "📱",
                title: "Responsive Design",
                skills: ["Mobile-First", "Flexbox", "Grid", "Media Queries"],
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: "✨",
                title: "UI/UX Design",
                skills: [
                  "Figma",
                  "Design Systems",
                  "Prototyping",
                  "User Experience",
                ],
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "�",
                title: "Frontend Tools",
                skills: ["Webpack", "Vite", "ESLint", "Prettier"],
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: "🔧",
                title: "Development",
                skills: ["Git", "GitHub", "VS Code", "Chrome DevTools"],
                color: "from-gray-500 to-slate-500",
              },
            ].map((skill, index) => (
              <div
                key={skill.title}
                className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            My Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🎯",
                title: "Purpose-Driven",
                description:
                  "Every project should solve real problems and create meaningful impact.",
              },
              {
                icon: "✨",
                title: "Quality First",
                description:
                  "Clean code, beautiful design, and excellent user experience are non-negotiable.",
              },
              {
                icon: "🌱",
                title: "Continuous Growth",
                description:
                  "Always learning, always improving, always pushing boundaries.",
              },
            ].map((value) => (
              <div key={value.title} className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Ready to bring your ideas to life? I&apos;d love to hear about your
            project and explore how we can work together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
            </a>
            <a
              href="#portfolio"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              See My Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
