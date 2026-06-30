import CTAButton from "./CTAButton";

const priceItems = [
  "250–350 באט לשעה, בהתאם לנני",
  "עמלת תיווך והתאמה: 250₪",
  "מינימום הזמנה: 5 שעות ביום",
  "יום עבודה ארוך: 8 שעות",
  "ביום של 8 שעות תינתן הפסקה של 30 דקות לארוחת צהריים",
];

type PricingProps = {
  ctaHref?: string;
  ctaLabel?: string;
  ctaSubtitle?: string;
};

export default function Pricing({
  ctaHref,
  ctaLabel = "להרשמה",
  ctaSubtitle,
}: PricingProps) {
  return (
    <section aria-labelledby="pricing-heading" className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-4xl bg-gradient-to-br from-gold/15 via-blush/30 to-sage/15 p-1 shadow-soft">
          <div className="rounded-4xl bg-white/90 p-7 sm:p-10">
            <h2
              id="pricing-heading"
              className="text-2xl font-bold text-ink sm:text-3xl"
            >
              💰 עלויות
            </h2>
            <ul className="mx-auto mt-7 max-w-xl space-y-4 text-right">
              {priceItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-gold/10 p-4 text-base leading-relaxed text-ink sm:text-lg"
                >
                  <span aria-hidden="true" className="text-xl">
                    🪙
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-9 flex justify-center">
          <CTAButton label={ctaLabel} subtitle={ctaSubtitle} href={ctaHref} />
        </div>
      </div>
    </section>
  );
}
