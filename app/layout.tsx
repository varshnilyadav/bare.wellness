import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bare Wellness | Premium Recovery & Wellness Studio",
  description:
    "Experience premium recovery services including traditional sauna, cold plunge therapy, compression therapy, and red light therapy. Reset. Recover. Restart.",
  keywords: [
    "recovery studio",
    "wellness",
    "sauna",
    "cold plunge",
    "compression therapy",
    "red light therapy",
    "athletic recovery",
    "muscle recovery",
  ],
  openGraph: {
    title: "Bare Wellness | Premium Recovery & Wellness Studio",
    description:
      "Premium recovery experiences designed to help your body recharge, rebuild, and perform at its peak.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
