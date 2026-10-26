// Set to true to bring the Blogs page back (nav link and /blogs routes).
export const SHOW_BLOGS = false;

// WhatsApp chat for "Contact us to Book Now" (international format, digits only).
export const WHATSAPP_NUMBER = "971521757092";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_BOOKING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Taggy, I'd like to book your listing service.",
)}`;
