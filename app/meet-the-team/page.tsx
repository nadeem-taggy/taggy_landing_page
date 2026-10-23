import type { Metadata } from "next";
import { Newsletter } from "../components/Newsletter";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Community, PeopleBehindTaggy, TeamHero, TechTeam, Values } from "./sections";

export const metadata: Metadata = {
  title: "Taggy — Meet the Team",
  description:
    "Our team is at the heart of everything we do, from supporting our community to helping Taggy grow.",
};

export default function MeetTheTeamPage() {
  return (
    <>
      <SiteHeader active="Meet the Team" />
      <main>
        <TeamHero />
        <Values />
        <PeopleBehindTaggy />
        <TechTeam />
        <Community />
        <Newsletter
          description="For all our updates provide your contact details."
          buttonLabel="Update me!"
        />
      </main>
      <SiteFooter />
    </>
  );
}
