export default function Hero() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 min-h-[88vh] border-b relative bg-cover bg-center bg-no-repeat"
      style={{
        borderColor: "var(--border)",
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(10, 9, 7, 0.35)" }} />

      {/* Left */}
      <div
        className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-20 relative z-10 border-b md:border-b-0 md:border-r"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-6"
          style={{ color: "var(--gold)" }}
        >
          The most effective method to regain control
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--text)" }}
        >
          Stop problem drinking<br />
          <em style={{ color: "var(--gold)" }}>in one session</em>
          <br />
          guaranteed!
        </h1>
        <p className="text-base mb-10 max-w-md" style={{ color: "var(--text-muted)" }}>
          Stop Now is a revolutionary new service. Our counselling session will allow you to stop drinking without difficulty — we work with you to change your beliefs about alcohol. This is a painless and easy way to be free of alcohol addiction, in one counselling session.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/447404437994"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-sm font-medium tracking-wide px-8 py-3 rounded-full no-underline"
            style={{ background: "#25D366" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Right — client quote */}
      <div className="flex items-center justify-center p-10 relative z-10 min-h-[240px]">
        <blockquote className="max-w-sm text-center">
          <p
            className="text-2xl md:text-3xl italic leading-relaxed"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            "The session was a revelation. I haven't drunk alcohol since then, and I don't miss it at all!" — Client
          </p>
        </blockquote>
      </div>
    </section>
  );
}
