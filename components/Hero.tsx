import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-cream to-cream"
    >
      {/* Full-width hero banner */}
      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-8">
        <div className="relative aspect-[16/7] overflow-hidden rounded-4xl shadow-soft sm:aspect-[21/8]">
          <Image
            src="/images/hero-beach-family.jpg"
            alt="משפחה נהנית על חוף ים בקוסמוי"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-center"
          />
          {/* Soft bottom fade into page */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream/70 to-transparent" />
        </div>
      </div>

      {/* Text + CTA */}
      <div className="mx-auto max-w-4xl px-6 pb-14 pt-10 text-center sm:pb-20 sm:pt-12">
        <p className="text-2xl">היי 🌸</p>
        <h1
          id="hero-heading"
          className="mt-2 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
        >
          ברוכים הבאים ל־Nanniland
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-light sm:text-xl">
          אנחנו מציעים שירותי נני מקצועיות, חמות ואוהבות ילדים — שיהפכו את
          החופשה שלכם בקוסמוי לחוויה רגועה, נעימה ומותאמת בדיוק לצרכים שלכם 💛
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton label="הזמנת נני" />
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -bottom-8 -right-10 hidden h-40 w-40 rounded-full bg-sage/20 blur-3xl sm:block" />
      <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-gold/15 blur-3xl sm:block" />
    </section>
  );
}
