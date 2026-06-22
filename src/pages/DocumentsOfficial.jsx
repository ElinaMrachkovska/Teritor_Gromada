import PageHero from "../components/PageHero";
import DocTable from "../components/DocTable";
import { officialDocuments } from "../data/content";

export default function DocumentsOfficial() {
  return (
    <>
      <PageHero title="Офіційні документи громади" crumb="Офіційні документи" />
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <p className="mt-0">
              Рішення міської ради, розпорядження міського голови, протоколи
              сесій та звіти про виконання бюджету територіальної громади.
            </p>
            <DocTable rows={officialDocuments} />
          </div>

          <aside className="bg-paper border border-ink/10 rounded-[2px] p-6 self-start">
            <h3 className="text-base border-b-2 border-ink pb-2.5 mb-3.5 font-display font-semibold">
              Категорії документів
            </h3>
            <ul className="space-y-2 text-sm list-disc pl-4.5">
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Рішення ради</a></li>
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Розпорядження голови</a></li>
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Протоколи сесій</a></li>
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Бюджетні звіти</a></li>
              <li><a href="#" className="text-ochre-dk hover:text-ochre">Декларації доброчесності</a></li>
              <li><a href="/documents-legal" className="text-ochre-dk hover:text-ochre">Законодавчі документи</a></li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
