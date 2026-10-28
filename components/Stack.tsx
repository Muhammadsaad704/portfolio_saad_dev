import React from "react";
import { portfolioData } from "@/data/portfolio";

export const Stack: React.FC = () => {
  return (
    <section id="stack" className="section" style={{ paddingTop: "100px" }}>
      <div data-rv className="sec-head" style={{ marginBottom: "40px" }}>
        <h2>Stack</h2>
        <span className="sec-tag">03 / TOOLS OF THE TRADE</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "0 60px",
        }}
      >
        {portfolioData.stack.map((item, idx) => (
          <div key={idx} data-rv data-rvd={idx % 2} className="stack-row">
            <span className="k">{item.category}</span>
            <span
              className="v"
              dangerouslySetInnerHTML={{ __html: item.techs }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
