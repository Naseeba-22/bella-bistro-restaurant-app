function PlaceholderPage({ title }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#11100e",
        color: "#f5f1e8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <p
        style={{
          color: "#e5a84b",
          letterSpacing: "3px",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        BELLA BISTRO
      </p>

      <h1
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "60px",
          margin: "15px 0",
        }}
      >
        {title}
      </h1>

      <p style={{ color: "#aaa49a" }}>
        This page is coming next...
      </p>
    </div>
  );
}

export default PlaceholderPage;