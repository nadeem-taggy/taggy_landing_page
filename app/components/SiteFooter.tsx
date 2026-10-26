import Image from "next/image";
import { StoreBadges } from "./StoreBadges";
import s from "./landing.module.css";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/taggy.ae", src: "/icons/instagram.svg" },
  { label: "TikTok", href: "https://www.tiktok.com/@taggyunfiltered", src: "/icons/tiktok.svg" },
  { label: "Facebook", href: "https://www.facebook.com/p/Taggy-61580234867650/", src: "/icons/facebook.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/taggy-ae/", src: "/icons/linkedin.svg" },
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
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
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
