import Reveal from "@/components/Reveal";
import { Statement } from "./Statement";
import { FlowRow } from "./FlowRow";

const questions = [
  "Which sales channels are converting?",
  "Where are receivables increasing?",
  "Which products are moving?",
  "Where is inventory blocked?",
  "What is actual profitability?",
];

export function DataVisibilitySection() {
  return (
    <section
      id="data"
      className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      style={{ background: "linear-gradient(135deg,#12161C 0%,#16283A 100%)" }}
    >
      <div className="mx-auto max-w-7xl">
        <Statement
          onDark
          heading="Implementation is not the finish line."
          mutedLine="Management visibility is."
          lede="A system can have perfect workflows and still fail management if the data can't answer the right questions. We focus on data structure, data accuracy, KPI definitions, financial reporting, operational reporting and management dashboards."
        />
        <FlowRow
          className="mt-8"
          steps={["Transactions", "Data", "Validation", "KPIs", "Dashboards", { label: "Decisions", emphasis: true }]}
        />
        <Reveal className="mt-2 max-w-xl">
          {questions.map((q) => (
            <div key={q} className="border-t border-white/10 py-4 text-[15px] italic text-[#F2F1EA] last:border-b">
              &ldquo;{q}&rdquo;
            </div>
          ))}
        </Reveal>

        <div className="mt-16">
          <Statement
            onDark
            size="small"
            heading="The system should answer"
            mutedLine="management's questions."
            lede="VectorWave's leadership combines Finance and Data Analysis thinking with technology implementation, keeping data accuracy and management visibility central to solution design."
          />
          <FlowRow
            className="mt-6"
            steps={["Business Questions", "Data Model", "Transactions", "Validation", "KPIs", { label: "Dashboards", emphasis: true }]}
          />
        </div>
      </div>
    </section>
  );
}
