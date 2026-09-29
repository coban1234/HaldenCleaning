export type TeamMember = {
  id: string;
  name: string;
  years: number;
  languages: string[];
  areas: string[];
  photo: string;
};

export const vetting = [
  "Criminal record check",
  "Bonded",
  "WCB covered",
] as const;

export const team: TeamMember[] = [
  {
    id: "maya",
    name: "Maya",
    years: 6,
    languages: ["EN", "ES"],
    areas: ["vancouver", "burnaby", "richmond"],
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "daniel",
    name: "Daniel",
    years: 4,
    languages: ["EN", "ZH"],
    areas: ["vancouver", "richmond", "north-vancouver"],
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "priya",
    name: "Priya",
    years: 8,
    languages: ["EN", "PA"],
    areas: ["surrey", "burnaby", "coquitlam"],
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tomas",
    name: "Tomas",
    years: 3,
    languages: ["EN", "PT"],
    areas: ["vancouver", "north-vancouver", "coquitlam"],
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "lena",
    name: "Lena",
    years: 5,
    languages: ["EN", "FR"],
    areas: ["burnaby", "coquitlam", "surrey"],
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "james",
    name: "James",
    years: 7,
    languages: ["EN"],
    areas: ["vancouver", "richmond", "surrey"],
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];
