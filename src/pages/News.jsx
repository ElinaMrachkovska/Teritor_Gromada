import PageHero from "../components/PageHero";
import NewsCard from "../components/NewsCard";
import { news } from "../data/content";

export default function News() {
  return (
    <>
      <PageHero title="Новини громади" crumb="Новини" />
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6.5">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-9">
            <button className="inline-block px-[22px] py-3 font-semibold text-[14.5px] rounded-[2px] border border-ink text-ink hover:bg-ink hover:text-white transition-colors">
              Завантажити більше новин
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
