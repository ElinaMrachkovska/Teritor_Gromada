import { Link } from "react-router-dom";

export default function PageHero({ title, crumb }) {
  return (
    <section className="bg-gradient-to-b from-ink/[0.82] to-ink/[0.7] bg-ink text-white py-10">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="text-[13px] text-slate-300 mb-2.5">
          <Link to="/" className="hover:text-white">Головна</Link> / {crumb}
        </div>
        <h1 className="text-[30px] font-display font-semibold text-white m-0">
          {title}
        </h1>
      </div>
    </section>
  );
}
