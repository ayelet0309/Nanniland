import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-cream to-cream"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-12 sm:px-10 sm:pb-20 sm:pt-16 md:grid-cols-2 md:items-center md:gap-12 lg:py-24">
        <div className="text-center md:text-right">
          <p className="text-2xl">היי 🌸</p>
          <h1
            id="hero-heading"
            className="mt-2 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            ברוכים הבאים ל־Nanniland
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-light sm:text-xl md:mx-0">
            אנחנו מציעים שירותי נני מקצועיות, חמות ואוהבות ילדים — שיהפכו את
            החופשה שלכם בקוסמוי לחוויה רגועה, נעימה ומותאמת בדיוק לצרכים שלכם
            💛
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <CTAButton label="הרשמה ל־Nanniland" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft">
            <Image
              src="/images/hero-beach-family.jpg"
              alt="ילדים ומשפחה נהנים על חוף ים בקוסמוי"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-full bg-sage/40 blur-2xl sm:block" />
          <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-full bg-gold/20 blur-2xl sm:block" />
        </div>
      </div>
    </section>
  );
}
