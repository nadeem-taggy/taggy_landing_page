import Image from "next/image";
import { StoreBadges } from "./StoreBadges";
import s from "./landing.module.css";

const socials = [
  { label: "Instagram", src: "/icons/instagram.svg" },
  { label: "TikTok", src: "/icons/tiktok.svg" },
  { label: "Facebook", src: "/icons/facebook.svg" },
  { label: "LinkedIn", src: "/icons/linkedin.svg" },
];

const links = ["Helpful guides", "Faqs", "Contact us", "Privacy policy", "Terms & conditions"];

export function SiteFooter() {
  return (
    <footer id="download" className={s.footer}>
      <div className={s.footerTop}>
        <Image src="/icons/taggy-logo.svg" alt="Taggy" width={104} height={24} />
        <StoreBadges size="sm" />
      </div>
      <div className={s.footerBottom}>
        <div className={s.socials}>
          {socials.map((social) => (
            <a key={social.label} href="#" aria-label={social.label}>
              <Image src={social.src} alt="" width={32} height={32} />
            </a>
          ))}
        </div>
        <nav className={s.footerLinks} aria-label="Footer">
          {links.map((label) => (
            <a key={label} href="#">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
