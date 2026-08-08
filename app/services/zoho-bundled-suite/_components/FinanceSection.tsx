import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { Statement } from "./Statement";
import { FlowRow } from "./FlowRow";

const items = ["P&L", "Balance Sheet", "Cash Flow", "AR / AP", "General Ledger", "Tax", "Reconciliation", "Opening Balances"];

export function FinanceSection() {
  return (
    <section id="finance" className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="Finance is not"
          mutedLine="an afterthought."
          lede="VectorWave has deep finance understanding alongside Zoho development expertise. Your Zoho implementation should produce books that Finance can actually trust."
        />
        <Reveal className="mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={item}
              className={`${manrope.className} border-t border-[#191D23]/[0.12] px-0 py-4 text-lg font-bold tracking-[-0.01em] text-[#191D23] ${
                i >= items.length - 2 ? "border-b sm:border-b" : ""
              } ${i % 2 === 0 ? "sm:pr-7" : "sm:pl-7"}`}
            >
              {item}
            </div>
          ))}
          <div
            className={`${manrope.className} col-span-1 border-t border-[#191D23]/[0.12] py-4 text-xl font-extrabold tracking-[-0.01em] text-[#0E8797] sm:col-span-2`}
          >
            Management Reporting
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TallyMigrationSection() {
  return (
    <section className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="From Tally to Zoho Books."
          mutedLine="Without losing the accounting story."
          lede="Migration is not just importing rows. The objective is a planned, mapped and validated migration that preserves financial structure, historical context, balances, reporting integrity and tax information."
        />
        <FlowRow
          className="mt-8 max-w-4xl"
          onLight
          steps={[
            "Tally Data Assessment",
            "Data Mapping",
            "Chart of Accounts",
            "Opening Balances",
            "Customers / Vendors",
            "Transactions",
            "Tax Configuration",
            "Reconciliation",
            { label: "Validation → Zoho Books", emphasis: true },
          ]}
        />
      </div>
    </section>
  );
}
