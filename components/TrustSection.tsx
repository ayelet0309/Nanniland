const cards = [
  { icon: "👶", text: "התאמה אישית לכל משפחה" },
  { icon: "🛡️", text: "נניות שעוברות תהליך סינון" },
  { icon: "🏡", text: "מגיעות עד המלון או הווילה" },
  { icon: "💬", text: "ליווי אישי לאורך כל הדרך" },
];

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="section-padding bg-blush/20">
      <div className="mx-auto max-w-5xl">
        <h2
          id="trust-heading"
          className="text-center text-2xl font-bold text-ink sm:text-3xl"
        >
          למה לבחור ב־Nanniland?
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.text}
              className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 p-7 text-center shadow-card ring-1 ring-beige/60 transition-transform duration-200 hover:-translate-y-1"
            >
              <span aria-hidden="true" className="text-4xl">{card.icon}</span>
              <p className="text-base font-medium leading-relaxed text-ink">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
