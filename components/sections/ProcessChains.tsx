import { ArrowRight, ShoppingCart, ClipboardList, Warehouse, Factory } from "lucide-react";
import Reveal from "@/components/Reveal";

const processes = [
  {
    n: "01",
    icon: ShoppingCart,
    title: "Order to Cash",
    chain: ["Lead", "Opportunity", "Quote", "Sales Order", "Fulfillment", "Invoice", "Collection", "GL"],
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Procure to Pay",
    chain: ["Requirement", "Approval", "Purchase Order", "Receipt", "Vendor Bill", "Payment"],
  },
  {
    n: "03",
    icon: Warehouse,
    title: "Inventory",
    chain: ["Purchase", "Receipt", "Warehouse", "Movement", "Allocation", "Shipment", "Valuation"],
  },
  {
    n: "04",
    icon: Factory,
    title: "Manufacturing",
    chain: ["Demand", "Procurement", "Components", "Production", "Quality", "Finished Goods"],
  },
];

export default function ProcessChains() {
  return (
    <section className="bg-surface-alt px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-2xl">
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

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {processes.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 60}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-chip text-primary transition-transform duration-300 group-hover:scale-110">
                  <p.icon size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wide text-primary">{p.n}</span>
                  <div className="text-base font-bold text-ink">{p.title}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-y-2">
                {p.chain.map((step, si) => {
                  const isLast = si === p.chain.length - 1;
                  return (
                    <span key={step} className="flex items-center">
                      {si > 0 && (
                        <ArrowRight size={12} className="mx-1.5 shrink-0 text-ink-faint" />
                      )}
                      <span
                        className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-bold ${
                          isLast
                            ? "bg-primary text-white"
                            : "bg-surface-alt text-ink-soft"
                        }`}
                      >
                        {step}
                      </span>
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
