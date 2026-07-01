const CARD_BASE: React.CSSProperties = {
  background: "#FFFDF9",
  borderRadius: "24px",
  padding: "22px 18px",
  boxShadow: "0 10px 26px rgba(95,75,45,.07)",
};

const ICON_BLUSH: React.CSSProperties = {
  width: "42px", height: "42px", borderRadius: "14px",
  background: "#EFE0D9", display: "flex",
  alignItems: "center", justifyContent: "center", marginBottom: "14px",
};
const ICON_SAGE: React.CSSProperties = {
  width: "42px", height: "42px", borderRadius: "14px",
  background: "#DCE5D2", display: "flex",
  alignItems: "center", justifyContent: "center", marginBottom: "14px",
};

export default function InstagramWhyNanniland() {
  return (
    <section
      style={{
        position: "relative", marginTop: "-22px",
        padding: "48px 22px 46px",
        background: "#F3EDE2",
        borderRadius: "38px 38px 0 0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <p
          style={{
            margin: "0 0 10px", fontSize: "11.5px", fontWeight: 700,
            letterSpacing: "0.14em", color: "#5F6B50",
          }}
        >
          למה ננילנד
        </p>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500,
            fontSize: "36px", lineHeight: 1.1, color: "#2E2A24",
          }}
        >
          טיפול שמרגיש<br />כמו משפחה
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px" }}>
        {/* בקוסמוי בלבד */}
        <div style={CARD_BASE}>
          <span style={ICON_BLUSH}>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#B96B50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2.2"/>
            </svg>
          </span>
          <h3 style={{ margin: "0 0 5px", fontSize: "16.5px", fontWeight: 800, color: "#33302A" }}>בקוסמוי בלבד</h3>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.5, color: "#7a7165" }}>השירות ניתן באי קוֹ סמוּי.</p>
        </div>

        {/* מגיעות עד אליכם */}
        <div style={CARD_BASE}>
          <span style={ICON_SAGE}>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#5F6B50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11 12 4l8 7"/>
              <path d="M6 10v9h12v-9"/>
            </svg>
          </span>
          <h3 style={{ margin: "0 0 5px", fontSize: "16.5px", fontWeight: 800, color: "#33302A" }}>מגיעות עד אליכם</h3>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.5, color: "#7a7165" }}>לוילה או למלון שבו אתם שוהים.</p>
        </div>

        {/* תינוקות וילדים */}
        <div style={CARD_BASE}>
          <span style={ICON_SAGE}>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#5F6B50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10z"/>
            </svg>
          </span>
          <h3 style={{ margin: "0 0 5px", fontSize: "16.5px", fontWeight: 800, color: "#33302A" }}>תינוקות וילדים</h3>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.5, color: "#7a7165" }}>השירות מתאים לכל הגילאים.</p>
        </div>

        {/* לכל מצב */}
        <div style={CARD_BASE}>
          <span style={ICON_BLUSH}>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#B96B50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3 2.1 4.6 5 .5-3.8 3.4 1.1 5L12 13.9 7.6 16.5l1.1-5L4.9 8.1l5-.5z"/>
            </svg>
          </span>
          <h3 style={{ margin: "0 0 5px", fontSize: "16.5px", fontWeight: 800, color: "#33302A" }}>לכל מצב</h3>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.5, color: "#7a7165" }}>חופשה משפחתית, זמן זוגי או ליווי ביום ובערב.</p>
        </div>
      </div>
    </section>
  );
}
