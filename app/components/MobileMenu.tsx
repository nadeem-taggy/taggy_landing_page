"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DownloadButton } from "./DownloadButton";
import { NavLink } from "./NavLink";
import { PromoText } from "./PromoText";
import s from "./landing.module.css";

type MobileMenuProps = {
  links: { label: string; href: string }[];
  active?: string;
};

export function MobileMenu({ links, active }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={s.menuButton}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <Image src="/icons/menu.svg" alt="" width={24} height={24} />
      </button>

      {open && (
        <div id="mobile-menu" className={s.menuOverlay} role="dialog" aria-modal="true" aria-label="Menu">
          <div className={s.menuPromo}>
            <PromoText />
          </div>
          <div className={s.menuTop}>
            <Image src="/icons/taggy-logo.svg" alt="Taggy" width={87} height={20} />
            <button
              type="button"
              className={s.menuClose}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <Image src="/icons/x-close.svg" alt="" width={16} height={16} />
            </button>
          </div>
          <nav className={s.menuList} aria-label="Main">
            {links.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                className={link.label === active ? s.menuItemActive : s.menuItem}
                aria-current={link.label === active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <Image src="/icons/chevron-right.svg" alt="" width={24} height={24} />
              </NavLink>
            ))}
          </nav>
          <div className={s.menuCta}>
            <DownloadButton className={s.buttonDark} onClick={() => setOpen(false)}>
              Download App
            </DownloadButton>
          </div>
        </div>
      )}
    </>
  );
}
