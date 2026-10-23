import Image from "next/image";
import s from "./landing.module.css";

// Desktop: exported from Figma at 2x, then clipped exactly as the design clips them:
// Home on the left edge, Terms on the right edge, all cut off at the section bottom.
// Alternate phones sit 65px lower, as in the design.
const phones = [
  { src: "/mockups/phone-home.png", alt: "Taggy home screen", width: 251.5, height: 495, offset: 65 },
  { src: "/mockups/phone-product.png", alt: "Taggy product details screen", width: 289.5, height: 560, offset: 0 },
  { src: "/mockups/phone-seller.png", alt: "Taggy seller profile screen", width: 289.5, height: 495, offset: 65 },
  { src: "/mockups/phone-boost.png", alt: "Taggy boost item screen", width: 289.5, height: 560, offset: 0 },
  { src: "/mockups/phone-terms.png", alt: "Taggy terms and conditions screen", width: 251.5, height: 495, offset: 65 },
];

// Phone design (402px frame): the product screen sits centred with a sliver of the
// home and seller screens either side. Positions are from the Figma carousel.
const mobilePhones = [
  { src: "/mockups/mobile-phone-home.png", alt: "Taggy home screen", left: 0, top: 30, width: 51, height: 550 },
  { src: "/mockups/mobile-phone-product.png", alt: "Taggy product details screen", left: 67, top: 0, width: 268, height: 580 },
  { src: "/mockups/mobile-phone-seller.png", alt: "Taggy seller profile screen", left: 351, top: 30, width: 51, height: 550 },
];

export function PreviewPass() {
  return (
    <section id="app-preview" className={s.previewSection}>
      <div className={s.previewHeading}>
        <h2 className={s.h2Large48}>Your preview pass</h2>
        <p className={`${s.lead18} ${s.hideOnPhone}`}>
          Get a feeling on how the app looks and feels before downloading.
        </p>
        <p className={`${s.lead18} ${s.showOnPhone}`}>
          Get a feel for how Taggy moves, shops, and styles. Just a teaser -
          because the real magic happens once you download.
        </p>
      </div>
      <div className={`${s.phoneStrip} ${s.hideOnPhone}`}>
        {phones.map((phone) => (
          <Image
            key={phone.src}
            src={phone.src}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            sizes="290px"
            className={s.phone}
            style={{ marginTop: phone.offset }}
          />
        ))}
      </div>
      <div className={`${s.phoneCarousel} ${s.showOnPhone}`}>
        <div className={s.phoneCarouselInner}>
          {mobilePhones.map((phone) => (
            <Image
              key={phone.src}
              src={phone.src}
              alt={phone.alt}
              width={phone.width}
              height={phone.height}
              sizes="268px"
              className={s.phoneAbsolute}
              style={{ left: phone.left, top: phone.top }}
            />
          ))}
        </div>
      </div>
      <div className={`${s.dots} ${s.showOnPhone}`} aria-hidden="true">
        <span className={s.dot} />
        <span className={s.dotActive} />
        <span className={s.dot} />
        <span className={s.dot} />
        <span className={s.dot} />
      </div>
    </section>
  );
}
