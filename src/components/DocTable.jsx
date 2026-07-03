export default function DocTable({ rows }) {
  return (
    <table className="w-full border-collapse bg-paper">
      <thead>
        <tr>
          <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">
            Документ
          </th>
          <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">
            Дата
          </th>
          <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">
            Тип
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-white transition-colors">
            <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">
              {/* Перевіряємо, чи є в об'єкті робоче посилання url */}
              {row.url ? (
                <a 
                  href={row.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-ochre-dk hover:text-ochre font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  {row.title}
                  {/* Елегантна стрілочка зовнішнього посилання */}
                  <span className="text-xs opacity-60 font-sans">↗</span>
                </a>
              ) : (
                // Якщо посилання немає (наприклад, для Статуту чи Регламенту), виводимо просто текст
                <span className="text-ink font-medium">{row.title}</span>
              )}
            </td>
            <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10 text-stone-dk2">
              {row.date}
            </td>
            <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-ochre/[0.13] text-ochre-dk">
                {row.type}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}