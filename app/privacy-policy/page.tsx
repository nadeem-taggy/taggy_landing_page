import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import s from "../delete-account/delete-account.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Taggy",
  description: "What personal information Taggy collects, how it's used and your rights.",
};

const CONTACT_EMAIL = "hello@taggy.ae";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className={s.page}>
        <div className={s.inner}>
          <h1 className={s.title}>Privacy Policy</h1>

          <section className={s.block}>
            <h2 className={s.heading}>1. Who we are</h2>
            <p>
              <strong>Taggy FZC</strong> trading as Taggy, UAE. Contact:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </section>

          <section className={s.block}>
            <h2 className={s.heading}>2. Information we collect</h2>
            <h3>Information you provide</h3>
            <ul className={s.bullets}>
              <li>Account details (name, email, phone)</li>
              <li>Delivery address</li>
              <li>Payment &amp; order history</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul className={s.bullets}>
              <li>Device &amp; usage data (IP, app version, logs)</li>
              <li>Cookies &amp; tracking technologies</li>
            </ul>
          </section>

          <section className={s.block}>
            <h2 className={s.heading}>3. How we use information</h2>
            <ul className={s.bullets}>
              <li>Provide and improve services</li>
              <li>Process orders and payments</li>
              <li>Detect fraud and security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className={s.block}>
            <h2 className={s.heading}>4. Sharing of information</h2>
            <p>
              We share information with service providers (delivery, payment, analytics). We do not
              sell your personal information.
            </p>
          </section>

          <section className={s.block}>
            <h2 className={s.heading}>5. Your rights</h2>
            <p>
              You may request access, correction, or deletion of your data. Contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or see{" "}
              <Link href="/delete-account">how to delete your account</Link>.
            </p>
          </section>

          <section className={s.block}>
            <h2 className={s.heading}>6. Contact</h2>
            <address>
              <strong>Taggy FZC</strong>, UAE
              <br />
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </address>
          </section>
        </div>
      </main>
      <SiteFooter showStoreBadges={false} />
    </>
  );
}
