import Image from "next/image";
import s from "./landing.module.css";

const steps = [
  {
    title: "Discover something special",
    body: "Browse curated drops and personalized recommendations. Find the right piece faster with image search, smart tags and useful filters.",
  },
  {
    title: "Sell it yourself or leave it to us",
    body: "List directly through platform in minutes, or book our team to photograph, list and package your items for you.",
  },
  {
    title: "Make or receive offers",
    body: "Buyers can make offers directly through Taggy. Sellers can review and accept. No chasing, no chaos - just seamless resale.",
  },
  {
    title: "Enjoy same day delivery",
    body: "Choose from available delivery options at checkout, with same-day delivery arriving within 4hrs.",
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
            src="/mockups/how-it-works-v2.png"
            alt="The Taggy app home screen"
            width={568}
            height={619}
            sizes="(min-width: 1024px) 568px, 100vw"
            className={`${s.howPanel} ${s.hideOnPhone}`}
          />
          <Image
            src="/mockups/mobile-how-it-works-v2.png"
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
