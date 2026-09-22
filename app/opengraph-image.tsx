import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Saad Shafique | Android App Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0D12",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.07) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          padding: "54px 64px",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Glow accent in top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />

        {/* Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Status badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              borderRadius: "9999px",
              padding: "8px 18px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#4ade80",
                letterSpacing: "1px",
              }}
            >
              AVAILABLE FOR ANDROID ROLES & PROJECTS
            </span>
          </div>

          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#64748B",
              letterSpacing: "1.5px",
            }}
          >
            PORTFOLIO // 2026
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div
            style={{
              fontSize: "58px",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              color: "#FFFFFF",
            }}
          >
            Muhammad Saad Shafique
          </div>

          <div
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#38BDF8",
              letterSpacing: "0.5px",
            }}
          >
            Android App Developer & Mobile Engineer
          </div>

          {/* Tech Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            {[
              "Kotlin",
              "Jetpack Compose",
              "Clean Architecture",
              "MVVM",
              "Coroutines & Flow",
              "Firebase",
              "Room DB",
              "Google Play",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#E2E8F0",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "16px",
              fontWeight: 600,
              color: "#94A3B8",
            }}
          >
            <span>⚡ 3+ Years Experience</span>
            <span>📱 8+ Play Store Apps</span>
            <span>📍 Lahore, Pakistan</span>
          </div>

          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#38BDF8",
            }}
          >
            github.com/Muhammadsaad704
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
