import { images } from "./brand";

export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  meta: string;
  eyebrow: string;
  lead: string;
  cta: "book" | "walkthrough";
  image: string;
  points: { title: string; body: string }[];
};

export const residentialServices: ServicePage[] = [
  {
    slug: "recurring",
    title: "Recurring House Cleaning Vancouver | Flat Rate | HalderCleaning",
    h1: "The same people. A price that does not move.",
    meta: "Weekly, bi-weekly and monthly house cleaning across Vancouver and the Fraser Valley. Flat rate, published scope, crews scheduled by area.",
    eyebrow: "Home cleaning · Recurring",
    lead: "Weekly, bi-weekly or monthly. The quoted price is the price on every visit — not a first-visit teaser.",
    cta: "book",
    image: images.residential,
    points: [
      { title: "Frequency is priced in the open.", body: "Weekly, bi-weekly and monthly discounts apply live in the quote. You see the saving against one-time before you book." },
      { title: "The same people come back.", body: "Crews are scheduled against postal-code clusters. A rotating roster is the largest complaint in this category; we do not run one." },
      { title: "Cancel anytime.", body: "Recurring is a cadence, not a 12-month residential trap. Building contracts are a different product." },
    ],
  },
  {
    slug: "deep-clean",
    title: "Deep Cleaning Vancouver | 82 Checkpoints | HalderCleaning",
    h1: "Deep clean: 82 checks, not a mood.",
    meta: "Deep house cleaning in Vancouver with inside oven and fridge included. See the difference from a standard visit, checkpoint by checkpoint.",
    eyebrow: "Home cleaning · Deep clean",
    lead: "Baseboards, window tracks, inside oven and fridge. The difference from standard is a table, not a paragraph.",
    cta: "book",
    image: images.kitchen,
    points: [
      { title: "Inside oven and fridge are included.", body: "On a standard visit they are add-ons. On a deep clean they are in the price. That is the comparison buyers are told to make." },
      { title: "Time is honest.", body: "A 2-bed deep clean is modelled at about five hours with two people. If a quote is half that, the list is shorter." },
      { title: "Often the first visit.", body: "Homes that have not been professionally cleaned in a year start on deep, then move to a standard cadence." },
    ],
  },
  {
    slug: "move-in-move-out",
    title: "Move Out Cleaning Vancouver | Deposit-Ready | HalderCleaning",
    h1: "Move-out cleaning that matches the inspection.",
    meta: "End-of-tenancy and move-in cleaning in Vancouver. 96 checkpoints including inside cabinets, oven and fridge. Flat rate.",
    eyebrow: "Home cleaning · Move-in / move-out",
    lead: "Inside cabinets, oven, fridge, tracks and baseboards. Built for the landlord inspection, not a “sparkle” pass.",
    cta: "book",
    image: images.hall,
    points: [
      { title: "96 checkpoints.", body: "Move-out is the full set. Inside cabinets are included here and remain an add-on on deep clean." },
      { title: "Empty home.", body: "This service assumes the home is vacant or nearly vacant. A furnished home is a deep clean, not a move-out." },
      { title: "Deposit conversations need a document.", body: "The confirmation email carries the room-by-room scope. That is what both sides work from." },
    ],
  },
  {
    slug: "post-renovation",
    title: "Post Renovation Cleaning Vancouver | HalderCleaning",
    h1: "Construction dust is a different job.",
    meta: "Post-renovation cleaning in Vancouver and the Fraser Valley. Drywall dust, sticker residue, tracks — not a standard visit with extra adjectives.",
    eyebrow: "Home cleaning · Post-renovation",
    lead: "Drywall dust, paint specks, sticker residue and tracks. A standard recurring visit is not built for this.",
    cta: "book",
    image: images.detail,
    points: [
      { title: "Two-pass work.", body: "Fine dust resettles. We plan for it instead of pretending one mop pass is enough." },
      { title: "Not a handyman finish.", body: "We clean. We do not caulk, paint, or repair. Scope stays honest." },
      { title: "Quoted from photos or a walkthrough.", body: "Renovation leftover volume varies too widely for the bedroom table alone." },
    ],
  },
  {
    slug: "airbnb-turnover",
    title: "Airbnb Turnover Cleaning Vancouver | HalderCleaning",
    h1: "Turnover with a checklist, not a rush.",
    meta: "Short-term rental turnover cleaning in Vancouver. Same checkpoint list, same crew, same flat rate.",
    eyebrow: "Home cleaning · Airbnb turnover",
    lead: "The residential checkpoint list, run to a same-day window. Linens by you or as a laundry add-on.",
    cta: "book",
    image: images.bedroom,
    points: [
      { title: "Same scope as a standard visit.", body: "Guests notice missed bathrooms, not missed branding. The list does not shrink because the calendar is tight." },
      { title: "Access and lockboxes.", body: "Codes and lockbox instructions are first-class fields in booking." },
      { title: "Laundry is an add-on.", body: "Wash-and-fold is priced, not assumed. If you supply linens already clean, we make the beds." },
    ],
  },
];

export const commercialServices: ServicePage[] = [
  {
    slug: "office-cleaning",
    title: "Office Cleaning Vancouver | Per Square Foot | HalderCleaning",
    h1: "Office cleaning scoped like a facilities plan.",
    meta: "Office cleaning in Vancouver from $0.10–$0.30 per sq ft. Walkthrough required. Audit-ready inspection reports.",
    eyebrow: "Commercial · Offices",
    lead: "Daily, 5×/week, or weekly. Indicative range first, confirmed at walkthrough. Documentation from day one.",
    cta: "walkthrough",
    image: images.office,
    points: [
      { title: "Per square foot, not per hour.", body: "Complexity and traffic set the point in the $0.10–$0.30 range. Retail-adjacent offices sit higher." },
      { title: "Night clean plus day porter is a pattern we support.", body: "Weekend overnight deep clean, weekday coverage, less tenant disruption." },
      { title: "12-month standard for recurring janitorial.", body: "Project work is a separate service agreement." },
    ],
  },
  {
    slug: "retail",
    title: "Retail Cleaning Vancouver | HalderCleaning",
    h1: "Retail floors that survive open hours.",
    meta: "Retail cleaning in Vancouver. Daily or overnight programmes with a walkthrough-confirmed scope.",
    eyebrow: "Commercial · Retail",
    lead: "High-traffic floors, washrooms, and staff rooms. Priced at the top of the per-square-foot range because the traffic is real.",
    cta: "walkthrough",
    image: images.commercial,
    points: [
      { title: "After close or before open.", body: "We plan around your hours, not a generic night shift." },
      { title: "Customer washrooms are the reputation surface.", body: "They get their own checkpoint set, not “restrooms as needed.”" },
      { title: "A range, then a walkthrough.", body: "Publishing a fake fixed monthly number for retail is how contracts get renegotiated in week two." },
    ],
  },
  {
    slug: "green-cleaning-program",
    title: "Green Cleaning Program | BOMA / LEED | HalderCleaning",
    h1: "Audit-ready from the first contract.",
    meta: "Green cleaning plan, digital inspection reports and SDS index for BOMA Best and LEED v4.1 documentation in Vancouver.",
    eyebrow: "Commercial · Green cleaning program",
    lead: "A green cleaning plan, a digital inspection platform, and chemical SDS sheets. This is what larger contracts actually require.",
    cta: "walkthrough",
    image: images.detail,
    points: [
      { title: "BOMA Best and LEED v4.1 aligned.", body: "Facilities managers ask in the first meeting. The sample report is on this page because that is the proof." },
      { title: "Photographed, dated, scored by area.", body: "Opinions do not survive an audit. A scored visit does." },
      { title: "Built early on purpose.", body: "It excludes operators who cannot document. That is the point." },
    ],
  },
];

export const strataServices: ServicePage[] = [
  {
    slug: "common-areas",
    title: "Strata Common Area Cleaning BC | HalderCleaning",
    h1: "Lobbies, corridors, and the floors people actually see.",
    meta: "Strata common-area cleaning in Metro Vancouver. Lobbies, hallways, elevators — scoped per building, documented every visit.",
    eyebrow: "Strata · Common areas",
    lead: "The core of a strata plan: lobbies, hallways, elevator cabs, and entry glass. Scoped from the floor plate, not a flyer.",
    cta: "walkthrough",
    image: images.strata,
    points: [
      { title: "Frequency follows traffic.", body: "High-rise entries are not a weekly bungalow lobby. The scope builder asks." },
      { title: "Logged every visit.", body: "When someone asks at the AGM what the contract delivers, the answer is a document." },
      { title: "Property manager and council both see the same report.", body: "One source of truth. Fewer hallway debates." },
    ],
  },
  {
    slug: "amenity-cleaning",
    title: "Strata Amenity Cleaning | Gym, Pool, Party Room | HalderCleaning",
    h1: "Amenities are where complaints start.",
    meta: "Gym, pool deck, party room, theatre and guest-suite cleaning for Metro Vancouver strata. Checklist-scoped.",
    eyebrow: "Strata · Amenities",
    lead: "Gyms, pools, party rooms, theatres, guest suites. Each amenity is a line in the scope, not “common areas plus.”",
    cta: "walkthrough",
    image: images.living,
    points: [
      { title: "Equipment count matters.", body: "A 12-piece gym is not a 40-piece gym. We count." },
      { title: "Pool indoor versus outdoor.", body: "Different chemistry, different floors, different insurance notes." },
      { title: "Guest suites turn like a hotel.", body: "That is a turnover, scheduled, not a mop of the corridor." },
    ],
  },
  {
    slug: "caretaking",
    title: "Strata Caretaking | Combined Contract | HalderCleaning",
    h1: "Cleaning and caretaking as one contract.",
    meta: "Combined cleaning and caretaking for Metro Vancouver strata. One crew, one report, one property-manager contact.",
    eyebrow: "Strata · Caretaking",
    lead: "Light caretaking bundled with cleaning: junk room checks, lamp reports, parking patrol notes — scoped, not assumed.",
    cta: "walkthrough",
    image: images.hall,
    points: [
      { title: "One throat to choke.", body: "Split vendors create split stories at the AGM. Combined contracts do not." },
      { title: "Still not a handyman service.", body: "We report and we clean. Repairs go to your existing trades." },
      { title: "Hours are in the scope.", body: "Caretaking without hours is how invoices swell. We print the hours." },
    ],
  },
  {
    slug: "dryer-vent-cleaning",
    title: "Dryer Vent Cleaning Strata | HalderCleaning",
    h1: "Dryer vents: fire prevention, usually an insurance item.",
    meta: "Strata dryer vent cleaning for laundry rooms and in-suite stacks in Metro Vancouver. Recurring, documented.",
    eyebrow: "Strata · Dryer vents",
    lead: "Laundry-room and in-suite dryer vents. Fire prevention, often a depreciation-report or insurance item, and work most cleaners miss.",
    cta: "walkthrough",
    image: images.laundry,
    points: [
      { title: "Adjacent revenue that is actually risk work.", body: "Lint is a fire load. Councils understand that sentence." },
      { title: "Scheduled, not on-demand chaos.", body: "Building-wide days beat suite-by-suite chasing." },
      { title: "Photographed before and after.", body: "The inspection report viewer is the same system as the rest of the contract." },
    ],
  },
];

export function findService(
  list: ServicePage[],
  slug: string,
): ServicePage | undefined {
  return list.find((item) => item.slug === slug);
}
