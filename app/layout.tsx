import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Questrial, Comic_Relief } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const comic = Comic_Relief({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-comic",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-questrial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3baset Studio — Acrylic on Carpet",
  description:
    "Four unique acrylic portraits painted on handmade carpets by Cairo-based artist Mohamed Abdelbaset. A rare discipline where brushstroke meets the woven thread.",
  openGraph: {
    title: "3baset Studio",
    description: "Rare acrylic portraits on handmade carpets — Cairo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${caveat.variable} ${comic.variable} ${cormorant.variable} ${questrial.variable}`}>
      <body>{children}</body>
    </html>
  );
}