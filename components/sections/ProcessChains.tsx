import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const processes = [
  {
    n: "01",
    title: "Order to Cash",
    chain: ["Lead", "Opportunity", "Quote", "Sales Order", "Fulfillment", "Invoice", "Collection", "GL"],
  },
  {
    n: "02",
    title: "Procure to Pay",
    chain: ["Requirement", "Approval", "Purchase Order", "Receipt", "Vendor Bill", "Payment"],
  },
  {
    n: "03",
    title: "Inventory",
    chain: ["Purchase", "Receipt", "Warehouse", "Movement", "Allocation", "Shipment", "Valuation"],
  },
  {
    n: "04",
    title: "Manufacturing",
    chain: ["Demand", "Procurement", "Components", "Production", "Quality", "Finished Goods"],
  },
];

export default function ProcessChains() {
  return (
    <section className="bg-surface-alt px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface-chip px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-primary">
            How we think
          </span>
          <h2 className="mt-4 text-xl font-bold leading-snug text-ink sm:text-2xl">
            We don&apos;t start with software.
            <br />
            <span className="text-ink-muted">We start with how your business works.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-ink-muted sm:text-base">
            Sales, finance, procurement, inventory, manufacturing and
            operations are connected business processes, not isolated
            software modules.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {processes.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 60}
              className="border-t border-border py-8 last:border-b"
            >
              <div className="mb-4 flex flex-wrap items-baseline gap-3">
                <span className="text-xs font-bold tracking-wide text-primary">{p.n}</span>
                <span className="text-lg font-bold text-ink">{p.title}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {p.chain.map((step, si) => (
                  <span key={step} className="flex items-center gap-2">
                    {si > 0 && <ArrowRight size={12} className="shrink-0 text-ink-faint" />}
                    <span className="whitespace-nowrap rounded-md bg-surface-chip px-2.5 py-1 text-xs font-bold text-ink-soft">
                      {step}
                    </span>
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
