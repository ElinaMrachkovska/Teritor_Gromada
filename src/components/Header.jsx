import { NavLink } from "react-router-dom";
import { navLinks } from "../data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-ink/10">
      {/* top utility bar */}
      <div className="bg-ink text-[13px] text-slate-300">
        <div className="mx-auto max-w-[1180px] px-6 h-[38px] flex items-center justify-between">
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/g/1J8nGWR9E6/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Telegram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
          <div className="flex gap-4">
            <a href="tel:+380385000000" className="hover:text-white">тел. +38 (0349) 50-00-00</a>
            <a href="mailto:territor_hromada_kam-pod@gmail.com" className="hover:text-white">
              territor_hromada_kam-pod@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* logo row */}
      <div className="mx-auto max-w-[1180px] px-6 py-4 flex items-center justify-between gap-6">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}sun.jpg`}
            alt="Герб громади"
            className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
          />
          <span className="font-display leading-tight">
            <span className="block text-[19px] font-bold text-text">
              Територіальна громада міста Кам'янця-Подільського
            </span>
            <span className="block text-[12.5px] font-sans text-ink-2">
              Громада — це мешканці, що діють
            </span>
          </span>
        </NavLink>
      </div>

      {/* main nav */}
      <nav className="bg-ink">
        <div className="mx-auto max-w-[1180px] px-6">
          <ul className="flex flex-wrap">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `block px-[18px] py-[14px] text-[14.5px] font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-ink-2 text-white"
                        : "text-slate-200 hover:bg-ink-2 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
