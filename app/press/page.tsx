import type { Metadata } from "next";
import Image from "next/image";
import { Newsletter } from "../components/Newsletter";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Headlines } from "./Headlines";
import styles from "./press.module.css";

export const metadata: Metadata = {
  title: "Taggy — In the Press",
  description: "Discover some of our stories, and read the latest features about Taggy.",
};

const FULL_STORY_URL =
  "https://dubainewsweek.com/taggy-reloved-merger-uae-circular-fashion/";

export default function PressPage() {
  return (
    <>
      <SiteHeader active="Press" />
      <main>
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h1 className={styles.introTitle}>In the Press</h1>
            <p className={styles.introSubtitle}>Discover some of our stories ...</p>
          </div>
        </section>

        <section className={styles.featured} aria-labelledby="featured-title">
          <div className={styles.featuredInner}>
            <div className={styles.featuredPhoto}>
              <Image
                src="/press/featured.png"
                alt="Taggy and Reloved founders"
                width={1200}
                height={1600}
                sizes="(min-width: 1024px) 615px, 100vw"
                className={styles.featuredPhotoImage}
              />
            </div>
            <div className={styles.featuredText}>
              <h2 id="featured-title" className={styles.featuredTitle}>
                Two businesses.
                <br className={styles.desktopBreak} /> One shared vision.
              </h2>
              <div className={styles.featuredBody}>
                <p>
                  Taggy and Reloved have joined forces to build a bigger community and
                  bring an elevated circular fashion experience to the UAE.
                </p>
                <div className={styles.masthead}>
                  <Image
                    src="/press/masthead.png"
                    alt="Dubai Newsweek"
                    width={2085}
                    height={863}
                    sizes="302px"
                    className={styles.mastheadImage}
                  />
                </div>
              </div>
              <a
                className={styles.storyButton}
                href={FULL_STORY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Story
                <Image src="/press/arrow-up-right-white.svg" alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </section>

        <Headlines />
        <Newsletter
          buttonLabel="Update me!"
        />
      </main>
      <SiteFooter />
    </>
  );
}
