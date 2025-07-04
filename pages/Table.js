export default function Table() {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
      <thead>
        <tr>
          <th style={cellStyle}>Дата</th>
          <th style={cellStyle}>Событие</th>
          <th style={cellStyle}>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>04.07.2025</td>
          <td style={cellStyle}>Активация сайта</td>
          <td style={cellStyle}>Связь установлена. Godverse пробуждён.</td>
        </tr>
        <tr>
          <td style={cellStyle}>…</td>
          <td style={cellStyle}>…</td>
          <td style={cellStyle}>…</td>
        </tr>
      </tbody>
    </table>
  );
}

const cellStyle = {
  border: "1px solid #555",
  padding: "0.5rem",
  textAlign: "left",
};
