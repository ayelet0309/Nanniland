import Payment from "./Payment";
import CancellationPolicy from "./CancellationPolicy";

export default function PaymentAndPolicy() {
  return (
    <section aria-label="תשלום ומדיניות ביטולים" className="section-padding">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        <Payment />
        <CancellationPolicy />
      </div>
    </section>
  );
}
