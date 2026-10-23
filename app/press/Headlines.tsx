"use client";

import Image from "next/image";
import { useState } from "react";
import { articles, type Article } from "./articles";
import styles from "./press.module.css";

// On phones the design shows the first three stories, then "Load more stories".
const PHONE_INITIAL = 3;

function ArticleImage({ article }: { article: Article }) {
  const { fit, image } = article;

  if (fit.kind === "box") {
    return (
      <Image
        src={image}
        alt=""
        width={1170}
        height={935}
        sizes="(min-width: 1024px) 430px, 100vw"
        className={styles.boxImage}
      />
    );
  }

  if (fit.kind === "crop") {
    return (
      <Image
        src={image}
        alt=""
        width={1200}
        height={1600}
        sizes="(min-width: 1024px) 430px, 100vw"
        className={styles.cropImage}
        style={{ height: `${fit.height}%`, top: `${fit.top}%` }}
      />
    );
  }

  return (
    <Image
      src={image}
      alt=""
      fill
      sizes="(min-width: 1024px) 430px, 100vw"
      className={styles.coverImage}
    />
  );
}

export function Headlines() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? articles.length : PHONE_INITIAL;

  return (
    <section className={styles.headlines} aria-labelledby="headlines-title">
      <hr className={styles.topRule} />
      <div className={styles.headlinesHeading}>
        <h2 id="headlines-title" className={styles.headlinesTitle}>
          Making headlines.
        </h2>
        <p className={styles.headlinesSubtitle}>Read some of our latest features.</p>
      </div>

      <ul className={styles.grid}>
        {articles.map((article, i) => (
          <li
            key={i}
            className={`${styles.card} ${!expanded && i >= PHONE_INITIAL ? styles.phoneHidden : ""}`}
          >
            <div className={styles.media} style={{ background: article.background }}>
              <ArticleImage article={article} />
            </div>
            <div className={styles.body}>
              <div className={styles.text}>
                <div className={styles.meta}>
                  <span className={styles.source}>{article.source}</span>
                  <span className={styles.date}>{article.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{article.title}</h3>
              </div>
              <hr className={styles.rule} />
              <a
                className={styles.link}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkLabel}>Read article</span>
                <Image src="/icons/arrow-up-right.svg" alt="" width={20} height={20} />
              </a>
            </div>
          </li>
        ))}
      </ul>

      {/* Phone-only: mirrors the design's "More stories" block. */}
      <div className={styles.more}>
        <p className={styles.moreCount} aria-live="polite">
          Showing {shown} of {articles.length} stories
        </p>
        {!expanded && (
          <button type="button" className={styles.moreButton} onClick={() => setExpanded(true)}>
            Load more stories
          </button>
        )}
      </div>
    </section>
  );
}
