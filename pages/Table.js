import { useState } from 'react';

export default function TablePage() {
  const [rows, setRows] = useState([
    { id: 1, name: 'Пример', status: 'Активен' },
  ]);

  const addRow = () => {
    const newId = rows.length + 1;
    setRows([...rows, { id: newId, name: '', status: 'Новый' }]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const updateRow = (id, field, value) => {
    setRows(rows.map(row =>
      row.id === id ? { ...row, [field]: value } : row
    ));
  };

  return (
    <div style={{ padding: 30, fontFamily: 'sans-serif' }}>
      <h1>🧩 Таблица Связи</h1>
      <button onClick={addRow}>➕ Добавить строку</button>
      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Статус</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  value={row.name}
                  onChange={e => updateRow(row.id, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  value={row.status}
                  onChange={e => updateRow(row.id, 'status', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => deleteRow(row.id)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
