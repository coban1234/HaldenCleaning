import { useMemo, useState } from "react";
import {
  indicativeScopeRange,
  scopeAmenities,
  scopeExtras,
  scopeFrequencies,
  scopePropertyTypes,
  type ScopeFrequency,
  type ScopePropertyType,
} from "../data/pricing";

export default function ScopeBuilder() {
  const [type, setType] = useState<ScopePropertyType>("Office");
  const [size, setSize] = useState("8000");
  const [frequency, setFrequency] = useState<ScopeFrequency>("5×/week");
  const [selected, setSelected] = useState<string[]>(["Lobby", "Hallways", "Elevators"]);
  const [extra, setExtra] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const range = useMemo(
    () =>
      indicativeScopeRange({
        type,
        size: Number(size) || 0,
        frequency,
        amenities: selected,
        extras: extra,
      }),
    [type, size, frequency, selected, extra],
  );

  function toggle(list: string[], set: (v: string[]) => void, item: string) {
    set(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  }

  if (sent) {
    return (
      <div className="bg-paper border border-line rounded-card p-8">
        <h3 className="font-semibold fs-h3">Scope sent.</h3>
        <p className="mt-2 text-slate">
          Indicative range ${range.low.toLocaleString()} – ${range.high.toLocaleString()} / month.
          A walkthrough confirms the scope and the final figure.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-6 min-w-0 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] md:items-start"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="bg-paper border border-line rounded-card p-6 md:p-8 space-y-6 min-w-0">
        <fieldset>
          <legend className="text-[13px] font-semibold tracking-[0.06em] uppercase text-slate">
            Property type
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {scopePropertyTypes.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={type === item}
                onClick={() => setType(item)}
                className={`min-h-12 px-4 rounded-full text-[15px] ${
                  type === item
                    ? "border-2 border-euc bg-euc-tint font-semibold"
                    : "border border-line font-medium"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="block">
          <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-slate">
            {type === "Strata" ? "Units" : "Square footage"}
          </span>
          <input
            className="field mt-1 max-w-xs tabular"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            inputMode="numeric"
          />
        </label>
        <fieldset>
          <legend className="text-[13px] font-semibold tracking-[0.06em] uppercase text-slate">
            Frequency
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {scopeFrequencies.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={frequency === item}
                onClick={() => setFrequency(item)}
                className={`min-h-12 px-4 rounded-full text-[15px] ${
                  frequency === item
                    ? "border-2 border-euc bg-euc-tint font-semibold"
                    : "border border-line font-medium"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-[13px] font-semibold tracking-[0.06em] uppercase text-slate">
            Amenities
          </legend>
          <div className="mt-2">
            {scopeAmenities.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={selected.includes(item)}
                onClick={() => toggle(selected, setSelected, item)}
                className={`w-full min-h-12 px-3 flex items-center justify-between border-b border-line text-left text-[15px] ${
                  selected.includes(item) ? "bg-euc-tint font-semibold" : "font-medium"
                }`}
              >
                {item}
                <span className={selected.includes(item) ? "text-euc" : "text-slate"}>
                  {selected.includes(item) ? "✓" : "○"}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-[13px] font-semibold tracking-[0.06em] uppercase text-slate">
            Extras
          </legend>
          <div className="mt-2">
            {scopeExtras.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={extra.includes(item)}
                onClick={() => toggle(extra, setExtra, item)}
                className={`w-full min-h-12 px-3 flex items-center justify-between border-b border-line text-left text-[15px] ${
                  extra.includes(item) ? "bg-euc-tint font-semibold" : "font-medium"
                }`}
              >
                {item}
                <span className={extra.includes(item) ? "text-euc" : "text-slate"}>
                  {extra.includes(item) ? "✓" : "○"}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <aside className="bg-paper border border-line rounded-card p-6 flex flex-col min-w-0 md:sticky md:top-24">
        <p className="text-[13px] font-semibold tracking-[0.06em] uppercase text-slate">
          Indicative range
        </p>
        <p
          key={`${range.low}-${range.high}`}
          className="display font-semibold tabular text-ink leading-[1.15] mt-1 price-swap"
          style={{ fontSize: "clamp(1.75rem, 1.4rem + 1.2vw, 2.5rem)" }}
          aria-live="polite"
        >
          ${range.low.toLocaleString()} – ${range.high.toLocaleString()}
        </p>
        <p className="mt-1 font-medium text-ink">/ month</p>
        <p className="mt-3 text-[15px] text-euc font-medium tabular">
          {frequency}
          {selected.length ? ` · ${selected.length} amenit${selected.length === 1 ? "y" : "ies"}` : ""}
          {extra.length ? ` · ${extra.length} extra${extra.length === 1 ? "" : "s"}` : ""}
        </p>
        <p className="mt-2 text-slate">
          Moves with frequency, amenities and extras, inside $0.10–$0.30 per sq ft. A walkthrough
          confirms the scope and the final figure.
        </p>
        <button
          type="submit"
          className="mt-5 min-h-[56px] w-full px-8 rounded-full bg-brass text-chalk font-semibold hover:bg-brass-h"
        >
          Request a walkthrough
        </button>
      </aside>
    </form>
  );
}
