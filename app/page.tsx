import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { ListingService } from "./components/ListingService";
import { Newsletter } from "./components/Newsletter";
import { PreviewPass } from "./components/PreviewPass";
import { Quality } from "./components/Quality";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taggy – Your Style Companion",
  openGraph: {
    type: "website",
    url: "https://taggy.ae/",
    title: "Taggy",
    description: "The app for circular shopping and selling.",
    images: [{ url: "https://taggy.ae/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Newsletter />
        <Quality />
        <ListingService />
        <About />
        <PreviewPass />
      </main>
      <SiteFooter />
    </>
  );
}
