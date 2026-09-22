"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section" style={{ paddingTop: "100px" }}>
      <div data-rv className="sec-head">
        <h2>Contact</h2>
        <span className="sec-tag">04 / LET&apos;S TALK</span>
      </div>

      <p
        data-rv
        className="disp"
        style={{
          fontWeight: 900,
          fontSize: "clamp(38px, 6.8vw, 88px)",
          lineHeight: 1.02,
          letterSpacing: "-.03em",
          margin: "0 0 30px",
        }}
      >
        Building an Android app?
        <br />
        <span
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px #64748B",
            background: "linear-gradient(135deg, #4FB6FF 0%, #3DDC84 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let&apos;s build
        </span>{" "}
        <a href={`mailto:${portfolioData.email}`} style={{ textDecoration: "none" }}>
          together.
        </a>
      </p>

      <div data-rv data-rvd="1" style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
        <a href={`mailto:${portfolioData.email}`} className="btn btn-primary">
          {portfolioData.email} &rarr;
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="btn btn-outline"
          style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}
        </button>
      </div>

      <div
        data-rv
        data-rvd="2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: "18px",
          marginTop: "48px",
        }}
      >
        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            padding: "20px 22px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: "11px",
              letterSpacing: ".14em",
              color: "var(--dim)",
              marginBottom: "8px",
            }}
          >
            PHONE &amp; WHATSAPP
          </div>
          <a href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`} className="link-muted" style={{ fontWeight: 600 }}>
            {portfolioData.phone}
          </a>
        </div>

        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            padding: "20px 22px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: "11px",
              letterSpacing: ".14em",
              color: "var(--dim)",
              marginBottom: "8px",
            }}
          >
            GITHUB PROFILE
          </div>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
            style={{ fontWeight: 600 }}
          >
            {portfolioData.github.replace("https://", "")}
          </a>
        </div>

        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            padding: "20px 22px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: "11px",
              letterSpacing: ".14em",
              color: "var(--dim)",
              marginBottom: "8px",
            }}
          >
            LINKEDIN
          </div>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
            style={{ fontWeight: 600 }}
          >
            /in/muhammad-saad-shafique
          </a>
        </div>

        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            padding: "20px 22px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: "11px",
              letterSpacing: ".14em",
              color: "var(--dim)",
              marginBottom: "8px",
            }}
          >
            LOCATION
          </div>
          <span style={{ color: "var(--txt)", fontWeight: 600 }}>{portfolioData.location}</span>
        </div>
      </div>
    </section>
  );
};
