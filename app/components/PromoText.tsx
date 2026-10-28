import { WHATSAPP_BOOKING_URL } from "../site-config";

// Single source for the top banner copy: used by the header and the mobile menu.
// The whole line opens the same WhatsApp booking chat as the "Contact us to book" button.
export function PromoText() {
  return (
    <p>
      <a
        href={WHATSAPP_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        Want us to upload your items on your behalf? Book our{" "}
        <strong>listing service</strong> today.
      </a>
    </p>
  );
}
