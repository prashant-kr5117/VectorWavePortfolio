import JsonLd from "@/components/JsonLd";
import { SITE_URL, ORGANIZATION_ID, WEBSITE_ID, breadcrumbSchema } from "@/lib/seo";
import type { BlogPost } from "@/lib/posts";

export default function ArticleJsonLd({ post }: { post: BlogPost }) {
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const image = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`
    : undefined;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        url: pageUrl,
        ...(image ? { image } : {}),
        datePublished: post.dateValue,
        dateModified: post.dateModifiedValue ?? post.dateValue,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: post.title,
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en",
      },
      breadcrumbSchema(`${pageUrl}#breadcrumb`, [
        { name: "Home", item: `${SITE_URL}/` },
        { name: "Blog", item: `${SITE_URL}/blog` },
        { name: post.title, item: pageUrl },
      ]),
    ],
  };

  return <JsonLd data={data} />;
}
