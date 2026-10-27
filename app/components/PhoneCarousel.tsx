"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import s from "./landing.module.css";

// The five app screens, scaled to the 268px-wide product screen of the phone design.
const SCALE = 268 / 289.5;
const screens = [
  { src: "/mockups/phone-home.png", alt: "Taggy home screen", width: 251.5, height: 495, offset: 65 },
  { src: "/mockups/phone-product.png", alt: "Taggy product details screen", width: 289.5, height: 560, offset: 0 },
  { src: "/mockups/phone-seller.png", alt: "Taggy seller profile screen", width: 289.5, height: 495, offset: 65 },
  { src: "/mockups/phone-boost.png", alt: "Taggy boost item screen", width: 289.5, height: 560, offset: 0 },
  { src: "/mockups/phone-terms.png", alt: "Taggy terms and conditions screen", width: 251.5, height: 495, offset: 65 },
];
const START = 1;

export function PhoneCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(START);

  function center(index: number, behavior: ScrollBehavior) {
    const el = track.current?.children[index] as HTMLElement | undefined;
    if (!track.current || !el) return;
    track.current.scrollTo({
      left: el.offsetLeft - (track.current.clientWidth - el.clientWidth) / 2,
      behavior,
    });
  }

  useEffect(() => center(START, "instant"), []);

  function onScroll() {
    const t = track.current;
    if (!t) return;
    const mid = t.scrollLeft + t.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    Array.from(t.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft + el.clientWidth / 2 - mid);
      if (distance < bestDistance) {
        best = i;
        bestDistance = distance;
      }
    });
    setActive(best);
  }

  return (
    <>
      <div ref={track} className={s.swipeTrack} onScroll={onScroll} tabIndex={0} aria-label="App screens">
        {screens.map((screen) => (
          <Image
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            width={screen.width * SCALE}
            height={screen.height * SCALE}
            sizes="268px"
            className={s.swipeItem}
            style={{ marginTop: screen.offset * SCALE }}
          />
        ))}
      </div>
      <div className={s.swipeDots}>
        {screens.map((screen, i) => (
          <button
            key={screen.src}
            type="button"
            aria-label={`Show ${screen.alt}`}
            aria-current={i === active}
            className={i === active ? s.dotActive : s.dot}
            onClick={() => center(i, "smooth")}
          />
        ))}
      </div>
    </>
  );
}
