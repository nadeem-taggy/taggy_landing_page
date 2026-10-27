import Image from "next/image";
import { VideoButton } from "./VideoButton";
import s from "./landing.module.css";

const photo = (className: string) => (
  <div className={className}>
    <Image
      src="/images/about.png"
      alt="A woman in a rust pleated dress"
      width={1672}
      height={941}
      sizes="(min-width: 1024px) 1352px, 100vw"
      className={s.aboutPhoto}
    />
  </div>
);

export function About() {
  return (
    <section id="about" className={s.aboutSection}>
      <div className={s.aboutInner}>
        <div className={s.aboutText}>
          <div className={s.aboutCopy}>
            <div className={s.aboutIntro}>
              <h2 className={s.h2Large48}>About Taggy</h2>
              <p className={s.subhead24}>Taggy was born from a need.</p>
              <p className={s.aboutLead}>
                Our founders created Taggy because they needed a better way to
                shop, sell and give their secondhand items a new life. What
                started as a requirement became a vision: to make circular
                shopping more accessible, easier and more elevated for the UAE.
              </p>
            </div>
            {/* The mobile design puts the photo between the intro and the chapters. */}
            {photo(`${s.aboutImageMobile} ${s.showOnPhone}`)}
            <div className={s.aboutGroup}>
              <h3 className={s.subhead24}>Chapter Two</h3>
              <p className={s.narrow}>
                Chapter Two began with Reloved — a company that shared our
                vision, our values and our belief that there should be a better
                way to shop and sell circular fashion.
              </p>
              <p className={s.narrow}>
                The two came together with a shared purpose: to make circular
                fashion simple, seamless and exciting.
              </p>
              <p className={s.narrow}>
                Together, we’re building a new way to shop and sell in the UAE —
                one that makes discovering circular fashion pieces feel just as
                effortless and inspiring as buying new.
              </p>
            </div>
            <div className={s.aboutGroup}>
              <h3 className={s.subhead24}>The Taggy Way</h3>
              <p className={s.narrow}>
                Create your account, select your Tags, and start shopping and
                selling the Taggy way.
              </p>
              <p className={s.narrow}>
                Because circular shopping should be easy. It should be
                accessible. And it should feel elevated.
              </p>
            </div>
          </div>
          <div className={s.buttonRow}>
            <VideoButton video="buyer" className={s.buttonPapaya}>
              Watch Buyer Experience
            </VideoButton>
            <VideoButton video="seller" className={s.buttonOutline}>
              Watch Seller Experience
            </VideoButton>
          </div>
        </div>
        {photo(`${s.aboutImage} ${s.hideOnPhone}`)}
      </div>
    </section>
  );
}
