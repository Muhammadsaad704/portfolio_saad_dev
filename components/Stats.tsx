"use client";

import React, { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = container.querySelectorAll<HTMLElement>("[data-count]");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          io.unobserve(el);

          const target = +(el.dataset.count || "0");
          if (reduced) {
            el.textContent = String(target);
            return;
          }

          let start: number | null = null;
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min(1, (ts - start) / 1100);
            el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section className="section" style={{ paddingTop: "90px", paddingBottom: 0 }}>
      <div
        ref={containerRef}
        data-rv
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: "18px",
        }}
      >
        {portfolioData.stats.map((stat, idx) => (
          <div key={idx} className="stat">
            <div className="n">
              <span data-count={stat.value}>0</span>
              <span
                style={{
                  background: "linear-gradient(135deg, #4FB6FF 0%, #3DDC84 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.suffix}
              </span>
            </div>
            <div className="l">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
