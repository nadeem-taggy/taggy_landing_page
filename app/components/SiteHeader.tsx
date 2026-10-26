import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";
import { PromoText } from "./PromoText";
import { SHOW_BLOGS } from "../site-config";
import s from "./landing.module.css";

const links = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Our Listing Service", href: "/#listing-service" },
  { label: "About Taggy", href: "/#about" },
  { label: "App Preview", href: "/#app-preview" },
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Our Story", href: "/our-story" },
  { label: "Press", href: "/press" },
  ...(SHOW_BLOGS ? [{ label: "Blogs", href: "/blogs" }] : []),
];

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header>
      <div className={s.promo}>
        <PromoText />
      </div>
      <div className={s.navBar}>
        <div className={s.navLeft}>
          <Link href="/" aria-label="Taggy home">
            <Image src="/icons/taggy-logo.svg" alt="Taggy" width={104} height={24} priority />
          </Link>
          <nav className={s.navLinks} aria-label="Main">
            {links.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                className={link.label === active ? s.navActive : undefined}
                aria-current={link.label === active ? "page" : undefined}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className={s.navActions}>
          <NavLink className={s.buttonDark} href="/#download">
            Download App
          </NavLink>
          <MobileMenu links={links} active={active} />
        </div>
      </div>
    </header>
  );
}
