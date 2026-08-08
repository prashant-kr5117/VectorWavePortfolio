import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { Statement } from "./Statement";
import { FlowRow } from "./FlowRow";

const vflow = [
  { label: "Customer Management", target: "CRM / SalesIQ" },
  { label: "Customer Support", target: "Desk" },
  { label: "Finance", target: "Books" },
  { label: "Inventory", target: "Inventory" },
  { label: "Field Operations", target: "FSM" },
  { label: "ERP / Business Ops", target: "Zoho ERP" },
  { label: "Data & Management", target: "Analytics" },
  { label: "Custom Logic", target: "Creator / APIs / Automation" },
];

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      style={{ background: "linear-gradient(135deg,#0B0E12 0%,#102A43 100%)" }}
    >
      <div className="mx-auto max-w-7xl">
        <Statement
          onDark
          heading="We design the architecture."
          mutedLine="Not just the configuration."
          lede="Before configuring Zoho, we evaluate business model, sales process, finance structure, supply chain, inventory, operations, existing applications, data sources, reporting requirements and management KPIs. Only then do we decide which Zoho apps should be used."
        />

        <FlowRow
          className="mb-14 mt-8"
          steps={[
            "Zoho Provides the Options",
            "VectorWave Understands the Business",
            "Designs the Architecture",
            "Implements It",
            "Connects It",
            "Makes the Data Visible",
            { label: "Management Can Act On It", emphasis: true },
          ]}
        />

        <Reveal className="flex max-w-md flex-col items-start">
          {vflow.map((step, i) => (
            <div key={step.label} className="w-full">
              <div className="flex items-center gap-3.5 py-2.5">
                <b className={`${manrope.className} min-w-[190px] text-sm font-extrabold text-white`}>
                  {step.label}
                </b>
                <span className="text-[12.5px] text-[#9AA0A6]">→ {step.target}</span>
              </div>
              {i < vflow.length - 1 && <div className="ml-2 text-[13px] text-[#72D5DF]">↓</div>}
            </div>
          ))}
        </Reveal>
        <p className="mt-6 max-w-md text-[14.5px] italic text-[#9AA0A6]">
          Not every company needs every application. This is the difference
          between Zoho implementation and business system design.
        </p>
      </div>
    </section>
  );
}
