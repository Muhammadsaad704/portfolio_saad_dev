import React from "react";
import { portfolioData } from "@/data/portfolio";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        maxWidth: "1360px",
        margin: "0 auto",
        borderTop: "1px solid var(--line)",
        padding: "26px 40px 42px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
        fontSize: "11.5px",
        letterSpacing: ".08em",
        color: "var(--dim)",
      }}
    >
      <div>© {new Date().getFullYear()} {portfolioData.name.toUpperCase()} · {portfolioData.title}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--acc)",
            animation: "pulse 2.2s infinite",
          }}
        />
        {portfolioData.statusText}
      </div>
    </footer>
  );
};
