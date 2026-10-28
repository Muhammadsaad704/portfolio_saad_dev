"use client";

import React, { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const LINK_DIST = 130;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
const GLOW_DIST = 180;
// Lines are bucketed by opacity so each bucket is a single stroke() call
const BUCKETS = 4;

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
    let animId = 0;
    let visible = true;
    let running = false;
    let heroRect = hero.getBoundingClientRect();

    const resize = () => {
      const dpr = 1;
      W = hero.clientWidth;
      H = hero.clientHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      heroRect = hero.getBoundingClientRect();
      dots = [];
      const n = Math.min(70, Math.floor((W * H) / 18000));
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

    // Rebuild only once the user stops resizing, not on every resize event
    let lastW = window.innerWidth;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth === lastW) return;
        lastW = window.innerWidth;
        resize();
      }, 200);
    };

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX - heroRect.left;
      my = e.clientY - heroRect.top;
    };

    const onScroll = () => {
      heroRect = hero.getBoundingClientRect();
    };

    const onMouseLeave = () => {
      mx = -9999;
      my = -9999;
    };

    const lines: number[][] = Array.from({ length: BUCKETS }, () => []);

    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      for (const b of lines) b.length = 0;

      ctx.fillStyle = "rgba(79, 182, 255, 0.38)";
      ctx.beginPath();
      const glowing: Array<[number, number, number]> = [];

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;

        const dm = Math.hypot(d.x - mx, d.y - my);
        if (dm < GLOW_DIST) {
          glowing.push([d.x, d.y, 1 - dm / GLOW_DIST]);
        } else {
          ctx.moveTo(d.x + 1.9, d.y);
          ctx.arc(d.x, d.y, 1.9, 0, Math.PI * 2);
        }

        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dx = d.x - o.x;
          const dy = d.y - o.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < LINK_DIST_SQ) {
            const strength = 1 - Math.sqrt(distSq) / LINK_DIST;
            const b = Math.min(BUCKETS - 1, Math.floor(strength * BUCKETS));
            lines[b].push(d.x, d.y, o.x, o.y);
          }
        }
      }
      ctx.fill();

      for (const [x, y, g] of glowing) {
        ctx.beginPath();
        ctx.arc(x, y, 1.9 + g * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 182, 255, ${0.38 + g * 0.55})`;
        ctx.fill();
      }

      for (let b = 0; b < BUCKETS; b++) {
        const seg = lines[b];
        if (!seg.length) continue;
        ctx.beginPath();
        for (let k = 0; k < seg.length; k += 4) {
          ctx.moveTo(seg[k], seg[k + 1]);
          ctx.lineTo(seg[k + 2], seg[k + 3]);
        }
        ctx.strokeStyle = `rgba(79, 182, 255, ${(0.16 * (b + 0.5)) / BUCKETS})`;
        ctx.stroke();
      }

      animId = requestAnimationFrame(frame);
    };

    // Only animate while the hero is on screen and the tab is visible
    const sync = () => {
      const shouldRun = visible && !document.hidden;
      if (shouldRun && !running) {
        running = true;
        animId = requestAnimationFrame(frame);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(animId);
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(hero);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", sync);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-grid
      aria-hidden="true"
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
