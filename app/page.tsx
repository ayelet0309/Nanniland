import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import MatchingChecklist from "@/components/MatchingChecklist";
import SpecialSection from "@/components/SpecialSection";
import SuccessSection from "@/components/SuccessSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import Pricing from "@/components/Pricing";
import PaymentAndPolicy from "@/components/PaymentAndPolicy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <MatchingChecklist />
      <SpecialSection />
      <SuccessSection />
      <HowItWorks />
      <TrustSection />
      <Pricing />
      <PaymentAndPolicy />
      <FinalCTA />
      <Footer />
    </main>
  );
}
