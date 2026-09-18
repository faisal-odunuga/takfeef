const features = [
  {
    title: "Visa",
    desc: "Multiple-entry Umrah visas processed and confirmed before you travel.",
  },
  {
    title: "Flight",
    desc: "Return flights booked with reliable carriers into Jeddah or Madinah.",
  },
  {
    title: "Hotel",
    desc: "Accommodation within walking distance of the Haram in both cities.",
  },
  {
    title: "Transportation",
    desc: "Ground transport between airport, hotel, and holy sites throughout your stay.",
  },
  {
    title: "Ziyārah",
    desc: "Guided visitation to the historical and spiritually significant sites.",
  },
  {
    title: "Spiritual Guidance",
    desc: "A guide with you at each stage of the rites, so nothing is missed.",
  },
];

const callouts = [
  {
    title: "Installment payment available",
    desc: "Spread the cost of your package across manageable installments — ask our team for current terms.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 1v22M1 12h22" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Free Umrah gift package",
    desc: "Ihram, hijab, water bottle, and a Takfeef travel bag — included for the first ten registrants.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M20 7l-9 9-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section
      className="py-22 border-t border-b"
      style={{ background: "#fff", borderColor: "#dcd3bf" }}
    >
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span
            className="block text-[1rem] mb-2.5"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              color: "#034494",
            }}
          >
            Why pilgrims choose Takfeef
          </span>
          <h2
            className="text-[clamp(1.7rem,2.6vw,2.3rem)] leading-[1.18]"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#034494" }}
          >
            Everything handled, so you can focus on worship
          </h2>
        </div>

        {/* Feature grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mb-6"
          style={{ background: "#dcd3bf", border: "1px solid #dcd3bf" }}
        >
          {features.map((f, i) => (
            <div key={i} className="p-8" style={{ background: "#fff" }}>
              <div
                className="text-[0.82rem] mb-3.5"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  color: "#c79a44",
                }}
              >
                0{i + 1}
              </div>
              <h3
                className="text-[1.05rem] mb-2.5"
                style={{ fontFamily: "var(--font-fraunces), serif", color: "#034494" }}
              >
                {f.title}
              </h3>
              <p className="text-[0.92rem] leading-relaxed" style={{ color: "#4c584f" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {callouts.map((c, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-start gap-5 p-8 rounded-sm"
              style={{ background: "#034494", color: "#fff" }}
            >
              <span className="shrink-0 mt-0.5" style={{ color: "#c79a44" }}>
                {c.icon}
              </span>
              <div>
                <h4
                  className="text-[1.02rem] mb-1.5 text-white"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  {c.title}
                </h4>
                <p className="text-[0.9rem] leading-relaxed" style={{ color: "#cfe0d5" }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
