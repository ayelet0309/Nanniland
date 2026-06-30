import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import MatchingChecklist from "@/components/MatchingChecklist";
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
      <Pricing />
      <PaymentAndPolicy />
      <FinalCTA />
      <Footer />
    </main>
  );
}
