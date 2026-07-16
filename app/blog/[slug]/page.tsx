import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/Reveal";
import BlogIcon from "@/components/BlogIcon";
import { getPostBySlug, getRelatedPosts, posts } from "@/lib/posts";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | VectorWave Technologies`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[#F8FAFC] px-4 py-14 sm:px-6 sm:py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#33405C] transition-colors duration-200 hover:text-[#1D4ED8]"
            >
              <ArrowLeft size={14} /> Back to blog
            </Link>
            <div>
              <span className="inline-block rounded-full bg-[#EFF4FE] px-4 py-1.5 text-[11px] font-bold text-[#1D4ED8]">
                {post.category}
              </span>
              <h1 className="mx-auto mt-5 text-[24px] font-bold leading-tight text-[#0B1B33] sm:text-3xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-[#55607A]">
                <span className="flex items-center gap-1.5">
                  <User size={14} /> {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {post.readTime}
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-4 py-14 sm:px-6">
          <Reveal className="mx-auto flex max-w-2xl flex-col gap-5">
            <div className="mb-2 flex h-40 items-center justify-center rounded-xl bg-[#0B1B33] text-white">
              <BlogIcon icon={post.icon} size={48} />
            </div>
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-[#33405C] sm:text-base">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </section>

        {related.length > 0 && (
          <section className="bg-[#F8FAFC] px-4 py-14 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <Reveal className="mb-6 text-center">
                <h2 className="text-lg font-bold text-[#0B1B33]">
                  More on {post.category}
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 60}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group flex h-full flex-col rounded-xl border border-[#E4E8F0] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg"
                    >
                      <span className="mb-2 inline-block w-fit rounded-full bg-[#EFF4FE] px-3 py-1 text-[10px] font-bold text-[#1D4ED8]">
                        {r.category}
                      </span>
                      <h3 className="mb-2 text-sm font-bold leading-snug text-[#0B1B33]">
                        {r.title}
                      </h3>
                      <p className="line-clamp-2 text-xs text-[#55607A]">
                        {r.excerpt}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </main>
      <Footer />
    </>
  );
}
