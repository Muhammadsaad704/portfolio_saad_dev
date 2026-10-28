import React from "react";
import { portfolioData } from "@/data/portfolio";

export const Credentials: React.FC = () => {
  return (
    <section className="section" style={{ paddingTop: "100px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "22px",
        }}
      >
        <div data-rv className="cred spot">
          <div className="h">CORE SPECIALIZATIONS</div>
          {portfolioData.certifications.map((cert, idx) => (
            <div key={idx} className="row">
              <b>{cert.title}</b>
              <span>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--acc)", textDecoration: "none" }}
                  >
                    VERIFY &#8599;
                  </a>
                ) : (
                  cert.date
                )}
              </span>
            </div>
          ))}
        </div>

        <div data-rv data-rvd="1" className="cred spot">
          <div className="h">EDUCATION &amp; LANGUAGES</div>
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="row">
              <div>
                <b>{edu.degree}</b>
                {edu.grade && (
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--mut)",
                      marginTop: "4px",
                    }}
                  >
                    {edu.grade}
                  </div>
                )}
              </div>
              <span>{edu.period}</span>
            </div>
          ))}
          <div className="row" style={{ marginTop: "8px" }}>
            <div>
              <b>Languages &amp; Communication</b>
              <div style={{ fontSize: "13px", color: "var(--mut)", marginTop: "4px" }}>
                English (Professional) · Urdu (Native)
              </div>
            </div>
            <span>FLUENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
