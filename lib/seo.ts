export const SITE_URL = "https://vectorwavetechnologies.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "VectorWave Technologies",
  url: `${SITE_URL}/`,
  description:
    "A business transformation and enterprise technology company providing ERP implementation, CRM automation, Zoho, Odoo, Dynamics 365 and custom technology solutions.",
  email: "admin@vectorwavetechnologies.com",
  telephone: "+91-8791810555",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "GOLDEN-I, Office No 1034-1035, 10th Floor, Tower 3, Plot No 11, Sector-Techzone IV",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201318",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "VectorWave Technologies",
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en",
};

export type BreadcrumbItem = {
  name: string;
  item: string;
};

export function breadcrumbSchema(id: string, items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: items.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}
