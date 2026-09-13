import { siteConfig } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ElectricianService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: `${siteConfig.url}/${locale}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressFull,
      addressLocality: "Prishtina",
      addressCountry: "XK",
    },
    areaServed: "Kosovo",
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.linkedin],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
