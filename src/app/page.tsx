import Link from "next/link";
import Hero from "@/components/Hero";
import IntroStrip from "@/components/IntroStrip";
import PackageCards from "@/components/PackageCards";
import WhyChoose from "@/components/WhyChoose";
import PilgrimGallery from "@/components/PilgrimGallery";
import QuoteBanner from "@/components/QuoteBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <PackageCards />
      <PilgrimGallery />
      <WhyChoose />
      <QuoteBanner />

      {/* Closing CTA */}
      <section className="py-24 text-center" style={{ background: "#faf6ee" }}>
        <div className="max-w-[1180px] mx-auto px-7">
          <h2
            className="text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.15] max-w-[22ch] mx-auto mb-8"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#034494" }}
          >
            Don&apos;t just dream about Makkah and Madinah — answer the call.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-sm text-white font-semibold text-[1rem] transition-all hover:opacity-90 active:scale-[0.98] shadow-md"
            style={{ background: "#034494" }}
          >
            Reserve My Slot
          </Link>
        </div>
      </section>
    </>
  );
}
