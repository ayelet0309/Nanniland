const ROWS: { label: string; value: string; valueColor: string; valueFont?: string; valueFontSize: string; valueFontWeight: number }[] = [
  { label: "עמלת תיווך והתאמה", value: "250 ₪", valueColor: "#B96B50", valueFont: "'Frank Ruhl Libre', serif", valueFontSize: "21px", valueFontWeight: 600 },
  { label: "מינימום הזמנה", value: "8 שעות ביום", valueColor: "#5F6B50", valueFontSize: "14.5px", valueFontWeight: 800 },
  { label: "הפסקת צהריים (ביום מלא)", value: "30 דקות", valueColor: "#5F6B50", valueFontSize: "14.5px", valueFontWeight: 800 },
];

export default function InstagramPricing() {
  return (
    <section
      style={{
        position: "relative",
        marginTop: "-22px",
        padding: "48px 22px 46px",
        background: "#EAE0D0",
        borderRadius: "38px 38px 0 0",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "26px" }}>
        <p style={{ margin: "0 0 10px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.14em", color: "#5F6B50" }}>
          עלויות
        </p>
        <h2
          style={{
            margin: "0 0 8px",
            fontFamily: "'Frank Ruhl Libre', serif",
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: 1.1,
            color: "#2E2A24",
          }}
        >
          מחירים פשוטים<br />והוגנים
        </h2>
        <p style={{ margin: "0 auto", fontSize: "15px", lineHeight: 1.6, color: "#7a7165", maxWidth: "34ch" }}>
          המחיר נקבע לפי הנני והיקף ההזמנה — הכל שקוף, בלי הפתעות.
        </p>
      </div>

      {/* Big price card */}
      <div
        style={{
          textAlign: "center",
          background: "#5F6B50",
          borderRadius: "26px",
          padding: "30px 22px",
          boxShadow: "0 16px 32px rgba(95,107,80,.3)",
          marginBottom: "14px",
        }}
      >
        <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em", color: "#C7D1B8", marginBottom: "8px" }}>
          תעריף לשעה
        </div>
        <div style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 600, color: "#fff", lineHeight: 1 }}>
          <span style={{ fontSize: "52px" }}>250–350</span>{" "}
          <span style={{ fontSize: "30px", color: "#DCE5D2" }}>฿</span>
        </div>
        <div style={{ fontSize: "13.5px", color: "#C7D1B8", marginTop: "8px" }}>בהתאם לנני שתתאים לכם</div>
      </div>

      {/* Detail rows */}
      <div style={{ background: "#FFFDF9", borderRadius: "22px", padding: "6px 20px", boxShadow: "0 10px 24px rgba(95,75,45,.07)" }}>
        {ROWS.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "14px",
              padding: "16px 0",
              borderBottom: i < ROWS.length - 1 ? "1px solid rgba(51,48,42,.08)" : undefined,
            }}
          >
            <span style={{ fontSize: "14.5px", fontWeight: 700, color: "#33302A" }}>{row.label}</span>
            <span style={{ fontFamily: row.valueFont, fontSize: row.valueFontSize, fontWeight: row.valueFontWeight, color: row.valueColor, whiteSpace: "nowrap" }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <p style={{ margin: "18px 4px 0", fontSize: "12.5px", lineHeight: 1.5, color: "#9a9082", textAlign: "center" }}>
        לאחר מילוי הפרטים נשלח לכם הצעת מחיר אישית ומדויקת.
      </p>
    </section>
  );
}
