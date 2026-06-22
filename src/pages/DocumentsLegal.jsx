import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import DocTable from "../components/DocTable";
import { legalDocuments } from "../data/content";

export default function DocumentsLegal() {
  return (
    <>
      <PageHero title="Законодавчі документи" crumb="Законодавчі документи" />
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <p className="mt-0">
              Нормативно-правові акти, на основі яких здійснюється діяльність
              органів місцевого самоврядування територіальної громади міста
              Кам'янця-Подільського.
            </p>

            <div className="mb-8">
              <DocTable rows={legalDocuments} />
            </div>

            <h3 className="text-lg font-display font-semibold">
              Роз'яснення та коментарі
            </h3>
            <p>
              За потреби отримати консультацію щодо застосування
              законодавчих норм у сфері місцевого самоврядування мешканці
              можуть звернутися до юридичного відділу виконавчого комітету
              через розділ <Link to="/contacts" className="text-ochre-dk hover:text-ochre">«Контакти»</Link>.
            </p>
          </div>

          <aside className="bg-paper border border-ink/10 rounded-[2px] p-6 self-start">
            <h3 className="text-base border-b-2 border-ink pb-2.5 mb-3.5 font-display font-semibold">
              Категорії документів
            </h3>
            <ul className="space-y-2 text-sm list-disc pl-4.5">
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Закони України</a></li>
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Кодекси</a></li>
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Постанови КМУ</a></li>
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Статут громади</a></li>
              <li><Link to="/documents-official" className="text-ochre-dk hover:text-ochre">Офіційні документи ради</Link></li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
