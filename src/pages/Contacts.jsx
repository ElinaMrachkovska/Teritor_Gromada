import { useState } from "react";
import PageHero from "../components/PageHero";

const departments = [
  { name: "Фінансове управління", phone: "(0385) 50-01-12" },
  { name: "Відділ освіти", phone: "(0385) 50-01-23" },
  { name: "Управління ЖКГ", phone: "(0385) 50-01-34" },
  { name: "Відділ культури і туризму", phone: "(0385) 50-01-45" },
  { name: "Управління соціального захисту", phone: "(0385) 50-01-56" },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero title="Контакти" crumb="Контакти" />
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-paper border border-ink/10 rounded-[2px] p-6 mb-6">
              <h3 className="text-base border-b-2 border-ink pb-2.5 mb-3.5 font-display font-semibold">
                Виконавчий комітет
              </h3>
              <ul className="space-y-2.5 text-[14.5px] list-none p-0 m-0">
                <li><strong>Адреса:</strong> 32300, м. Кам'янець-Подільський, вул. Соборна, 2</li>
                <li><strong>Телефон:</strong> +38 (0385) 50-00-00</li>
                <li><strong>E-mail:</strong> rada@kam-pod-gromada.gov.ua</li>
                <li><strong>Графік роботи:</strong> пн–пт, 8:00–17:00</li>
                <li><strong>Прийом громадян:</strong> вт, чт, 9:00–17:00</li>
              </ul>
            </div>
            <div className="bg-paper border border-ink/10 rounded-[2px] p-6">
              <h3 className="text-base border-b-2 border-ink pb-2.5 mb-3.5 font-display font-semibold">
                Структурні підрозділи
              </h3>
              <ul className="space-y-2 text-sm list-disc pl-4.5">
                {departments.map((d) => (
                  <li key={d.name}>
                    {d.name} — {d.phone}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-paper border border-ink/10 rounded-[2px] p-6"
          >
            <h3 className="text-base mt-0 mb-4 font-display font-semibold">
              Запропонувати ініціативу
            </h3>

            {submitted && (
              <div className="mb-4 px-4 py-3 rounded-[2px] bg-ochre/[0.12] text-ochre-dk text-sm font-medium">
                Дякуємо! Твою ініціативу отримано — з тобою зв'яжуться.
              </div>
            )}

            <label htmlFor="name" className="text-[13.5px] font-semibold block mb-1.5">
              Ім'я та прізвище
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Введіть ваше ім'я"
              className="w-full px-3.5 py-2.5 border border-stone-dk rounded-[2px] text-sm mb-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-ochre"
            />

            <label htmlFor="email" className="text-[13.5px] font-semibold block mb-1.5">
              Електронна пошта
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 border border-stone-dk rounded-[2px] text-sm mb-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-ochre"
            />

            <label htmlFor="topic" className="text-[13.5px] font-semibold block mb-1.5">
              Тема ініціативи
            </label>
            <input
              id="topic"
              name="topic"
              type="text"
              value={form.topic}
              onChange={handleChange}
              placeholder="Наприклад: благоустрій, освіта, культура"
              className="w-full px-3.5 py-2.5 border border-stone-dk rounded-[2px] text-sm mb-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-ochre"
            />

            <label htmlFor="message" className="text-[13.5px] font-semibold block mb-1.5">
              Опис ініціативи
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Розкажи, яку зміну ти пропонуєш і чим можеш допомогти"
              className="w-full px-3.5 py-2.5 border border-stone-dk rounded-[2px] text-sm mb-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-ochre"
            />

            <button
              type="submit"
              className="w-full px-[22px] py-3 font-semibold text-[14.5px] rounded-[2px] bg-ochre text-white hover:bg-ochre-dk transition-colors"
            >
              Надіслати ініціативу
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
