import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Innovation() {
  return (
    <section className="bg-ink-inverse px-4 py-14 text-center sm:px-6 lg:px-10">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-xl font-bold text-on-inverse sm:text-2xl">
          Innovate digitally
        </h2>
        <p className="mt-4 text-sm text-on-inverse-muted sm:text-base">
          We empower businesses across industries to replace messy
          spreadsheets and disconnected tools with one clean, connected ERP
          and CRM setup.
        </p>
        <Link
          href="/services"
          className="mt-6 inline-block rounded-lg border border-on-inverse-border px-6 py-3 text-sm font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:border-on-inverse hover:shadow-md active:translate-y-0"
        >
          Explore more
        </Link>
      </Reveal>
    </section>
  );
}
