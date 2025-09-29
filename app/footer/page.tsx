"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: "⚡",
      url: "https://github.com/mas3edo",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/ahmed-masshoud-b495b730b",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:ahmedmasshoud929@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "Phone",
      icon: "📱",
      url: "tel:+201063308758",
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold tracking-tight">
                      M
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Massoud</h3>
                  <p className="text-sm text-gray-400 tracking-widest uppercase">
                    Frontend Developer
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Passionate frontend developer with one year of experience
                creating modern, responsive web applications. Always learning
                and growing in the world of web development.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.name === "Email" || social.name === "Phone"
                        ? "_self"
                        : "_blank"
                    }
                    rel={
                      social.name === "Email" || social.name === "Phone"
                        ? ""
                        : "noopener noreferrer"
                    }
                    className={`group relative w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></span>
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-red-400">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:ahmedmasshoud929@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      ahmedmasshoud929@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-green-400">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href="tel:+201063308758"
                      className="text-white hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      +201063308758
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">🌍</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white text-sm">Egypt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills/Tech Stack */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-semibold mb-6 text-white text-center">
              Tech Stack
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Responsive Design",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full text-sm transition-all duration-300 transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Massoud. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for projects</span>
                </span>
                <span className="hidden md:block">•</span>
                <span>Response within 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
