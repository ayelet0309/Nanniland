const cards = [
  {
    icon: "❤️",
    title: "אהבה אמיתית לילדים",
    intro: "לא רק ניסיון.",
    subtitle: "אנחנו מחפשים נניות עם:",
    items: ["• חום", "• סבלנות", "• הקשבה", "• חיבור אמיתי לילדים"],
  },
  {
    icon: "🛡️",
    title: "בטיחות מעל הכול",
    subtitle: "כל נני עוברת:",
    items: [
      "✔ ראיון אישי",
      "✔ בדיקת מסמכים",
      "✔ הכשרות",
      "✔ תהליך סינון קפדני",
    ],
  },
  {
    icon: "🤍",
    title: "אמינות ושקיפות",
    body: "תדעו בדיוק מי מגיע אליכם.\nאנחנו מלווים אתכם לאורך כל הדרך.",
  },
  {
    icon: "🌴",
    title: "הרבה יותר מנני",
    intro: "נני טובה היא הרבה יותר ממטפלת. היא מעניקה:",
    items: ["🤍 ביטחון", "🤍 משחק", "🤍 אהבה", "🤍 חום"],
    footer: "ומאפשרת להורים ליהנות באמת מהחופשה.",
  },
];

export default function Highlights() {
  return (
    <section aria-labelledby="highlights-heading" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2
          id="highlights-heading"
          className="text-center text-2xl font-bold text-ink sm:text-3xl"
        >
          למה Nanniland?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-base leading-relaxed text-ink-light sm:text-lg">
          כי כשמדובר בילדים שלכם —<br />אין מקום לפשרות.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 rounded-3xl bg-white/80 p-7 shadow-card ring-1 ring-beige/60 transition-transform duration-200 hover:-translate-y-1 sm:p-8"
            >
              <span aria-hidden="true" className="text-4xl">
                {card.icon}
              </span>
              <h3 className="text-lg font-bold text-ink">{card.title}</h3>

              {"intro" in card && card.intro && (
                <p className="text-sm leading-relaxed text-ink-light">{card.intro}</p>
              )}

              {"subtitle" in card && card.subtitle && (
                <p className="text-sm font-medium text-ink">{card.subtitle}</p>
              )}

              {"items" in card && card.items && (
                <ul className="space-y-1">
                  {card.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {"body" in card && card.body && (
                <p className="whitespace-pre-line text-sm leading-relaxed text-ink-light">
                  {card.body}
                </p>
              )}

              {"footer" in card && card.footer && (
                <p className="mt-auto text-sm leading-relaxed text-ink-light">
                  {card.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
