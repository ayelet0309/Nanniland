import type { Metadata } from "next";
import InstagramHero from "@/components/InstagramHero";
import Highlights from "@/components/Highlights";
import MatchingChecklist from "@/components/MatchingChecklist";
import Pricing from "@/components/Pricing";
import PaymentAndPolicy from "@/components/PaymentAndPolicy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { INSTAGRAM_CTA_URL, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function InstagramPage() {
  return (
    <main>
      <InstagramHero />
      <Highlights />
      <MatchingChecklist
        imageSrc="/images/instagram-matching.jpg"
        imageAlt="נני מטפלת בתינוק על חוף הים בקוסמוי"
        debugLabel="instagram-matching.jpg"
      />
      <Pricing
        ctaHref={INSTAGRAM_CTA_URL}
        ctaLabel="NANNILAND"
        ctaSubtitle="להרשמה"
      />
      <PaymentAndPolicy />
      <FinalCTA
        ctaHref={INSTAGRAM_CTA_URL}
        ctaLabel="NANNILAND"
        ctaSubtitle="להרשמה"
      />
      <Footer />
    </main>
  );
}
