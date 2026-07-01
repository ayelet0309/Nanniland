export default function InstagramCancellation() {
  return (
    <section
      style={{
        position: "relative", marginTop: "-22px",
        padding: "48px 22px 44px",
        background: "#F3EDE2",
        borderRadius: "38px 38px 0 0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "26px" }}>
        <p
          style={{
            margin: "0 0 10px", fontSize: "11.5px", fontWeight: 700,
            letterSpacing: "0.14em", color: "#5F6B50",
          }}
        >
          מדיניות ביטולים
        </p>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-frank,serif)", fontWeight: 500,
            fontSize: "34px", lineHeight: 1.1, color: "#2E2A24",
          }}
        >
          תוכניות משתנות —<br />וזה בסדר
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
        {/* Full refund */}
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: "14px", background: "#FFFDF9", borderRadius: "22px",
            padding: "20px 22px", boxShadow: "0 10px 24px rgba(95,75,45,.07)",
          }}
        >
          <div>
            <div style={{ fontSize: "15.5px", fontWeight: 800, color: "#33302A" }}>
              ביטול עד 48 שעות מראש
            </div>
            <div style={{ fontSize: "13px", color: "#8a8175", marginTop: "2px" }}>
              בלי דאגות, בלי עלות
            </div>
          </div>
          <span style={{ fontSize: "14.5px", fontWeight: 800, color: "#5F8159", whiteSpace: "nowrap" }}>
            החזר מלא
          </span>
        </div>

        {/* 50% charge */}
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: "14px", background: "#FFFDF9", borderRadius: "22px",
            padding: "20px 22px", boxShadow: "0 10px 24px rgba(95,75,45,.07)",
          }}
        >
          <div>
            <div style={{ fontSize: "15.5px", fontWeight: 800, color: "#33302A" }}>
              ביטול בפחות מ־48 שעות
            </div>
            <div style={{ fontSize: "13px", color: "#8a8175", marginTop: "2px" }}>
              מתוך סכום ההזמנה
            </div>
          </div>
          <span style={{ fontSize: "14.5px", fontWeight: 800, color: "#B96B50", whiteSpace: "nowrap" }}>
            חיוב 50%
          </span>
        </div>
      </div>

      <p
        style={{
          margin: "16px 6px 0", fontSize: "13px", lineHeight: 1.55,
          color: "#9a9082", textAlign: "center",
        }}
      >
        טיולים עם ילדים הם בלתי צפויים — תמיד ננסה לתאם איתכם מחדש כשאפשר.
      </p>
    </section>
  );
}
