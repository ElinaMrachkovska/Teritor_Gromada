import PageHero from "../components/PageHero";
import { galleryItems } from "../data/content";

export default function Gallery() {
  return (
    <>
      <PageHero title="Фотогалерея громади" crumb="Галерея" />
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6">
          <p className="mt-0 max-w-[760px]">
            Фотографії з життя громади: історична архітектура, заходи,
            благоустрій та події за участі мешканців і органів місцевого
            самоврядування.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-[2px] overflow-hidden aspect-[4/3] bg-stone-dk"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent text-white text-[13px] px-3 pt-6 pb-2.5">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-9">
            <button className="inline-block px-[22px] py-3 font-semibold text-[14.5px] rounded-[2px] border border-ink text-ink hover:bg-ink hover:text-white transition-colors">
              Більше фотографій
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
