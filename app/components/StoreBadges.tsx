import Image from "next/image";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../site-config";
import s from "./landing.module.css";

// The Figma frames use two badge sizes: 162.8x48.2 / 144.7x48.2 in sections, 148.5x44 / 132x44 in the footer.
export function StoreBadges({ size = "md" }: { size?: "md" | "sm" }) {
  const sm = size === "sm";
  return (
    <div className={sm ? s.badgesSm : s.badges}>
      <a href={GOOGLE_PLAY_URL} aria-label="Get it on Google Play" target="_blank" rel="noopener noreferrer">
        <Image
          src={sm ? "/icons/badge-google-play.svg" : "/icons/badge-google-play-sm.svg"}
          alt="Get it on Google Play"
          width={sm ? 148.5 : 162.814}
          height={sm ? 44 : 48.241}
        />
      </a>
      <a href={APP_STORE_URL} aria-label="Download on the App Store" target="_blank" rel="noopener noreferrer">
        <Image
          src={sm ? "/icons/badge-app-store.svg" : "/icons/badge-app-store-sm.svg"}
          alt="Download on the App Store"
          width={sm ? 132 : 144.724}
          height={sm ? 44 : 48.241}
        />
      </a>
    </div>
  );
}
