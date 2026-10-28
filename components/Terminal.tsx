"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

export const Terminal: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cmds = portfolioData.terminalCommands;
    if (reduced) {
      setText(cmds[0]);
      return;
    }

    let ci = 0;
    let pos = 0;
    let del = false;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const cmd = cmds[ci];
      let delay: number;

      if (!del) {
        pos++;
        delay = 45 + Math.random() * 55;
        if (pos === cmd.length) {
          del = true;
          delay = 2400;
        }
      } else {
        pos--;
        delay = 16;
        if (pos === 0) {
          del = false;
          ci = (ci + 1) % cmds.length;
          delay = 500;
        }
      }

      setText(cmd.slice(0, pos));
      timeoutId = setTimeout(tick, delay);
    };

    timeoutId = setTimeout(tick, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      data-rv
      data-rvd="3"
      className="mono"
      style={{
        background: "rgba(12, 16, 23, 0.9)",
        border: "1px solid var(--line)",
        borderRadius: "12px",
        margin: "0 0 28px",
        maxWidth: "560px",
        overflow: "hidden",
        boxShadow: "0 16px 36px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          background: "rgba(255, 255, 255, 0.02)",
          borderBottom: "1px solid var(--line)",
          fontSize: "11px",
          color: "var(--dim)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#FF5F56" }} />
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#FFBD2E" }} />
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#27C93F" }} />
        </div>
        <div style={{ letterSpacing: "0.06em", fontSize: "10.5px" }}>Android Studio — Terminal</div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--android-green)", animation: "pulse 2s infinite" }} />
          <span style={{ color: "var(--android-green)", fontSize: "10px", fontWeight: 600 }}>LIVE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        style={{
          padding: "14px 16px",
          fontSize: "13px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={{ color: "var(--android-green)", fontWeight: 600, flex: "none" }}>saad@android-dev:~$</span>
        <span id="typed" style={{ color: "#E2E8F0", whiteSpace: "nowrap" }}>
          {text}
        </span>
        <span
          style={{
            width: "8px",
            height: "16px",
            background: "var(--acc)",
            flex: "none",
            animation: "blink 1s step-end infinite",
          }}
        />
      </div>
    </div>
  );
};
