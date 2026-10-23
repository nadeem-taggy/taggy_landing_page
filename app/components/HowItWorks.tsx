import Image from "next/image";
import s from "./landing.module.css";

const steps = [
  {
    title: "Browse, Sell or List",
    body: "Shopping is made easier with smart auto-tags, image search, knowing your algorithms. Discover curated drops or list your items in seconds. Thanks to smart auto-tags, image search, and pricing tips -your wardrobe refresh?",
  },
  {
    title: "On your behalf",
    body: "Remove the stress of listing your items and we can do this on your behalf. Book the team, approve & price our uploads and await the sales.",
  },
  {
    title: "Save dirhams",
    body: "Want to save even more? Make an offer and wait for the seller to accept. No chasing, no chaos - just seamless resale.",
  },
  {
    title: "Same day delivery",
    body: "Our delivery partners can deliver your next items within 4 hours.",
  },
  {
    title: "Loved, again.",
    body: "Circular shopping, made easy.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className={s.howSection}>
      <div className={s.howInner}>
        <div className={s.howLeft}>
          <h2 className={s.h2Large}>How it works</h2>
          <Image
            src="/mockups/how-it-works.png"
            alt="The Taggy app home screen"
            width={568}
            height={619}
            sizes="(min-width: 1024px) 568px, 100vw"
            className={`${s.howPanel} ${s.hideOnPhone}`}
          />
          <Image
            src="/mockups/mobile-how-it-works.png"
            alt="The Taggy app home screen"
            width={354}
            height={386}
            sizes="354px"
            className={`${s.howPanel} ${s.showOnPhone}`}
          />
        </div>
        <ol className={s.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={s.step}>
              <span className={s.stepNumber}>{String(i + 1).padStart(2, "0")}</span>
              <div className={s.stepBody}>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.body16}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
