import { images } from "./brand";
import type { ServiceLevel } from "./pricing";

export type CheckItem = { label: string; addon?: number };

export type Room = {
  id: string;
  name: string;
  minutes: number;
  image: string;
  included: Record<ServiceLevel, CheckItem[]>;
  addons: Record<ServiceLevel, CheckItem[]>;
};

const kitchenStandard: CheckItem[] = [
  { label: "Countertops, sanitised" },
  { label: "Sink and taps, descaled" },
  { label: "Cooktop and control knobs" },
  { label: "Exterior of all appliances" },
  { label: "Cabinet fronts, spot-cleaned" },
  { label: "Backsplash" },
  { label: "Floors, vacuumed and mopped" },
  { label: "Bins emptied and liner replaced" },
  { label: "Table and chairs, wiped" },
  { label: "Switch plates and handles" },
  { label: "Microwave exterior" },
];

const kitchenAddonsStandard: CheckItem[] = [
  { label: "Inside oven", addon: 45 },
  { label: "Inside fridge", addon: 35 },
  { label: "Inside cabinets", addon: 40 },
];

export const rooms: Room[] = [
  {
    id: "kitchen",
    name: "Kitchen",
    minutes: 35,
    image: images.kitchen,
    included: {
      standard: kitchenStandard,
      deep: [
        ...kitchenStandard,
        { label: "Inside oven" },
        { label: "Inside fridge" },
        { label: "Hood filter, degreased" },
        { label: "Kickplates" },
      ],
      "move-out": [
        ...kitchenStandard,
        { label: "Inside oven" },
        { label: "Inside fridge" },
        { label: "Inside cabinets" },
        { label: "Hood filter, degreased" },
        { label: "Kickplates" },
        { label: "Inside drawers" },
      ],
    },
    addons: {
      standard: kitchenAddonsStandard,
      deep: [{ label: "Inside cabinets", addon: 40 }],
      "move-out": [],
    },
  },
  {
    id: "bathroom",
    name: "Bathroom",
    minutes: 25,
    image: images.bathroom,
    included: {
      standard: [
        { label: "Toilet, sanitised inside and out" },
        { label: "Sink, taps and counters" },
        { label: "Mirror" },
        { label: "Shower and tub surfaces" },
        { label: "Floors, vacuumed and mopped" },
        { label: "Towel bars and fixtures" },
        { label: "Bins emptied" },
        { label: "Cabinet fronts" },
        { label: "Switch plates" },
        { label: "Exhaust fan cover, dusted" },
        { label: "Door handles" },
      ],
      deep: [
        { label: "Toilet, sanitised inside and out" },
        { label: "Sink, taps and counters" },
        { label: "Mirror" },
        { label: "Shower and tub, descale" },
        { label: "Grout spot-treated" },
        { label: "Floors, vacuumed and mopped" },
        { label: "Towel bars and fixtures" },
        { label: "Bins emptied" },
        { label: "Cabinet fronts and interiors" },
        { label: "Exhaust fan cover" },
        { label: "Baseboards" },
        { label: "Window tracks" },
      ],
      "move-out": [
        { label: "Toilet, sanitised inside and out" },
        { label: "Sink, taps and counters" },
        { label: "Mirror" },
        { label: "Shower and tub, descale" },
        { label: "Grout spot-treated" },
        { label: "Floors, vacuumed and mopped" },
        { label: "Towel bars and fixtures" },
        { label: "Bins emptied" },
        { label: "Cabinet interiors" },
        { label: "Exhaust fan cover" },
        { label: "Baseboards" },
        { label: "Window tracks" },
        { label: "Limescale on glass" },
      ],
    },
    addons: {
      standard: [{ label: "Grout deep-clean", addon: 40 }],
      deep: [],
      "move-out": [],
    },
  },
  {
    id: "bedroom",
    name: "Bedroom",
    minutes: 18,
    image: images.bedroom,
    included: {
      standard: [
        { label: "Beds made (linens supplied by you)" },
        { label: "Surfaces dusted" },
        { label: "Mirrors" },
        { label: "Floors, vacuumed" },
        { label: "Bins emptied" },
        { label: "Door handles and switches" },
        { label: "Under-bed edges, reachable" },
        { label: "Window sills, spot" },
      ],
      deep: [
        { label: "Beds made" },
        { label: "Surfaces dusted, including lamps" },
        { label: "Mirrors" },
        { label: "Floors, vacuumed and mopped where hard" },
        { label: "Bins emptied" },
        { label: "Baseboards" },
        { label: "Window tracks" },
        { label: "Under-bed, reachable" },
        { label: "Closet floors, emptied" },
      ],
      "move-out": [
        { label: "All surfaces dusted" },
        { label: "Mirrors" },
        { label: "Floors, vacuumed and mopped" },
        { label: "Inside closets and drawers" },
        { label: "Baseboards" },
        { label: "Window tracks" },
        { label: "Under-bed" },
        { label: "Marks on walls, spot" },
      ],
    },
    addons: {
      standard: [{ label: "Inside closets", addon: 25 }],
      deep: [],
      "move-out": [],
    },
  },
  {
    id: "living",
    name: "Living",
    minutes: 22,
    image: images.living,
    included: {
      standard: [
        { label: "Surfaces dusted" },
        { label: "TV and screens, dry wipe" },
        { label: "Cushions straightened" },
        { label: "Floors, vacuumed and mopped" },
        { label: "Bins emptied" },
        { label: "Coffee table and side tables" },
        { label: "Switch plates" },
        { label: "Reachable cobwebs" },
        { label: "Door handles" },
      ],
      deep: [
        { label: "Surfaces dusted, including frames" },
        { label: "TV and screens" },
        { label: "Cushions and under-sofa edges" },
        { label: "Floors, vacuumed and mopped" },
        { label: "Bins emptied" },
        { label: "Baseboards" },
        { label: "Window tracks" },
        { label: "Light fixtures, reachable" },
        { label: "Skirting and vents" },
      ],
      "move-out": [
        { label: "All surfaces" },
        { label: "Floors, vacuumed and mopped" },
        { label: "Inside media cabinets" },
        { label: "Baseboards" },
        { label: "Window tracks" },
        { label: "Vents" },
        { label: "Marks on walls, spot" },
      ],
    },
    addons: {
      standard: [{ label: "Interior windows", addon: 55 }],
      deep: [{ label: "Interior windows", addon: 55 }],
      "move-out": [],
    },
  },
  {
    id: "hall",
    name: "Hall",
    minutes: 12,
    image: images.hall,
    included: {
      standard: [
        { label: "Floors, vacuumed and mopped" },
        { label: "Shoe area, tidied" },
        { label: "Banister, wiped" },
        { label: "Switch plates" },
        { label: "Door handles" },
        { label: "Reachable cobwebs" },
      ],
      deep: [
        { label: "Floors, vacuumed and mopped" },
        { label: "Banister and spindles" },
        { label: "Baseboards" },
        { label: "Switch plates" },
        { label: "Door frames" },
        { label: "Stair treads" },
      ],
      "move-out": [
        { label: "Floors, vacuumed and mopped" },
        { label: "Banister and spindles" },
        { label: "Baseboards" },
        { label: "Door frames" },
        { label: "Stair treads" },
        { label: "Inside hall closet" },
      ],
    },
    addons: { standard: [], deep: [], "move-out": [] },
  },
  {
    id: "laundry",
    name: "Laundry",
    minutes: 10,
    image: images.laundry,
    included: {
      standard: [
        { label: "Machine exteriors" },
        { label: "Sink and taps, if present" },
        { label: "Floors, vacuumed and mopped" },
        { label: "Lintel and surfaces" },
        { label: "Bins emptied" },
      ],
      deep: [
        { label: "Machine exteriors" },
        { label: "Sink and taps" },
        { label: "Floors" },
        { label: "Behind reachable machines" },
        { label: "Lint trap, emptied" },
        { label: "Baseboards" },
      ],
      "move-out": [
        { label: "Machine exteriors" },
        { label: "Inside detergent drawers, wipe" },
        { label: "Floors" },
        { label: "Behind reachable machines" },
        { label: "Lint trap" },
        { label: "Cabinets, if empty" },
      ],
    },
    addons: {
      standard: [{ label: "Laundry (wash + fold)", addon: 35 }],
      deep: [{ label: "Laundry (wash + fold)", addon: 35 }],
      "move-out": [],
    },
  },
];

export function roomCheckCount(room: Room, level: ServiceLevel): number {
  return room.included[level].length + room.addons[level].length;
}

export function totalChecks(level: ServiceLevel): number {
  return rooms.reduce((sum, room) => sum + room.included[level].length, 0);
}
