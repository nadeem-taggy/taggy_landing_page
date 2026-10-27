"use client";

import { useEffect, useState, type ReactNode } from "react";
import s from "./landing.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Player = { kind: "iframe" | "video"; src: string };

function playerFor(link: string): Player | null {
  let url: URL;
  try {
    url = new URL(link);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, "");
  if (host === "youtu.be") return { kind: "iframe", src: `https://www.youtube.com/embed/${url.pathname.slice(1)}?autoplay=1` };
  if (host === "youtube.com" || host === "m.youtube.com") {
    const id = url.searchParams.get("v") ?? url.pathname.split("/").filter(Boolean).pop();
    return id ? { kind: "iframe", src: `https://www.youtube.com/embed/${id}?autoplay=1` } : null;
  }
  if (host === "vimeo.com") {
    const id = url.pathname.split("/").filter(Boolean).pop();
    return id ? { kind: "iframe", src: `https://player.vimeo.com/video/${id}?autoplay=1` } : null;
  }
  if (host === "player.vimeo.com") return { kind: "iframe", src: link };
  return { kind: "video", src: link };
}

// One request serves both buttons: the video links live in the admin panel under "Landing page".
let landing: Promise<Record<string, unknown> | null> | null = null;
function loadLanding() {
  if (!API_URL) return Promise.resolve(null);
  landing ??= fetch(`${API_URL}/settings/landing`)
    .then((res) => (res.ok ? res.json() : null))
    .then((body) => (body?.data && typeof body.data === "object" ? (body.data as Record<string, unknown>) : null))
    .catch(() => {
      landing = null;
      return null;
    });
  return landing;
}

// Plays the video set in the admin panel (Landing page). Hidden until a link is set there, so a
// button never points at nothing.
export function VideoButton({ video, className, children }: { video: "buyer" | "seller"; className: string; children: ReactNode }) {
  const [player, setPlayer] = useState<Player | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void loadLanding().then((data) => {
      const link = data?.[`${video}VideoUrl`];
      if (!cancelled && typeof link === "string" && link) setPlayer(playerFor(link));
    });
    return () => {
      cancelled = true;
    };
  }, [video]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  if (!player) return null;

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && (
        <div className={s.videoOverlay} role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className={s.videoFrame} onClick={(event) => event.stopPropagation()}>
            <button type="button" className={s.videoClose} aria-label="Close video" onClick={() => setOpen(false)}>
              ×
            </button>
            {player.kind === "iframe" ? (
              <iframe src={player.src} title="Taggy video" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            ) : (
              <video src={player.src} controls autoPlay playsInline />
            )}
          </div>
        </div>
      )}
    </>
  );
}
