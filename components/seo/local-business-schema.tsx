import { COMPANY } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: COMPANY.name,

    description:
      "Crane rental, heavy lifting and industrial equipment services in Jharsuguda and nearby areas.",

    telephone: COMPANY.phone,

    email: COMPANY.email,

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "NH-49, Jharsuguda - Raigarh Rd, near Tata Workshop, H.K, Katapali",
      addressLocality: "Jharsuguda",
      addressRegion: "Odisha",
      postalCode: "768202",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Place",
      name: COMPANY.serviceArea,
    },

    url: "https://example.com",

    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}