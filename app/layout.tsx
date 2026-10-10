import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Second Plate | Cooking classes and premium catering",
    template: "%s | Second Plate",
  },
  description: site.description,
  applicationName: "Second Plate",
  openGraph: {
    title: "Second Plate | Cooking classes and premium catering",
    description: site.description,
    siteName: "Second Plate ZA",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Plate",
    description: site.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodService",
  name: "Second Plate",
  alternateName: "Second Plate ZA",
  url: "https://www.secondplate.co.za/",
  telephone: "+27713557557",
  email: "info@secondplate.co.za",
  description: site.description,
  areaServed: site.area,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5th Floor, Bloukrans Building, Lynnwood Bridge",
    addressLocality: "Pretoria",
    postalCode: "0081",
    addressCountry: "ZA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
