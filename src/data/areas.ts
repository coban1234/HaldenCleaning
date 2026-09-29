export type Area = {
  slug: string;
  name: string;
  photo: string;
  intro: string;
  stock: string;
  access: string;
  mix: string;
  body: string[];
};

export const areas: Area[] = [
  {
    slug: "vancouver",
    name: "Vancouver",
    photo:
      "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Flat-rate home cleaning across Vancouver — from Kits walk-ups to downtown condos — with the full room-by-room scope published before you book.",
    stock:
      "Vancouver’s housing stock is split between pre-war wood-frame houses in Kitsilano, Mount Pleasant and Grandview, concrete towers downtown and in the West End, and low-rise walk-ups east of Main. A typical booking is a two-bedroom condo of about 800–1,000 sq ft, or a three-bedroom character house with original fir floors that need a different mop pass than vinyl.",
    access:
      "Parking is the operational constraint. West End and downtown jobs usually mean loading-zone timing, elevator bookings, and fob instructions written into the booking — not a notes box. Street-parking neighbourhoods west of Granville need a 15-minute arrival window, not a clock-in at the door.",
    mix: "Condo versus detached mix is roughly even on our Vancouver book. Condos convert faster (less square footage, clearer access). Houses take longer per visit and are where add-ons — ovens, interior windows, patio — actually show up on the invoice.",
    body: [
      "Vancouver buyers compare quotes more carefully than any other municipality we work. The reason is density of competitors, not pickiness: a two-bedroom in Mount Pleasant can attract five hourly quotes in a weekend. Publishing a flat rate with the kitchen, bathroom and living-room checks visible is how we stay in that comparison without racing the lowest hourly number.",
      "Older wood-frame homes (Kits, Dunbar, Hastings Sunrise) accumulate grease on kitchen cabinet fronts and dust on picture-rail moulding that a 90-minute “standard” hour-rate visit never reaches. Those houses are why the checkpoint list exists. If a cleaner cannot tell you whether window tracks are in the base price, the invoice will.",
      "Downtown and Olympic Village towers add a second constraint: building rules. Many strata require certificates of insurance on file, elevator pads, and a named person at the desk. We keep WCB, bonding and liability current for that reason — not as a badge, as a gate.",
      "Typical two-bed, two-bath Vancouver condo: a standard visit is modelled at just over three hours with two people. That is the $225-class booking on a bi-weekly cadence, not an hourly guess. If the home takes longer, that is our problem, not your invoice.",
    ],
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    photo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    intro:
      "House and condo cleaning in Burnaby, Metrotown and Brentwood — flat rate, same team, published scope.",
    stock:
      "Burnaby splits three ways: the Metrotown and Brentwood tower belts, the 1950s–70s bungalows on the heights, and newer townhouse clusters in Edmonds and the Big Bend fringe. Square footage runs larger than Vancouver proper. A “2 bed” in Burnaby is often a 1,100 sq ft townhouse with a garage landing, not an 800 sq ft condo.",
    access:
      "Townhouse complexes usually have visitor parking that is signed and enforced. We need the stall number and any gate code in the booking. High-rises around Metrotown follow the same elevator-booking pattern as Vancouver downtown.",
    mix: "More townhomes than Vancouver, more family-sized kitchens, more pets. Recurring bi-weekly is the dominant cadence — Burnaby households book a rhythm, not a one-off.",
    body: [
      "Burnaby is where the same-team claim is tested. School-run households notice when a different person arrives. We schedule named crews against postal-code clusters (V5A–V5J) so Maya’s Burnaby days stay Burnaby days.",
      "Metrotown strata buildings increasingly ask for green-cleaning documentation even on residential suites when the building is pursuing BOMA or LEED credits in common areas. SDS sheets for the products used in-suite are available on request.",
      "The heights bungalows (Capitol Hill, Burnaby North) have original tile baths and older grout. Deep-clean versus standard is a real difference here: standard spots the grout, deep descale the shower glass and treats grout. That distinction is in the comparison table, not in adjectives.",
      "A typical Burnaby 3-bed, 2-bath townhouse on a bi-weekly standard visit is modelled against the 3-bed published rate, not a Vancouver condo rate. If your home is larger than the table, we walk it. We do not invent a number.",
    ],
  },
  {
    slug: "richmond",
    name: "Richmond",
    photo:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Flat-rate home cleaning in Richmond — City Centre condos, Steveston houses, and the arterial townhome rows.",
    stock:
      "Richmond’s stock is newer than Vancouver’s on average: 1990s–2010s wood-frame houses in Steveston and Terra Nova, concrete pods along No. 3 Road, and a large share of households where English is a second language at the door. Kitchens run larger. Shoe-off culture is the default, which we follow.",
    access:
      "Most houses have driveways. Condos along the Canada Line need elevator bookings at peak. We collect building access in the booking form, not after arrival.",
    mix: "A high share of multi-generational houses. Move-out cleaning is common around lease turnover near the bridgeheads and City Centre.",
    body: [
      "Richmond bookings fail when a cleaner cannot communicate at the door. Our Richmond rotation includes Daniel (EN, ZH) and crews used to working in households where the decision-maker is not the person who lets us in. Languages spoken sit on the team cards for that reason.",
      "Steveston and Terra Nova houses often include a wok station or extra gas burner that a generic “kitchen” bullet does not cover. The kitchen list includes cooktop and knobs, exterior of all appliances, and the backsplash — grease is the actual work, not the sink.",
      "City Centre condos are closer to Vancouver downtown in size and in strata rules. Insurance and WCB documents are on file for buildings that ask.",
      "Published Richmond rates are the same flat table as the rest of the region. We do not add a Richmond surcharge. Travel is built into the model.",
    ],
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    photo:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Home cleaning on the North Shore — Lonsdale condos, Lynn Valley houses, Deep Cove access realities included.",
    stock:
      "North Vancouver mixes Lonsdale corridor towers, post-war houses climbing the hill, and larger family homes in Lynn Valley and Windsor Park. Stairs are not a footnote. Many homes have a lower entry, a main floor, and a converted basement suite we are not booked to enter unless you say so.",
    access:
      "Street parking on the hill is tight and often by permit. Deep Cove and Dollarton add travel time we already priced into the flat rate — we do not add a North Shore fee at the door. Include parking instructions and dog details; both are first-class booking fields.",
    mix: "More detached homes than Vancouver. More pets. More “please don’t go in the office” rooms, which we need listed so the scope stays honest.",
    body: [
      "A North Shore standard visit that ignores the staircase dust and the entry grit from hiking shoes will look unfinished. Hall checks include banister, floors, and the shoe area. If that is not in someone else’s quote, their hourly number is not comparable.",
      "Lower Lonsdale strata buildings behave like downtown Vancouver: elevator bookings, COI on file, fobs. Upper Cap and Braemar houses behave like Burnaby heights: driveway, longer visit, more add-ons.",
      "Weather is a scope factor. Mud season is real. We do not charge extra for a wet entry on a recurring visit; that is the job. Post-renovation drywall dust is a different service.",
      "Tomas and Daniel cover North Vancouver on a clustered schedule so the same people return. Filter the team page by North Vancouver to see who that is.",
    ],
  },
  {
    slug: "surrey",
    name: "Surrey",
    photo:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Flat-rate house cleaning in Surrey — Whalley towers, Fleetwood and Newton family homes, South Surrey larger lots.",
    stock:
      "Surrey is the largest book by area. Housing runs from SkyTrain-oriented towers in Whalley and King George, to 1990s–2010s family houses in Fleetwood, Newton and Cloverdale, to larger South Surrey and Grandview lots. Square footage and driveway mud are the two things hourly quotes get wrong.",
    access:
      "Most houses have driveways. Towers need the same elevator protocol as Vancouver. Cul-de-sacs in newer developments sometimes have visitor-parking limits — put the stall in the booking.",
    mix: "Family houses dominate. Recurring weekly and bi-weekly outperform one-time. Move-out volume is high around rental turnover in Whalley and Guildford.",
    body: [
      "A four-bed Surrey house quoted as “four hours, two cleaners” without a room list is how invoices grow. Our 4-bed, 3-bath published rate exists so that conversation happens before the visit, not after.",
      "South Surrey kitchens and bonus rooms push a standard visit toward the top of the table. If the home is 5-bed or has a legal suite you want cleaned, that is a walkthrough, not a guess. The site will not invent a fifth-bedroom price.",
      "Priya’s crew covers Surrey and the eastern Burnaby edge. Languages on the card are EN and Punjabi. That is operational, not decorative.",
      "Parkade and townhouse-complex rules in City Centre buildings are closer to commercial work than to a Kits walk-up. If your strata desk needs COI, we send it before the first visit.",
    ],
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    photo:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Home cleaning in Coquitlam — Burquitlam towers, Westwood Plateau houses, Maillardville character stock.",
    stock:
      "Coquitlam’s book is towers along the Evergreen Line, family houses in Westwood Plateau and Burke Mountain, and older, smaller homes in Maillardville. Elevation and stairs again. Many Plateau houses have three floors of living space that a bedroom-count quote underprices if you are guessing hourly.",
    access:
      "Gated Plateau streets and visitor parking in Burquitlam towers are the two access patterns. Gate codes and elevator bookings go in the form.",
    mix: "Growing share of new-condo bookings near Burquitlam and Coquitlam Centre, and a stable family-house recurring book up the hill.",
    body: [
      "Burke Mountain and Westwood Plateau homes are where “2 bed, 2 bath” on a form can still mean 2,400 sq ft. We ask square footage in booking step 1 for that reason. If the number and the bedroom count disagree, we call before we confirm a flat rate.",
      "Maillardville’s older homes have similar kitchen-grease and bathroom-limescale profiles to Vancouver character stock. Deep-clean is the honest first visit if the home has not been professionally cleaned in a year.",
      "Coquitlam strata towers along the Evergreen Line are new enough that move-in cleaning is a regular job: construction dust, sticker residue, tracks. That is the move-in / move-out service, not a standard recurring visit with extra adjectives.",
      "Lena and Tomas cover Coquitlam with Burnaby days adjacent, so a Coquitlam recurring visit is not a special trip with a special fee.",
    ],
  },
];

export function areaBySlug(slug: string) {
  return areas.find((area) => area.slug === slug);
}
