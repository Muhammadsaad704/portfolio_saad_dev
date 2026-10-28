"use client";

import React, { useEffect } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_<>{}#";

// Briefly "decodes" an element's text from random glyphs, left to right
function scramble(el: HTMLElement) {
  const final = el.dataset.text ?? el.textContent ?? "";
  el.dataset.text = final;
  const start = performance.now();
  const duration = 700;
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const settled = Math.floor(final.length * p);
    let out = final.slice(0, settled);
    for (let i = settled; i < final.length; i++) {
      out += final[i] === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    el.textContent = out;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

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
            el.querySelectorAll<HTMLElement>(".sec-tag").forEach(scramble);
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

    // Header shadow and back-to-top button once the page has scrolled
    const header = document.querySelector("header.site");
    const toTop = document.querySelector(".to-top");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        header?.classList.toggle("scrolled", window.scrollY > 12);
        toTop?.classList.toggle("show", window.scrollY > window.innerHeight);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the nav link of the section currently in view
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.navlinks a[href^="#"]');
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${en.target.id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((link) => {
      const section = document.getElementById(link.getAttribute("href")!.slice(1));
      if (section) spy.observe(section);
    });

    // Cursor spotlight on cards: one delegated listener, only updates two CSS vars
    let spotEl: HTMLElement | null = null;
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const card = (e.target as HTMLElement).closest?.<HTMLElement>(".spot");
      if (spotEl && spotEl !== card) {
        spotEl.style.removeProperty("--mx");
        spotEl.style.removeProperty("--my");
      }
      spotEl = card ?? null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    if (!reduced) document.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      io.disconnect();
      spy.disconnect();
      document.removeEventListener("click", handleAnchorClick);
      document.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
};
