export default function QuoteBanner() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#0c3b2e" }}
    >
      {/* Radial gold glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(199,154,68,0.10), transparent 40%), radial-gradient(circle at 85% 75%, rgba(199,154,68,0.08), transparent 45%)",
        }}
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-7">
        {/* Primary quote */}
        <div className="max-w-[760px] mx-auto text-center mb-0">
          <p
            className="arabic text-[clamp(1.6rem,3.2vw,2.3rem)] leading-[2] mb-6"
            style={{ color: "#e9d6a8" }}
          >
            وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
          </p>
          <p
            className="text-[1.25rem] max-w-[36ch] mx-auto"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              color: "#fbf7ec",
            }}
          >
            &quot;And complete the Hajj and Umrah for Allah.&quot;
          </p>
          <p className="mt-4 text-[0.85rem]" style={{ color: "#9fb6a8" }}>
            Qur&apos;an, Surah Al-Baqarah 2:196
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-11 h-px mx-auto my-10"
          style={{ background: "#c79a44" }}
        />

        {/* Secondary quote */}
        <div className="max-w-[640px] mx-auto text-center">
          <p
            className="arabic text-[clamp(1.15rem,2.2vw,1.5rem)] mb-4"
            style={{ color: "#e9d6a8" }}
          >
            اَلْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا
          </p>
          <p className="text-[1rem]" style={{ color: "#e3ebe4" }}>
            &quot;Umrah to Umrah is an expiation for what came between them.&quot;
          </p>
          <p className="mt-3 text-[0.8rem]" style={{ color: "#9fb6a8" }}>
            Sahih al-Bukhari &amp; Sahih Muslim
          </p>
        </div>
      </div>
    </section>
  );
}
