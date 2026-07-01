const methods = ["ביט"];

export default function Payment() {
  return (
    <div className="rounded-3xl bg-white/80 p-7 shadow-card ring-1 ring-beige/60 sm:p-8">
      <h2 className="text-xl font-bold text-ink sm:text-2xl">
        💳 אמצעי תשלום
      </h2>
      <ul className="mt-5 space-y-3">
        {methods.map((method) => (
          <li
            key={method}
            className="flex items-center gap-3 rounded-2xl bg-blush/30 p-4 text-base font-medium text-ink"
          >
            <span aria-hidden="true" className="text-lg">
              ✔️
            </span>
            {method}
          </li>
        ))}
      </ul>
      <p className="mt-6 rounded-2xl bg-sand/60 p-4 text-sm leading-relaxed text-ink-light sm:text-base">
        השיבוץ מתבצע לאחר קבלת התשלום.
      </p>
    </div>
  );
}
