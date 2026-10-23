// How an image is placed inside its 291px-tall frame, taken from the Figma crops.
export type ImageFit =
  | { kind: "cover" }
  | { kind: "box"; width: number; height: number; top: number }
  | { kind: "crop"; height: number; top: number };

export type Article = {
  source: string;
  date: string;
  title: string;
  href: string;
  image: string;
  fit: ImageFit;
  background?: string;
};

const href =
  "https://dubainewsweek.com/taggy-reloved-merger-uae-circular-fashion/";
const date = "26 Aug, 2026";
const merger = "Taggy and Reloved join forces to accelerate circular fashion in the UAE";

export const articles: Article[] = [
  {
    source: "Dubai News Week",
    date,
    title: "Taggy and Reloved merge to expand UAE fashion resale",
    href,
    image: "/press/article-1.png",
    fit: { kind: "box", width: 520.556, height: 416, top: -44 },
    background: "var(--butter-lemon-500)",
  },
  {
    source: "Time Out",
    date,
    title: "Sell your stuff online in Dubai",
    href,
    image: "/press/article-2.jpg",
    fit: { kind: "cover" },
  },
  {
    source: "Thrift shopping",
    date,
    title: "10 best places to do your thrift shopping in Dubai",
    href,
    image: "/press/article-3.png",
    fit: { kind: "cover" },
  },
  {
    source: "Raemona",
    date,
    title: merger,
    href,
    image: "/press/article-4.jpg",
    fit: { kind: "cover" },
  },
  {
    source: "Mid-East",
    date,
    title: merger,
    href,
    image: "/press/article-5.png",
    fit: { kind: "cover" },
  },
  {
    source: "UAE Today",
    date,
    title: merger,
    href,
    image: "/press/article-6.jpg",
    fit: { kind: "crop", height: 221.59, top: -37.36 },
  },
  {
    source: "MENAFN",
    date,
    title: merger,
    href,
    image: "/press/article-7.jpg",
    fit: { kind: "crop", height: 197.02, top: -33.25 },
  },
  {
    source: "Go Green",
    date,
    title: merger,
    href,
    image: "/press/article-8.jpg",
    fit: { kind: "crop", height: 197.02, top: -19.32 },
  },
  {
    source: "tbreak",
    date,
    title: merger,
    href,
    image: "/press/article-9.png",
    fit: { kind: "crop", height: 184.64, top: -58.01 },
  },
];
