import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { Statement } from "./Statement";
import { FlowRow } from "./FlowRow";

const integrations = [
  { label: "SHOPIFY", title: "Orders, customers, products", desc: "Connected into inventory and finance workflows." },
  { label: "CLIENT WEBSITE", title: "Lead capture", desc: "Routed into CRM assignment, follow-up and reporting." },
  { label: "WAREHOUSE SYSTEM", title: "Inventory, orders, fulfillment", desc: "Status kept in sync across systems." },
  { label: "PAYMENT SYSTEM", title: "Payment, reconciliation", desc: "Customer and invoice status kept current." },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="Your business doesn't live inside Zoho."
          mutedLine="Your system shouldn't either."
          lede="We work with native integrations, API integrations, webhooks, third-party applications and custom integrations — only where actually supported by the implementation."
        />
        <div className="mt-11 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
          {integrations.map((item, i) => (
            <Reveal key={item.label} delay={i * 60} className="border-t border-[#E3E1D9] pt-5">
              <div className="mb-2 text-xs font-extrabold text-[#102A43]">{item.label}</div>
              <h4 className={`${manrope.className} mb-2 text-[17px] font-extrabold text-[#191D23]`}>
                {item.title}
              </h4>
              <p className="text-[13.5px] leading-[1.6] text-[#59616B]">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntegrationArchitectureSection() {
  return (
    <section className="bg-[#F5F4EF] px-4 py-20 text-center sm:px-6 lg:px-10 lg:py-28">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-2.5">
        <FlowRow
          center
          onLight
          steps={["Website", "Shopify", "Lead Sources", "Warehouse", "Payments", "Other Systems"]}
        />
        <div className="h-6 w-0.5 bg-gradient-to-b from-[#102A43] to-[#20C4D9] opacity-70" />
        <div className="rounded-lg border border-[#20C4D9]/20 bg-[#141922] px-6 py-2.5 text-[13px] font-extrabold text-[#F2F1EA]">
          INTEGRATION LAYER
        </div>
        <div className="h-6 w-0.5 bg-gradient-to-b from-[#102A43] to-[#20C4D9] opacity-70" />
        <FlowRow
          center
          steps={[
            { label: "CRM", emphasis: true },
            { label: "Books", emphasis: true },
            { label: "Inventory", emphasis: true },
            { label: "Desk", emphasis: true },
            { label: "FSM", emphasis: true },
            { label: "ERP", emphasis: true },
            { label: "Analytics", emphasis: true },
          ]}
        />
        <div className="h-6 w-0.5 bg-gradient-to-b from-[#102A43] to-[#20C4D9] opacity-70" />
        <div
          className={`${manrope.className} rounded-lg px-6 py-3 text-[13px] font-extrabold tracking-[0.02em] text-[#F2F1EA]`}
          style={{ background: "linear-gradient(120deg,#191D23,#20C4D9)" }}
        >
          MANAGEMENT — DASHBOARDS · REPORTING · DECISIONS
        </div>
      </Reveal>
    </section>
  );
}
