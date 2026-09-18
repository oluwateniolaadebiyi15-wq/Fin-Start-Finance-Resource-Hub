export default function App() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/finstart/index.html"
        title="FinStart — Personal Finance Resource Hub"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}
