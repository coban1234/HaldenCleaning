import { useMemo, useState } from "react";
import { areas } from "../data/areas";
import { team, vetting } from "../data/team";

export default function TeamFilter() {
  const [area, setArea] = useState("all");
  const people = useMemo(
    () => (area === "all" ? team : team.filter((person) => person.areas.includes(area))),
    [area],
  );

  return (
    <div>
      <p className="text-[13px] font-semibold tracking-[0.06em] uppercase text-slate">
        Filter by area
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={area === "all"}
          className={`min-h-12 px-4 rounded-full text-[15px] ${
            area === "all" ? "border-2 border-euc bg-euc-tint font-semibold" : "border border-line font-medium"
          }`}
          onClick={() => setArea("all")}
        >
          All
        </button>
        {areas.map((item) => (
          <button
            key={item.slug}
            type="button"
            aria-pressed={area === item.slug}
            className={`min-h-12 px-4 rounded-full text-[15px] ${
              area === item.slug
                ? "border-2 border-euc bg-euc-tint font-semibold"
                : "border border-line font-medium"
            }`}
            onClick={() => setArea(item.slug)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {people.map((person) => (
          <article key={person.id} className="bg-paper border border-line rounded-card overflow-hidden">
            <img
              src={person.photo}
              alt={`Portrait of ${person.name}.`}
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{person.name}</h3>
              <p className="tabular text-[15px] text-slate">
                {person.years} years with us · {person.languages.join(", ")}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {vetting.map((badge) => (
                  <span
                    key={badge}
                    className="text-[11px] font-semibold tracking-[0.08em] uppercase text-euc bg-euc-tint rounded-full px-2.5 py-1"
                  >
                    {badge}
                  </span>
                ))}
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-euc bg-euc-tint rounded-full px-2.5 py-1">
                  {person.years} years with us
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
