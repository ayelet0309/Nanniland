const CARD: React.CSSProperties = {
  background: "#FFFDF9",
  border: "1px solid rgba(95,75,45,.06)",
  borderRadius: "20px",
  padding: "18px 17px",
  boxShadow: "0 8px 22px rgba(95,75,45,.06)",
};

const BADGE_BLUSH: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "center",
  width: "38px", height: "38px", borderRadius: "12px",
  background: "#F6E4DD", fontSize: "19px", lineHeight: 1, marginBottom: "12px",
};
const BADGE_SAGE: React.CSSProperties = {
  ...BADGE_BLUSH,
  background: "#E0E8D5",
};

const H3: React.CSSProperties = { margin: "0 0 6px", fontSize: "16px", fontWeight: 800, color: "#33302A" };
const BODY: React.CSSProperties = { margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#7a7165" };

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5F8159" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const SAFETY = ["ריאיון אישי לכל נני", "בדיקת המלצות", "מסמכים ואישורים נדרשים", "סינון קפדני לפני כל התאמה"];

export default function InstagramWhyNanniland() {
  return (
    <section
      style={{
        position: "relative",
        marginTop: "-18px",
        padding: "50px 22px 46px",
        background: "#F3EDE2",
        borderRadius: "38px 38px 0 0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2
          style={{
            margin: "0 0 14px",
            fontFamily: "'Frank Ruhl Libre', serif",
            fontWeight: 500,
            fontSize: "40px",
            lineHeight: 1.05,
            color: "#2E2A24",
          }}
        >
          למה משפחות בוחרות <span dir="ltr">Nanniland</span>?
        </h2>
        <p style={{ margin: "0 auto", fontSize: "16.5px", lineHeight: 1.6, color: "#8a7d6e", maxWidth: "26ch" }}>
          כי כשמדובר בילדים שלכם —<br />אין מקום לפשרות.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", gridAutoRows: "1fr" }}>
        {/* אהבה אמיתית */}
        <div style={CARD}>
          <span style={BADGE_BLUSH}>❤️</span>
          <h3 style={H3}>אהבה אמיתית לילדים</h3>
          <p style={BODY}>אנחנו לא מחפשים רק ניסיון.<br />אנחנו מחפשים נניות שיודעות להעניק ביטחון, חום וחיבור אמיתי לכל ילד.</p>
        </div>

        {/* בטיחות */}
        <div style={CARD}>
          <span style={BADGE_SAGE}>🛡️</span>
          <h3 style={{ ...H3, marginBottom: "8px" }}>ביטחון מעל הכול</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {SAFETY.map((item) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13.5px", fontWeight: 600, color: "#5b5347" }}>
                <Check />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* אמינות */}
        <div style={CARD}>
          <span style={BADGE_BLUSH}>🤍</span>
          <h3 style={H3}>ליווי אישי לאורך כל הדרך</h3>
          <p style={BODY}>מהרגע הראשון ועד סוף החופשה,<br />אנחנו כאן לכל שאלה, שינוי או צורך.</p>
        </div>

        {/* יותר מנני */}
        <div style={CARD}>
          <span style={BADGE_SAGE}>🌴</span>
          <h3 style={{ ...H3, marginBottom: "8px" }}>חופשה רגועה יותר</h3>
          <p style={{ ...BODY, fontSize: "13.5px" }}>כשהילדים נהנים,<br />גם אתם יכולים לנוח באמת.<br />יותר זמן זוגי.<br />יותר שקט.<br />יותר חוויות.</p>
        </div>
      </div>
    </section>
  );
}
