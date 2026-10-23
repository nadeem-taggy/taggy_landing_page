import Image from "next/image";
import { StoreBadges } from "./StoreBadges";
import s from "./landing.module.css";

export function Quality() {
  return (
    <section className={s.qualitySection}>
      <div className={s.qualityInner}>
        <div className={s.qualityText}>
          <h2 className={s.h2Large48}>
            Quality is <em>our thing</em> – and we&apos;re not just talking
            about the clothes.
          </h2>
          <div className={s.paragraphs18}>
            <p>
              From a state-of-the art app experience to same-day delivery and
              verified listings, every detail is styled to perfection.
            </p>
            <p>
              Our tech does the heavy lifting – auto tags, colour matching,
              pricing suggestions, so you can list faster, shop smarter, and
              scroll less.
            </p>
            <p>Low effort, high standards. Shop &amp; Sell the Taggy way.</p>
          </div>
          <StoreBadges />
        </div>
        <Image
          src="/mockups/quality.png"
          alt="Taggy product details screen for a Runaway Celeste maxi dress"
          width={615}
          height={716}
          sizes="(min-width: 1024px) 615px, 100vw"
          className={`${s.qualityPanel} ${s.hideOnPhone}`}
        />
        <Image
          src="/mockups/mobile-quality.png"
          alt="Taggy product details screen for a Runaway Celeste maxi dress"
          width={354}
          height={470}
          sizes="354px"
          className={`${s.qualityPanelMobile} ${s.showOnPhone}`}
        />
      </div>
    </section>
  );
}
