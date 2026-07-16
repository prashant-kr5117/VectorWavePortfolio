import Link from "next/link";
import Reveal from "@/components/Reveal";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-lg font-bold text-[#0B1B33]">{value}</div>
      <div className="text-xs text-[#55607A]">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
      <Reveal>
        <span className="inline-block rounded-full bg-[#EFF4FE] px-4 py-1.5 text-[11px] font-bold text-[#1D4ED8] sm:text-xs">
          Zoho Authorised Partner · ERP · CRM · Web and AI Solutions
        </span>

        <h1 className="mx-auto mt-5 max-w-xl text-[28px] font-bold leading-tight text-[#0B1B33] sm:text-4xl">
          Powering intelligent business flow, without the overhead
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm text-[#55607A] sm:text-base">
          We implement Zoho and Odoo ERP, CRM automation, web development and
          AI-powered tools so growing businesses run on one connected system.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="w-full rounded-lg bg-[#30B6CD] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2AA0B4] hover:shadow-md active:translate-y-0 sm:w-auto"
          >
            Book free consultation
          </Link>
          <Link
            href="/services"
            className="w-full rounded-lg border border-[#C7CEDA] px-6 py-3 text-sm font-bold text-[#0B1B33] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D4ED8] hover:text-[#1D4ED8] hover:shadow-sm active:translate-y-0 sm:w-auto"
          >
            Explore services
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-10">
          <Stat value="15+" label="Projects delivered" />
          <Stat value="12" label="Industries served" />
        </div>
      </Reveal>
    </section>
  );
}
