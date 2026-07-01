import Image from "next/image";
import CTAButton from "./CTAButton";
import { INSTAGRAM_CTA_URL } from "@/lib/constants";

export default function InstagramHero() {
  return (
    <section
      aria-labelledby="instagram-hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-cream to-cream"
    >
      <div className="relative mx-auto flex max-w-md flex-col items-center px-6 pb-14 pt-14 text-center sm:max-w-lg sm:pb-20 sm:pt-20">
        <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-soft ring-4 ring-white sm:h-32 sm:w-32">
          <Image
            src="/images/instagram-hero.jpg"
            alt="ילדים ומשפחה נהנים על חוף ים בקוסמוי"
            fill
            priority
            sizes="128px"
            className="object-cover"
          />
        </div>

        <h1
          id="instagram-hero-heading"
          className="mt-7 text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
        >
          תהנו מהחופשה.
          <br />
          אנחנו כאן בשבילכם 💛
        </h1>

        <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-light sm:text-xl">
          שירותי נני מקצועיות, חמות ואוהבות לילדים בקוסמוי — בהתאמה אישית
          למשפחה שלכם.
        </p>

        <div className="mt-8">
          <CTAButton
            label="🌴 NANNILAND"
            subtitle="הזמנת נני"
            href={INSTAGRAM_CTA_URL}
          />
        </div>

        <div className="absolute -bottom-8 -right-10 hidden h-32 w-32 rounded-full bg-sage/30 blur-2xl sm:block" />
        <div className="absolute -left-10 -top-10 hidden h-32 w-32 rounded-full bg-gold/20 blur-2xl sm:block" />
      </div>
    </section>
  );
}
