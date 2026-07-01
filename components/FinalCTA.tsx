import Image from "next/image";
import CTAButton from "./CTAButton";

type FinalCTAProps = {
  ctaHref?: string;
  ctaLabel?: string;
  ctaSubtitle?: string;
};

export default function FinalCTA({
  ctaHref,
  ctaLabel = "הזמנת נני",
  ctaSubtitle,
}: FinalCTAProps) {
  return (
    <section aria-labelledby="final-cta-heading" className="section-padding">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl shadow-soft">
        <div className="absolute inset-0">
          <Image
            src="/images/nanny-reading-beach.jpg"
            alt="נני קוראת ספר עם ילד על חוף הים"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/10" />
        </div>

        <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2
            id="final-cta-heading"
            className="mx-auto max-w-2xl text-2xl font-bold leading-relaxed text-cream sm:text-3xl"
          >
            לאחר קבלת הפרטים נשלח לכם את האפשרויות המתאימות ביותר.
          </h2>
          <div className="mt-8 flex justify-center">
            <CTAButton label={ctaLabel} subtitle={ctaSubtitle} href={ctaHref} />
          </div>
        </div>
      </div>
    </section>
  );
}
