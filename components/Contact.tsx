"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const contactCards = [
  {
    label: "PHONE & WHATSAPP",
    value: portfolioData.phone,
    href: `https://wa.me/${portfolioData.phone.replace(/\D/g, "")}`,
    icon: "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z",
  },
  {
    label: "GITHUB",
    value: portfolioData.github.replace("https://", ""),
    href: portfolioData.github,
    icon: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.12v3.16c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z",
  },
  {
    label: "LINKEDIN",
    value: "/in/muhammad-saad-shafique",
    href: portfolioData.linkedin,
    icon: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "LOCATION",
    value: portfolioData.location,
    icon: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  },
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email);
    } catch {
      window.location.href = `mailto:${portfolioData.email}`;
      return;
    }
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
          margin: "0 0 18px",
        }}
      >
        Building an Android app?
        <br />
        <span className="grad-text">Let&apos;s build</span>{" "}
        <a href={`mailto:${portfolioData.email}`} style={{ textDecoration: "none" }}>
          together.
        </a>
      </p>

      <p data-rv style={{ color: "var(--mut)", fontSize: "17px", lineHeight: 1.7, maxWidth: "56ch", margin: "0 0 30px" }}>
        Open to full-time Android roles, contract work, and freelance app builds.
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
          aria-live="polite"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {copied ? "COPIED!" : "COPY EMAIL"}
        </button>
      </div>

      <div data-rv data-rvd="2" className="contact-grid">
        {contactCards.map((card) => {
          const body = (
            <>
              <span className="contact-ico" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={card.icon} />
                </svg>
              </span>
              <span>
                <span className="contact-label">{card.label}</span>
                <span className="contact-value">{card.value}</span>
              </span>
            </>
          );
          return card.href ? (
            <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer" className="contact-card spot">
              {body}
            </a>
          ) : (
            <div key={card.label} className="contact-card spot">
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
};
