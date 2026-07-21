import type { Metadata } from "next";
import Footer from "@/components/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/Reveal";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | VectorWave Technologies",
  description:
    "Insights on ERP, CRM, AI, web development, and finance from the VectorWave team.",
};

export default function BlogPage() {
  return (
    <>
      <main className="flex-1">
        <section className="bg-surface-alt px-4 py-14 text-center sm:px-6 sm:py-16">
          <Reveal>
            <span className="inline-block rounded-full bg-surface-chip px-4 py-1.5 text-[11px] font-bold text-primary">
              Blog
            </span>
            <h1 className="mx-auto mt-5 max-w-xl text-[26px] font-bold leading-tight text-ink sm:text-3xl">
              Insights on ERP, CRM, AI and business automation
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted sm:text-base">
              Practical notes from our team on getting more out of Zoho, Odoo,
              CRM automation, and the tools that run your business.
            </p>
          </Reveal>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <BlogGrid />
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
