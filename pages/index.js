import { useEffect, useState } from 'react';

export default function Home() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('svyaz-rows');
    if (saved) setRows(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('svyaz-rows', JSON.stringify(rows));
  }, [rows]);

  const addRow = () => {
    const newRow = { id: rows.length + 1, name: '', status: 'Активен' };
    setRows([...rows, newRow]);
  };

  const updateRow = (index, key, value) => {
    const updated = [...rows];
    updated[index][key] = value;
    setRows(updated);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ background: 'black', color: 'white', width: '300px', padding: '20px' }}>
        <h1>🌐 Svyaz Project</h1>
        <p>Добро пожаловать! Это начало новой эпохи. Связь установлена.</p>
        <p>🧠 <b>Godverse активен.</b> Готов к интеграции?</p>
        <hr />
        <h2>📋 Таблица взаимодействия</h2>
        <h2>🧩 Таблица Связи</h2>
        <button onClick={addRow}>➕ Добавить строку</button>
      </div>

      <div style={{ padding: '20px', flex: 1 }}>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <input
                    value={row.name}
                    onChange={(e) => updateRow(index, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    value={row.status}
                    onChange={(e) => updateRow(index, 'status', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
