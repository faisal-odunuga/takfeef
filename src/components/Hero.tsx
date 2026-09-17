import Image from "next/image";
import Link from "next/link";

const badges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 8.2-7 9-4-.8-7-4.5-7-9V7l7-4z"
          stroke="#c79a44"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Visa Handled End to End",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h18M12 3v18" stroke="#c79a44" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="#c79a44" strokeWidth="1.5" />
      </svg>
    ),
    label: "Accommodation Near Haram",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l1.8 5.6H20l-4.7 3.4 1.8 5.6-4.8-3.4-4.8 3.4 1.8-5.6L4.7 7.6h6.2z"
          stroke="#c79a44"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Spiritual Guidance Included",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#c79a44" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" stroke="#c79a44" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12v4M10 14h4" stroke="#c79a44" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Secure Payment Plans",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>
      {/* Background image */}
      <Image
        src="/images/kabah.jpg"
        alt="Al-Masjid al-Haram, Makkah — Ka'bah"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* Multi-layer dark overlay matching image.png style */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* Gold accent glow at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-1"
        style={{ background: "linear-gradient(to right, transparent, #c79a44, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[90vh] px-6 py-24">
        {/* Eyebrow */}
        <p
          className="animate-rise text-[0.9rem] tracking-widest uppercase mb-6 font-medium"
          style={{ color: "#e9d6a8", letterSpacing: "0.15em" }}
        >
          Umrah &amp; Hajj Journeys from Nigeria to the Haramain
        </p>

        {/* Main heading */}
        <h1
          className="animate-rise-delay-1 text-white leading-[1.06] mb-4"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(2.6rem, 6vw, 5rem)",
            maxWidth: "16ch",
            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          Guiding Your Steps to a{" "}
          <span style={{ color: "#c79a44" }}>Peaceful Hajj &amp; Umrah</span>
        </h1>

        {/* Sub-heading */}
        <p
          className="animate-rise-delay-2 text-[1.1rem] leading-relaxed mb-10 max-w-[52ch]"
          style={{ color: "#d0ddd3" }}
        >
          Experience comfort, clarity, and guidance throughout your spiritual trip with <b>Takfeef Travels</b>. Visa, flights,
          accommodation, and on-ground support — all handled from Ibadan to the Haram.
        </p>

        {/* CTA buttons */}
        <div className="animate-rise-delay-2 flex flex-wrap gap-4 justify-center mb-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-semibold text-[#0c3b2e] transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: "#c79a44", fontSize: "1rem" }}
          >
            Book Your Slot
          </Link>
          <a
            href="https://wa.me/2349022552931"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-semibold border-2 text-white transition-all hover:bg-white/10 active:scale-[0.98]"
            style={{ borderColor: "rgba(255,255,255,0.5)", fontSize: "1rem" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 21l1.4-4.2A8.5 8.5 0 1112 20.5c-1.4 0-2.7-.3-3.9-.9L3 21z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Trust badges — float over hero bottom (image.png style) */}
        <div className="animate-rise-delay-3 w-full max-w-4xl">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-lg overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2.5 py-5 px-4 transition-all hover:bg-white/10"
                style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(6px)" }}
              >
                {badge.icon}
                <span
                  className="text-[0.8rem] font-medium text-center leading-snug"
                  style={{ color: "#e9d6a8" }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Caption */}
        <p className="mt-5 text-[0.75rem] tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
          Al-Masjid al-Haram, Makkah al-Mukarramah
        </p>
      </div>
    </section>
  );
}
