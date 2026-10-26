import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { StoreBadges } from "../components/StoreBadges";
import s from "./our-story.module.css";

export const metadata: Metadata = {
  title: "Our Story — Taggy",
  description: "Taggy was built because we needed something that didn't exist.",
};

const chapters = [
  { label: "It started with a need", href: "#chapter-one" },
  { label: "Chapter 2 with Reloved", href: "#chapter-two" },
  { label: "A note from our COO", href: "#coo-note" },
  { label: "This is just the beginning", href: "#beginning" },
];

const wishes = [
  {
    title: "High quality items",
    body: "Pieces we actually wanted to wear, without spending a fortune on them.",
  },
  {
    title: "Close to home",
    body: "Bought and sold here in the UAE. No more waiting days for a parcel from the other side of the world.",
  },
  {
    title: "Easy and exciting",
    body: "We wanted circular shopping to feel easy, convenient and exciting.",
  },
];

const promises = [
  "A place where your wardrobe can keep moving.",
  "Where the things you no longer wear can become someone else's next favourite.",
  "Where shopping secondhand is simple, and selling is just as easy.",
  "And where circular shopping becomes the norm, not the exception.",
];

// The four tilted photos around the "No more hassle" statement.
// tilt is the rotation the Figma gives each one; positions live in the stylesheet.
const tiles = [
  { src: "/our-story/collage-1.png", cls: s.tile1, tilt: s.tileTiltLeft },
  { src: "/our-story/collage-2.png", cls: s.tile2, tilt: s.tileTiltRight },
  { src: "/our-story/collage-3.png", cls: s.tile3, tilt: s.tileTiltRight },
  { src: "/our-story/collage-4.png", cls: s.tile4, tilt: s.tileTiltLeft },
];

const cooParagraphs = [
  "My vision is clear: our community needs this. Chapter 2 is where we're just getting started, and I am so excited to share this journey, our mission and our vision with the people of the UAE.",
  "We're not here to build just another marketplace. We want to create a platform that actually understands you, where algorithms learn your style, where your finds can arrive the same day, and where buying and selling secondhand is genuinely convenient, accessible and reasonable.",
  "This is the platform I believe the UAE has been waiting for.",
  "Thank you for trusting Taggy, for being part of our community and for using our platform.",
  "We're so happy you're in your circular shopping era. And trust us, it's an era that's here to stay.",
];

function Steps({ children }: { children: React.ReactNode }) {
  return <ol className={s.steps}>{children}</ol>;
}

export default function OurStoryPage() {
  return (
    <>
      <SiteHeader active="Our Story" />
      <main className={s.page}>
        {/* 1. Intro + table of contents */}
        <section className={s.intro}>
          <div className={`${s.inner} ${s.introInner}`}>
            <div className={s.introText}>
              <p className={s.eyebrow}>Our Story</p>
              <h1 className={`${s.display64} ${s.introTitle}`}>
                It started with
                <br />a need.
              </h1>
              <p className={s.body18}>
                Taggy was built because we needed something that didn&apos;t exist.
              </p>
            </div>
            <nav className={s.toc} aria-label="In this story">
              <p className={`${s.eyebrow} ${s.tocLabel}`}>In this story</p>
              <ol className={s.tocList}>
                {chapters.map((chapter, i) => (
                  <li key={chapter.href} className={s.tocRow}>
                    <span className={s.tocNum}>{String(i + 1).padStart(2, "0")}</span>
                    <a href={chapter.href}>{chapter.label}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* 2. Something that didn't exist */}
        <section id="chapter-one" className={s.need}>
          <div className={`${s.inner} ${s.needInner}`}>
            <div className={s.needLeft}>
              <h2 className={`${s.display64} ${s.needTitle}`}>
                Something that
                <br />
                didn&apos;t exist.
              </h2>
              <p className={s.body16Muted}>
                We wanted a platform where we could shop without waiting days for a parcel to
                arrive. We also wanted somewhere we could sell our pieces without being
                inundated with messages and countless offers to then be ghosted.
              </p>
              <div className={s.cropBox}>
                <Image
                  src="/our-story/bags.png"
                  alt="Two Taggy shopping bags on a striped bench beside woven cushions"
                  width={3072}
                  height={4096}
                  sizes="(min-width: 1024px) 568px, 100vw"
                  className={s.cropImage}
                  style={{ height: "327.85%", top: "-138.09%" }}
                />
              </div>
            </div>
            <div className={s.needRight}>
              <p className={s.needLabel}>What we were looking for</p>
              <Steps>
                {wishes.map((wish, i) => (
                  <li key={wish.title} className={s.step}>
                    <span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                    <div className={s.stepBody}>
                      <h3 className={s.stepTitle}>{wish.title}</h3>
                      <p className={s.stepDesc}>{wish.body}</p>
                    </div>
                  </li>
                ))}
              </Steps>
            </div>
          </div>
        </section>

        {/* 3. No more hassle */}
        <section className={s.born}>
          <div className={`${s.inner} ${s.bornInner}`}>
            <div className={s.bornText}>
              <p>No more hassle.</p>
              <p>No more second-best</p>
              <p>
                <em>An elevated platform to buy and sell</em>
              </p>
            </div>
            <div className={s.pill}>
              <span>And so,</span>
              <Image src="/icons/taggy-logo.svg" alt="Taggy" width={69.333} height={16} />
              <span>was born.</span>
            </div>
            {tiles.map((tile) => (
              <div key={tile.src} className={`${s.tile} ${tile.cls} ${tile.tilt}`}>
                <div className={s.tileInner}>
                  <Image
                    src={tile.src}
                    alt=""
                    width={1122}
                    height={1402}
                    sizes="160px"
                    className={s.tileImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Chapter 2 with Reloved */}
        <section id="chapter-two" className={s.chapter}>
          <div className={`${s.inner} ${s.chapterInner}`}>
            <div className={s.chapterRow}>
              <div className={s.chapterText}>
                <h2 className={s.display48}>
                  Two businesses.
                  <br />
                  <em>One shared vision.</em>
                </h2>
                <div className={s.chapterCopy}>
                  <p className={s.body18}>In September 2026, we started a new chapter.</p>
                  <p className={s.body18}>
                    Taggy Chapter 2 began with our merger with Reloved, another platform built
                    around the same belief that we have: that the future of fashion is circular,
                    and that the UAE deserves a better way to buy and sell their secondhand
                    items.
                  </p>
                  <p className={s.chapterStrong}>
                    Together we can build a bigger community, provide a better platform and
                    drive circular shopping and selling.
                  </p>
                </div>
              </div>
              <div className={s.chapterPhoto}>
                <Image
                  src="/our-story/two-businesses.png"
                  alt="Two women and a child sitting together on a sofa on a sunny terrace"
                  fill
                  sizes="(min-width: 1024px) 615px, 100vw"
                  className={s.cover}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. A note from our COO */}
        <section id="coo-note" className={s.coo}>
          <div className={`${s.inner} ${s.cooInner}`}>
            <hr className={s.cooRule} />
            <div className={s.cooBody}>
              <div className={s.cooHeader}>
                <h2 className={`${s.display48} ${s.cooTitle}`}>
                  For us, Chapter 2 isn&apos;t about starting again.
                </h2>
                <p className={`${s.body18} ${s.cooIntro}`}>
                  It&apos;s about going bigger, going further and finally building the platform
                  we&apos;ve always believed the UAE needs.
                </p>
              </div>
              <div className={s.letter}>
                <div className={s.letterPhoto}>
                  <Image
                    src="/our-story/annie.png"
                    alt="Annie Stacey, Taggy's COO, sitting on a sofa with a laptop"
                    fill
                    sizes="(min-width: 1024px) 659px, 100vw"
                    className={s.cover}
                  />
                </div>
                <div className={s.letterCard}>
                  <div className={s.quoteBlock}>
                    <Image src="/our-story/quote-mark.svg" alt="" width={50.386} height={39.374} />
                    <p className={s.quoteText}>
                      Taggy isn&apos;t just a business for me. It&apos;s my passion, and I truly
                      believe it&apos;s a must for the UAE.
                    </p>
                  </div>
                  {cooParagraphs.map((paragraph) => (
                    <p key={paragraph} className={s.body18}>
                      {paragraph}
                    </p>
                  ))}
                  <div className={s.signoff}>
                    <hr className={s.signoffRule} />
                    <div className={s.signatureWrap}>
                      <Image
                        src="/our-story/signature.png"
                        alt="Annie Stacey"
                        width={723}
                        height={273}
                        className={s.signature}
                      />
                    </div>
                    <p className={s.signatureText}>Annie Stacey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. This is just the beginning */}
        <section id="beginning" className={s.beginning}>
          <div className={`${s.inner} ${s.beginningInner}`}>
            <div className={s.beginningLeft}>
              <h2 className={s.display64}>This is just the beginning.</h2>
              <p className={s.body16Muted}>
                We&apos;re building Taggy for a community that loves shopping and selling
                smarter.
              </p>
            </div>
            <ol className={`${s.steps} ${s.beginningList}`}>
              {promises.map((promise, i) => (
                <li key={promise} className={s.step}>
                  <span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                  <p className={s.promise}>{promise}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7. Download band */}
        <section className={s.download}>
          <div className={`${s.inner} ${s.downloadInner}`}>
            <div className={s.downloadText}>
              <h2 className={`${s.display40} ${s.downloadTitle}`}>Download our app today.</h2>
              <p className={s.downloadLead}>We&apos;re so glad you&apos;re here.</p>
            </div>
            <div className={s.badgesLg}>
              <a href="#" aria-label="Get it on Google Play">
                <Image
                  src="/our-story/badge-google-play-lg.svg"
                  alt="Get it on Google Play"
                  width={216}
                  height={64}
                />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <Image
                  src="/our-story/badge-app-store-lg.svg"
                  alt="Download on the App Store"
                  width={192}
                  height={64}
                />
              </a>
            </div>
            <div className={s.badgesSm}>
              <StoreBadges size="sm" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showStoreBadges={false} />
    </>
  );
}
