import { useEffect, useMemo, useState } from "react";
import {
  addOns,
  frequencyLabels,
  quotePrice,
  serviceLabels,
  type BathroomOption,
  type BedroomOption,
  type Frequency,
  type ServiceLevel,
} from "../data/pricing";
import { team } from "../data/team";

const steps = ["Your home", "Service", "When", "Details"] as const;
const field =
  "field mt-1";

function parseParam(params: URLSearchParams) {
  const beds = Number(params.get("beds") || 2) as BedroomOption;
  const baths = Number(params.get("baths") || 2) as BathroomOption;
  const service = (params.get("service") || "standard") as ServiceLevel;
  const freq = (params.get("freq") || "biweekly") as Frequency;
  const addons = (params.get("addons") || "").split(",").filter(Boolean);
  return { beds, baths, service, freq, addons };
}

type Props = {
  initialBeds?: BedroomOption;
  initialBaths?: BathroomOption;
  initialService?: ServiceLevel;
  initialFreq?: Frequency;
  initialAddOns?: string[];
};

export default function BookingFlow({
  initialBeds = 2,
  initialBaths = 2,
  initialService = "standard",
  initialFreq = "biweekly",
  initialAddOns = [],
}: Props) {
  const [step, setStep] = useState(0);
  const [beds, setBeds] = useState<BedroomOption>(initialBeds);
  const [baths, setBaths] = useState<BathroomOption>(initialBaths);
  const [sqft, setSqft] = useState("900");
  const [parking, setParking] = useState("");
  const [pets, setPets] = useState("");
  const [service, setService] = useState<ServiceLevel>(initialService);
  const [freq, setFreq] = useState<Frequency>(initialFreq);
  const [addons, setAddons] = useState<string[]>(initialAddOns);
  const [date, setDate] = useState("");
  const [teamId, setTeamId] = useState(team[0].id);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [access, setAccess] = useState("");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState("");

  useEffect(() => {
    const parsed = parseParam(new URLSearchParams(window.location.search));
    if ([1, 2, 3, 4, 5].includes(parsed.beds)) setBeds(parsed.beds);
    if ([1, 2, 3, 4].includes(parsed.baths)) setBaths(parsed.baths);
    if (parsed.service in serviceLabels) setService(parsed.service);
    if (parsed.freq in frequencyLabels) setFreq(parsed.freq);
    if (parsed.addons.length) setAddons(parsed.addons);
  }, []);

  const quote = useMemo(
    () => quotePrice(beds, baths, service, freq, addons),
    [beds, baths, service, freq, addons],
  );

  const priceLabel = quote.price == null ? "Walkthrough" : `$${quote.price} flat`;

  if (done) {
    return (
      <div className="bg-paper border border-line rounded-card p-8 max-w-xl">
        <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-euc">Confirmed</p>
        <h2 className="display font-semibold fs-h2 mt-2">Booking received.</h2>
        <p className="mt-3 text-slate">
          {quote.price == null
            ? `A manager will confirm the walkthrough by email to ${sentTo}.`
            : `A confirmation with the full room-by-room scope is on its way to ${sentTo}. Price stays $${quote.price} flat.`}
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6 min-w-0 md:grid md:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] pb-24 md:pb-0"
      onSubmit={async (e) => {
        e.preventDefault();
        const wide = window.matchMedia("(min-width: 1280px)").matches;
        if (!wide && step < 3) {
          setStep(step + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        setError("");
        setSending(true);
        try {
          const res = await fetch("/api/book/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              phone,
              address,
              access,
              notes,
              pets,
              parking,
              sqft,
              beds,
              baths,
              service,
              freq,
              addons,
              date,
              teamId,
              price: quote.price,
              duration: quote.duration,
            }),
          });
          const data = (await res.json()) as { ok?: boolean; error?: string; email?: string };
          if (!res.ok || !data.ok) {
            setError(data.error || "We could not send the confirmation. Try again.");
            return;
          }
          setSentTo(data.email || email);
          setDone(true);
        } catch {
          setError("We could not send the confirmation. Check your connection and try again.");
        } finally {
          setSending(false);
        }
      }}
    >
      <div className="bg-paper border border-line rounded-card p-5 md:p-8">
        <ol
          className="sticky top-16 z-10 -mx-5 px-5 py-3 mb-6 grid grid-cols-4 gap-2 bg-paper border-b border-line md:static md:mx-0 md:px-0 md:border-0 md:py-0"
          aria-label="Booking progress"
        >
          {steps.map((label, i) => (
            <li
              key={label}
              className={`text-[11px] xl:text-[12px] font-semibold tracking-[0.06em] uppercase ${
                i === step ? "text-euc" : "text-slate"
              }`}
              aria-current={i === step ? "step" : undefined}
            >
              <span className="tabular">{i + 1}</span>
              <span className="hidden sm:inline"> {label}</span>
            </li>
          ))}
        </ol>

        <div className={`booking-step space-y-4 ${step === 0 ? "is-active" : ""}`}>
          <h2 className="font-semibold fs-h3">Your home</h2>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Bedrooms
            </span>
            <select
              className={field}
              value={beds}
              onChange={(e) => setBeds(Number(e.target.value) as BedroomOption)}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n === 5 ? "5+" : n}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Bathrooms
            </span>
            <select
              className={field}
              value={baths}
              onChange={(e) => setBaths(Number(e.target.value) as BathroomOption)}
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n === 4 ? "4+" : n}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Square footage
            </span>
            <input
              className={field}
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              inputMode="numeric"
            />
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Parking
            </span>
            <input
              className={field}
              value={parking}
              onChange={(e) => setParking(e.target.value)}
              autoComplete="off"
            />
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Pets
            </span>
            <input
              className={field}
              value={pets}
              onChange={(e) => setPets(e.target.value)}
            />
          </label>
        </div>

        <div className={`booking-step space-y-4 xl:mt-10 ${step === 1 ? "is-active" : ""}`}>
          <h2 className="font-semibold fs-h3">Service</h2>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Level
            </span>
            <select
              className={field}
              value={service}
              onChange={(e) => setService(e.target.value as ServiceLevel)}
            >
              {Object.entries(serviceLabels).map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Frequency
            </span>
            <select
              className={field}
              value={freq}
              onChange={(e) => setFreq(e.target.value as Frequency)}
            >
              {Object.entries(frequencyLabels).map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <fieldset>
            <legend className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Add-ons
            </legend>
            <div className="mt-2">
              {addOns.map((item) => (
                <label key={item.id} className="flex items-center justify-between gap-3 min-h-12 border-b border-line">
                  <span className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.includes(item.id)}
                      onChange={() =>
                        setAddons((current) =>
                          current.includes(item.id)
                            ? current.filter((id) => id !== item.id)
                            : [...current, item.id],
                        )
                      }
                    />
                    {item.label}
                  </span>
                  <span className="tabular text-slate">+${item.price}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className={`booking-step space-y-4 xl:mt-10 ${step === 2 ? "is-active" : ""}`}>
          <h2 className="font-semibold fs-h3">When</h2>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Preferred date
            </span>
            <input
              type="date"
              className={field}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <fieldset>
            <legend className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Preferred team
            </legend>
            <div className="mt-2">
              {team.map((person) => (
                <label key={person.id} className="flex items-center gap-3 min-h-12 border-b border-line">
                  <input
                    type="radio"
                    name="team"
                    checked={teamId === person.id}
                    onChange={() => setTeamId(person.id)}
                  />
                  <span>
                    {person.name} · {person.years} years · {person.languages.join(", ")}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className={`booking-step space-y-4 xl:mt-10 ${step === 3 ? "is-active" : ""}`}>
          <h2 className="font-semibold fs-h3">Details</h2>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Name
            </span>
            <input
              className={field}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Address
            </span>
            <input
              className={field}
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="street-address"
            />
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Email
            </span>
            <input
              className={field}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Phone
            </span>
            <input
              className={field}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Access instructions
            </span>
            <textarea
              className="mt-1 w-full min-h-24 text-base border border-line rounded-card px-3 py-2"
              value={access}
              onChange={(e) => setAccess(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
              Notes
            </span>
            <textarea
              className="mt-1 w-full min-h-20 text-base border border-line rounded-card px-3 py-2"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
        </div>

        {error && <p className="mt-6 text-[15px] text-euc">{error}</p>}
        <div className="mt-8 hidden md:flex xl:hidden flex-wrap gap-3">
          {step > 0 && (
            <button
              type="button"
              className="min-h-[56px] px-8 rounded-full border-[1.5px] border-ink font-semibold"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={sending}
            className="min-h-[56px] px-8 rounded-full bg-brass text-chalk font-semibold hover:bg-brass-h disabled:opacity-60"
          >
            {step < 3 ? "Continue" : sending ? "Sending…" : "Confirm booking"}
          </button>
        </div>
        <div className="mt-8 hidden xl:flex gap-3">
          <button
            type="submit"
            disabled={sending}
            className="min-h-[56px] px-8 rounded-full bg-brass text-chalk font-semibold hover:bg-brass-h disabled:opacity-60"
          >
            {sending ? "Sending…" : "Confirm booking"}
          </button>
        </div>
      </div>

      <aside className="hidden md:flex bg-paper border border-line rounded-card p-6 h-fit sticky top-24 flex-col min-w-0">
        <p className="text-[13px] font-semibold tracking-[0.06em] uppercase text-slate">Flat price</p>
        <p className="display font-semibold tabular fs-h2 mt-2" aria-live="polite">
          {quote.price == null ? "Walkthrough" : `$${quote.price}`}
        </p>
        <p className="mt-2 text-slate text-[15px]">
          {serviceLabels[service]} · {frequencyLabels[freq]}
        </p>
        <p className="mt-3 text-euc font-medium">
          {quote.price == null
            ? "5 bed+ is confirmed at a walkthrough."
            : "This price does not change between steps."}
        </p>
      </aside>

      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-[auto_minmax(0,1fr)_auto] bg-paper border-t border-line pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          className={`min-h-[56px] px-3 xs:px-5 font-semibold border-r border-line ${step === 0 ? "invisible pointer-events-none" : ""}`}
          onClick={() => setStep(Math.max(0, step - 1))}
        >
          Back
        </button>
        <p className="flex items-center justify-center px-2 tabular font-semibold text-[14px] xs:text-[16px] truncate" aria-live="polite">
          {priceLabel}
        </p>
        <button type="submit" disabled={sending} className="min-h-[56px] px-4 xs:px-6 bg-brass text-chalk font-semibold disabled:opacity-60">
          {step < 3 ? "Continue" : sending ? "…" : "Confirm"}
        </button>
      </div>
    </form>
  );
}
