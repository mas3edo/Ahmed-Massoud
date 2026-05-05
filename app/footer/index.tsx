"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#030014] border-t border-gray-200 dark:border-gray-800/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <span className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
              MASSOUD.
            </span>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed mb-8">
              Crafting robust digital experiences and scalable applications. Always open to new challenges and creative collaborations.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com/mas3edo" icon={<Github className="w-5 h-5" />} ariaLabel="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/ahmed-masshoud-b495b730b" icon={<Linkedin className="w-5 h-5" />} ariaLabel="LinkedIn" />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-gray-900 dark:text-white font-bold tracking-wider uppercase text-sm mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-gray-900 dark:text-white font-bold tracking-wider uppercase text-sm mb-6">
              Contact
            </h3>
            <ul className="flex flex-col space-y-5">
              <li>
                <a href="mailto:ahmedmasshoud929@gmail.com" className="flex items-start gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <Mail className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">ahmedmasshoud929<br/>@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/201063308758" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <Phone className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+20 106 330 8758</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            &copy; {currentYear} Ahmed Massoud. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, ariaLabel }: { href: string, icon: React.ReactNode, ariaLabel: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={ariaLabel}
      className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
