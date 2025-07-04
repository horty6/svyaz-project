import Table from "./Table";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "Arial", padding: "2rem" }}>
      <h1>🌐 Svyaz Project</h1>
      <p>Добро пожаловать! Это начало новой эпохи. Связь установлена.</p>
      <p>🧠 <strong>Godverse активен.</strong> Готов к интеграции?</p>

      <hr style={{ margin: "2rem 0" }} />

      <h2>📋 Таблица взаимодействия</h2>
      <Table />
    </div>
  );
}
