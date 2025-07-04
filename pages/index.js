export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      backgroundColor: "#111",
      color: "#eee",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1>🌐 Svyaz Project</h1>
      <p style={{ maxWidth: "500px", fontSize: "18px", marginTop: "10px" }}>
        Добро пожаловать! Это начало новой эпохи. Связь установлена.  
        <br />
        <br />
        🧠 <strong>Godverse активен.</strong>  
        <br />
        Готов к интеграции?
      </p>
    </div>
  );
}
