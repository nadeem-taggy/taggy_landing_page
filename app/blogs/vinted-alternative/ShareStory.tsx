"use client";

import Image from "next/image";
import { useState } from "react";
import s from "./vinted-alternative.module.css";

export function ShareStory({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked (insecure origin, permissions); the link is still in the address bar.
    }
  };

  return (
    <div className={s.share}>
      <span className={s.shareLabel}>Share this story</span>
      <button
        type="button"
        className={s.shareButton}
        onClick={copy}
        aria-label={copied ? "Link copied" : "Copy link"}
        title={copied ? "Link copied" : "Copy link"}
      >
        <Image src="/blogs/article/share-link.svg" alt="" width={18} height={18} />
      </button>
      <a
        className={s.shareButton}
        href={`mailto:?subject=${encodeURIComponent(title)}`}
        onClick={(event) => {
          // Add the current page URL at click time, so the markup renders the same on server and client.
          event.currentTarget.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(window.location.href)}`;
        }}
        aria-label="Email this story"
        title="Email this story"
      >
        <Image src="/blogs/article/share-mail.svg" alt="" width={18} height={18} />
      </a>
      <span className="sr-only" role="status">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </div>
  );
}
