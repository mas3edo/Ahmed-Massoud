"use client";

import { useEffect, useState } from "react";

const links = [
  ["top", "home"],
  ["about", "about"],
  ["work", "work"],
  ["path", "journey"],
  ["contact", "contact"],
] as const;

export default function Dock() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((window.scrollY / Math.max(1, h.scrollHeight - window.innerHeight)) * 100);
      let a = 0;
      links.forEach(([id], i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) a = i;
      });
      setActive(a);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div className="bar" style={{ width: `${progress}%` }} />
      <header className="dock">
        <a className="logo" href="#top" aria-label="Ahmed Massoud, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" width={34} height={34} />
        </a>
        {links.map(([id, label], i) => (
          <a key={id} className={`l${active === i ? " on" : ""}`} href={`#${id}`}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {label}
          </a>
        ))}
        <button className="k" onClick={() => setOpen(true)} aria-label="Open command menu">⌘K</button>
        <a className="hire" href="mailto:ahmedmasshoud929@gmail.com">Hire me</a>
      </header>
      <div className={`pal${open ? " o" : ""}`} onClick={() => setOpen(false)}>
        <div onClick={(e) => e.stopPropagation()}>
          <input placeholder="Jump to..." readOnly />
          <a href="#work" onClick={() => setOpen(false)}>Selected work</a>
          <a href="#about" onClick={() => setOpen(false)}>About me</a>
          <a href="#path" onClick={() => setOpen(false)}>Journey</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="https://github.com/mas3edo" target="_blank" rel="noopener noreferrer">Open GitHub <span>↗</span></a>
        </div>
      </div>
    </>
  );
}
