"use client";

import Image from "next/image";
import { useState } from "react";
import { articles, categories, type Article, type Category } from "./articles";
import s from "./blogs.module.css";

type Filter = "All stories" | Category;

const filters: Filter[] = ["All stories", ...categories];

function StoryImage({ article }: { article: Article }) {
  const { fit, image } = article;
  const sizes = "(min-width: 1024px) 430px, (min-width: 640px) 50vw, 100vw";

  if (fit.kind === "crop") {
    return (
      <Image
        src={image}
        alt=""
        width={1122}
        height={1402}
        sizes={sizes}
        className={s.cropImage}
        style={{ height: `${fit.height}%`, top: `${fit.top}%` }}
      />
    );
  }

  return <Image src={image} alt="" fill sizes={sizes} className={s.coverImage} />;
}

export function StoryList() {
  const [active, setActive] = useState<Filter>("All stories");

  const visible =
    active === "All stories"
      ? articles
      : articles.filter((article) => article.category === active);

  return (
    <>
      <div className={s.filters} role="group" aria-label="Filter stories by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={filter === active ? s.filterActive : s.filter}
            aria-pressed={filter === active}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <ul className={s.grid}>
        {visible.map((article) => (
          <li key={article.title} className={s.card}>
            <div className={s.media}>
              <StoryImage article={article} />
            </div>
            <div className={s.cardBody}>
              <div className={s.meta}>
                <span className={s.category}>{article.category}</span>
                <span className={s.date}>{article.date}</span>
              </div>
              <h3 className={s.cardTitle}>{article.title}</h3>
              <p className={s.excerpt}>{article.excerpt}</p>
              <hr className={s.rule} />
              <div className={s.readRow}>
                <a className={s.readLink} href={article.href}>
                  <span className={s.readLabel}>Read article</span>
                  <Image src="/blogs/arrow.svg" alt="" width={20} height={20} />
                </a>
                <span className={s.readTime}>{article.readTime}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={s.more}>
        <p className={s.count} aria-live="polite">
          Showing {visible.length} of {articles.length} stories
        </p>
        {/* All designed stories are already shown, so there is nothing more to load yet. */}
        <button
          type="button"
          className={s.loadMore}
          disabled={visible.length >= articles.length}
        >
          Load more stories
        </button>
      </div>
    </>
  );
}
