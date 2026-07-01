export default function SpecialSection() {
  return (
    <section aria-labelledby="special-heading" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-4xl bg-blush/40 p-8 ring-1 ring-blush/60 sm:p-12">
          <h2
            id="special-heading"
            className="text-center text-2xl font-bold text-ink sm:text-3xl"
          >
            💛 ומה אם אין חיבור?
          </h2>

          <div className="mt-7 space-y-4 text-center text-base leading-relaxed text-ink-light sm:text-lg">
            <p>
              לפעמים,
              <br />
              למרות כל הרצון הטוב,
              <br />
              {`פשוט אין את ה"קליק".`}
            </p>
            <p className="font-medium text-ink">וזה בסדר.</p>
            <p>
              לכל משפחה יש אופי אחר.
              <br />
              לכל נני יש אישיות אחרת.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-3xl bg-white/70 p-6 text-center ring-1 ring-beige/50 sm:p-8">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              אם במהלך{" "}
              <span className="font-bold">48 השעות הראשונות</span> תרגישו שאין
              התאמה, נעשה את מירב המאמצים למצוא נני אחרת.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-light sm:text-lg">
              אם לא תימצא התאמה —
              <br />
              <span className="font-medium text-ink">דמי התיווך יוחזרו.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
