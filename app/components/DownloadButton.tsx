"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../site-config";

function storeForDevice() {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) {
    return APP_STORE_URL;
  }
  if (/Android/.test(ua)) return GOOGLE_PLAY_URL;
  return null;
}

// Phones go straight to their store; computers scroll to the store badges (the #download section).
export function DownloadButton({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
}) {
  return (
    <Link
      className={className}
      href="/#download"
      onClick={(event) => {
        onClick?.(event);
        const store = storeForDevice();
        if (store) {
          event.preventDefault();
          window.open(store, "_blank", "noopener,noreferrer");
          return;
        }
        const target = document.getElementById("download");
        if (target) {
          event.preventDefault();
          target.scrollIntoView();
        }
      }}
    >
      {children}
    </Link>
  );
}
