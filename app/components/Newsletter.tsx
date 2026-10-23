"use client";

import { useState } from "react";
import s from "./landing.module.css";

type NewsletterProps = {
  description?: string;
  buttonLabel?: string;
};

export function Newsletter({
  description = "Get first look at standout pieces, new arrivals and Taggy offers worth knowing about.",
  buttonLabel = "Unlock access",
}: NewsletterProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className={s.newsletter}>
      <div className={s.newsletterInner}>
        <div className={s.newsletterText}>
          <h2 className={s.h2Medium}>Be kept up to date.</h2>
          <p className={s.body16}>{description}</p>
        </div>
        <form
          className={s.newsletterForm}
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
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
            <button className={s.buttonUnlock} type="submit">
              {buttonLabel}
            </button>
          </div>
          <p className={s.note} aria-live="polite">
            {submitted
              ? "Thanks — you're on the list."
              : "Your data is protected. We never spam in your inbox"}
          </p>
        </form>
      </div>
    </section>
  );
}
