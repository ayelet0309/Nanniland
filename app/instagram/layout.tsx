import "@fontsource/frank-ruhl-libre/400.css";
import "@fontsource/frank-ruhl-libre/500.css";
import "@fontsource/frank-ruhl-libre/600.css";
import "@fontsource/frank-ruhl-libre/700.css";
import "@fontsource/frank-ruhl-libre/hebrew-400.css";
import "@fontsource/frank-ruhl-libre/hebrew-500.css";
import "@fontsource/frank-ruhl-libre/hebrew-600.css";
import "@fontsource/frank-ruhl-libre/hebrew-700.css";

export default function InstagramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#EFE6D8", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          background: "#FFFDF9",
          minHeight: "100vh",
          boxShadow: "0 0 80px rgba(95,75,45,.16)",
          overflowX: "hidden",
          paddingBottom: "96px",
          position: "relative",
          fontFamily: "'Heebo', system-ui, sans-serif",
        }}
      >
        {children}
      </div>
    </div>
  );
}
