const steps = [
  { num: "1️⃣", label: "שולחים לנו פרטים" },
  { num: "2️⃣", label: "אנחנו מתאימים נני" },
  { num: "3️⃣", label: "מאשרים את ההתאמה" },
  { num: "4️⃣", label: "נהנים מהחופשה 🌴" },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <h2
          id="how-heading"
          className="text-center text-2xl font-bold text-ink sm:text-3xl"
        >
          איך זה עובד?
        </h2>

        <div className="mt-10 flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex w-full flex-col items-center">
              <div className="flex w-full max-w-sm items-center gap-4 rounded-3xl bg-white/80 px-7 py-5 shadow-card ring-1 ring-beige/60">
                <span aria-hidden="true" className="text-3xl">{step.num}</span>
                <span className="text-base font-medium text-ink sm:text-lg">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex h-10 w-10 items-center justify-center">
                  <span aria-hidden="true" className="text-2xl text-ink-light/50">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
