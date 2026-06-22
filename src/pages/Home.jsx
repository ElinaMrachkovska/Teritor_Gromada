import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { news } from "../data/content";

const stats = [
  { num: "29", label: "населених пунктів об'єднує громада" },
  { num: "82 тис.", label: "мешканців — і кожен може бути ініціатором" },
  { num: "140+", label: "громадських ініціатив утілено за останні роки" },
  { num: "1374", label: "рік першої згадки міста" },
];

const quickLinks = [
  { to: "/contacts", label: "Запропонувати ініціативу" },
  { to: "/gallery", label: "Фотогалерея громади" },
  { to: "/news", label: "Новини від мешканців" },
  { to: "/documents-official", label: "Бюджет участі" },
  { to: "/council", label: "Рада громади" },
  { to: "/structure", label: "Управлінські підрозділи" },
  { to: "/documents-legal", label: "Законодавчі документи" },
  { to: "/contacts", label: "Звернутися до громади" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white py-16 pb-14 bg-gradient-to-b from-ink/[0.78] to-ink/[0.55]">
        <div className="absolute right-[-60px] bottom-[-90px] w-[340px] h-[340px] rounded-full border-2 border-white/10 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1180px] px-6 max-w-[680px]">
          <div className="text-[13px] tracking-[1.5px] uppercase text-[#fde08a] font-semibold mb-3.5">
            Територіальна громада міста Кам'янця-Подільського
          </div>
          <h1 className="text-white text-[38px] leading-[1.18] mb-4.5 font-display font-semibold">
            Громада — це ми. Кожна ініціатива починається з мешканця
          </h1>
          <p className="text-[16.5px] text-slate-100 max-w-[560px]">
            Це простір, де мешканці Кам'янця-Подільського та навколишніх сіл
            самі пропонують ідеї, об'єднуються та змінюють своє місто й
            села — а рада та виконавчі органи допомагають втілити їх у життя.
          </p>
          <div className="mt-7 flex gap-3.5 flex-wrap">
            <Link
              to="/contacts"
              className="inline-block px-[22px] py-3 font-semibold text-[14.5px] rounded-[2px] bg-ochre text-white hover:bg-ochre-dk transition-colors"
            >
              Запропонувати ініціативу
            </Link>
            <Link
              to="/news"
              className="inline-block px-[22px] py-3 font-semibold text-[14.5px] rounded-[2px] border border-white/55 text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Що відбувається в громаді
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1180px] px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 py-9">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[34px] text-[#fde08a]">{s.num}</div>
              <div className="text-[13.5px] text-slate-100 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="py-14">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="flex items-baseline justify-between mb-7 border-b-2 border-leaf pb-2.5">
            <h2 className="text-[26px] m-0 font-display font-semibold text-text">Новини громади</h2>
            <Link to="/news" className="text-sm font-semibold text-ochre-dk hover:text-ochre">
              Усі новини →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6.5">
            {news.slice(0, 6).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-14 bg-paper border-y border-leaf/20">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-7 border-b-2 border-leaf pb-2.5">
            <h2 className="text-[26px] m-0 font-display font-semibold text-text">Долучайся прямо зараз</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
            {quickLinks.map((q, i) => (
              <Link
                key={i}
                to={q.to}
                className="bg-paper border border-leaf/15 border-l-4 border-l-ochre px-5 py-5 font-semibold text-[15px] text-text rounded-[2px] flex items-center min-h-16 hover:border-l-leaf hover:bg-white transition-colors"
              >
                {q.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About + contact box */}
      <section className="py-14">
        <div className="mx-auto max-w-[1180px] px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <div className="mb-7 border-b-2 border-leaf pb-2.5">
              <h2 className="text-[26px] m-0 font-display font-semibold text-text">Про громаду</h2>
            </div>
            <p>
              Територіальна громада міста Кам'янця-Подільського — це
              насамперед люди: мешканці міста й навколишніх сіл, які щодня
              пропонують ідеї, об'єднуються в ініціативні групи та
              самостійно змінюють простір довкола себе. Саме мешканці
              ініціюють проєкти благоустрою, культурні події, освітні та
              соціальні починання.
            </p>
            <p>
              Рада громади та виконавчі органи тут — не центр прийняття
              рішень "згори", а інструмент, який допомагає мешканцям втілити
              ініціативи: знайти фінансування, узгодити дозволи, об'єднати
              ресурси. Цей сайт — місце, де кожен може дізнатися про
              ініціативи інших і запропонувати власну.
            </p>
            <Link
              to="/contacts"
              className="inline-block mt-2 px-[22px] py-3 font-semibold text-[14.5px] rounded-[2px] bg-ochre text-white hover:bg-ochre-dk transition-colors"
            >
              Запропонувати свою ініціативу
            </Link>
          </div>
          <div className="bg-paper border border-leaf/15 rounded-[2px] p-6">
            <h3 className="text-base border-b-2 border-leaf pb-2.5 mb-3.5 font-display font-semibold text-text">
              Контактна інформація
            </h3>
            <ul className="space-y-2 text-sm list-none p-0 m-0">
              <li><strong>Адреса:</strong> 32300, м. Кам'янець-Подільський, вул. Соборна, 2</li>
              <li><strong>Телефон:</strong> +38 (0385) 50-00-00</li>
              <li><strong>E-mail:</strong> rada@kam-pod-gromada.gov.ua</li>
              <li><strong>Графік прийому громадян:</strong> вт, чт — 9:00–17:00</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
