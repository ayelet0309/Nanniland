import Image from "next/image";

const items = [
  "תאריכי החופשה",
  "שעות מבוקשות בכל יום",
  "גילאי הילדים",
  "אזור השהייה בקוסמוי",
  "שפה מועדפת: עברית / אנגלית",
  "סדר יום / הרגלים חשובים",
  "רגישויות או צרכים מיוחדים",
  "האם נדרש ליווי לבריכה / ים",
];

type MatchingChecklistProps = {
  imageSrc?: string;
  imageAlt?: string;
  debugLabel?: string;
};

export default function MatchingChecklist({
  imageSrc = "/images/nanny-toddler-beach.jpg",
  imageAlt = "נני מטפלת בתינוק על חוף הים בקוסמוי",
  debugLabel,
}: MatchingChecklistProps) {
  return (
    <section
      aria-labelledby="checklist-heading"
      className="section-padding bg-sage/10"
    >
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rounded-4xl bg-white/80 p-7 shadow-card ring-1 ring-beige/60 sm:p-10">
          <h2
            id="checklist-heading"
            className="text-center text-2xl font-bold leading-relaxed text-ink sm:text-3xl lg:text-right"
          >
            כדי שנוכל לבצע התאמה אישית מדויקת, נשמח לקבל:
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-sage/10 p-4 text-ink"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage-dark text-sm text-white"
                >
                  ✓
                </span>
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {debugLabel ? (
          /* TEMP DEBUG LABEL wrapper — only rendered when debugLabel is passed (instagram only) */
          <div>
            <div className="relative hidden aspect-[4/5] overflow-hidden rounded-4xl shadow-soft lg:block">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
            <p className="hidden mt-2 text-center font-mono text-[11px] text-ink-light/60 lg:block">
              {debugLabel}
            </p>
          </div>
        ) : (
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-4xl shadow-soft lg:block">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
