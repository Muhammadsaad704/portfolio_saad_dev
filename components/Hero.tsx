import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ParticleGrid } from "./ParticleGrid";
import { Terminal } from "./Terminal";

const preWords = portfolioData.headlinePre.split(" ");

export const Hero: React.FC = () => {
  return (
    <section className="hero" data-hero>
      <ParticleGrid />
      <div className="hero-glow" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          data-rv
          className="mono"
          style={{
            fontSize: "12.5px",
            color: "var(--acc)",
            letterSpacing: ".14em",
            marginBottom: "20px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(79, 182, 255, 0.08)",
            border: "1px solid rgba(79, 182, 255, 0.2)",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--android-green)",
              animation: "pulse 2s infinite",
            }}
          />
          {portfolioData.title}
        </div>

        <h1
          className="disp"
          style={{
            fontWeight: 900,
            fontSize: "clamp(48px, 7.6vw, 100px)",
            lineHeight: 1,
            letterSpacing: "-.03em",
            margin: "0 0 24px",
          }}
        >
          <span className="h-line">
            {preWords.map((word, i) => (
              <React.Fragment key={i}>
                <span className="w" style={{ "--i": i } as React.CSSProperties}>
                  {word}
                </span>{" "}
              </React.Fragment>
            ))}
          </span>
          <span className="h-line">
            <span className="w" style={{ "--i": preWords.length } as React.CSSProperties}>
              {portfolioData.headlineMain}
            </span>{" "}
            <span className="w w-accent" style={{ "--i": preWords.length + 1 } as React.CSSProperties}>
              {portfolioData.headlineAccent}
            </span>
          </span>
        </h1>

        <p
          data-rv
          data-rvd="3"
          style={{
            color: "var(--mut)",
            maxWidth: "52ch",
            fontSize: "17.5px",
            lineHeight: 1.7,
            margin: "0 0 24px",
          }}
        >
          I&apos;m <b>{portfolioData.name}</b>. 3+ years designing, building, and deploying
          production Android applications: modern UI with <b>Jetpack Compose &amp; Material 3</b>,{" "}
          <b>Kotlin Coroutines &amp; StateFlow</b>, clean architecture with <b>MVVM &amp; Hilt</b>,{" "}
          REST APIs, Firebase, and end-to-end <b>Google Play Store</b> deployments.
        </p>

        <Terminal />

        <div
          data-rv
          data-rvd="4"
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          <a href="#contact" className="btn btn-primary">
            hire me &rarr;
          </a>
          <a href="#work" className="btn btn-outline">
            see the work
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.12 0 1.54-.02 2.78-.02 3.16 0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </div>
      </div>

      <div
        data-rv
        data-rvd="2"
        style={{
          position: "relative",
          zIndex: 1,
          justifySelf: "center",
          width: "min(100%, 480px)",
          aspectRatio: "1",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* Animated Conic Ring Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-12px",
            borderRadius: "50%",
            background:
              "conic-gradient(from 210deg, #4FB6FF, #3DDC84 35%, #1B4A75 60%, #BDE3FF 85%, #4FB6FF)",
            animation: "spin 16s linear infinite",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
            willChange: "transform",
          }}
        />

        <div
          className="portrait-ring"
          style={{
            position: "relative",
            width: "calc(100% - 22px)",
            aspectRatio: "1",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 28px 80px rgba(0,0,0,0.7), inset 0 0 20px rgba(0,0,0,0.8)",
            background: "radial-gradient(circle at 60% 30%, #1a2536, #0A0E15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Image
            src="/assets/portrait-bw.png"
            alt={portfolioData.name}
            fill
            priority
            sizes="(max-width: 640px) 300px, (max-width: 900px) 380px, 460px"
            quality={80}
            style={{ objectFit: "cover", objectPosition: "50% 8%" }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 42% 34% at 68% 24%, rgba(255,255,255,.34), rgba(255,255,255,0) 70%)",
              mixBlendMode: "screen",
              pointerEvents: "none",
            }}
          />
        </div>

        <div className="pills">
          <div
            className="pill mono"
            style={{
              top: "-6px",
              right: "8%",
              fontSize: "11px",
              letterSpacing: ".08em",
              background: "rgba(10,13,18,.92)",
              borderColor: "rgba(61, 220, 132, 0.4)",
            }}
          >
            <span
              className="dot"
              style={{
                width: "8px",
                height: "8px",
                background: "var(--android-green)",
                animation: "pulse 2s infinite",
              }}
            />
            OPEN TO WORK
          </div>
          <div className="pill" style={{ top: "12%", left: "-5%" }}>
            <span className="dot" style={{ background: "#A855F7" }} />
            Kotlin + Compose
          </div>
          <div className="pill" style={{ top: "44%", right: "-8%", animationDelay: "1.3s" }}>
            <span className="dot" style={{ background: "#4FB6FF" }} />
            Clean Arch · MVVM
          </div>
          <div className="pill" style={{ top: "68%", right: "-4%", animationDelay: "2.6s" }}>
            <span className="dot" style={{ background: "#06B6D4" }} />
            Coroutines &amp; Flow
          </div>
          <div className="pill" style={{ bottom: "11%", left: "-2%", animationDelay: "3.9s" }}>
            <span className="dot" style={{ background: "#4FC3F7" }} />
            Lahore, PK
          </div>
          <div
            className="pill"
            style={{
              bottom: "-16px",
              left: "28%",
              borderColor: "rgba(255, 212, 102, 0.4)",
              animationDelay: "1.9s",
            }}
          >
            <span className="dot" style={{ background: "#FFD466" }} />
            Play Store Deployed
          </div>
        </div>
      </div>

      <a href="#work" className="scroll-cue" aria-label="Scroll to experience">
        <span />
      </a>
    </section>
  );
};
