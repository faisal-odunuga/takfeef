import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Takfeef Travels & Tours",
  description:
    "Learn about Takfeef Travels & Tours — a local Nigeria team walking with Nigerian pilgrims from Nigeria to the Haramain.",
};

const CheckIcon = ({ color = "#c79a44" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const whatWeDo = [
  "Umrah and Hajj packages for pilgrims across Nigeria",
  "On-ground support in both Nigeria and Saudi Arabia",
  "Personalized guidance through the pilgrimage process",
];

const whereWeAre = [
  "Head office in Ibadan, Oyo State, Nigeria",
  "A dedicated Saudi contact line for on-ground support",
];

const trust = [
  { strong: "NAHCON license", desc: "Number & expiry to be confirmed" },
  { strong: "IATA", desc: "Accreditation status to be confirmed" },
  { strong: "RC 9631291", desc: "Registered travel company" },
];

export default function AboutPage() {
  return (
    <div className="py-16" style={{ background: "#faf6ee" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span
            className="block text-[1rem] mb-2.5"
            style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", color: "#a3212b" }}
          >
            About Takfeef
          </span>
          <h1
            className="text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.15]"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
          >
            A local team, walking with you from Nigeria to the Haramain
          </h1>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            {/* Mission card */}
            <div
              className="p-8 rounded-[4px] mb-10"
              style={{
                background: "#fff",
                border: "1px solid #dcd3bf",
                borderLeft: "4px solid #a3212b",
              }}
            >
              <p
                className="text-[1.18rem] leading-[1.55]"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: "#0c3b2e",
                }}
              >
                &quot;At Takfeef Travels, your journey to the House of Allah is our priority. We
                handle the logistics — visa, flights, accommodation, transportation, and guidance —
                so you can focus on the spiritual purpose of your trip.&quot;
              </p>
            </div>

            {/* What we do */}
            <h2
              className="text-[1.05rem] mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
            >
              What we do
            </h2>
            <ul className="mb-10">
              {whatWeDo.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3 text-[0.95rem]"
                  style={{ borderBottom: "1px solid #dcd3bf", color: "#4c584f" }}
                >
                  <span className="mt-0.5 shrink-0">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Where we are */}
            <h2
              className="text-[1.05rem] mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
            >
              Where you&apos;ll find us
            </h2>
            <ul>
              {whereWeAre.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3 text-[0.95rem]"
                  style={{ borderBottom: "1px solid #dcd3bf", color: "#4c584f" }}
                >
                  <span className="mt-0.5 shrink-0">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            {/* Trust grid */}
            <h2
              className="text-[1.05rem] mb-5"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
            >
              Trust &amp; credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {trust.map((t) => (
                <div
                  key={t.strong}
                  className="border rounded-[4px] p-5 text-center text-[0.82rem]"
                  style={{ borderColor: "#dcd3bf", borderStyle: "dashed", color: "#4c584f" }}
                >
                  <strong
                    className="block mb-1.5 text-[0.95rem]"
                    style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
                  >
                    {t.strong}
                  </strong>
                  {t.desc}
                </div>
              ))}
            </div>

            {/* The call to pilgrimage */}
            <h2
              className="text-[1.05rem] mb-5"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
            >
              The call to pilgrimage
            </h2>
            <div className="rounded-[6px] p-7" style={{ background: "#e8efe9" }}>
              <p
                className="arabic text-[1.2rem] leading-[2.2] mb-4"
                style={{ color: "#0c3b2e" }}
              >
                وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِنْ كُلِّ فَجٍّ عَمِيقٍ
              </p>
              <p
                className="text-[1rem] leading-relaxed mb-3"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: "#0c3b2e",
                }}
              >
                &quot;And proclaim to the people the Hajj; they will come to you on foot and on
                every lean camel, coming from every distant path.&quot;
              </p>
              <p className="text-[0.82rem]" style={{ color: "#4c584f" }}>
                Qur&apos;an, Surah Al-Hajj 22:27
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
