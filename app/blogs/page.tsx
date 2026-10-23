import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Newsletter } from "../components/Newsletter";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { StoryList } from "./StoryList";
import s from "./blogs.module.css";

// The Blogs design sets body copy in Inter Regular / Semi Bold; the shared layout only loads weight 500.
const inter = Inter({
  variable: "--font-blogs-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Our Taggy Blogs",
  description: "Read some of our latest thoughts.",
};

export default function BlogsPage() {
  return (
    <>
      <SiteHeader active="Blogs" />
      <main className={inter.variable}>
        <section className={s.intro}>
          <h1 className={s.introTitle}>Our Taggy Blogs</h1>
          <p className={s.introText}>Read some our latest thoughts.</p>
        </section>

        <section className={s.featured}>
          <div className={s.featuredInner}>
            <div className={s.featuredImage}>
              <Image
                src="/blogs/featured.png"
                alt="A white shirt, olive trousers, black loafers and a woven bag laid flat"
                fill
                priority
                sizes="(min-width: 1024px) 615px, 100vw"
                className={s.coverImage}
              />
            </div>
            <div className={s.featuredDetails}>
              <p className={s.featuredKicker}>THE LONG READ · STYLE &amp; INSPIRATION</p>
              <h2 className={s.featuredTitle}>Looking for a Vinted Alternative in the UAE?</h2>
              <p className={s.featuredBody}>
                Taggy is a platform designed to make it easier to shop and sell
                secondhand clothes, accessories and shoes in the UAE — connecting
                people who have items they no longer wear with new homes.
              </p>
              <p className={s.featuredMeta}>
                By the Taggy team &nbsp;·&nbsp; 12 September, 2026 &nbsp;·&nbsp; 6 min read
              </p>
              <Link className={s.readStory} href="/blogs/vinted-alternative">
                Read the story ↗
              </Link>
            </div>
          </div>
        </section>

        <section className={s.latest}>
          <div className={s.latestInner}>
            <hr className={s.topRule} />
            <div className={s.latestIntro}>
              <h2 className={s.latestTitle}>Stories worth sharing.</h2>
              <p className={s.latestText}>
                Fresh perspectives on personal style, circular shopping finds and living a
                little more thoughtfully.
              </p>
            </div>
            <StoryList />
          </div>
        </section>

        <Newsletter
          description="For all our updates provide your contact details."
          buttonLabel="Update me!"
        />
      </main>
      <SiteFooter />
    </>
  );
}
