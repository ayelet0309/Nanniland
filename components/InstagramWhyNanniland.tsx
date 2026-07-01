const safetyChecks = ["ראיון אישי", "בדיקת מסמכים", "הכשרות", "סינון קפדני"];
const heartChips = ["🤍 ביטחון", "🤍 משחק", "🤍 חום", "🤍 אהבה"];
const goalChips = [
  "🤍 הילדים מרגישים בטוחים",
  "🤍 ההורים יכולים להירגע",
  "🤍 הנני מגיעה עם חיוך",
];

export default function InstagramWhyNanniland() {
  return (
    <>
      {/* ── Section A: Compact 2×2 cards ── */}
      <section aria-labelledby="insta-why-heading" className="section-padding">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2
              id="insta-why-heading"
              className="text-2xl font-bold text-ink sm:text-3xl"
            >
              למה Nanniland?
            </h2>
            <p className="mt-2 text-base leading-relaxed text-ink-light sm:text-lg">
              כי כשמדובר בילדים שלכם —<br />אין מקום לפשרות.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            {/* Card 1 — Love */}
            <div className="flex flex-col gap-2 rounded-2xl bg-blush/40 p-4 ring-1 ring-beige/40 sm:p-5">
              <span aria-hidden="true" className="text-3xl leading-none">❤️</span>
              <h3 className="text-sm font-bold leading-snug text-ink sm:text-base">
                אהבה אמיתית לילדים
              </h3>
              <p className="text-xs leading-relaxed text-ink-light sm:text-sm">
                לא רק ניסיון.<br />
                חום, סבלנות, ויכולת ליצור חיבור אמיתי לילדים.
              </p>
            </div>

            {/* Card 2 — Safety */}
            <div className="flex flex-col gap-2 rounded-2xl bg-sage/20 p-4 ring-1 ring-beige/40 sm:p-5">
              <span aria-hidden="true" className="text-3xl leading-none">🛡️</span>
              <h3 className="text-sm font-bold leading-snug text-ink sm:text-base">
                בטיחות מעל הכול
              </h3>
              <p className="text-xs font-medium text-ink sm:text-sm">כל נני עוברת:</p>
              <ul className="space-y-0.5">
                {safetyChecks.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-xs leading-relaxed text-ink-light sm:text-sm"
                  >
                    <span className="text-sage-dark font-medium">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 — Transparency */}
            <div className="flex flex-col gap-2 rounded-2xl bg-white/80 p-4 ring-1 ring-beige/40 sm:p-5">
              <span aria-hidden="true" className="text-3xl leading-none">🤍</span>
              <h3 className="text-sm font-bold leading-snug text-ink sm:text-base">
                אמינות ושקיפות
              </h3>
              <p className="text-xs leading-relaxed text-ink-light sm:text-sm">
                חשוב לנו שתדעו בדיוק מי מגיע למשפחה שלכם.<br />
                אנחנו מלווים אתכם לאורך כל הדרך.
              </p>
            </div>

            {/* Card 4 — More than a nanny */}
            <div className="flex flex-col gap-2 rounded-2xl bg-gold/10 p-4 ring-1 ring-beige/40 sm:p-5">
              <span aria-hidden="true" className="text-3xl leading-none">🌴</span>
              <h3 className="text-sm font-bold leading-snug text-ink sm:text-base">
                הרבה יותר מנני
              </h3>
              <p className="text-xs text-ink-light sm:text-sm">נני טובה מעניקה:</p>
              <div className="flex flex-wrap gap-1">
                {heartChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white/70 px-2 py-0.5 text-xs text-ink"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p className="text-xs leading-relaxed text-ink-light sm:text-sm">
                ומאפשרת להורים ליהנות באמת מהחופשה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section B: No-connection guarantee (blush) ── */}
      <section
        aria-labelledby="insta-noconnect-heading"
        className="section-padding bg-blush/30"
      >
        <div className="mx-auto max-w-lg text-center">
          <h2
            id="insta-noconnect-heading"
            className="text-xl font-bold text-ink sm:text-2xl"
          >
            💛 מה קורה כשאין חיבור?
          </h2>

          <div className="mt-6 space-y-4 text-base leading-loose text-ink-light sm:text-lg">
            <p>
              לפעמים,<br />
              למרות כל הרצון הטוב,<br />
              {`פשוט אין את ה"קליק".`}
            </p>
            <p className="font-semibold text-ink">וזה בסדר.</p>
            <p>
              חיבור בין משפחה לנני הוא אישי מאוד.<br />
              לכל משפחה יש את הקצב שלה.<br />
              לכל נני יש את האישיות שלה.
            </p>
          </div>

          {/* Guarantee card */}
          <div className="mx-auto mt-7 max-w-md rounded-2xl bg-white/60 p-5 text-right ring-1 ring-beige/40">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              אם במהלך{" "}
              <span className="font-bold">48 השעות הראשונות</span> תרגישו שאין
              התאמה, נעשה את מירב המאמצים למצוא נני אחרת.
            </p>
            <div className="mt-4 border-r-[3px] border-gold pr-4">
              <p className="text-base leading-relaxed text-ink-light sm:text-lg">
                אם לא נמצא התאמה טובה יותר —
              </p>
              <p className="mt-1 text-base font-bold text-ink sm:text-lg">
                דמי התיווך יוחזרו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section C: Our goal (sage) ── */}
      <section
        aria-labelledby="insta-goal-heading"
        className="section-padding bg-sage/10"
      >
        <div className="mx-auto max-w-lg text-center">
          <h2
            id="insta-goal-heading"
            className="text-xl font-bold text-ink sm:text-2xl"
          >
            🌴 המטרה שלנו
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink sm:text-lg">
            אנחנו לא רק מחפשים נני.
            <br />
            אנחנו מחפשים את הנני הנכונה עבור המשפחה שלכם.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2 sm:gap-3">
            {goalChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-ink ring-1 ring-beige/60 sm:px-5 sm:text-base"
              >
                {chip}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-sm text-base leading-loose text-ink-light sm:text-lg">
            אנחנו מלווים אתכם לאורך כל הדרך,<br />
            כדי שהחוויה שלכם בקוסמוי תהיה רגועה,<br />
            נעימה,<br />
            ומלאת רגעים טובים.
          </p>
        </div>
      </section>
    </>
  );
}
