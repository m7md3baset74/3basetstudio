import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Questrial, Comic_Relief } from "next/font/google";
import "./globals.css";

/* ── Fonts ── */
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

/* ── SEO Metadata ── */
const SITE_URL = "https://3baset.art";
const SITE_NAME = "3baset Studio";
const TITLE = "3baset Studio — Acrylic Portraits on Handmade Carpets | Cairo";
const DESCRIPTION =
  "Rare acrylic portraits painted directly onto handmade carpets by Cairo-based artist Mohamed Abdelbaset. Each piece is one of a kind — where fine art meets centuries-old weaving craft.";
const KEYWORDS = [
  "acrylic on carpet",
  "carpet painting",
  "رسم على سجاد",
  "فن على سجاد",
  "Mohamed Abdelbaset",
  "محمد عبد الباسط",
  "Cairo artist",
  "Egyptian artist",
  "handmade carpet art",
  "portrait on carpet",
  "silk carpet painting",
  "فنان مصري",
  "لوحات فنية",
  "سجاد يدوي",
  "3baset studio",
].join(", ");

export const metadata: Metadata = {
  /* ── Basic ── */
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "Mohamed Abdelbaset", url: SITE_URL }],
  creator: "Mohamed Abdelbaset",
  publisher: "3baset Studio",

  /* ── Canonical ── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── Open Graph (Facebook, WhatsApp, LinkedIn) ── */
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/works/og/og-img1.jpg",
        width: 1200,
        height: 630,
        alt: "3baset Studio — Acrylic Portraits on Handmade Carpets",
        type: "image/jpg",
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/works/og/og-img1.jpg"],
    creator: "@3baset_74",
  },

  /* ── Icons ── */
  icons: {
    icon: [
      { url: "/icon3.png" },
      { url: "/icon3.png", sizes: "192x192", type: "image/png" },
      { url: "/icon3.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon3.png" }],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Verification (add later after Google Search Console setup) ── */
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
};

/* ── JSON-LD Structured Data (Schema.org) ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* Person / Artist */
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#artist`,
      name: "Mohamed Abdelbaset",
      alternateName: "محمد عبد الباسط",
      url: SITE_URL,
      sameAs: [
        "https://www.instagram.com/3baset_74",
        "https://www.tiktok.com/@m7md3baset74",
      ],
      logo: "https://3baset.art/icon3.png",
      image: "https://3baset.art/works/og/og-img1.jpg",
      jobTitle: "Visual Artist",
      description:
        "Cairo-based artist specializing in acrylic portrait painting on handmade carpets — a rare discipline combining contemporary fine art with centuries-old textile craft.",
    },
    /* Website */
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#artist` },
      inLanguage: ["en", "ar"],
    },
    /* Art Gallery / Collection */
    {
      "@type": "ArtGallery",
      "@id": `${SITE_URL}/#gallery`,
      name: "3baset Studio",
      url: SITE_URL,
      description: DESCRIPTION,
      founder: { "@id": `${SITE_URL}/#artist` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+201064047214",
        availableLanguage: ["Arabic", "English"],
      },
      sameAs: [
        "https://www.instagram.com/3baset_74",
        "https://www.tiktok.com/@m7md3baset74",
      ],
    },
    /* Individual artworks */
    {
      "@type": "VisualArtwork",
      name: "عابرة الزمن",
      alternateName: "Passing Through Time",
      description:
        "Acrylic portrait of a woman adorned with ancient jewelry, painted on a pure handmade silk carpet. 180 × 120 cm.",
      artMedium: "Acrylic on Handmade Silk Carpet",
      artworkSurface: "Pure Handmade Silk Carpet",
      width: { "@type": "QuantitativeValue", value: 120, unitCode: "CMT" },
      height: { "@type": "QuantitativeValue", value: 180, unitCode: "CMT" },
      offers: {
        "@type": "Offer",
        // price: "75000",
        // priceCurrency: "EGP",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
      creator: { "@id": `${SITE_URL}/#artist` },
      artEdition: 1,
    },
    {
      "@type": "VisualArtwork",
      name: "سلطانة",
      alternateName: "Sultana",
      description:
        "Mamluk-era Turkish woman portrait on a Turkish handmade carpet. 175 × 100 cm.",
      artMedium: "Acrylic on Turkish Handmade Carpet",
      artworkSurface: "Turkish Wool Handwoven Carpet",
      width: { "@type": "QuantitativeValue", value: 100, unitCode: "CMT" },
      height: { "@type": "QuantitativeValue", value: 175, unitCode: "CMT" },
      offers: {
        "@type": "Offer",
        // price: "50000",
        // priceCurrency: "EGP",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
      creator: { "@id": `${SITE_URL}/#artist` },
      artEdition: 1,
    },
    {
      "@type": "VisualArtwork",
      name: "هي الآن",
      alternateName: "She Now",
      description:
        "Contemporary portrait of a modern hijabi woman on a handwoven carpet. 170 × 90 cm.",
      artMedium: "Acrylic on Handmade Carpet",
      artworkSurface: "Handwoven Carpet",
      width: { "@type": "QuantitativeValue", value: 90, unitCode: "CMT" },
      height: { "@type": "QuantitativeValue", value: 170, unitCode: "CMT" },
      offers: {
        "@type": "Offer",
        // price: "30000",
        // priceCurrency: "EGP",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
      creator: { "@id": `${SITE_URL}/#artist` },
      artEdition: 1,
    },
    {
      "@type": "VisualArtwork",
      name: "على الأحمر",
      alternateName: "On the Red",
      description:
        "Bold Egyptian artist portrait on a crimson-based handwoven carpet. 200 × 100 cm.",
      artMedium: "Acrylic on Red Handmade Carpet",
      artworkSurface: "Handwoven Crimson Carpet",
      width: { "@type": "QuantitativeValue", value: 100, unitCode: "CMT" },
      height: { "@type": "QuantitativeValue", value: 200, unitCode: "CMT" },
      offers: {
        "@type": "Offer",
        // price: "40000",
        // priceCurrency: "EGP",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
      creator: { "@id": `${SITE_URL}/#artist` },
      artEdition: 1,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${comic.variable} ${cormorant.variable} ${questrial.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}