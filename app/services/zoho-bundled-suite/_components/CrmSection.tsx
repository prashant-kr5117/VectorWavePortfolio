import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { Statement } from "./Statement";
import { FlowRow } from "./FlowRow";

const sources = [
  "Website",
  "Facebook",
  "Google",
  "LinkedIn",
  "WhatsApp",
  "Email",
  "Phone",
  "Portals",
  "Landing Pages",
  "Third-Party Apps",
];

export function CrmSection() {
  return (
    <section
      id="crm"
      className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      style={{ background: "linear-gradient(135deg,#0B0E12 0%,#102A43 100%)" }}
    >
      <div className="mx-auto max-w-7xl">
        <Statement
          onDark
          heading="CRM should reflect"
          mutedLine="how your sales team actually sells."
          lede="We design pipelines around the business model, sales process and industry — not around a generic CRM template."
        />
        <FlowRow
          className="mt-8"
          steps={[
            "Lead Sources",
            "Qualification",
            { label: "Industry-Specific Pipeline", emphasis: true },
            "Automation",
            "Forecast",
            "Management",
          ]}
        />
        <p className="mt-6 max-w-md text-[13.5px] text-[#9AA0A6]">
          Lead qualification, assignment rules, approval processes,
          follow-ups, automation, forecasting and sales dashboards — shaped
          around the real sales cycle.
        </p>
      </div>
    </section>
  );
}

export function LeadSourceSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-center sm:px-6 lg:px-10 lg:py-28"
      style={{ background: "linear-gradient(135deg,#0B0E12 0%,#102A43 100%)" }}
    >
      <Reveal className="mx-auto max-w-2xl">
        <h2 className={`${manrope.className} text-[28px] font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-[40px]`}>
          Every lead has a source.
          <span className="block text-[#9AA0A6]">Every source should become data.</span>
        </h2>
      </Reveal>
      <Reveal className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2.5">
        {sources.map((s) => (
          <span
            key={s}
            className="rounded-md border border-[#20C4D9]/20 bg-[#141922] px-3.5 py-2 text-[12.5px] font-bold text-[#F2F1EA]"
          >
            {s}
          </span>
        ))}
      </Reveal>
      <div className="mx-auto my-6 h-6 w-0.5 bg-gradient-to-b from-[#20C4D9] to-[#102A43] opacity-70" />
      <div
        className={`${manrope.className} mx-auto inline-block rounded-lg px-6 py-3 text-[13px] font-extrabold tracking-[0.03em] text-[#F2F1EA]`}
        style={{ background: "linear-gradient(120deg, rgba(25,29,35,0.95), rgba(32,196,217,0.85))" }}
      >
        ZOHO CRM
      </div>
      <div className="mx-auto my-6 h-6 w-0.5 bg-gradient-to-b from-[#20C4D9] to-[#102A43] opacity-70" />
      <FlowRow
        center
        steps={["Assignment", "Qualification", "Automation", "Follow-Up", "Pipeline", { label: "Reporting", emphasis: true }]}
      />
      <p className="mx-auto mt-7 max-w-lg text-[13.5px] text-[#9AA0A6]">
        We design the lead architecture so management can see where leads
        come from, conversion by source, sales performance and campaign
        performance.
      </p>
    </section>
  );
}
