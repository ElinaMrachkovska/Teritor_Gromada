import PageHero from "../components/PageHero";
import { structureDepartments } from "../data/content";

const orgBranches = [
  "Фінансове управління",
  "Відділ освіти",
  "Управління ЖКГ",
  "Відділ культури і туризму",
  "Управління соціального захисту",
  "Відділ земельних відносин",
];

export default function Structure() {
  return (
    <>
      <PageHero
        title="Управлінська структура територіальної громади"
        crumb="Управлінська структура"
      />
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6">
          <p className="max-w-[780px] mt-0">
            Ці підрозділи існують не самі для себе — вони супроводжують
            ініціативи, які пропонують мешканці: від ідеї до реалізації.
            Якщо твоя пропозиція стосується конкретної сфери, тут можна
            знайти, хто саме допоможе її втілити.
          </p>

          <div className="flex flex-col items-center gap-2 mt-9">
            <div className="bg-ink text-white border border-ink rounded-[2px] px-5.5 py-3 text-sm font-semibold text-center">
              Кам'янець-Подільська міська рада
            </div>
            <div className="w-0.5 h-4.5 bg-ink" />
            <div className="bg-paper border border-ink rounded-[2px] px-5.5 py-3 text-sm font-semibold text-center">
              Міський голова
            </div>
            <div className="w-0.5 h-4.5 bg-ink" />
            <div className="bg-ink-2 text-white border border-ink rounded-[2px] px-5.5 py-3 text-sm font-semibold text-center">
              Виконавчий комітет
            </div>
            <div className="w-0.5 h-4.5 bg-ink" />
            <div className="flex gap-4 flex-wrap justify-center">
              {orgBranches.map((b) => (
                <div
                  key={b}
                  className="bg-paper border border-ink rounded-[2px] px-5.5 py-3 text-sm font-semibold text-center"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-12 font-display font-semibold text-lg">
            Структурні підрозділи
          </h3>
          <table className="w-full border-collapse bg-paper">
            <thead>
              <tr>
                <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">Підрозділ</th>
                <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">Керівник</th>
                <th className="text-left px-3.5 py-3 bg-ink text-white font-display font-semibold text-[14.5px] border-b border-ink/10">Сфера відповідальності</th>
              </tr>
            </thead>
            <tbody>
              {structureDepartments.map((d) => (
                <tr key={d.name} className="hover:bg-white transition-colors">
                  <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">{d.name}</td>
                  <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">{d.head}</td>
                  <td className="px-3.5 py-3 text-[14.5px] border-b border-ink/10">{d.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
