const points = [
  "הילדים מרגישים בטוחים",
  "ההורים יכולים באמת להירגע",
  "הנני מגיעה עם חיוך",
];

export default function SuccessSection() {
  return (
    <section aria-labelledby="success-heading" className="section-padding bg-sage/10">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="success-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          🌿 כשיש התאמה טובה...
        </h2>

        <ul className="mt-10 space-y-4">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center justify-center gap-3 rounded-3xl bg-white/80 px-7 py-5 shadow-card ring-1 ring-beige/60"
            >
              <span aria-hidden="true" className="text-2xl">🤍</span>
              <span className="text-base font-medium leading-relaxed text-ink sm:text-lg">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-md text-base leading-loose text-ink-light sm:text-lg">
          אנחנו מלווים אתכם לאורך כל התהליך,
          <br />
          כדי שהחוויה שלכם בקוסמוי תהיה רגועה,
          <br />
          נעימה,
          <br />
          ומלאת רגעים טובים.
        </p>
      </div>
    </section>
  );
}
