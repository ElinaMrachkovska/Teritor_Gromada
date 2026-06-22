import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { councilLeadership, councilCommittees } from "../data/content";

export default function Council() {
  return (
    <>
      <PageHero title="Рада територіальної громади" crumb="Рада громади" />
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6">
          <p className="max-w-[780px] mt-0">
            Рада територіальної громади — представницький орган, обраний
            мешканцями на місцевих виборах. Її головне завдання — почути
            ініціативи громадян і допомогти втілити їх: ухвалити рішення
            щодо бюджету, землі та спільного майна громади на користь
            ініціатив, які пропонують самі мешканці.
          </p>

          <h3 className="mt-10 font-display font-semibold text-lg">
            Керівництво ради
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {councilLeadership.map((p) => (
              <div
                key={p.name}
                className="bg-paper border border-ink/10 rounded-[2px] p-5 text-center"
              >
                <div className="w-[88px] h-[88px] rounded-full bg-stone-dk mx-auto mb-3.5 flex items-center justify-center font-display text-[26px] text-text">
                  {p.initials}
                </div>
                <h4 className="mb-0.5 text-[15.5px] font-display font-semibold">{p.name}</h4>
                <div className="text-[13px] text-ochre-dk font-semibold mb-2">{p.role}</div>
                <div className="text-[13px] text-[#566075]">{p.desc}</div>
              </div>
            ))}
          </div>

          <h3 className="mt-11 font-display font-semibold text-lg">
            Постійні комісії ради
          </h3>
          <table className="w-full border-collapse bg-paper">
            <thead>
              <tr>
                <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">Комісія</th>
                <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">Голова комісії</th>
                <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">Напрям роботи</th>
              </tr>
            </thead>
            <tbody>
              {councilCommittees.map((c) => (
                <tr key={c.name} className="hover:bg-white transition-colors">
                  <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">{c.name}</td>
                  <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">{c.head}</td>
                  <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">{c.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-center mt-8">
            <Link
              to="/documents-official"
              className="inline-block px-[22px] py-3 font-semibold text-[14.5px] rounded-[2px] bg-ochre text-white hover:bg-ochre-dk transition-colors"
            >
              Протоколи та рішення сесій
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
