export type ServiceLevel = "standard" | "deep" | "move-out";
export type Frequency = "weekly" | "biweekly" | "monthly" | "onetime";
export type BedroomOption = 1 | 2 | 3 | 4 | 5;
export type BathroomOption = 1 | 2 | 3 | 4;

export const serviceLabels: Record<ServiceLevel, string> = {
  standard: "Standard",
  deep: "Deep",
  "move-out": "Move-out",
};

export const frequencyLabels: Record<Frequency, string> = {
  weekly: "Weekly",
  biweekly: "Bi-weekly",
  monthly: "Monthly",
  onetime: "One-time",
};

export const frequencyDiscount: Record<Frequency, number> = {
  weekly: 0.2,
  biweekly: 0.15,
  monthly: 0.1,
  onetime: 0,
};

/** One-time flat rates. Recurring prices are this minus the frequency discount. */
export const oneTimeRates: Record<
  string,
  Record<ServiceLevel, number | null>
> = {
  "1-1": { standard: 195, deep: 312, "move-out": 365 },
  "2-1": { standard: 230, deep: 365, "move-out": 430 },
  "2-2": { standard: 265, deep: 425, "move-out": 495 },
  "3-2": { standard: 325, deep: 520, "move-out": 605 },
  "4-3": { standard: 405, deep: 650, "move-out": 760 },
};

export const rateRows = [
  { label: "Studio / 1 bed, 1 bath", key: "1-1" },
  { label: "2 bed, 1 bath", key: "2-1" },
  { label: "2 bed, 2 bath", key: "2-2" },
  { label: "3 bed, 2 bath", key: "3-2" },
  { label: "4 bed, 3 bath", key: "4-3" },
] as const;

export const addOns = [
  { id: "oven", label: "Inside oven", price: 45 },
  { id: "fridge", label: "Inside fridge", price: 35 },
  { id: "cabinets", label: "Inside cabinets", price: 40 },
  { id: "windows", label: "Interior windows", price: 55 },
  { id: "balcony", label: "Balcony or patio", price: 40 },
  { id: "laundry", label: "Laundry (wash + fold)", price: 35 },
  { id: "walls", label: "Wall spot-cleaning", price: 30 },
] as const;

export function homeKey(beds: BedroomOption, baths: BathroomOption): string | null {
  if (beds >= 5) return null;
  const map: Record<string, string> = {
    "1-1": "1-1",
    "1-2": "2-1",
    "2-1": "2-1",
    "2-2": "2-2",
    "2-3": "3-2",
    "3-1": "2-2",
    "3-2": "3-2",
    "3-3": "4-3",
    "3-4": "4-3",
    "4-2": "4-3",
    "4-3": "4-3",
    "4-4": "4-3",
  };
  return map[`${Math.min(beds, 4)}-${Math.min(baths, 4)}`] ?? "4-3";
}

export function quotePrice(
  beds: BedroomOption,
  baths: BathroomOption,
  service: ServiceLevel,
  frequency: Frequency,
  addOnIds: string[] = [],
): { price: number | null; oneTime: number | null; savings: number; duration: string } {
  const key = homeKey(beds, baths);
  if (!key) {
    return { price: null, oneTime: null, savings: 0, duration: "Quoted after a walkthrough" };
  }
  const oneTime = oneTimeRates[key][service];
  if (oneTime == null) {
    return { price: null, oneTime: null, savings: 0, duration: "Quoted after a walkthrough" };
  }
  const extras = addOns
    .filter((item) => addOnIds.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);
  const discounted = Math.round(oneTime * (1 - frequencyDiscount[frequency]));
  const price = discounted + extras;
  const savings = oneTime - discounted;
  return { price, oneTime: oneTime + extras, savings, duration: estimateDuration(beds, baths, service) };
}

export function estimateDuration(
  beds: BedroomOption,
  baths: BathroomOption,
  service: ServiceLevel,
): string {
  const base = 75 + beds * 35 + baths * 25;
  const multiplier = service === "standard" ? 1 : service === "deep" ? 1.65 : 2;
  const minutes = Math.round((base * multiplier) / 15) * 15;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  const crew = beds >= 3 || service !== "standard" ? 2 : beds >= 2 ? 2 : 1;
  const time = rest === 0 ? `${hours} h` : `${hours} h ${rest} min`;
  return `Approx. ${time} · ${crew} cleaner${crew > 1 ? "s" : ""}`;
}

export const commercialRanges = [
  { frequency: "Daily", monthly: "$500 – $1,000" },
  { frequency: "Weekly", monthly: "$200 – $500" },
  { frequency: "Bi-weekly or monthly", monthly: "$150 – $400" },
] as const;

export const perSqFt = { min: 0.1, max: 0.3 } as const;

export const scopePropertyTypes = ["Office", "Retail", "Medical", "Strata", "Industrial"] as const;
export const scopeFrequencies = ["Daily", "5×/week", "3×/week", "Weekly", "Day porter"] as const;
export const scopeAmenities = [
  "Lobby",
  "Hallways",
  "Gym",
  "Pool",
  "Party room",
  "Theatre",
  "Guest suite",
  "Parkade",
  "Elevators",
] as const;
export const scopeExtras = [
  "Window cleaning",
  "Pressure washing",
  "Dryer vent cleaning",
  "Carpet extraction",
] as const;

export type ScopePropertyType = (typeof scopePropertyTypes)[number];
export type ScopeFrequency = (typeof scopeFrequencies)[number];

const typeFactor: Record<ScopePropertyType, number> = {
  Office: 1,
  Retail: 1.12,
  Medical: 1.22,
  Strata: 1.08,
  Industrial: 0.92,
};

/** Relative to a daily programme. Weekly is a full clean, not 1/7 of daily. */
const frequencyFactor: Record<ScopeFrequency, number> = {
  Daily: 1,
  "5×/week": 0.88,
  "3×/week": 0.58,
  Weekly: 0.34,
  "Day porter": 1.08,
};

const amenityWeight: Record<(typeof scopeAmenities)[number], number> = {
  Lobby: 0.03,
  Hallways: 0.03,
  Gym: 0.08,
  Pool: 0.1,
  "Party room": 0.06,
  Theatre: 0.07,
  "Guest suite": 0.05,
  Parkade: 0.08,
  Elevators: 0.04,
};

const extraMonthly: Record<(typeof scopeExtras)[number], { low: number; high: number }> = {
  "Window cleaning": { low: 80, high: 180 },
  "Pressure washing": { low: 60, high: 140 },
  "Dryer vent cleaning": { low: 40, high: 90 },
  "Carpet extraction": { low: 70, high: 160 },
};

function roundTen(n: number) {
  return Math.max(10, Math.round(n / 10) * 10);
}

/** Indicative monthly range. Walkthrough still confirms the contract figure. */
export function indicativeScopeRange(input: {
  type: ScopePropertyType;
  size: number;
  frequency: ScopeFrequency;
  amenities: string[];
  extras: string[];
}): { low: number; high: number } {
  const size = Math.max(0, Number(input.size) || 0);
  const sqft = input.type === "Strata" ? size * 35 : size;
  const amenities = 1 + input.amenities.reduce((sum, name) => {
    return sum + (amenityWeight[name as keyof typeof amenityWeight] ?? 0.04);
  }, 0);
  const extras = input.extras.reduce(
    (sum, name) => {
      const add = extraMonthly[name as keyof typeof extraMonthly] ?? { low: 50, high: 120 };
      return { low: sum.low + add.low, high: sum.high + add.high };
    },
    { low: 0, high: 0 },
  );
  const scale = typeFactor[input.type] * frequencyFactor[input.frequency] * amenities;
  return {
    low: roundTen(sqft * perSqFt.min * scale + extras.low),
    high: roundTen(sqft * perSqFt.max * scale + extras.high),
  };
}

export const comparison = {
  headers: ["", "Standard", "Deep", "Move-out"],
  rows: [
    ["Checkpoints", "53", "82", "96"],
    ["Inside oven", "Add-on", "Included", "Included"],
    ["Inside fridge", "Add-on", "Included", "Included"],
    ["Inside cabinets", "Add-on", "Add-on", "Included"],
    ["Baseboards", "Spot", "Full", "Full"],
    ["Window tracks", "—", "Included", "Included"],
    ["Typical time, 2-bed", "3 h", "5 h", "6 h"],
  ],
} as const;
