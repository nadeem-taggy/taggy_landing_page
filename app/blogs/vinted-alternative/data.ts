export const article = {
  title: "Looking for a Vinted Alternative in the UAE? Meet Taggy",
  description:
    "Taggy is a platform designed to make it easier to shop and sell secondhand clothes, accessories and shoes in the UAE.",
  kicker: "THE LONG READ · STYLE & INSPIRATION",
  byline: "By the Taggy team",
  date: "12 September, 2026",
  readTime: "6 min read",
  cover: "/blogs/article/cover.png",
};

export type Section = { id: string; heading: string; paragraphs: string[] };

// The five contents entries in the design map one-to-one onto the five sections after the introduction.
export const contents = [
  { label: "A new home for circular fashion", id: "new-home" },
  { label: "Shopping secondhand", id: "shopping" },
  { label: "Selling your wardrobe", id: "selling" },
  { label: "A more circular future", id: "circular" },
  { label: "Meet Taggy", id: "meet-taggy" },
];

export const intro = [
  "If you’ve ever wished there was a Vinted for the UAE, you’re not alone.",
  "Across the world, secondhand fashion has become one of the easiest ways to refresh your wardrobe without constantly buying brand-new clothes. Platforms like Vinted have made it simple for people to buy and sell circular fashion, giving clothes a second life while helping shoppers find great pieces for less.",
  "Now, a similar idea is becoming more accessible in the UAE with Taggy.",
  "Taggy is a platform designed to make it easier to shop and sell secondhand clothes, accessories and shoes in the UAE — connecting people who have items they no longer wear with new homes.",
];

export const sectionsBeforeQuote: Section[] = [
  {
    id: "new-home",
    heading: "Why the UAE needs its own secondhand fashion platform",
    paragraphs: [
      "The UAE has a unique fashion culture.",
      "From Dubai's high-street shopping destinations and luxury boutiques to seasonal wardrobes and constantly changing trends, people in the UAE buy a huge variety of clothing.",
      "But wardrobes can quickly become overcrowded.",
      'A dress bought for one occasion might only be worn once. A child can outgrow clothes within months. A trend that felt essential last season might no longer feel like "you".',
      "That doesn't mean those clothes have no value.",
      "It simply means they may be ready for their next owner.",
      "That's where Taggy comes in.",
    ],
  },
  {
    id: "shopping",
    heading: "Shop secondhand in Dubai and across the UAE",
    paragraphs: [
      "Taggy makes it easier to discover pre-loved fashion without having to rely on random social media posts, WhatsApp groups or endless scrolling through individual sellers.",
      "Whether you're looking for a designer piece, a wardrobe staple, something for a special occasion or simply want to find something different, secondhand shopping in Dubai can be a great way to discover clothes that already have a story.",
      "And the best part?",
      "You don't have to choose between style and shopping more consciously.",
      "Circular shopping is about keeping products in use for longer rather than treating everything as disposable.",
      "When you buy a secondhand item, you're giving an existing piece another chapter.",
    ],
  },
];

export const quote = "You don't have to choose between style and shopping more consciously.";

export const sectionsAfterQuote: Section[] = [
  {
    id: "selling",
    heading: "Sell your clothes instead of leaving them in your wardrobe",
    paragraphs: [
      "The other side of secondhand shopping is selling.",
      "Most of us have clothes we no longer wear.",
      "Maybe they don't fit anymore. Maybe your style has changed. Maybe you bought something for a holiday or event and haven't worn it since.",
      "Instead of leaving those clothes untouched, you can sell your secondhand clothes in the UAE and give someone else the opportunity to enjoy them.",
      "It's a simple shift in mindset:",
      "Your wardrobe isn't just where clothes go to retire. It can also be where their next journey begins.",
    ],
  },
  {
    id: "circular",
    heading: "Secondhand fashion is becoming circular fashion",
    paragraphs: [
      "The future of fashion isn't necessarily about buying more.",
      "It's about getting more value from what already exists.",
      "Circular fashion encourages us to keep clothes, accessories and other products in circulation for longer. Buying secondhand and reselling clothes are two simple ways to participate.",
      "And you don't need to completely change your lifestyle to start.",
      "The next time you're looking for something new, consider looking for something new to you.",
      "The next time you clear out your wardrobe, consider selling rather than throwing away.",
    ],
  },
  {
    id: "meet-taggy",
    heading: "So, is Taggy the Vinted of the Middle East?",
    paragraphs: [
      "That's an easy way to explain the idea.",
      "Taggy brings the convenience and community-driven concept of a secondhand marketplace to the UAE and Middle East, with a focus on making buying and selling pre-loved fashion more relevant to shoppers here.",
      "Whether you've used Vinted before or you've never bought a secondhand item in your life, Taggy makes it easier to start.",
      "Because great fashion doesn't have to be brand new.",
      "Sometimes, it's simply new to you.",
    ],
  },
];

export const conclusion = {
  heading: "Ready to shop or sell secondhand in the UAE?",
  paragraphs: [
    "If you're in Dubai or elsewhere in the UAE, take a look through Taggy and discover a smarter way to buy and sell the clothes already in circulation.",
    "Shop secondhand. Sell what you no longer wear. Keep fashion moving.",
  ],
  cta: "Discover Taggy ↗",
};

export const related = [
  {
    category: "SELLING GUIDES",
    date: "10 SEP, 2026",
    title: "How to Sell Your Clothes in Dubai",
    excerpt:
      "If your wardrobe is overflowing with clothes you don't wear, it might be time for a clear-out.",
    readTime: "4 min read",
    image: "/blogs/article/related-1.png",
  },
  {
    category: "CIRCULAR LIVING",
    date: "08 SEP, 2026",
    title: "10 Reasons to Shop Secondhand Fashion in Dubai",
    excerpt:
      "There was a time when buying secondhand clothes meant rummaging through a charity shop and hoping...",
    readTime: "5 min read",
    image: "/blogs/article/related-2.png",
  },
  {
    category: "STYLE & INSPIRATION",
    date: "04 SEP, 2026",
    title: "Why Secondhand Shopping Is Taking Off in the UAE",
    excerpt:
      "For years, buying secondhand fashion was sometimes associated with charity shops, vintage stores or...",
    readTime: "3 min read",
    image: "/blogs/article/related-3.png",
  },
];
