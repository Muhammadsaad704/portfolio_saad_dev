"use client";

import React, { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const ParticleGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const hero = canvas.parentElement;
    if (!hero) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = (navigator.maxTouchPoints || 0) > 0 || window.matchMedia("(hover: none)").matches;
    if (reduced || isTouch) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let W = 0;
    let H = 0;
    let mx = -9999;
    let my = -9999;
    let animId: number;

    const resize = () => {
      W = canvas.width = hero.clientWidth;
      H = canvas.height = hero.clientHeight;
      dots = [];
      const n = Math.min(110, Math.floor((W * H) / 14000));
      for (let i = 0; i < n; i++) {
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
      }
    };

    resize();

    let lastW = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      resize();
    };

    const onMouseMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };

    const onMouseLeave = () => {
      mx = -9999;
      my = -9999;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;

        const dm = Math.hypot(d.x - mx, d.y - my);
        const glow = dm < 180 ? 1 - dm / 180 : 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.9 + glow * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 182, 255, ${0.38 + glow * 0.55})`;
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dist = Math.hypot(d.x - o.x, d.y - o.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(79, 182, 255, ${0.16 * (1 - dist / 130)})`;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-grid
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};
