export const reviews = [
  {
    quote:
      "82 checkpoints across 6 rooms, 3 hours 15 minutes — and the same two people came back.",
    name: "A. L.",
    place: "Mount Pleasant, Vancouver",
    segment: "residential" as const,
  },
  {
    quote:
      "They sent the kitchen list with the oven as an add-on before I booked. That was the whole decision.",
    name: "J. K.",
    place: "Steveston, Richmond",
    segment: "residential" as const,
  },
  {
    quote:
      "Walkthrough on Thursday, scope Friday, crews the following week. The report is what I take to council.",
    name: "Property manager",
    place: "Burnaby",
    segment: "strata" as const,
  },
  {
    quote:
      "We needed SDS sheets and a scored inspection in the first meeting. They had both. That is rare.",
    name: "Facilities lead",
    place: "Downtown Vancouver",
    segment: "commercial" as const,
  },
];

export const faqs = {
  residential: [
    {
      q: "What is included in a house cleaning?",
      a: "Every room has a published checkpoint list. A standard visit is 53 checks; oven, fridge and inside cabinets are add-ons unless you book deep or move-out. See the room explorer.",
    },
    {
      q: "Is the price hourly or flat?",
      a: "Flat. The number you are quoted is the number you pay. If the home takes longer, that is our problem, not your invoice.",
    },
    {
      q: "Do I get the same cleaners?",
      a: "Yes — named teams scheduled by area. You can see who covers your municipality on the team page, and you can request a preferred team at booking.",
    },
    {
      q: "Do I need to be home?",
      a: "No. Access instructions and pet details are first-class fields in the booking form.",
    },
  ],
  commercial: [
    {
      q: "Why a range instead of a fixed price?",
      a: "Building scope cannot be known without a site visit. A fixed number published here would be renegotiated at the walkthrough, which costs more trust than a range.",
    },
    {
      q: "Do you document for BOMA or LEED?",
      a: "Yes. Green cleaning plan, digital inspections, and SDS index. There is a sample report on this site.",
    },
  ],
  strata: [
    {
      q: "What should a strata cleaning contract include?",
      a: "Common-area size, amenity list, frequency, adjacent services (dryer vents, parkade, windows, pressure washing), and inspection reporting. The scope builder follows that list.",
    },
    {
      q: "How do we defend this at an AGM?",
      a: "Every visit is logged, photographed and scored. The answer is a document, not an opinion.",
    },
  ],
};
