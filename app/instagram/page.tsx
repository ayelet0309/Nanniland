import type { Metadata } from "next";
import InstagramHero from "@/components/InstagramHero";
import InstagramWhyNanniland from "@/components/InstagramWhyNanniland";
import InstagramMatchingGuarantee from "@/components/InstagramMatchingGuarantee";
import InstagramOurGoal from "@/components/InstagramOurGoal";
import InstagramInfoNeeded from "@/components/InstagramInfoNeeded";
import InstagramPricing from "@/components/InstagramPricing";
import InstagramPayment from "@/components/InstagramPayment";
import InstagramCancellation from "@/components/InstagramCancellation";
import InstagramFinalCTA from "@/components/InstagramFinalCTA";
import InstagramStickyCTA from "@/components/InstagramStickyCTA";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function InstagramPage() {
  return (
    <main>
      <InstagramHero />
      <InstagramWhyNanniland />
      <InstagramMatchingGuarantee />
      <InstagramOurGoal />
      <InstagramInfoNeeded />
      <InstagramPricing />
      <InstagramPayment />
      <InstagramCancellation />
      <InstagramFinalCTA />
      <InstagramStickyCTA />
    </main>
  );
}
