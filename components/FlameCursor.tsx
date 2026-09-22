"use client";

import React, { useEffect, useRef } from "react";

interface FlameParticle {
  x: number;
  y: number;
  life: number;
  r: number;
  dx: number;
  dy: number;
  hot: number;
}

export const FlameCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    canvas.style.display = "block";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animId: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    resize();

    let lw = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lw && Math.abs(window.innerHeight - H) < 140) return;
      lw = window.innerWidth;
      resize();
    };

    const pts: FlameParticle[] = [];
    let lx: number | null = null;
    let ly: number | null = null;

    const isTouchDev =
      (navigator.maxTouchPoints || 0) > 0 ||
      window.matchMedia("(hover: none)").matches;

    const feed = (x: number, y: number) => {
      if (lx !== null && ly !== null) {
        const mvx = x - lx;
        const mvy = y - ly;
        const dist = Math.hypot(mvx, mvy);
        const steps = Math.min(10, Math.max(2, Math.ceil(dist / 6)));
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          pts.push({
            x: lx + mvx * t + (Math.random() - 0.5) * 3,
            y: ly + mvy * t + (Math.random() - 0.5) * 3,
            life: 1,
            r: 2 + Math.random() * 3,
            dx: -mvx * 0.04 + (Math.random() - 0.5) * 1.2,
            dy: -mvy * 0.04 - (0.6 + Math.random() * 1.4),
            hot: Math.random(),
          });
        }
      }
      lx = x;
      ly = y;
      if (pts.length > 220) pts.splice(0, pts.length - 220);
    };

    const onMouseMove = (e: MouseEvent) => {
      feed(e.clientX, e.clientY);
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      lx = t.clientX;
      ly = t.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      feed(t.clientX, t.clientY);
    };

    const onTouchEnd = () => {
      lx = null;
      ly = null;
    };

    let lastSY = window.scrollY;
    const onScroll = () => {
      if (lx === null || ly === null) return;
      const dy = window.scrollY - lastSY;
      lastSY = window.scrollY;
      if (dy) feed(lx + (Math.random() - 0.5) * 2, ly - dy * 0.6);
    };

    if (isTouchDev) {
      document.addEventListener("touchstart", onTouchStart, { passive: true });
      document.addEventListener("touchmove", onTouchMove, { passive: true });
      document.addEventListener("touchend", onTouchEnd, { passive: true });
      document.addEventListener("touchcancel", onTouchEnd, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.addEventListener("mousemove", onMouseMove);
    }

    const emitIdle = () => {
      if (lx === null || ly === null) return;
      for (let k = 0; k < 3; k++) {
        pts.push({
          x: lx + (Math.random() - 0.5) * 8,
          y: ly + (Math.random() - 0.5) * 4,
          life: 1,
          r: 1.6 + Math.random() * 2.6,
          dx: (Math.random() - 0.5) * 0.8,
          dy: -(1 + Math.random() * 1.8),
          hot: Math.random(),
        });
      }
      if (pts.length > 220) pts.splice(0, pts.length - 220);
    };

    const flameColor = (hot: number, e: number) => {
      if (hot > 0.75) return `rgba(235, 248, 255, ${0.85 * e})`;
      if (hot > 0.4) return `rgba(79, 182, 255, ${0.7 * e})`;
      return `rgba(38, 110, 190, ${0.55 * e})`;
    };

    const frame = () => {
      emitIdle();
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        p.life -= 0.028 + Math.random() * 0.02;
        p.x += p.dx;
        p.y += p.dy;
        p.dy -= 0.05;
        p.dx *= 0.97;
        if (p.life <= 0) {
          pts.splice(i, 1);
          continue;
        }
        const e = p.life * p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.4, p.r * e), 0, Math.PI * 2);
        ctx.fillStyle = flameColor(p.hot * p.life, e);
        ctx.shadowColor = "rgba(79, 182, 255, .9)";
        ctx.shadowBlur = 14 * e;
        ctx.fill();
      }

      if (lx !== null && ly !== null) {
        const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, 22);
        g.addColorStop(0, "rgba(235, 248, 255, .55)");
        g.addColorStop(0.35, "rgba(79, 182, 255, .28)");
        g.addColorStop(1, "rgba(79, 182, 255, 0)");
        ctx.beginPath();
        ctx.arc(lx, ly, 22, 0, Math.PI * 2);
        ctx.shadowBlur = 0;
        ctx.fillStyle = g;
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(frame);
    };

    frame();

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      if (isTouchDev) {
        document.removeEventListener("touchstart", onTouchStart);
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
        document.removeEventListener("touchcancel", onTouchEnd);
        window.removeEventListener("scroll", onScroll);
      } else {
        document.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cur"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        display: "none",
      }}
    />
  );
};
