import { groq } from "next-sanity";

// The posts imported by scripts/migrate-posts-to-sanity.mjs have ids "post-<slug>";
// Studio-created posts get random ids. Only Studio-authored posts appear on the site.
const publishedPostFilter = groq`_type == "post" && !string::startsWith(_id, "post-")`;

// Shared projection: keep in sync across the queries below.
const postFields = groq`
  "slug": slug.current,
  title,
  excerpt,
  category,
  author,
  "image": mainImage,
  publishedAt,
  _updatedAt,
  body
`;

export const postsQuery = groq`
  *[${publishedPostFilter}] | order(publishedAt desc) {
    ${postFields}
  }
`;

export const postBySlugQuery = groq`
  *[${publishedPostFilter} && slug.current == $slug][0] {
    ${postFields}
  }
`;

export const postSlugsQuery = groq`
  *[${publishedPostFilter} && defined(slug.current)][].slug.current
`;
