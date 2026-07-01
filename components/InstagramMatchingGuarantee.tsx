const CHECK = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F8159" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
    <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function InstagramMatchingGuarantee() {
  return (
    <section
      style={{
        position: "relative",
        marginTop: "-22px",
        padding: "50px 24px 46px",
        background: "#F4E2DA",
        borderRadius: "38px 38px 0 0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <p style={{ margin: "0 0 12px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.14em", color: "#B06A52" }}>
          התחייבות ההתאמה שלנו
        </p>
        <div style={{ fontSize: "30px", lineHeight: 1, marginBottom: "10px" }}>💛</div>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Frank Ruhl Libre', serif",
            fontWeight: 500,
            fontSize: "33px",
            lineHeight: 1.1,
            color: "#2E2A24",
          }}
        >
          מה קורה כשאין חיבור?
        </h2>
      </div>

      <div
        style={{
          background: "#FFFDF9",
          borderRadius: "28px",
          padding: "30px 26px",
          boxShadow: "0 16px 36px rgba(150,90,70,.12)",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0 0 18px", fontSize: "16.5px", lineHeight: 1.85, color: "#5b5347" }}>
          לפעמים, למרות כל הרצון הטוב — פשוט אין את ה״קליק״.
          <br />
          <span style={{ color: "#B96B50", fontWeight: 700 }}>וזה בסדר גמור.</span>
        </p>
        <p style={{ margin: "0 0 18px", fontSize: "16.5px", lineHeight: 1.85, color: "#5b5347" }}>
          חיבור בין משפחה לנני הוא אישי מאוד. לכל משפחה יש את הקצב שלה, ולכל נני את האישיות שלה.
        </p>
        <p style={{ margin: "0 0 22px", fontSize: "16.5px", lineHeight: 1.85, color: "#5b5347" }}>
          אם במהלך <strong style={{ fontWeight: 800, color: "#33302A" }}>48 השעות הראשונות</strong> תרגישו שאין
          התאמה, נעשה את מירב המאמצים למצוא עבורכם נני אחרת.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "11px",
            background: "#E4EAD8",
            borderRadius: "18px",
            padding: "16px 20px",
          }}
        >
          {CHECK}
          <span style={{ fontSize: "15px", fontWeight: 800, lineHeight: 1.45, color: "#3C4733" }}>
            ואם לא נמצא התאמה טובה יותר — דמי התיווך יוחזרו לכם במלואם.
          </span>
        </div>
      </div>
    </section>
  );
}
