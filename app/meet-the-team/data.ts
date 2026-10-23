const dir = "/meet-the-team";

export type MosaicTile = { src: string; tall?: boolean; bottom?: boolean };
export type MosaicColumn = { id: "A" | "B" | "C"; tiles: MosaicTile[] };

// Three columns of the hero photo mosaic, in the order they sit on the 1440px frame.
// The PNGs are already greyscale in the Figma export; the JPEGs are colour, as designed.
export const mosaic: MosaicColumn[] = [
  {
    id: "A",
    tiles: [
      { src: `${dir}/hero-1.png`, tall: true },
      { src: `${dir}/hero-2.jpg` },
      { src: `${dir}/hero-3.png` },
    ],
  },
  {
    id: "B",
    tiles: [
      { src: `${dir}/hero-7.png` },
      { src: `${dir}/hero-8.jpg`, tall: true },
      { src: `${dir}/hero-9.png` },
    ],
  },
  {
    id: "C",
    tiles: [
      { src: `${dir}/hero-4.jpg`, tall: true },
      { src: `${dir}/hero-5.png` },
      { src: `${dir}/hero-6.png`, bottom: true },
    ],
  },
];

export const values = [
  "Brilliant at what they do",
  "Genuinely care about our customers",
  "Want to grow alongside the business",
];

export type Person = { name: string; role: string; photo: string };

export const people: Person[] = [
  { name: "Mark Leeming", role: "CEO", photo: `${dir}/person-1.jpg` },
  { name: "Annie Stacey", role: "COO", photo: `${dir}/person-2.jpg` },
  { name: "Monique Caton-Brown", role: "General Manager", photo: `${dir}/person-3.jpg` },
  { name: "Jessica Dynevor", role: "Marketing Manager", photo: `${dir}/person-4.jpg` },
];

export const techTeam: Person[] = [
  { name: "Nadeem", role: "Full Stack Developer", photo: `${dir}/tech-1.jpg` },
  { name: "Shadab", role: "Developer", photo: `${dir}/tech-2.jpg` },
];

// p1..p6 match the position classes in the stylesheet. "tilt" picks the rotation (+15deg or -10.94deg).
export type Snapshot = { src: string; place: "p1" | "p2" | "p3" | "p4" | "p5" | "p6"; tilt: "right" | "left" };

// Top row on small screens: p4, p5, p1. Bottom row: p6, p2, p3.
export const snapshotsTop: Snapshot[] = [
  { src: `${dir}/community-4.jpg`, place: "p4", tilt: "left" },
  { src: `${dir}/community-5.jpg`, place: "p5", tilt: "left" },
  { src: `${dir}/community-1.jpg`, place: "p1", tilt: "right" },
];

export const snapshotsBottom: Snapshot[] = [
  { src: `${dir}/community-6.jpg`, place: "p6", tilt: "left" },
  { src: `${dir}/community-2.jpg`, place: "p2", tilt: "right" },
  { src: `${dir}/community-3.jpg`, place: "p3", tilt: "right" },
];
