const features = [
  "We offer a half-day one-to-one counselling session conducted online via video",
  "The session is tailored to your circumstances and specific to you",
  "We offer a full money-back guarantee if you do not end the session as a confident non-drinker",
  "Our follow-up includes a summary of our beliefs, and the key points from the session by email",
  "We are a global service and can adjust our timing to suit most time zones",
  "We are 100% confidential and require no personal details from you",
  "Sessions conducted in English",
  "We use Paypal for our invoices. Pay in any currency",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="px-5 md:px-10 py-20 border-t border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <p
        className="text-xs tracking-widest uppercase mb-4"
        style={{ color: "var(--gold)" }}
      >
        Pricing
      </p>
      <h2
        className="text-3xl md:text-4xl leading-tight mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Simple, transparent pricing
      </h2>

      <div
        className="max-w-lg p-6 md:p-12"
        style={{
          border: "0.5px solid var(--border-gold)",
          background: "var(--surface)",
        }}
      >
        <div className="line-through text-lg mb-1" style={{ color: "var(--text-faint)" }}>
          £499
        </div>
        <div
          className="text-6xl leading-none mb-2"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)" }}
        >
          £249
        </div>
        <p className="text-sm tracking-wide mb-8" style={{ color: "var(--text-muted)" }}>
          50% introductory offer · Pay via PayPal
        </p>

        <ul className="list-none mb-10">
          {features.map((f) => (
            <li
              key={f}
              className="flex gap-3 items-start py-2 text-sm border-b"
              style={{
                borderColor: "rgba(232,228,216,0.07)",
                color: "rgba(232,228,216,0.68)",
              }}
            >
              <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }}>✦</span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/447404437994"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white text-sm font-medium tracking-wide px-8 py-3 no-underline"
          style={{ background: "#25D366" }}
        >
          Message us to book →
        </a>
      </div>
    </section>
  );
}
