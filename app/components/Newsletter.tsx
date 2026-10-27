"use client";

import { useState } from "react";
import s from "./landing.module.css";

// Public Taggy API, set per environment at build time (see .env.example).
// Sign-ups land under Content > Newsletter in the admin panel.
const API_URL = process.env.NEXT_PUBLIC_API_URL;

type NewsletterProps = {
  description?: string;
  buttonLabel?: string;
};

export function Newsletter({
  description = "Be the first to discover standout pieces, curated drops and Taggy offers.",
  buttonLabel = "Unlock access",
}: NewsletterProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function subscribe(email: string) {
    if (!API_URL) {
      console.error("NEXT_PUBLIC_API_URL is not set: newsletter sign-ups cannot be sent.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={s.newsletter}>
      <div className={s.newsletterInner}>
        <div className={s.newsletterText}>
          <h2 className={s.h2Medium}>Get First Access</h2>
          <p className={s.body16}>{description}</p>
        </div>
        <form
          className={s.newsletterForm}
          onSubmit={(event) => {
            event.preventDefault();
            const email = new FormData(event.currentTarget).get("email");
            if (typeof email === "string" && status !== "sending") void subscribe(email.trim());
          }}
        >
          <div className={s.formRow}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              className={s.input}
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              autoComplete="email"
            />
            <button className={s.buttonUnlock} type="submit" disabled={status === "sending"}>
              {buttonLabel}
            </button>
          </div>
          <p className={s.note} aria-live="polite">
            {status === "done"
              ? "Thanks — check your inbox to confirm your subscription."
              : status === "error"
                ? "Something went wrong. Please try again."
                : "Your data is protected. We never spam your inbox"}
          </p>
        </form>
      </div>
    </section>
  );
}
