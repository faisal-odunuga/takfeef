const items = [
  { label: "Visa Handled" },
  { label: "Accommodation Near Haram" },
  { label: "Spiritual Guidance Included" },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke="#034593" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function IntroStrip() {
  return (
    <div
      className="border-b"
      style={{ background: "#fff", borderColor: "#dcd3bf" }}
    >
      <div className="max-w-[1180px] mx-auto px-7 py-8 flex flex-wrap items-center justify-between gap-6">
        <p
          className="text-[1.15rem] leading-snug max-w-[44ch]"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontStyle: "italic",
            color: "#034494",
          }}
        >
          Your dream of answering the call to the House of Allah doesn&apos;t have to remain a dream.
        </p>
        <div className="flex flex-wrap gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-[0.88rem] font-medium" style={{ color: "#4c584f" }}>
              <CheckIcon />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
