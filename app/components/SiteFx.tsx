"use client";

import { useEffect } from "react";

export default function SiteFx() {
  useEffect(() => {
    /* Hero entrance */
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => document.body.classList.add("loaded"));
    });

    /* Reveal on scroll */
    const revealEls = document.querySelectorAll(".reveal");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io?.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
    }

    /* Hide nav on scroll down, show on scroll up */
    const nav = document.querySelector(".nav");
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (nav) {
          if (y > 140 && y > lastY) nav.classList.add("nav-hidden");
          else nav.classList.remove("nav-hidden");
        }
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Custom cursor (fine pointers only) */
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rafId = 0;
    const cleanups: Array<() => void> = [];
    if (finePointer && !reduceMotion) {
      const dot = document.createElement("div");
      const ring = document.createElement("div");
      dot.className = "cursor-dot";
      ring.className = "cursor-ring";
      dot.setAttribute("aria-hidden", "true");
      ring.setAttribute("aria-hidden", "true");
      document.body.appendChild(dot);
      document.body.appendChild(ring);
      let mx = -100, my = -100, rx = -100, ry = -100, on = false;
      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        if (!on) {
          on = true;
          rx = mx; ry = my;
          document.body.classList.add("has-cursor");
        }
      };
      document.addEventListener("mousemove", onMove, { passive: true });
      const loop = () => {
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        dot.style.transform = `translate(${mx - 3.5}px,${my - 3.5}px)`;
        ring.style.transform = `translate(${rx - 17}px,${ry - 17}px)`;
        rafId = window.requestAnimationFrame(loop);
      };
      rafId = window.requestAnimationFrame(loop);
      document.querySelectorAll("a, button").forEach((el) => {
        const enter = () => document.body.classList.add("cursor-hover");
        const leave = () => document.body.classList.remove("cursor-hover");
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
      cleanups.push(() => {
        document.removeEventListener("mousemove", onMove);
        window.cancelAnimationFrame(rafId);
        dot.remove();
        ring.remove();
      });
    }

    /* Cairo local time in footer */
    const timeEl = document.getElementById("localTime");
    const tick = () => {
      if (!timeEl) return;
      try {
        timeEl.textContent = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Cairo",
        }).format(new Date());
      } catch {
        timeEl.textContent = new Date().toTimeString().slice(0, 5);
      }
    };
    tick();
    const interval = window.setInterval(tick, 30000);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(interval);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
