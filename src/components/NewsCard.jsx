import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  return (
    <article className="bg-paper border border-ink/10 rounded-[2px] overflow-hidden flex flex-col">
      <div className="aspect-[16/10] bg-stone-dk overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 pb-6 flex-1 flex flex-col">
        <div className="flex gap-2.5 text-[12.5px] text-ink-2 mb-2">
          <span>{item.date}</span>
          <span>·</span>
          <span>{item.readTime}</span>
        </div>
        <h3 className="text-[17px] leading-snug mb-2.5 font-display font-semibold">
          <Link to={item.link} className="text-text hover:text-ochre-dk">
            {item.title}
          </Link>
        </h3>
        <p className="text-sm text-[#3c4759] flex-1 m-0">{item.excerpt}</p>
      </div>
    </article>
  );
}
