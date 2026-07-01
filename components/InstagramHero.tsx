import Image from "next/image";
import { INSTAGRAM_CTA_URL } from "@/lib/constants";

export default function InstagramHero() {
  return (
    <section style={{ position: "relative", padding: "30px 24px 44px", overflow: "hidden" }}>
      <style>{`
        @keyframes nlfloat {
          0%,100%{transform:translate(0,0) rotate(0deg)}
          50%{transform:translate(0,-22px) rotate(6deg)}
        }
        .nl-b1{animation:nlfloat 16s ease-in-out infinite}
        .nl-b2{animation:nlfloat 19s ease-in-out infinite reverse}
      `}</style>

      {/* Blobs */}
      <div
        className="nl-b1"
        style={{
          position: "absolute", top: "-70px", left: "-90px",
          width: "260px", height: "260px",
          borderRadius: "48% 52% 58% 42% / 55% 45% 55% 45%",
          background: "radial-gradient(circle at 35% 35%,#F4D9CF,#EBC8BC)",
          filter: "blur(6px)", opacity: 0.55, zIndex: 0,
        }}
      />
      <div
        className="nl-b2"
        style={{
          position: "absolute", top: "120px", right: "-70px",
          width: "200px", height: "200px",
          borderRadius: "54% 46% 42% 58% / 48% 56% 44% 52%",
          background: "radial-gradient(circle at 40% 40%,#DCE5D2,#C9D6BB)",
          filter: "blur(6px)", opacity: 0.5, zIndex: 0,
        }}
      />

      {/* Header */}
      <header
        style={{
          position: "relative", zIndex: 2,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: "42px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
          <span
            style={{
              width: "34px", height: "34px", borderRadius: "50%",
              background: "#5F6B50", display: "flex", alignItems: "center",
              justifyContent: "center", flex: "none",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFDF9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10z" />
            </svg>
          </span>
          <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: "23px", fontWeight: 600, letterSpacing: "0.01em", color: "#33302A" }}>
            Nanniland
          </span>
        </div>
        <a href="#contact" style={{ fontSize: "13.5px", fontWeight: 700, color: "#5F6B50", textDecoration: "none", whiteSpace: "nowrap" }}>
          צור קשר
        </a>
      </header>

      {/* Hero image */}
      <div
        style={{
          position: "relative", zIndex: 2, marginTop: "8px",
          borderRadius: "28px", overflow: "hidden",
          boxShadow: "0 24px 48px rgba(95,75,45,.2)",
        }}
      >
        <Image
          src="/images/family.jpg"
          alt="משפחות וילדים שמחים משחקים על חוף בקוסמוי"
          width={800}
          height={500}
          style={{ display: "block", width: "100%", height: "auto" }}
          priority
        />
        <div
          style={{
            position: "absolute", right: "16px", bottom: "16px", left: "16px",
            display: "flex", alignItems: "center", gap: "10px",
            background: "rgba(255,253,249,.92)", backdropFilter: "blur(8px)",
            borderRadius: "18px", padding: "12px 15px",
          }}
        >
          <span
            style={{
              width: "30px", height: "30px", borderRadius: "50%",
              background: "#DCE5D2", display: "flex",
              alignItems: "center", justifyContent: "center", flex: "none",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5F6B50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#3C4733", lineHeight: 1.3 }}>
            נניות מקצועיות שאוהבות ילדים
          </span>
        </div>
      </div>

      {/* Hero text */}
      <div style={{ position: "relative", zIndex: 2, marginTop: "30px" }}>
        <p style={{ margin: "0 0 14px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", color: "#5F6B50" }}>
          ברוכים הבאים ל־Nanniland · קוֹ סמוּי
        </p>
        <h1
          style={{
            margin: "0 0 18px",
            fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500,
            fontSize: "50px", lineHeight: 1.05, letterSpacing: "-0.01em",
            color: "#2E2A24", textWrap: "balance",
          }}
        >
          תהנו מהחופשה.<br />
          אנחנו כאן <span style={{ color: "#B96B50" }}>בשבילכם</span> 💛
        </h1>
        <p style={{ margin: "0 auto 26px", fontSize: "17px", lineHeight: 1.65, color: "#6E6559", maxWidth: "40ch", textAlign: "center" }}>
          נניות מקצועיות, חמות ואוהבות ילדים — שיהפכו את החופשה שלכם בקוסמוי לחוויה רגועה ונעימה,
          מותאמת בדיוק לצרכים שלכם.
        </p>
        <a
          href={INSTAGRAM_CTA_URL}
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#DE7E61", color: "#fff", textDecoration: "none",
            fontWeight: 800, fontSize: "16.5px", padding: "17px 30px",
            borderRadius: "40px", boxShadow: "0 14px 30px rgba(222,126,97,.34)",
          }}
        >
          להזמין נני
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
