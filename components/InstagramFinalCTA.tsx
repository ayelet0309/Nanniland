import Image from "next/image";
import { INSTAGRAM_CTA_URL } from "@/lib/constants";

export default function InstagramFinalCTA() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        marginTop: "-22px",
        background: "#5F6B50",
        borderRadius: "38px 38px 0 0",
        overflow: "hidden",
        paddingBottom: "4px",
      }}
    >
      {/* Background image */}
      <div style={{ position: "relative", height: "230px" }}>
        <Image
          src="/images/hero2-wide.jpg"
          alt="נני אוהבת מחזיקה תינוק במלון נופש בקוסמוי"
          fill
          sizes="480px"
          style={{ objectFit: "cover", objectPosition: "50% 28%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg,rgba(95,107,80,0) 38%,#5F6B50 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", padding: "8px 26px 44px", textAlign: "center" }}>
        <h2
          style={{
            margin: "0 0 14px",
            fontFamily: "'Frank Ruhl Libre', serif",
            fontWeight: 500,
            fontSize: "42px",
            lineHeight: 1.08,
            color: "#FFFDF9",
          }}
        >
          צאו ליהנות<br />מהחופשה.
        </h2>
        <p style={{ margin: "0 auto 28px", fontSize: "16.5px", lineHeight: 1.6, color: "#DDE3D2", maxWidth: "32ch" }}>
          שלחו לנו את הפרטים, ולאחר קבלתם נשלח אליכם את האפשרויות המתאימות ביותר.
        </p>

        <a
          href={INSTAGRAM_CTA_URL}
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#DE7E61", color: "#fff", textDecoration: "none",
            fontWeight: 800, fontSize: "16.5px", padding: "18px 34px",
            borderRadius: "40px", boxShadow: "0 16px 34px rgba(0,0,0,.28)",
          }}
        >
          להזמין נני
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </a>

        {/* WhatsApp line */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "9px", marginTop: "22px" }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#DDE3D2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.6A8.4 8.4 0 1 1 21 11.5z" />
          </svg>
          <span dir="ltr" style={{ fontSize: "14.5px", fontWeight: 700, color: "#EFF2E9" }}>
            WhatsApp +972 52-332-1059
          </span>
        </div>

        <p style={{ margin: "30px 0 0", fontSize: "12px", color: "#A9B29C" }}>
          Nanniland · קוֹ סמוּי, תאילנד
        </p>
      </div>
    </section>
  );
}
