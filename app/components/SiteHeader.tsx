import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import s from "./landing.module.css";

const links = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Our Listing Service", href: "/#listing-service" },
  { label: "About Taggy", href: "/#about" },
  { label: "App Preview", href: "/#app-preview" },
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Our Story", href: "/our-story" },
  { label: "Press", href: "/press" },
  { label: "Blogs", href: "/blogs" },
];

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header>
      <div className={s.promo}>
        <p>
          Want us to upload your items on your behalf, book our{" "}
          <strong>listing service</strong> today.
        </p>
      </div>
      <div className={s.navBar}>
        <div className={s.navLeft}>
          <Link href="/" aria-label="Taggy home">
            <Image src="/icons/taggy-logo.svg" alt="Taggy" width={104} height={24} priority />
          </Link>
          <nav className={s.navLinks} aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={link.label === active ? s.navActive : undefined}
                aria-current={link.label === active ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={s.navActions}>
          <Link className={s.buttonDark} href="/#download">
            Download App
          </Link>
          <MobileMenu links={links} active={active} />
        </div>
      </div>
    </header>
  );
}
