export default function Guarantee() {
  return (
    <div
      className="mx-4 md:mx-10 grid gap-8 p-8 md:p-12"
      style={{
        background: "var(--surface)",
        border: "0.5px solid var(--border-gold)",
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0"
        style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
        aria-hidden
      >
        ✦
      </div>
      <div>
        <div
          className="text-2xl mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our guarantee
        </div>
        <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
          We guarantee that you will finish the counselling session as a confident non-drinker.
          If for some reason you remain unconvinced, we will refund you in full.
        </p>
      </div>
    </div>
  );
}
