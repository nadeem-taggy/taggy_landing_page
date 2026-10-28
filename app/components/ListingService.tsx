import Image from "next/image";
import { WHATSAPP_BOOKING_URL } from "../site-config";
import { VideoButton } from "./VideoButton";
import s from "./landing.module.css";

const points = [
  "Do you have an overflowing wardrobe, but no time to list?",
  "We can visit your home, or take your items and upload for you.",
  "We will steam, photograph and upload to your account. You just set the price and await the sales.",
];

export function ListingService() {
  return (
    <section id="listing-service" className={s.listingSection}>
      <div className={s.listingInner}>
        <div className={s.listingImage}>
          <Image
            src="/images/listing-team.png"
            alt="A Taggy team member steaming a dress for a listing"
            fill
            sizes="(min-width: 1024px) 659px, 100vw"
            className={s.cover}
          />
        </div>
        <div className={s.listingPanel}>
          <h2 className={s.listingTitle}>Let us list on your behalf</h2>
          <ul className={s.checks}>
            {points.map((point) => (
              <li key={point}>
                <Image src="/icons/check-verified.svg" alt="" width={24} height={24} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className={s.listingCta}>
            <p className={s.ctaLabel}>See our Listing Team in action</p>
            <div className={s.buttonRow}>
              <a
                className={s.buttonDark}
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us to Book Now
              </a>
              <VideoButton video="listing" className={s.buttonDark}>
                Watch video
              </VideoButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
