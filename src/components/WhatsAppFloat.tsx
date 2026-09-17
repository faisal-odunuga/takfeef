export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2349022552931"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      style={{
        background: "#a3212b",
        boxShadow: "0 6px 20px rgba(163,33,43,0.4)",
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 21l1.4-4.2A8.5 8.5 0 1112 20.5c-1.4 0-2.7-.3-3.9-.9L3 21z"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 9.5c0 3.5 2.5 6 6 6l1.3-1.8-2.6-1.2-.7.9c-1-.6-1.7-1.3-2.3-2.3l.9-.7-1.2-2.6L8.5 9.5z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
