import JsonLd from "@/components/JsonLd";
import { SITE_URL, ORGANIZATION_ID, WEBSITE_ID, breadcrumbSchema } from "@/lib/seo";
import type { ServiceCategory } from "@/lib/services";

export default function ServiceJsonLd({ service }: { service: ServiceCategory }) {
  const pageUrl = `${SITE_URL}/services/${service.slug}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        url: pageUrl,
        serviceType: service.title,
        provider: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${service.title} | VectorWave Technologies`,
        mainEntity: { "@id": `${pageUrl}#service` },
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en",
      },
      breadcrumbSchema(`${pageUrl}#breadcrumb`, [
        { name: "Home", item: `${SITE_URL}/` },
        { name: "Services", item: `${SITE_URL}/services` },
        { name: service.title, item: pageUrl },
      ]),
    ],
  };

  return <JsonLd data={data} />;
}
