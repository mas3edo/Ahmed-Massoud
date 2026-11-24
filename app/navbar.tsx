"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="nav" id="top">
      <a className="nav-mark" href="#home" aria-label="Ahmed Massoud, back to top">
        AM<span className="nav-mark-reg">®</span>
      </a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#portfolio"><span className="nav-idx">01</span>Work</a>
        <a href="#about"><span className="nav-idx">02</span>About</a>
        <a href="#experience"><span className="nav-idx">03</span>Experience</a>
        <a href="#contact"><span className="nav-idx">04</span>Contact</a>
      </nav>
      <div className="nav-right">
        <span className="nav-locale">Cairo,&nbsp;EG</span>
        <button
          className="theme-toggle"
          type="button"
          aria-label="Toggle colour theme"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted ? (resolvedTheme === "dark" ? "Light" : "Dark") : "Theme"}
        </button>
      </div>
    </header>
  );
}
