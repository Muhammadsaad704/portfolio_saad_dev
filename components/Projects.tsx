import React from "react";
import { portfolioData } from "@/data/portfolio";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" style={{ paddingTop: "100px" }}>
      <div data-rv className="sec-head">
        <h2>Selected Projects</h2>
        <span className="sec-tag">02 / SHIPPED TO PLAY STORE</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "24px",
        }}
      >
        {portfolioData.projects.map((proj, idx) => (
          <div key={proj.id} data-rv data-rvd={idx % 3} className="proj spot">
            <div className="num">{proj.id}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "14px",
                paddingRight: "72px",
              }}
            >
              <span className="eyebrow">{proj.eyebrow}</span>
              {proj.playStoreUrl && (
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "var(--font-mono)",
                    color: "var(--android-green)",
                    background: "rgba(61, 220, 132, 0.1)",
                    border: "1px solid rgba(61, 220, 132, 0.25)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    letterSpacing: "0.05em",
                  }}
                >
                  LIVE APP
                </span>
              )}
            </div>

            <h3>
              {proj.playStoreUrl ? (
                <a
                  href={proj.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {proj.title}
                </a>
              ) : (
                proj.title
              )}
            </h3>

            <p>{proj.description}</p>

            <div className="foot">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span style={{ color: "var(--mut)", fontSize: "12px" }}>
                  {proj.footnote}
                </span>
                {proj.playStoreUrl && (
                  <a
                    href={proj.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--acc)",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "11.5px",
                      padding: "4px 10px",
                      background: "rgba(79, 182, 255, 0.08)",
                      border: "1px solid rgba(79, 182, 255, 0.25)",
                      borderRadius: "6px",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.944 1.944 0 0 1-.61-.904V2.718c.133-.356.353-.675.61-.904zm11.238 11.241l2.458-2.458-11.83-6.83 9.372 9.288zm0 1.89l-9.372 9.288 11.83-6.83-2.458-2.458zm1.536-1.536l3.528 2.036c1.077.622 1.077 1.637 0 2.259l-3.528 2.036-2.122-2.122 2.122-2.209z" />
                    </svg>
                    PLAY STORE &#8599;
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
