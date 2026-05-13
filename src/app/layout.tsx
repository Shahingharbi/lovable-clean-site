import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { FAQ_ITEMS } from "@/data/faq";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const obviously = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "../../public/fonts/Obviously-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Obviously-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Obviously-Narrow-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Obviously-Wide-Semibold.woff2", weight: "800", style: "normal" },
  ],
});

const SITE_URL = "https://www.ghservices.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Entreprise de nettoyage à Thonon-les-Bains | GH Services",
    template: "%s | GH Services",
  },
  description:
    "Entreprise de nettoyage et de ménage à Thonon-les-Bains, Évian et région lémanique. Vitres, copropriétés, fin de chantier, déménagement. 5/5 Google. Devis 24 h.",
  keywords: [
    "entreprise de nettoyage Thonon-les-Bains",
    "entreprise de nettoyage Thonon",
    "société de nettoyage Thonon-les-Bains",
    "société de ménage Thonon-les-Bains",
    "agence de ménage Thonon-les-Bains",
    "société nettoyage Thonon",
    "nettoyage professionnel Thonon-les-Bains",
    "ménage Thonon-les-Bains",
    "nettoyage copropriétés Thonon-les-Bains",
    "nettoyage parties communes Thonon-les-Bains",
    "nettoyage appartements Thonon-les-Bains",
    "nettoyage maison Thonon-les-Bains",
    "nettoyage chalets Thonon-les-Bains",
    "nettoyage de vitres Thonon-les-Bains",
    "nettoyage vitres Thonon",
    "nettoyage fin de chantier Thonon-les-Bains",
    "nettoyage après travaux Thonon",
    "nettoyage état des lieux Thonon",
    "nettoyage fin de bail Thonon",
    "nettoyage textiles Thonon",
    "nettoyage canapé Thonon",
    "nettoyage tapis et moquette Thonon",
    "nettoyage humidité moisissures Thonon",
    "traitement moisissures Chablais",
    "débarras Thonon-les-Bains",
    "débarras maison Chablais",
    "entretien espaces verts Thonon",
    "tonte pelouse Thonon",
    "petite maçonnerie Thonon",
    "déménagement Thonon-les-Bains",
    "déménagement Chablais",
    "nettoyage Évian-les-Bains",
    "ménage Évian",
    "ménage Annemasse",
    "nettoyage Annemasse",
    "nettoyage Douvaine",
    "nettoyage Sciez",
    "nettoyage Publier",
    "nettoyage Bons-en-Chablais",
    "nettoyage Anthy-sur-Léman",
    "nettoyage Allinges",
    "nettoyage Yvoire",
    "nettoyage Chablais",
    "nettoyage région lémanique",
    "GH Services",
    "GH Services Thonon",
  ],
  authors: [{ name: "GH Services" }],
  creator: "GH Services",
  publisher: "GH Services",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Entreprise de nettoyage à Thonon-les-Bains | GH Services",
    description:
      "Nettoyage et ménage à Thonon, Évian, Annemasse, Chablais. Vitres, copropriétés, fin de chantier, déménagement. 5/5 Google. Devis 24 h.",
    url: SITE_URL,
    siteName: "GH Services",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/photos/og-cleaning.jpg",
        width: 1200,
        height: 630,
        alt: "GH Services, entreprise de nettoyage à Thonon-les-Bains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entreprise de nettoyage à Thonon-les-Bains | GH Services",
    description:
      "Nettoyage et ménage à Thonon, Évian, Annemasse, Chablais. 5/5 Google. Devis 24 h.",
    images: ["/photos/og-cleaning.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/seo/cropped-favicon-1-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/cropped-favicon-1-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/seo/cropped-favicon-1-180x180.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1b2c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "GH Services",
  alternateName: "GH Services Thonon",
  description:
    "Entreprise de nettoyage professionnel à Thonon-les-Bains. Vitres, copropriétés, fin de chantier, textiles, anti humidité, débarras, espaces verts, déménagement, petite maçonnerie.",
  slogan: "Votre partenaire multiservices de confiance en région lémanique",
  url: SITE_URL,
  telephone: "+33684665523",
  email: "contact@ghservices.fr",
  image: `${SITE_URL}/photos/og-cleaning.jpg`,
  logo: `${SITE_URL}/seo/logo-full.png`,
  priceRange: "€€",
  foundingDate: "2011",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 avenue des Prés Verts",
    addressLocality: "Thonon-les-Bains",
    postalCode: "74200",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.3722,
    longitude: 6.4795,
  },
  areaServed: [
    "Thonon-les-Bains",
    "Évian-les-Bains",
    "Annemasse",
    "Douvaine",
    "Sciez",
    "Publier",
    "Bons-en-Chablais",
    "Anthy-sur-Léman",
    "Margencel",
    "Allinges",
    "Yvoire",
    "Excenevex",
    "Saint-Gingolph",
    "Lugrin",
    "Marin",
    "Neuvecelle",
    "Maxilly-sur-Léman",
    "Messery",
    "Nernier",
    "Chens-sur-Léman",
    "Saint-Paul-en-Chablais",
    "Genève",
  ].map((c) => ({ "@type": "City", name: c })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "17",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de nettoyage GH Services",
    itemListElement: [
      "Nettoyage de vitres et vitrines",
      "Nettoyage de fin de chantier",
      "Nettoyage de copropriétés et parties communes",
      "Nettoyage de textiles, tapis et canapés",
      "Traitement humidité et moisissures",
      "Débarras éco-responsable",
      "Entretien d'espaces verts",
      "Petite maçonnerie",
      "Déménagement",
    ].map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-FR"
      className={`${dmSans.variable} ${obviously.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","w1p7l3nx72");`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17969657087"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-17969657087');gtag('config', 'GT-T5JCZCZP');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
