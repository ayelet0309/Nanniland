const CHIPS = [
  "הילדים מרגישים בטוחים",
  "ההורים יכולים באמת להירגע",
  "והנני מגיעה עם חיוך",
];

export default function InstagramOurGoal() {
  return (
    <section
      style={{
        position: "relative",
        marginTop: "-22px",
        padding: "50px 24px 48px",
        background: "#E1E8D7",
        borderRadius: "38px 38px 0 0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "26px" }}>
        <div style={{ fontSize: "30px", lineHeight: 1, marginBottom: "12px" }}>🌴</div>
        <h2
          style={{
            margin: "0 0 16px",
            fontFamily: "'Frank Ruhl Libre', serif",
            fontWeight: 500,
            fontSize: "34px",
            lineHeight: 1.1,
            color: "#2E2A24",
          }}
        >
          המטרה שלנו
        </h2>
        <p style={{ margin: "0 auto", fontSize: "17px", lineHeight: 1.7, color: "#4f5944", maxWidth: "30ch" }}>
          אנחנו לא רק מחפשים נני — אנחנו מחפשים את{" "}
          <span style={{ fontWeight: 800, color: "#3C4733" }}>הנני הנכונה</span> עבור המשפחה שלכם.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "11px",
          marginBottom: "26px",
        }}
      >
        {CHIPS.map((chip, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#FFFDF9",
              borderRadius: "40px",
              padding: "15px 24px",
              boxShadow: "0 8px 22px rgba(75,89,68,.1)",
            }}
          >
            <span style={{ fontSize: "18px", lineHeight: 1 }}>🤍</span>
            <span style={{ fontSize: "15.5px", fontWeight: 700, color: "#33302A" }}>{chip}</span>
          </div>
        ))}
      </div>

      <p
        style={{
          margin: "0 auto",
          fontSize: "15.5px",
          lineHeight: 1.8,
          color: "#586350",
          textAlign: "center",
          maxWidth: "32ch",
        }}
      >
        אנחנו מלווים אתכם לאורך כל הדרך, כדי שהחוויה שלכם בקוסמוי תהיה רגועה, נעימה ומלאת רגעים טובים.
      </p>
    </section>
  );
}
