"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Next doesn't reliably scroll to #section when a link from another page (e.g. /meet-the-team)
// lands on the home page: the target isn't rendered yet. Wait for it, then scroll.
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let frame = 0;
    let tries = 0;
    const scroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView();
      } else if (tries++ < 60) {
        frame = requestAnimationFrame(scroll);
      }
    };
    scroll();
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
