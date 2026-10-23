import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Newsletter } from "../../components/Newsletter";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { ShareStory } from "./ShareStory";
import {
  article,
  conclusion,
  contents,
  intro,
  quote,
  related,
  sectionsAfterQuote,
  sectionsBeforeQuote,
  type Section,
} from "./data";
import s from "./vinted-alternative.module.css";

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
};

function ArticleSection({ section }: { section: Section }) {
  return (
    <section id={section.id} className={s.section}>
      <h2 className={s.sectionHeading}>{section.heading}</h2>
      <div className={s.sectionCopy}>
        {section.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  );
}

export default function VintedAlternativePage() {
  return (
    <>
      <SiteHeader active="Blogs" />
      <main className={s.page}>
        <header className={s.masthead}>
          <Link href="/blogs" className={s.backLink}>
            <Image src="/blogs/article/arrow-left.svg" alt="" width={16} height={16} />
            <span>The Taggy Journal</span>
          </Link>
          <div className={s.headline}>
            <p className={s.kicker}>{article.kicker}</p>
            <h1 className={s.title}>{article.title}</h1>
            <p className={s.byline}>
              <span>{article.byline}</span>
              <span className={s.bylineSep}>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <span>
                {article.date}
                <span className={s.bylineDot}>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                {article.readTime}
              </span>
            </p>
          </div>
        </header>

        <figure className={s.cover}>
          <div className={s.coverImage}>
            <Image
              src={article.cover}
              alt="A white shirt, olive trousers, black loafers and a woven bag laid flat"
              fill
              priority
              sizes="(min-width: 1440px) 1184px, 100vw"
              className={s.cover_img}
            />
          </div>
          <figcaption className={s.caption}>
            <span>
              <span className={s.captionDesktop}>circular fashion pieces. A new chapter.</span>
              <span className={s.captionMobile}>Pre-loved pieces. A new chapter.</span>
            </span>
            <span className={s.captionBrand}>THE TAGGY JOURNAL</span>
          </figcaption>
        </figure>

        <div className={s.articleWrap}>
          <div className={s.reading}>
            <aside className={s.guide} aria-label="Article guide">
              <p className={s.guideLabel}>IN THIS STORY</p>
              <nav className={s.contents} aria-label="In this story">
                {contents.map((item) => (
                  <a key={item.id} href={`#${item.id}`}>
                    <span>{item.label}</span>
                    <span className={s.contentsArrow} aria-hidden="true">
                      ↓
                    </span>
                  </a>
                ))}
              </nav>
              <hr className={s.rule} />
              <ShareStory title={article.title} />
            </aside>

            <div className={s.body}>
              <div className={s.intro}>
                {intro.map((text, i) => (
                  <p key={text} className={i === 0 ? s.lede : undefined}>
                    {text}
                  </p>
                ))}
              </div>
              {sectionsBeforeQuote.map((section) => (
                <ArticleSection key={section.id} section={section} />
              ))}
            </div>
          </div>

          <aside className={s.interlude} aria-label="Pull quote">
            <div className={s.interludeImage}>
              <Image
                src="/blogs/article/interlude.png"
                alt="A rail of white, tweed, rust and blue garments beside a canvas tote"
                fill
                sizes="(min-width: 1024px) 484px, 100vw"
                className={s.cover_img}
              />
            </div>
            <blockquote className={s.quote}>
              <span className={s.quoteMark} aria-hidden="true">
                “
              </span>
              <p className={s.quoteText}>{quote}</p>
              <cite className={s.quoteCite}>THE TAGGY JOURNAL</cite>
            </blockquote>
          </aside>

          <div className={s.continuing}>
            {sectionsAfterQuote.map((section) => (
              <ArticleSection key={section.id} section={section} />
            ))}

            <section className={s.conclusion}>
              <hr className={s.rule} />
              <h2 className={s.sectionHeading}>{conclusion.heading}</h2>
              {conclusion.paragraphs.map((text) => (
                <p key={text} className={s.conclusionText}>
                  {text}
                </p>
              ))}
              <Link href="/" className={s.cta}>
                {conclusion.cta}
              </Link>
            </section>

            <div className={s.endOfStory}>
              <hr className={s.rule} />
              <div className={s.endRow}>
                <Link href="/blogs" className={s.backBottom}>
                  ← Back to the journal
                </Link>
                <ShareStory title={article.title} />
              </div>
            </div>
          </div>
        </div>

        <section className={s.more}>
          <div className={s.moreInner}>
            <div className={s.moreIntro}>
              <h2 className={s.moreTitle}>The story continues.</h2>
              <Link href="/blogs" className={s.moreLink}>
                Explore the journal ↗
              </Link>
            </div>
            <div className={s.relatedGrid}>
              {related.map((item) => (
                <article key={item.title} className={s.related}>
                  <div className={s.relatedImage}>
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 427px, 100vw"
                      className={s.cover_img}
                    />
                  </div>
                  <div className={s.relatedDetails}>
                    <div className={s.relatedMeta}>
                      <span className={s.relatedCategory}>{item.category}</span>
                      <span className={s.relatedDate}>{item.date}</span>
                    </div>
                    <h3 className={s.relatedTitle}>{item.title}</h3>
                    <p className={s.relatedExcerpt}>{item.excerpt}</p>
                    <hr className={s.relatedRule} />
                    <div className={s.relatedAction}>
                      <a className={s.readArticle} href="#">
                        <span className={s.readLabel}>Read article</span>
                        <Image
                          className={s.readArrowDesktop}
                          src="/blogs/article/arrow-up-right.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                        <span className={s.readArrowMobile} aria-hidden="true">
                          ↗
                        </span>
                      </a>
                      <span className={s.relatedTime}>{item.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
