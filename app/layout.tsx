import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { Navbar } from "@/components/layout/navbar";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Johal Crane Services | Crane Rental & Heavy Lifting in Jharsuguda",
    template: "%s | Johal Crane Services",
  },

  description:
    "Johal Crane Services provides crane rental, heavy lifting, industrial equipment shifting, machinery installation and construction lifting services in Jharsuguda and nearby areas.",

  keywords: [
    "Johal Crane Services",
    "Johal Crane",
    "crane service Jharsuguda",
    "crane rental Jharsuguda",
    "crane hire Jharsuguda",
    "heavy lifting Jharsuguda",
    "mobile crane Jharsuguda",
    "telescopic crane Jharsuguda",
    "crawler crane Jharsuguda",
    "tyre mounted crane Jharsuguda",
    "industrial lifting Jharsuguda",
    "construction crane Jharsuguda",
    "crane service Odisha",
    "crane rental Odisha",
    "heavy lifting Odisha",
  ],

  authors: [
    {
      name: "Johal Crane Services",
    },
  ],

  creator: "Johal Crane Services",

  metadataBase: new URL("https://example.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Johal Crane Services | Crane Rental & Heavy Lifting in Jharsuguda",

    description:
      "Professional crane rental, heavy lifting and industrial equipment services in Jharsuguda and nearby areas.",

    type: "website",

    locale: "en_IN",

    siteName: "Johal Crane Services",

    images: [
      {
        url: "/images/hero/johal-crane-hero.jpeg",
        width: 1600,
        height: 900,
        alt: "Johal Crane Services crane operation",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-zinc-950 antialiased`}>

        <LocalBusinessSchema />
        
        <Navbar />

        {children}

        <Footer />

        <FloatingActions />
      </body>
    </html>
  );
}