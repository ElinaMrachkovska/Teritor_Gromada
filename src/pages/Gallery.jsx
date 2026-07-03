import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import { galleryItems } from "../data/content";

export default function Gallery() {
  // Стан для збереження об'єкта фото, яке зараз збільшене
  const [selectedItem, setSelectedItem] = useState(null);

  // Додаємо слухач для закриття через клавішу Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
                onClick={() => setSelectedItem(item)} // Клік робить фото активним
                className="group relative rounded-[2px] overflow-hidden aspect-[4/3] bg-stone-dk cursor-pointer"
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

      {/* Модальне вікно (Lightbox) для збільшення фото */}
{/* Модальне вікно (Lightbox) для максимального збільшення фото */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)} // Клік на чорне тло закриває модалку
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-2 cursor-zoom-out select-none transition-opacity duration-200"
          style={{ animation: "fadeIn 0.15s ease-out forwards" }}
        >
          {/* Кнопка закриття (хрестик) — зроблена трохи більшою та контрастнішою */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-3 right-5 text-white/80 hover:text-white text-5xl font-light font-sans focus:outline-none transition-colors cursor-pointer z-50 drop-shadow-md"
          >
            &times;
          </button>

          {/* Контейнер збільшеного зображення — розширено межі */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
            <img
              src={selectedItem.image}
              alt={selectedItem.caption}
              className="max-w-[98vw] max-h-[92vh] object-contain rounded-[2px] shadow-2xl"
              onClick={(e) => {
                // Клік по самій картинці теж закриває її та повертає назад
                setSelectedItem(null);
              }}
            />
            {/* Напівпрозорий підпис, який акуратно накладається на низ екрана */}
            <p className="text-white text-xs md:text-sm font-medium mt-2 bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-[2px] text-center max-w-[90vw] drop-shadow">
              {selectedItem.caption}
            </p>
          </div>
        </div>
      )}

      {/* Маленький інлайн-стиль для плавної появи чорного тла */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}