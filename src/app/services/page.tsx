import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Packages — Takfeef Travels & Tours",
  description:
    "Explore our Umrah and Hajj packages for Nigeria pilgrims: Sept–Nov Umrah, December Umrah, Ramadan Umrah, and Visa Only support.",
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    name: "September–November Umrah",
    prices: [
      { amount: "₦2,800,000", label: "Without food" },
      { amount: "₦3,000,000", label: "With food" },
    ],
    duration: "4 days in Madinah, 10 days in Makkah.",
    tags: [
      "Flight ticket",
      "Multiple-entry visa",
      "Accommodation near Haram",
      "Transportation",
      "Ziyārah",
      "Spiritual guidance",
    ],
    bonus: "First 10 registrants receive a free Umrah kit — Ihram, Takfeef travel bag, hijab, and water bottle.",
  },
  {
    name: "December Umrah",
    prices: [{ amount: "₦3,500,000", label: "Full package" }],
    duration: "Travel over the December period with the full Takfeef itinerary.",
    tags: ["Visa", "Flight", "Hotel", "Transportation", "Ziyārah", "Spiritual guidance", "Gift package"],
    bonus: null,
  },
  {
    name: "Ramadan Umrah",
    prices: [{ amount: "₦4,500,000", label: "Full package" }],
    duration: "Spend the blessed month in Makkah and Madinah, fully guided.",
    tags: ["Visa", "Flight", "Hotel", "Transportation", "Ziyārah", "Spiritual guidance", "Gift package"],
    bonus: null,
  },
  {
    name: "Umrah Visa Only",
    prices: [{ amount: "₦600,000", label: "Visa support" }],
    duration:
      "For travelers who want to arrange their own flight and accommodation but need visa support.",
    tags: ["Multiple-entry visa", "Document guidance"],
    bonus: null,
  },
];

const included = ["Visa", "Flight", "Hotel", "Transportation", "Ziyārah", "Spiritual guidance", "Free gift package"];

export default function ServicesPage() {
  return (
    <div className="py-16" style={{ background: "#faf6ee" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span
            className="block text-[1rem] mb-2.5"
            style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", color: "#a3212b" }}
          >
            Packages
          </span>
          <h1
            className="text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
          >
            Every Takfeef package, laid out plainly
          </h1>
          <p className="text-[1.02rem]" style={{ color: "#4c584f" }}>
            Every Takfeef package is built to make your journey easy — from the moment you register
            to the moment you return home.
          </p>
        </div>

        {/* Service blocks */}
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] overflow-hidden rounded-[6px]"
              style={{ background: "#fff", border: "1px solid #dcd3bf" }}
            >
              {/* Left: price */}
              <div
                className="p-9 flex flex-col justify-center border-b md:border-b-0 md:border-r"
                style={{ background: "#e8efe9", borderColor: "#dcd3bf" }}
              >
                <h2
                  className="text-[1.1rem] mb-3"
                  style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
                >
                  {s.name}
                </h2>
                {s.prices.map((p) => (
                  <div key={p.label} className="mb-3">
                    <div
                      className="text-[2rem] font-semibold leading-none"
                      style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
                    >
                      {p.amount}
                    </div>
                    <div className="text-[0.85rem] mt-1" style={{ color: "#4c584f" }}>
                      {p.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: details */}
              <div className="p-9">
                <p className="text-[0.95rem] mb-5" style={{ color: "#4c584f" }}>
                  {s.duration}
                </p>
                <div className="flex flex-wrap gap-2.5 mb-4">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[0.8rem] px-3 py-1.5 rounded-full border"
                      style={{ borderColor: "#dcd3bf", color: "#4c584f" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {s.bonus && (
                  <p
                    className="mt-4 pt-4 text-[0.88rem] font-medium"
                    style={{
                      borderTop: "1px dashed #dcd3bf",
                      color: "#a3212b",
                    }}
                  >
                    {s.bonus}
                  </p>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center mt-6 px-7 py-3 rounded-sm text-white text-[0.92rem] font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "#a3212b" }}
                >
                  Book this package
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Included strip */}
        <div
          className="mt-10 rounded-[6px] p-9 flex flex-wrap gap-6 items-center justify-between"
          style={{ background: "#0c3b2e" }}
        >
          <h3
            className="text-white text-[1.05rem] max-w-[200px]"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            What&apos;s always included, on every package
          </h3>
          <ul className="flex flex-wrap gap-4">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[0.9rem]"
                style={{ color: "#dce9df" }}
              >
                <span style={{ color: "#c79a44" }}>
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-[0.92rem]" style={{ color: "#4c584f" }}>
          Installment payment plans are available on every package — reach out on WhatsApp for
          current terms. Slots are limited each season, so early registration is recommended.
        </p>
      </div>
    </div>
  );
}
