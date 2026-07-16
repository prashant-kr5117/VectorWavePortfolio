import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Innovation() {
  return (
    <section className="bg-[#0B1B33] px-4 py-14 text-center sm:px-6 lg:px-10">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Innovate digitally
        </h2>
        <p className="mt-4 text-sm text-[#93A0BD] sm:text-base">
          We empower businesses across industries to replace messy
          spreadsheets and disconnected tools with one clean, connected ERP
          and CRM setup.
        </p>
        <Link
          href="/services"
          className="mt-6 inline-block rounded-lg border border-[#33405C] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:shadow-md active:translate-y-0"
        >
          Explore more
        </Link>
      </Reveal>
    </section>
  );
}
