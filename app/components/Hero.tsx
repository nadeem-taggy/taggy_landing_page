import Image from "next/image";
import { StoreBadges } from "./StoreBadges";
import s from "./landing.module.css";

export function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.heroInner}>
        <div className={s.heroText}>
          <h1 className={s.heroTitle}>Shop, Sell &amp; List</h1>
          <p className={s.lead}>
            The UAE resale platform for circular shopping, selling and listing
            your wardrobe without the hassle.
          </p>
          <p className={s.lead}>Shop beautiful items easily with secure transactions.</p>
          <p className={s.lead}>List your items with our team or directly through our platform.</p>
          <p className={s.lead}>Get items reloved again.</p>
          <StoreBadges />
        </div>
        <div className={s.heroImage}>
          <Image
            src="/images/hero.png"
            alt="A white waistcoat, a rust dress and a black tweed jacket laid out for resale"
            fill
            priority
            sizes="(min-width: 1024px) 769px, 100vw"
            className={s.cover}
          />
        </div>
      </div>
    </section>
  );
}
