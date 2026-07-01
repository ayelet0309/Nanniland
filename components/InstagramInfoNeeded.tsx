import Image from "next/image";

const ITEMS = [
  "תאריכי החופשה",
  "שעות מבוקשות בכל יום",
  "גילאי הילדים",
  "אזור השהייה בקוסמוי",
  "שפה מועדפת (עברית / אנגלית)",
  "סדר יום והרגלים חשובים",
  "רגישויות או צרכים מיוחדים",
  "האם נדרש ליווי לבריכה / ים",
];

const CHECK_ICON = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

export default function InstagramInfoNeeded() {
  return (
    <section
      style={{
        position: "relative", marginTop: "-22px",
        padding: "48px 22px 44px",
        background: "#FFFDF9",
        borderRadius: "38px 38px 0 0",
      }}
    >
      {/* Image */}
      <div
        style={{
          borderRadius: "28px", overflow: "hidden",
          boxShadow: "0 22px 44px rgba(95,75,45,.16)", marginBottom: "30px",
        }}
      >
        <Image
          src="/images/info2.jpg"
          alt="נני וילדים בונים ארמון חול על חוף בקוסמוי"
          width={800}
          height={480}
          style={{ display: "block", width: "100%", height: "240px", objectFit: "cover", objectPosition: "50% 40%" }}
        />
      </div>

      {/* Heading */}
      <div style={{ marginBottom: "22px" }}>
        <p
          style={{
            margin: "0 0 10px", fontSize: "11.5px", fontWeight: 700,
            letterSpacing: "0.14em", color: "#5F6B50",
          }}
        >
          לפני שמתחילים
        </p>
        <h2
          style={{
            margin: "0 0 8px",
            fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500,
            fontSize: "34px", lineHeight: 1.1, color: "#2E2A24",
          }}
        >
          קצת על<br />המשפחה שלכם
        </h2>
        <p style={{ margin: 0, fontSize: "15.5px", lineHeight: 1.6, color: "#7a7165" }}>
          כדי שנוכל לבצע התאמה אישית ומדויקת, נשמח לקבל מכם את הפרטים הבאים:
        </p>
      </div>

      {/* Checklist */}
      <div
        style={{ background: "#F3EDE2", borderRadius: "26px", padding: "10px 20px" }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "center", gap: "13px",
              padding: "15px 0",
              borderBottom: i < ITEMS.length - 1 ? "1px solid rgba(51,48,42,.08)" : undefined,
            }}
          >
            <span
              style={{
                width: "24px", height: "24px", borderRadius: "50%",
                background: "#DE7E61", display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}
            >
              {CHECK_ICON}
            </span>
            <span style={{ fontSize: "15.5px", fontWeight: 700, color: "#33302A" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
