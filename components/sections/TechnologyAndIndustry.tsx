"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import HoverGlow from "@/components/HoverGlow";
import { industries } from "@/lib/industries";

const secondaryTech = [
  { name: "Microsoft Dynamics 365", desc: "Enterprise business applications", href: "/services" },
  { name: "Salesforce", desc: "Enterprise CRM & customer experience", href: null },
  { name: "Odoo", desc: "Flexible modular ERP", href: "/services" },
  { name: "AI & Custom Technology", desc: "Agents · Automation · Web · Mobile · APIs", href: "/services" },
];

const ecosystem = [
  "Zoho",
  "Microsoft Dynamics 365",
  "Salesforce",
  "Odoo",
  "AI & Automation",
  "Custom Technology",
];

const visibilityChain = ["Transactions", "Data", "KPIs", "Dashboards", "Decisions"];

const visibilityQuestions = [
  "Which products are actually profitable?",
  "Where is inventory getting stuck?",
  "Which receivables are becoming a risk?",
  "Where is operational capacity being lost?",
  "Which sales channels are performing?",
];

export default function TechnologyAndIndustry() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const active = industries[activeIndustry];

  return (
    <HoverGlow as="section" className="bg-ink-inverse px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-on-inverse-border bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-accent">
              Technology
            </span>
            <h2 className="mt-4 text-xl font-bold leading-snug text-on-inverse sm:text-2xl">
              Technology should fit the business.
              <br />
              <span className="text-on-inverse-muted">Not the other way around.</span>
            </h2>

            <div className="mt-7 rounded-xl border border-accent/40 bg-gradient-to-br from-accent/15 to-primary/10 p-6">
              <span className="inline-block rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-on-inverse">
                Flagship
              </span>
              <div className="mt-3 text-lg font-bold text-on-inverse">Zoho</div>
              <p className="mt-1 text-sm text-on-inverse-muted">
                Flagship ecosystem — ERP · CRM · Finance · Inventory · HR · Analytics
              </p>
            </div>

            <div className="mt-2 flex flex-col">
              {secondaryTech.map((t) => {
                const content = (
                  <>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-on-inverse">{t.name}</span>
                      {t.href && (
                        <ChevronRight
                          size={15}
                          className="shrink-0 text-on-inverse-faint transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      )}
                    </div>
                    <span className="text-xs text-on-inverse-muted">{t.desc}</span>
                  </>
                );
                return t.href ? (
                  <Link
                    key={t.name}
                    href={t.href}
                    className="group block border-t border-on-inverse-border py-4 last:border-b"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={t.name} className="border-t border-on-inverse-border py-4 last:border-b">
                    {content}
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-xs italic leading-relaxed text-on-inverse-faint">
              We recommend the platform based on business requirements, not
              on which one we&apos;d rather sell.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 rounded-full border border-on-inverse-border bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-accent">
              Industry experience
            </span>
            <h2 className="mt-4 text-xl font-bold leading-snug text-on-inverse sm:text-2xl">
              Different industries.
              <br />
              <span className="text-on-inverse-muted">Different processes.</span>
            </h2>

            <div className="mt-6 flex flex-col">
              {industries.map((ind, i) => {
                const isActive = i === activeIndustry;
                return (
                  <button
                    key={ind.slug}
                    type="button"
                    onClick={() => setActiveIndustry(i)}
                    className={`flex items-center gap-2.5 border-t border-on-inverse-border py-3 text-left text-[13.5px] font-bold transition-colors duration-200 last:border-b ${
                      isActive ? "text-on-inverse" : "text-on-inverse-muted hover:text-on-inverse"
                    }`}
                  >
                    <ind.icon size={14} className={isActive ? "text-accent" : "text-on-inverse-faint"} />
                    {ind.title}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-on-inverse-border bg-white/5 p-5">
              <p className="text-sm leading-relaxed text-on-inverse">{active.model}</p>

              <div className="mt-4 text-[10.5px] font-bold uppercase tracking-wide text-accent">
                Key processes
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-on-inverse-muted">
                {active.caps.join(" · ")}
              </p>

              <div className="mt-4 text-[10.5px] font-bold uppercase tracking-wide text-accent">
                Management visibility
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-on-inverse-muted">
                {active.visibility}
              </p>

              {active.flow && (
                <>
                  <div className="mt-4 text-[10.5px] font-bold uppercase tracking-wide text-accent">
                    Signature process
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
                    {active.flow.map((step, si) => (
                      <span key={step} className="flex items-center gap-1.5">
                        {si > 0 && <ArrowRight size={10} className="shrink-0 text-on-inverse-faint" />}
                        <span className="whitespace-nowrap rounded-md bg-white/10 px-2 py-1 text-[11px] font-bold text-on-inverse">
                          {step}
                        </span>
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-on-inverse-border pt-10 lg:mt-20">
          <h3 className="max-w-xl text-lg font-bold text-on-inverse sm:text-xl">
            One transformation approach.
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-on-inverse-muted">
            We have worked across manufacturing, technology, services,
            healthcare, education and trading businesses. Because client
            confidentiality matters, we showcase our industry and
            business-process experience rather than publishing sensitive
            client information.
          </p>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden border-y border-on-inverse-border py-6">
          <div className="mb-3 text-center text-[11px] font-bold uppercase tracking-wide text-accent">
            The technology ecosystem
          </div>
          <div className="group relative overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12">
              {[...ecosystem, ...ecosystem].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className={`shrink-0 whitespace-nowrap font-bold ${
                    i % ecosystem.length === 0 ? "text-accent" : "text-on-inverse-muted"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 lg:mt-20">
          <h2 className="max-w-lg text-xl font-bold leading-snug text-on-inverse sm:text-2xl">
            Data isn&apos;t the finish line.
            <br />
            <span className="text-on-inverse-muted">Decision is.</span>
          </h2>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {visibilityChain.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                {i > 0 && <ArrowRight size={12} className="shrink-0 text-on-inverse-faint" />}
                <span className="whitespace-nowrap rounded-md border border-on-inverse-border bg-white/5 px-3.5 py-2 text-sm font-bold text-on-inverse">
                  {step}
                </span>
              </span>
            ))}
          </div>

          <div className="mt-8 flex max-w-2xl flex-col">
            {visibilityQuestions.map((q) => (
              <div
                key={q}
                className="border-t border-on-inverse-border py-3.5 text-sm italic text-on-inverse-muted last:border-b"
              >
                &ldquo;{q}&rdquo;
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </HoverGlow>
  );
}
