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
              <a href="#" className="text-ochre-dk hover:text-ochre">
                {row.title}
              </a>
            </td>
            <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">
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
