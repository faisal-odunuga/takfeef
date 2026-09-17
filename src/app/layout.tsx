import type { Metadata } from "next";
import { Fraunces, Work_Sans, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: "variable",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Takfeef Travels & Tours — Your Journey, Our Priority",
  description:
    "Smooth, comfortable, and spiritually fulfilling Umrah and Hajj journeys from Nigeria to the Haramain. Visa, flights, accommodation, and spiritual guidance — all handled.",
  keywords: ["Umrah", "Hajj", "Nigeria", "Ibadan", "travel", "pilgrimage", "Makkah", "Madinah"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Takfeef Travels & Tours",
    description: "Your Journey, Our Priority. Umrah and Hajj packages from Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${amiri.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-work-sans), sans-serif",
          backgroundColor: "#faf6ee",
          color: "#16201b",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
