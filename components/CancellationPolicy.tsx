const policies = [
  "ביטול עד 48 שעות מראש — החזר מלא",
  "ביטול בפחות מ־48 שעות — חיוב של 50% מסכום ההזמנה",
];

export default function CancellationPolicy() {
  return (
    <div className="rounded-3xl bg-white/80 p-7 shadow-card ring-1 ring-beige/60 sm:p-8">
      <h2 className="text-xl font-bold text-ink sm:text-2xl">
        📅 מדיניות ביטולים
      </h2>
      <ul className="mt-5 space-y-3">
        {policies.map((policy) => (
          <li
            key={policy}
            className="flex items-start gap-3 rounded-2xl bg-sage/10 p-4 text-base leading-relaxed text-ink"
          >
            <span aria-hidden="true" className="text-lg">
              •
            </span>
            {policy}
          </li>
        ))}
      </ul>
    </div>
  );
}
