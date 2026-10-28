"use client";

import React, { useEffect, useRef } from "react";

// A soft ring that trails the mouse and grows over links/buttons.
// The rAF loop only runs while the ring is still catching up to the pointer.
export const CursorRing: React.FC = () => {
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduced || !finePointer) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let animId = 0;
    let running = false;
    let shown = false;

    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (Math.abs(tx - x) < 0.1 && Math.abs(ty - y) < 0.1) {
        running = false;
        return;
      }
      animId = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        x = tx;
        y = ty;
        shown = true;
        ring.classList.add("show");
      }
      if (!running) {
        running = true;
        animId = requestAnimationFrame(tick);
      }
    };

    const onOver = (e: PointerEvent) => {
      const interactive = (e.target as HTMLElement).closest?.("a, button");
      ring.classList.toggle("hover", !!interactive);
    };

    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        ring.classList.remove("show");
        shown = false;
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div ref={ringRef} className="cursor-ring" aria-hidden="true">
      <span />
    </div>
  );
};
