import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import Banner from "@/src/Banner.png";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-lg font-bold text-on-inverse">{value}</div>
      <div className="text-xs text-on-inverse-muted">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 text-center sm:px-6 lg:py-28">
      <Image
        src={Banner}
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink-inverse/70" />

      <div className="relative z-10">
        <Reveal>
          <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold text-primary backdrop-blur-sm sm:text-xs">
            Zoho Authorised Partner · ERP · CRM · Web and AI Solutions
          </span>

          <h1 className="mx-auto mt-5 max-w-xl text-[28px] font-bold leading-tight text-on-inverse sm:text-4xl">
            <Typewriter text="Powering intelligent business flow, without the overhead" />
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm text-on-inverse-muted sm:text-base">
            We implement Zoho and Odoo ERP, CRM automation, web development and
            AI-powered tools so growing businesses run on one connected system.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:translate-y-0 sm:w-auto"
            >
              Book free consultation
            </Link>
            <Link
              href="/services"
              className="w-full rounded-lg border border-white/25 px-6 py-3 text-sm font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:shadow-sm active:translate-y-0 sm:w-auto"
            >
              Explore services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-10">
            <Stat value="15+" label="Projects delivered" />
            <Stat value="12" label="Industries served" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
