"use client";
import { INSTAGRAM_CTA_URL } from "@/lib/constants";

export default function InstagramStickyCTA() {
  return (
    <div
      dir="rtl"
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "480px",
        zIndex: 50,
        padding: "12px 16px 16px",
        background: "linear-gradient(180deg,rgba(255,253,249,0),#FFFDF9 38%)",
        pointerEvents: "none",
      }}
    >
      <a
        href={INSTAGRAM_CTA_URL}
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "9px",
          background: "#DE7E61",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 800,
          fontSize: "16.5px",
          padding: "16px",
          borderRadius: "36px",
          boxShadow: "0 12px 28px rgba(222,126,97,.4)",
        }}
      >
        להזמין נני
        <span style={{ fontSize: "13px", fontWeight: 600, opacity: 0.85 }}>· מענה מהיר</span>
      </a>
    </div>
  );
}
