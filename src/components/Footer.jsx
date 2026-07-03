import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300 mt-6">
      <div className="mx-auto max-w-[1180px] px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 pb-9 border-b border-white/10 pt-12">
        <div>
          <h4 className="text-white text-[15px] font-display font-semibold mb-3.5">
            Територіальна громада міста Кам'янця-Подільського
          </h4>
          <p className="text-sm">
            Простір територіальної громади Кам'янця-Подільського, де
            мешканці пропонують ідеї та втілюють їх разом.
          </p>
        </div>
        <div>
          <h4 className="text-white text-[15px] font-display font-semibold mb-3.5">Розділи</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/news" className="hover:text-white">Новини</Link></li>
            <li><Link to="/documents-legal" className="hover:text-white">Законодавчі документи</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Галерея</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[15px] font-display font-semibold mb-3.5">Управління</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/council" className="hover:text-white">Рада територіальної громади</Link></li>
            <li><Link to="/documents-official" className="hover:text-white">Офіційні документи</Link></li>
            <li><Link to="/structure" className="hover:text-white">Управлінська структура</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[15px] font-display font-semibold mb-3.5">Контакти</h4>
          <ul className="space-y-2 text-sm">
            <li>вул. Соборна, 2, м. Кам'янець-Подільський</li>
            <li>+38 (0385) 50-00-00</li>
            <li>territor_hromada_kam-pod@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1180px] px-6 py-4.5 flex flex-col sm:flex-row gap-2 items-center justify-between text-[13px] text-slate-400">
        <span>© 2026 Територіальна громада міста Кам'янця-Подільського</span>
        <div className="flex gap-3.5">
          <a href="https://www.facebook.com/share/g/1J8nGWR9E6/" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Telegram</a>
          <a href="#" className="hover:text-white">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
