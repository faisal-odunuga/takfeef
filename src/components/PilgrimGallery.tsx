import Image from "next/image";
import Link from "next/link";

interface PilgrimMoment {
  src: string;
  title: string;
  location: string;
  tag: string;
  description: string;
  span?: string; // for grid spanning
  aspect?: string;
}

const pilgrimMoments: PilgrimMoment[] = [
  {
    src: "/images/strikah.jpg",
    title: "Ihram at Masjid Al-Haram",
    location: "Makkah Al-Mukarramah",
    tag: "Spiritual Rites",
    description: "Pilgrim in Ihram outside the sacred Ka'bah sanctuary at night, equipped with official Takfeef gear.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    src: "/images/septemberr.jpg",
    title: "Courtyard of the Prophet's Mosque",
    location: "Madinah Munawwarah",
    tag: "Guided Ziyārah",
    description: "Our pilgrims gathered beneath the majestic umbrella canopies at Masjid an-Nabawi.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    src: "/images/august.jpg",
    title: "Family Pilgrimage Care",
    location: "Departure Hall",
    tag: "Family Umrah",
    description: "Generations traveling together with dedicated Takfeef guides in uniform ensuring complete ease.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    src: "/images/semptember-3.jpg",
    title: "Seamless Airport Departure",
    location: "Airport Terminal",
    tag: "Luggage & Group Logistics",
    description: "Takfeef team handling luggage, group boarding, and documents so pilgrims travel worry-free.",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    src: "/images/august-2.jpg",
    title: "Peaceful Night Worship",
    location: "Masjid Al-Haram, Makkah",
    tag: "Tawaf & Du'a",
    description: "Serene night atmosphere as pilgrims perform Tawaf beneath the illuminated minarets.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
];

export default function PilgrimGallery() {
  return (
    <section className="py-22" style={{ background: "#faf6ee" }}>
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
            Real Journeys • Real Pilgrims
          </span>
          <h2
            className="text-[clamp(1.8rem,2.8vw,2.4rem)] leading-[1.18] mb-4"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#034494" }}
          >
            Moments from the Holy Land
          </h2>
          <p className="text-[1.02rem] leading-relaxed" style={{ color: "#4c584f" }}>
            Alhamdulillah — from airport departures in Nigeria to the courtyard of Masjid an-Nabawi and
            the sacred Ka&apos;bah, our pilgrims travel with complete peace of mind, guided every step of the way.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pilgrimMoments.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[8px] bg-[#034494] shadow-sm transition-all duration-300 hover:shadow-xl ${
                item.span || ""
              }`}
              style={{
                border: "1px solid #dcd3bf",
                minHeight: item.span?.includes("col-span-2") ? "380px" : "440px",
              }}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-[#034494]/95 via-[#034494]/40 to-transparent"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3, 68, 148, 0.94) 0%, rgba(3, 68, 148, 0.35) 45%, rgba(0, 0, 0, 0.05) 100%)",
                }}
              />

              {/* Tag pill */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[0.75rem] font-semibold tracking-wide backdrop-blur-md"
                  style={{
                    background: "rgba(3, 68, 148, 0.85)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Caption details at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
                <div
                  className="text-[0.78rem] tracking-wider uppercase mb-1 font-medium flex items-center gap-1.5"
                  style={{ color: "#c79a44" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {item.location}
                </div>
                <h3
                  className="text-[1.2rem] font-medium leading-tight mb-2"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[0.88rem] leading-relaxed line-clamp-2 text-[#e0ece4]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Pilgrim Experience Banner */}
        <div
          className="rounded-[8px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border"
          style={{
            background: "#fff",
            borderColor: "#dcd3bf",
            borderLeft: "5px solid #034494",
          }}
        >
          <div className="max-w-2xl">
            <h3
              className="text-[1.25rem] md:text-[1.4rem] leading-snug mb-2"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#034494" }}
            >
              Every Takfeef Pilgrim Receives Full On-Ground Support
            </h3>
            <p className="text-[0.92rem] leading-relaxed" style={{ color: "#4c584f" }}>
              Our dedicated staff wear official Takfeef vests and accompany you through flight check-in,
              Saudi arrival, hotel transfers, and every pilgrimage ritual — including your complimentary
              Takfeef crossbody bag and pilgrim kit.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-8 py-4 rounded-sm text-white font-semibold text-[0.95rem] transition-all hover:opacity-90 active:scale-[0.98] shadow-md"
            style={{ background: "#034494" }}
          >
            Join Our Next Batch
          </Link>
        </div>
      </div>
    </section>
  );
}
