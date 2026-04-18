"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("out"), 2000);
    const t3 = setTimeout(() => setPhase("done"), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.5s ease" : phase === "in" ? "opacity 0.4s ease" : "none",
        pointerEvents: "none",
      }}
    >
      <style>{`
        @keyframes splash-logo-in {
          0%   { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes splash-text-in {
          0%   { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0);   opacity: 1; }
        }
        @keyframes splash-bar {
          0%   { width: 0%; }
          60%  { width: 80%; }
          100% { width: 100%; }
        }
        .splash-logo { animation: splash-logo-in 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .splash-text { animation: splash-text-in 0.5s ease 0.2s both; }
        .splash-bar-fill { animation: splash-bar 1.8s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
      `}</style>

      {/* Logo */}
      <div className="splash-logo" style={{ opacity: 0 }}>
        <svg width="72" height="72" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#497fff"/>
          <path d="M8 10C8 8.9 8.9 8 10 8H16V24H10C8.9 24 8 23.1 8 22V10Z" fill="white" opacity="0.9"/>
          <path d="M16 8H22C23.1 8 24 8.9 24 10V22C24 23.1 23.1 24 22 24H16V8Z" fill="white" opacity="0.6"/>
          <rect x="15.5" y="8" width="1" height="16" fill="#497fff" opacity="0.5"/>
        </svg>
      </div>

      {/* Title + subtitle */}
      <div className="splash-text" style={{ textAlign: "center", opacity: 0 }}>
        <p style={{ fontSize: 22, fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.5px", lineHeight: 1 }}>
          Сабақтар
        </p>
        <p style={{ fontSize: 13, color: "#7c7c7c", marginTop: 6 }}>
          Мұғалімнің кітапханасы
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "rgba(73,127,255,0.12)",
      }}>
        <div
          className="splash-bar-fill"
          style={{
            height: "100%",
            background: "#497fff",
            borderRadius: 2,
            width: 0,
          }}
        />
      </div>
    </div>
  );
}
