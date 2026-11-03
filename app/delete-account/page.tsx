import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import s from "./delete-account.module.css";

export const metadata: Metadata = {
  title: "Delete Account — Taggy",
  description: "How to delete your Taggy account and the personal data linked to it.",
};

const SUPPORT_EMAIL = "hello@taggy.ae";

export default function DeleteAccountPage() {
  return (
    <>
      <SiteHeader />
      <main className={s.page}>
        <div className={s.inner}>
          <h1 className={s.title}>Delete Account</h1>

          <section className={s.block}>
            <h2 className={s.heading}>Delete it in the app</h2>
            <ol className={s.list}>
              <li>Open the Taggy app and sign in.</li>
              <li>Go to Profile, then Settings.</li>
              <li>Tap Delete account and confirm with your password (leave it empty if you signed up with Google or Apple).</li>
            </ol>
          </section>

          <section className={s.block}>
            <h2 className={s.heading}>What happens</h2>
            <p>
              Your Taggy account is closed permanently. Your listings are removed, you&apos;re
              signed out on every device, and your email, phone number, profile, likes and
              messages are erased and can&apos;t be recovered. Orders already in progress still
              complete, and past order records are kept without your personal details.
            </p>
          </section>

          <section className={s.block}>
            <h2 className={s.heading}>Can&apos;t open the app?</h2>
            <p>
              Send us a deletion request and we&apos;ll process it within 48 hours. Use the email
              or phone number linked to your Taggy account.
            </p>
            {/* No public API for this: the form opens the visitor's email app addressed to support. */}
            <form
              className={s.form}
              action={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Account deletion request")}`}
              method="post"
              encType="text/plain"
            >
              <label className={s.field}>
                Name
                <input className={s.input} type="text" name="name" autoComplete="name" required />
              </label>
              <label className={s.field}>
                Email
                <input className={s.input} type="email" name="email" autoComplete="email" required />
              </label>
              <label className={s.field}>
                Phone Number
                <input className={s.input} type="tel" name="phone" autoComplete="tel" required />
              </label>
              <label className={s.field}>
                Message
                <textarea
                  className={s.input}
                  name="message"
                  rows={4}
                  maxLength={1000}
                  placeholder="Please tell us why you want to delete your account"
                />
              </label>
              <button className={s.button} type="submit">
                Submit Delete Request
              </button>
            </form>
            <p className={s.note}>
              The button opens your email app. If it doesn&apos;t, email us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter showStoreBadges={false} />
    </>
  );
}
