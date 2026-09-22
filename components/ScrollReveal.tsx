"use client";

import React, { useEffect } from "react";

export const ScrollReveal: React.FC = () => {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          io.unobserve(el);
          const d = +(el.getAttribute("data-rvd") || 0) * 90;
          setTimeout(() => {
            el.classList.add("on");
          }, d);
        });
      },
      { rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll<HTMLElement>("[data-rv]");
    elements.forEach((el) => {
      if (reduced) {
        el.classList.add("on");
      } else {
        io.observe(el);
      }
    });

    // Smooth anchor scrolling handler
    const handleAnchorClick = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      const a = targetEl.closest && targetEl.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;
      const id = href.slice(1);
      const target = id ? document.getElementById(id) : document.body;
      if (!target) return;
      e.preventDefault();
      const to = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 70);
      if (reduced) {
        window.scrollTo(0, to);
      } else {
        window.scrollTo({ top: to, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      io.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
};
