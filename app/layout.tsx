import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}