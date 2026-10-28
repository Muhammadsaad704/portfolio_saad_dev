import React from "react";
import { portfolioData } from "@/data/portfolio";

// Helper to format bold markdown-style text (**text**) to <b>text</b>
function formatContent(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <b key={index}>{part.slice(2, -2)}</b>;
    }
    return part;
  });
}

export const Experience: React.FC = () => {
  return (
    <section id="work" className="section" style={{ paddingTop: "100px" }}>
      <div data-rv className="sec-head">
        <h2>Experience</h2>
        <span className="sec-tag">01 / WHERE I&apos;VE WORKED</span>
      </div>
      <div className="timeline">
        {portfolioData.experiences.map((xp, index) => (
          <article key={index} data-rv className={xp.isCurrent ? "xp xp-current spot" : "xp spot"}>
            <div className="when">
              {xp.period}
              <br />
              {xp.isCurrent ? (
                <span style={{ color: "var(--acc)" }}>PRESENT</span>
              ) : null}
              {xp.isCurrent ? <br /> : null}
              {xp.location.split("\n").map((line, lIdx) => (
                <React.Fragment key={lIdx}>
                  {line}
                  {lIdx < xp.location.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
            <div>
              <h3>{xp.company}</h3>
              <div className="role">{xp.role}</div>
              <ul>
                {xp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{formatContent(bullet)}</li>
                ))}
              </ul>
              <div className="tags">
                {xp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
