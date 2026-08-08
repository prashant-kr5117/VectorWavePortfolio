import Reveal from "@/components/Reveal";
import { Statement } from "./Statement";
import { FlowRow } from "./FlowRow";

const examples: { label: string; steps: (string | { label: string; emphasis?: boolean })[] }[] = [
  {
    label: "Multi-Source Lead Business",
    steps: [
      "Website / Meta / Google / Portals / Phone",
      "CRM",
      "Assignment",
      "Industry Pipeline",
      "Quote / Order",
      "Finance",
      { label: "Management Dashboard", emphasis: true },
    ],
  },
  {
    label: "Shopify Business",
    steps: [
      "Shopify Order",
      "Customer / Product",
      "Zoho",
      "Inventory",
      "Invoice",
      "Payment",
      { label: "Management Reporting", emphasis: true },
    ],
  },
  {
    label: "Tally → Zoho Books",
    steps: [
      "Tally",
      "Data Mapping",
      "Chart of Accounts",
      "Opening Balances",
      "Historical Data",
      "Zoho Books",
      "Reconciliation",
      { label: "Financial Reporting", emphasis: true },
    ],
  },
  {
    label: "Multi-Department Business",
    steps: [
      "Sales + Finance + Warehouse + Operations",
      { label: "One Connected Zoho Architecture" },
      { label: "One Management View", emphasis: true },
    ],
  },
];

export function ExamplesSection() {
  return (
    <section className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="Where this matters"
          mutedLine="in the real world."
          lede="Illustrative implementation patterns — not case studies unless separately verified."
        />
        <div className="mt-14">
          {examples.map((ex) => (
            <Reveal key={ex.label} className="border-t border-[#E3E1D9] py-7 last:border-b">
              <div className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#0E8797]">
                {ex.label}
              </div>
              <FlowRow onLight steps={ex.steps} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
