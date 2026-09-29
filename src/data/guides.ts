export type GuideGroup = "home" | "price" | "buildings";

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  target: string;
  group: GuideGroup;
  featured?: boolean;
  body: string[];
};

export const guideGroups: { id: GuideGroup; label: string; dek: string }[] = [
  {
    id: "home",
    label: "Home cleaning",
    dek: "What is on the list, which visit you need, and who shows up.",
  },
  {
    id: "price",
    label: "Price and scope",
    dek: "How to read a number, and how to compare it.",
  },
  {
    id: "buildings",
    label: "Commercial and strata",
    dek: "Ranges, walkthroughs, and contracts that survive an AGM.",
  },
];

export const guides: Guide[] = [
  {
    slug: "whats-included-house-cleaning-vancouver",
    title: "What's actually included in a house cleaning in Vancouver",
    h1: "What's actually included in a house cleaning in Vancouver",
    description:
      "Every buyer guide says to ask what's in the base price. Here is the room-by-room list — including oven, fridge and cabinets.",
    target: "what's included house cleaning",
    group: "home",
    featured: true,
    body: [
      "Every comparison article in this market ends with the same instruction: ask what is included before you compare quotes. A cheaper clean that excludes the oven and the fridge can cost more once add-ons are counted. The problem is that almost nobody publishes the list.",
      "A standard visit at Threshold is 53 checkpoints across six rooms. The kitchen list is public: countertops, sink and taps, cooktop and knobs, appliance exteriors, cabinet fronts, backsplash, floors, bins, table, switches, microwave exterior. Inside oven, inside fridge and inside cabinets are add-ons on a standard visit, priced on the same page.",
      "Deep clean moves oven and fridge into the included column and adds grout, tracks and baseboards. Move-out adds inside cabinets and a vacant-home assumption. That is a table, not a vibe.",
      "If a Vancouver company will not show you the bathroom list, assume window tracks and grout are extra. If they will not name the add-on prices, assume they will appear on the invoice. The room explorer on this site is the document we work from, and it is attached to the confirmation email.",
      "Rooms on a standard visit: kitchen, bathroom, bedroom, living, hall, laundry. Approximate kitchen time is 35 minutes. The whole-home time for a two-bed, two-bath is modelled at about 3 hours 15 minutes with two people.",
      "This is also the page that should rank for “what's included in a house cleaning.” Not because we stuffed the phrase in, because this is the actual answer.",
    ],
  },
  {
    slug: "standard-vs-deep-vs-move-out",
    title: "Standard, deep, or move-out — which clean you need",
    h1: "Standard, deep, or move-out — which clean you need",
    description:
      "53 checks, 82 checks, or 96. Oven, fridge and cabinets move between add-on and included. Pick the visit from the table, not the adjective.",
    target: "standard vs deep clean",
    group: "home",
    body: [
      "“Deep clean” is the most abused phrase in this category. Some companies mean extra time. Some mean extra chemicals. We mean extra checkpoints, written down, with prices attached.",
      "A standard visit is 53 checks. It is the recurring job: surfaces, floors, bathrooms, kitchen fronts, beds if you ask. Inside oven ($45), inside fridge ($35) and inside cabinets ($40) stay add-ons unless you add them in the quote.",
      "A deep clean is 82 checks. Oven and fridge move into the included column. Baseboards, window tracks and grout join the list. A two-bed deep clean is modelled at about five hours with two people. If a quote is half that, the list is shorter.",
      "Move-out is 96 checks and assumes an empty or nearly empty home. Inside cabinets are included here and remain an add-on on deep. A furnished home that is “pretty empty” is still a deep clean. The landlord inspection is a document problem; the confirmation email carries the scope both sides work from.",
      "Homes that have not been professionally cleaned in a year usually start on deep, then drop to a standard cadence. Post-renovation dust is a different service entirely — drywall fines are not a mop pass with extra adjectives.",
    ],
  },
  {
    slug: "how-often-to-clean",
    title: "Weekly, bi-weekly or monthly — how often to clean",
    h1: "Weekly, bi-weekly or monthly — how often to clean",
    description:
      "Cadence is a household fact, not a sales upsell. How to pick a rhythm, and what the published discount actually is.",
    target: "how often house cleaning",
    group: "home",
    body: [
      "Weekly, bi-weekly and monthly are not personality types. They are how fast a kitchen and two bathrooms get away from you between visits. The quote shows the saving against one-time before you book: 20% weekly, 15% bi-weekly, 10% monthly.",
      "Bi-weekly is the default on our book. A two-bed, two-bath Vancouver condo on a standard bi-weekly visit is the $225-class booking — modelled at just over three hours with two people. Households with two adults who cook most nights, plus a dog, usually stay on that cadence.",
      "Weekly makes sense when there are small children, shedding pets, or someone working from the kitchen island. The home does not get “dirtier”; the interval is shorter, so the same 53 checks finish faster and the kitchen grease never becomes a deep-clean problem.",
      "Monthly is honest for a tidy one-bed or a couple who travel. It is a bad fit for a family house that will need a deep list every fourth visit anyway. If you are stretching to monthly to save money, run the numbers against bi-weekly with the discount applied — the gap is smaller than it looks on an hourly ad.",
      "Recurring is a cadence, not a 12-month trap. You can change frequency in the booking, and you can cancel. Building contracts are a different product; this paragraph is about homes.",
    ],
  },
  {
    slug: "same-cleaners-every-visit",
    title: "Do you get the same cleaners every visit?",
    h1: "Do you get the same cleaners every visit?",
    description:
      "Named teams by postal-code cluster — not a rotating roster of strangers. How coverage works in Vancouver and the Fraser Valley.",
    target: "same cleaners every time",
    group: "home",
    body: [
      "A rotating roster is the largest residential complaint in this category. People notice when a different stranger has a key, and they notice when the kitchen is done a different way. We schedule named teams against postal-code clusters so Maya’s Burnaby days stay Burnaby days.",
      "You can see who covers your municipality on the team page. Languages spoken sit on the cards because Richmond and Surrey bookings fail when nobody at the door can talk to the person who lets us in. You can request a preferred team at booking.",
      "Same team does not mean the same two people on every single visit forever. Illness, holidays and a clustered route still exist. It means you are not drawing from a gig pool, and the people who know your shoe-off rule are the people who come back.",
      "You do not need to be home. Access instructions, fobs, elevator bookings and pet details are first-class fields in the form — not a notes box. If a building needs a certificate of insurance on file, we send it before the first visit.",
    ],
  },
  {
    slug: "house-cleaning-cost-vancouver",
    title: "What house cleaning costs in Vancouver in 2026",
    h1: "What house cleaning costs in Vancouver in 2026",
    description:
      "Market hourly rates, insured-team premiums, and published flat rates for Vancouver and the Fraser Valley.",
    target: "house cleaning cost vancouver",
    group: "price",
    featured: true,
    body: [
      "In 2026, standard residential cleaning in Vancouver is typically $40–$60 per hour per cleaner. Insured and bonded teams cluster at $50–$60. Deep cleans run 60–80% above a standard visit. Move-out is quoted hourly or from about $250 for a small apartment.",
      "Those figures are the market, not our price list. We publish a flat table instead: studio/1-bed, 2-bed, 3-bed, 4-bed, with standard, deep and move-out columns, plus frequency discounts. Five-bed and unusual homes are walkthroughs.",
      "Commercial work is $0.10–$0.30 per square foot. A small office on a daily programme is often $500–$1,000 a month; weekly $200–$500. Strata is not a published number — amenity count and common-area size dominate, and a fake figure would be renegotiated after the site visit.",
      "The cost that does not show up in hourly ads is the add-on. Inside oven $45, fridge $35, cabinets $40 on our list. If a competitor’s hourly looks lower, add those three before you decide.",
      "Rates have risen roughly 8–12% since 2024 against a BC minimum wage of $17.40. A quote that has not moved in two years is either a different scope or a different wage.",
    ],
  },
  {
    slug: "flat-rate-vs-hourly-cleaning",
    title: "Flat rate vs hourly cleaning — which costs less",
    h1: "Flat rate vs hourly cleaning — which costs less",
    description:
      "Hourly can look cheaper on a tidy condo. Flat rate is the honest number on a larger or messier home. How to compare them.",
    target: "flat rate vs hourly cleaning",
    group: "price",
    featured: true,
    body: [
      "Hourly cleaning looks cheaper when the home is small and already tidy. You pay for time, and a fast crew in a one-bed condo can beat a flat rate. The risk sits on the other side of that sentence: a larger home, a first visit, or a kitchen that has not been degreased in a year will run long, and you find out on the invoice.",
      "Vancouver insured and bonded teams currently sit around $50–$60 per hour per cleaner. Two people for four hours is $400–$480 before extras. Our published two-bed, two-bath standard one-time rate is $265. Recurring bi-weekly is lower. Those numbers only mean something if the scope is the same.",
      "Flat rate shifts the time risk to the company. If we underestimate, we still finish the list. If we overestimate, you still pay the quoted number. That is what flat rate means in both directions.",
      "Compare quotes by the list, not by the unit. Ask whether oven, fridge, tracks and baseboards are in the base price. Ask whether the people who came last time are coming back. An hourly quote that rotates strangers is a different product from a named team on a published list.",
      "Five-bed homes and anything we cannot see from a bedroom count still need a walkthrough. Honesty about that is part of the same argument.",
    ],
  },
  {
    slug: "how-to-compare-cleaning-quotes",
    title: "How to compare house cleaning quotes in Vancouver",
    h1: "How to compare house cleaning quotes in Vancouver",
    description:
      "A checklist: the room list, the add-ons, who comes back, insurance, and the number that is allowed to move.",
    target: "compare cleaning quotes vancouver",
    group: "price",
    body: [
      "A two-bedroom in Mount Pleasant can attract five hourly quotes in a weekend. Density of competitors is the reason, not pickiness. The quotes are not comparable until the lists are.",
      "Ask for the kitchen, bathroom and living-room checks in writing. If window tracks, grout, oven and fridge are unnamed, they are extra. Our add-ons are priced in the open: oven $45, fridge $35, cabinets $40, interior windows $55, balcony $40.",
      "Ask whether the price can move after they arrive. Flat rate means it cannot. Hourly means it can, and “it looked worse than the photos” is how that sentence gets used.",
      "Ask who is coming, whether they are employees or a gig pool, and whether WCB, bonding and liability are current. Downtown and Olympic Village towers will ask for a certificate of insurance at the desk. That is a gate, not a badge.",
      "Then compare the numbers. A published two-bed, two-bath standard one-time rate here is $265; bi-weekly is lower. If another quote is $180 with no list, you are not looking at the same job.",
    ],
  },
  {
    slug: "commercial-cleaning-cost-vancouver",
    title: "What commercial cleaning costs in Vancouver",
    h1: "What commercial cleaning costs in Vancouver",
    description:
      "Indicative ranges per square foot, why Daily and Weekly move the number, and what a walkthrough is for.",
    target: "commercial cleaning cost vancouver",
    group: "buildings",
    body: [
      "Commercial cleaning in this market is usually quoted per square foot, per month. A published range of $0.10–$0.30 covers most offices, retail floors and lighter industrial. Traffic, washrooms, and whether the crew is in daily or weekly sit inside that range, not outside it.",
      "A small office on a daily programme often lands between $500 and $1,000 a month. The same floor on weekly is often $200–$500. Frequency is the largest lever after size. Amenities — gym, parkade, extra washrooms — move the number the same way they do on a strata scope.",
      "We will not publish a fake fixed price for a building we have not walked. A number on this page that always gets renegotiated at the site visit costs more trust than a range. The scope builder on the commercial page is the indicative figure; the walkthrough confirms the scope and the final number.",
      "What you should receive with the quote: a green cleaning plan, an SDS index, and a sample inspection. Larger contracts ask for BOMA or LEED documentation in the first meeting. That is operational, not decorative.",
      "There is no online booking for a building contract. Request a walkthrough. Site assessment within 48 hours, scope within five business days, crews in 7–10 days for a standard contract.",
    ],
  },
  {
    slug: "strata-cleaning-contract",
    title: "What a strata cleaning contract should include",
    h1: "What a strata cleaning contract should include",
    description:
      "Common-area size, amenities, frequency, adjacent services, and inspection reporting you can take to an AGM.",
    target: "strata cleaning contract",
    group: "buildings",
    body: [
      "A strata cleaning contract that says “common areas, weekly” is how invoices and council arguments get made. The document needs common-area size, the amenity list, frequency, adjacent services, and how visits are reported.",
      "Amenities change the job. A lobby and corridors are one crew pattern. Add a gym, pool deck, party room, guest suite or parkade and you have different chemicals, different time, and a different monthly range. The scope builder on this site follows that list.",
      "Adjacent services belong in the same conversation even when they are not weekly: dryer vents, window cleaning, pressure washing, carpet extraction. If they live in a separate handshake, they will live in a surprise invoice.",
      "Reporting is how you defend the contract at an AGM. Every visit should be logged, photographed and scored by area. A sample inspection — with a number on the lobby, the corridors and the elevator cabs — is the artifact, not a testimonial.",
      "Strata is not a published flat rate. Square footage of common area plus amenities dominate. An indicative range comes first; a walkthrough confirms it. We do not invent a building number on a website form.",
    ],
  },
];

export function guidesInGroup(group: GuideGroup) {
  return guides.filter((guide) => guide.group === group);
}

export function relatedGuides(slug: string, limit = 3) {
  const current = guides.find((guide) => guide.slug === slug);
  if (!current) return guides.filter((guide) => guide.slug !== slug).slice(0, limit);
  const same = guides.filter((guide) => guide.group === current.group && guide.slug !== slug);
  const rest = guides.filter((guide) => guide.group !== current.group && guide.slug !== slug);
  return [...same, ...rest].slice(0, limit);
}
