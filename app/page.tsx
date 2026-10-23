import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { ListingService } from "./components/ListingService";
import { Newsletter } from "./components/Newsletter";
import { PreviewPass } from "./components/PreviewPass";
import { Quality } from "./components/Quality";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

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
