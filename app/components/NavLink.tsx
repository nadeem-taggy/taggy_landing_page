"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

// A link to "/#section" while already on the home page does nothing once the URL already
// ends in that #section (e.g. after scrolling back up), so scroll to it ourselves.
export function NavLink({ href, onClick, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();
  const hash = href.startsWith("/#") ? href.slice(1) : null;
  const onHome = pathname === "/" || pathname === "";

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!hash || !onHome || event.defaultPrevented) return;
        const target = document.getElementById(hash.slice(1));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView();
        if (window.location.hash !== hash) history.pushState(null, "", hash);
      }}
    />
  );
}
