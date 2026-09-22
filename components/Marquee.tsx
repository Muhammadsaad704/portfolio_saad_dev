import React from "react";
import { portfolioData } from "@/data/portfolio";

export const Marquee: React.FC = () => {
  const items = portfolioData.marqueeItems;

  const renderGroup = (keyPrefix: string) => (
    <div style={{ display: "flex" }}>
      {items.map((item, idx) => (
        <span key={`${keyPrefix}-${idx}`} className="mq-item">
          {item} <i>/</i>
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        overflow: "hidden",
        padding: "16px 0",
        background: "var(--panel)",
      }}
    >
      <div
        id="mq"
        style={{
          display: "flex",
          width: "max-content",
          animation: "mq 30s linear infinite",
        }}
      >
        {renderGroup("g1")}
        {renderGroup("g2")}
      </div>
    </div>
  );
};
