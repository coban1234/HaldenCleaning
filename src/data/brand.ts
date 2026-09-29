export const brand = {
  name: "Threshold",
  legalName: "Threshold Cleaning",
  region: "Vancouver & the Fraser Valley",
  domain: "https://thresholdcleaning.ca",
  email: "hello@thresholdcleaning.ca",
  phone: "604-555-0148",
  phoneHref: "tel:+16045550148",
  address: "Vancouver, BC",
  year: 2026,
  hours: "Hours by appointment",
} as const;

export const doorwayLogo = {
  viewBox: "0 0 24 24",
  paths: [
    'M5 21V5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5V21',
    'M9 21V11h6v10',
  ],
} as const;

export const nav = [
  { href: "/home-cleaning/", label: "Home cleaning" },
  { href: "/commercial/", label: "Commercial" },
  { href: "/strata/", label: "Strata" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/our-team/", label: "Our team" },
] as const;

export const images = {
  kitchenHero:
    "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1800&q=80",
  residential:
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
  commercial:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  strata:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  kitchen:
    "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=800&q=80",
  bathroom:
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
  bedroom:
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  living:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  hall: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=800&q=80",
  laundry:
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80",
  detail:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  office:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
} as const;
