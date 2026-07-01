export default function InstagramPayment() {
  return (
    <section
      style={{
        position: "relative", marginTop: "-22px",
        padding: "48px 22px 44px",
        background: "#FFFDF9",
        borderRadius: "38px 38px 0 0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <p
          style={{
            margin: "0 0 10px", fontSize: "11.5px", fontWeight: 700,
            letterSpacing: "0.14em", color: "#5F6B50",
          }}
        >
          אמצעי תשלום
        </p>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-frank,serif)", fontWeight: 500,
            fontSize: "36px", lineHeight: 1.1, color: "#2E2A24",
          }}
        >
          פשוט ובטוח
        </h2>
      </div>

      {/* Payment cards */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px", marginBottom: "16px" }}
      >
        {/* Bit */}
        <div
          style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "10px", background: "#F3EDE2", borderRadius: "22px", padding: "26px 16px",
          }}
        >
          <span
            style={{
              width: "48px", height: "48px", borderRadius: "16px",
              background: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center",
              boxShadow: "0 6px 16px rgba(95,75,45,.1)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DE7E61" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2.5" width="14" height="19" rx="3"/>
              <path d="M10 18.5h4"/>
            </svg>
          </span>
          <span style={{ fontSize: "17px", fontWeight: 800, color: "#33302A" }}>ביט</span>
        </div>

        {/* PayBox */}
        <div
          style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "10px", background: "#F3EDE2", borderRadius: "22px", padding: "26px 16px",
          }}
        >
          <span
            style={{
              width: "48px", height: "48px", borderRadius: "16px",
              background: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center",
              boxShadow: "0 6px 16px rgba(95,75,45,.1)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5F6B50" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="6" width="19" height="13" rx="3"/>
              <path d="M2.5 10h19"/>
            </svg>
          </span>
          <span style={{ fontSize: "17px", fontWeight: 800, color: "#33302A" }}>פייבוקס</span>
        </div>
      </div>

      {/* Notice */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: "12px",
          background: "#DCE5D2", borderRadius: "20px", padding: "16px 18px",
        }}
      >
        <svg
          width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="#5F6B50" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
          style={{ flexShrink: 0 }}
        >
          <rect x="3" y="11" width="18" height="10" rx="2.5"/>
          <path d="M7 11V8a5 5 0 0 1 10 0v3"/>
        </svg>
        <span style={{ fontSize: "14px", lineHeight: 1.45, fontWeight: 700, color: "#3C4733" }}>
          השיבוץ מתבצע לאחר קבלת התשלום.
        </span>
      </div>
    </section>
  );
}
