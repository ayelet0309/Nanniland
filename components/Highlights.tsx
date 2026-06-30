const highlights = [
  {
    icon: "📍",
    text: "השירות ניתן בקוסמוי בלבד",
  },
  {
    icon: "🏡",
    text: "הנניות מגיעות עד אליכם — לוילה או למלון",
  },
  {
    icon: "👶",
    text: "השירות מתאים לתינוקות וילדים",
  },
  {
    icon: "✨",
    text: "מתאים לחופשות משפחתיות, זמן זוגי להורים או ליווי במהלך היום והערב",
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
          למה Nanniland
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <li
              key={item.text}
              className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 p-7 text-center shadow-card ring-1 ring-beige/60 transition-transform duration-200 hover:-translate-y-1"
            >
              <span aria-hidden="true" className="text-4xl">
                {item.icon}
              </span>
              <p className="text-base font-medium leading-relaxed text-ink">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
