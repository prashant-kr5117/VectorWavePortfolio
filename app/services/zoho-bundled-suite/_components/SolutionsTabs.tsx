"use client";

import { useState } from "react";
import { manrope } from "./fonts";

const solutions = [
  { name: "Sales Transformation", problem: "Leads scatter across sources and sales activity is invisible to management.", solution: "A CRM architecture matched to how your team actually sells, with assignment, automation and forecasting built in.", outcome: "A pipeline management can see and act on." },
  { name: "Finance Automation", problem: "Books don't reconcile, and closing the month takes longer than it should.", solution: "Zoho Books structured around your Chart of Accounts, with reconciliation and tax configuration built for your entity.", outcome: "Financial reporting Finance can actually trust." },
  { name: "Inventory & Warehouse", problem: "Stock counts drift from what's actually on the shelf.", solution: "Zoho Inventory connected to sales, purchasing and fulfillment as one flow.", outcome: "Stock visibility that matches reality." },
  { name: "Customer Support", problem: "Tickets live in email, chat and spreadsheets with no shared history.", solution: "Zoho Desk connected to CRM so support has full customer context.", outcome: "Faster resolution, one customer record." },
  { name: "Business Intelligence", problem: "Every department has its own version of the numbers.", solution: "Zoho Analytics dashboards built on validated, connected transaction data.", outcome: "One shared source of truth for management." },
  { name: "AI & Workflow Automation", problem: "Repetitive approvals and data entry consume staff time.", solution: "Automation and AI agents applied to defined, high-volume workflows.", outcome: "Time reclaimed for higher-value work." },
  { name: "Custom Business Applications", problem: "A core process has no application that fits it.", solution: "A purpose-built application on Zoho Creator or adjacent tooling, connected to the rest of the system.", outcome: "No more spreadsheet as system of record." },
];

export function SolutionsTabs() {
  const [active, setActive] = useState(0);
  const current = solutions[active];

  return (
    <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr] lg:gap-14">
      <div className="flex flex-col">
        {solutions.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={`flex items-baseline gap-3.5 border-l-2 py-3.5 pl-4 text-left text-[15px] font-bold transition-all duration-200 ${
                isActive
                  ? "border-[#20C4D9] font-extrabold text-[#191D23]"
                  : "border-[#E3E1D9] text-[#59616B] hover:text-[#191D23]"
              }`}
            >
              <span
                className={`${manrope.className} text-[11.5px] font-extrabold ${
                  isActive ? "text-[#0E8797]" : "text-[#59616B]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.name}
            </button>
          );
        })}
      </div>
      <div>
        <div className="text-[14.5px] leading-[1.7] text-[#3F454D]">
          <b className={`${manrope.className} mb-1.5 block text-[19px] font-extrabold text-[#191D23]`}>
            {current.problem}
          </b>
        </div>
        <div className="mt-4 text-[14.5px] leading-[1.7] text-[#3F454D]">
          <span className="mr-1.5 font-extrabold text-[#20C4D9]">→</span>
          {current.solution}
        </div>
        <div className="mt-4 text-[14.5px] leading-[1.7] text-[#3F454D]">
          <span className="mr-1.5 font-extrabold text-[#20C4D9]">→</span>
          <span className="font-bold text-[#0E8797]">{current.outcome}</span>
        </div>
      </div>
    </div>
  );
}
