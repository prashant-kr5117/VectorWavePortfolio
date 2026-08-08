import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { Statement } from "./Statement";
import { FlowRow } from "./FlowRow";

export function SupportingStatementSection() {
  return (
    <section className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading={`We don't start by asking`}
          mutedLine={`"which Zoho app do you need?"`}
          lede={`We start by asking how your business works. The application choice comes after — not before.`}
        />
        <FlowRow
          className="mt-3"
          onLight
          steps={[
            "Business Model",
            "Process",
            "Data",
            "System",
            "Automation",
            { label: "Reporting", emphasis: false },
          ]}
        />
      </div>
    </section>
  );
}

export function ManifestoSection() {
  return (
    <section className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading={`We don't just have developers.`}
          mutedLine="We have people who understand the business."
          lede="Our Zoho practice is supported by expertise across Finance, Supply Chain, Operations, Business Process, Data & Analytics and Solution Architecture — alongside development. That combination is what lets us decide which applications should be used, which processes should be automated, and where custom development is actually justified."
        />
        <div className="mt-5 max-w-4xl">
          <Reveal className="border-t border-[#E3E1D9] py-8">
            <span className="text-[13px] font-extrabold tracking-[0.06em] text-[#0E8797]">
              GREAT ZOHO IMPLEMENTATIONS
            </span>
            <h3 className={`${manrope.className} mt-2 text-xl font-extrabold text-[#191D23]`}>
              Are not built by developers alone.
            </h3>
            <p className="mt-3.5 max-w-2xl text-[14.5px] leading-[1.7] text-[#3F454D]">
              They are built by people who understand finance, operations,
              supply chain, sales, data and technology. Technology teams
              build the system. Business specialists make sure the system
              reflects the business. It&apos;s a multidisciplinary
              operating model, not a criticism of either discipline.
            </p>
          </Reveal>
          <Reveal className="border-t border-[#E3E1D9] py-8 last:border-b">
            <span className="text-[13px] font-extrabold tracking-[0.06em] text-[#0E8797]">
              LEADERSHIP PHILOSOPHY
            </span>
            <h3 className={`${manrope.className} mt-2 text-xl font-extrabold text-[#191D23]`}>
              The system is only as good as the data management can trust.
            </h3>
            <p className="mt-3.5 max-w-2xl text-[14.5px] leading-[1.7] text-[#3F454D]">
              VectorWave&apos;s leadership has a background in finance and
              data analysis, and it shapes how we design systems — with a
              strong focus on financial accuracy, reporting accuracy, KPI
              design, reconciliation and management visibility.
              Implementation teams design with management reporting in
              mind from the beginning, not as an afterthought.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
