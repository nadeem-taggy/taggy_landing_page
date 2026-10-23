export const categories = [
  "Style & inspiration",
  "Circular living",
  "Selling guides",
  "Community stories",
] as const;

export type Category = (typeof categories)[number];

// How the photo sits inside its frame, taken from the Figma crops.
export type ImageFit = { kind: "cover" } | { kind: "crop"; height: number; top: number };

export type Article = {
  category: Category;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  fit: ImageFit;
  href: string;
};

export const articles: Article[] = [
  {
    category: "Selling guides",
    date: "10 SEP, 2026",
    title: "How to Sell Your Clothes in Dubai",
    excerpt:
      "If your wardrobe is overflowing with clothes you don't wear, it might be time for a clear-out.",
    readTime: "4 min read",
    image: "/blogs/story-1.png",
    fit: { kind: "cover" },
    href: "#",
  },
  {
    category: "Circular living",
    date: "08 SEP, 2026",
    title: "10 Reasons to Shop Secondhand Fashion in Dubai",
    excerpt:
      "There was a time when buying secondhand clothes meant rummaging through a charity shop and hoping...",
    readTime: "5 min read",
    image: "/blogs/story-2.png",
    fit: { kind: "cover" },
    href: "#",
  },
  {
    category: "Style & inspiration",
    date: "04 SEP, 2026",
    title: "Why Secondhand Shopping Is Taking Off in the UAE",
    excerpt:
      "For years, buying secondhand fashion was sometimes associated with charity shops, vintage stores or...",
    readTime: "3 min read",
    image: "/blogs/story-3.png",
    fit: { kind: "cover" },
    href: "#",
  },
  {
    category: "Community stories",
    date: "01 SEP, 2026",
    title: "How to Build a More Circular Wardrobe in the UAE",
    excerpt:
      "What if your wardrobe didn't have to follow a simple cycle of buy → wear → forget → discard?",
    readTime: "5 min read",
    image: "/blogs/story-4.png",
    fit: { kind: "cover" },
    href: "#",
  },
  {
    category: "Selling guides",
    date: "28 AUG, 2026",
    title: "From your closet to their doorstep",
    excerpt: "Our simple guide to packing your pre-loved items.",
    readTime: "4 min read",
    image: "/blogs/story-5.png",
    fit: { kind: "crop", height: 184.64, top: -58.01 },
    href: "#",
  },
  {
    category: "Circular living",
    date: "24 AUG, 2026",
    title: "A little less new. A little more you.",
    excerpt: "Small wardrobe habits that make a lasting difference.",
    readTime: "6 min read",
    image: "/blogs/story-6.jpg",
    fit: { kind: "cover" },
    href: "#",
  },
];
