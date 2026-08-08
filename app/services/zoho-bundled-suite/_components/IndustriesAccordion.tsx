"use client";

import { useState } from "react";
import { manrope } from "./fonts";

const industries = [
  { name: "EV Manufacturing", detail: "Procurement, inventory, operational workflows, sales, service and reporting." },
  { name: "Real Estate", detail: "Lead management, property pipelines, site visits, booking, collections and management reporting." },
  { name: "Automobile", detail: "Sales pipelines, service scheduling, inventory and dealership reporting." },
  { name: "Laptop Manufacturing", detail: "BOM, spare parts, procurement, inventory, sales and reporting." },
  { name: "Refurbishing", detail: "Intake, grading, spare parts, refurbishment workflow and resale inventory." },
  { name: "Spare Part Management", detail: "Parts catalogue, procurement, warehouse allocation and stock reporting." },
  { name: "Healthcare", detail: "Patient records, scheduling, billing and operational reporting." },
  { name: "Education", detail: "Enquiry, counselling, admissions, fee management and reporting." },
  { name: "Trading", detail: "Multi-warehouse inventory, purchase and sales order flow, and margin reporting." },
];

export function IndustriesAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-14 border-t border-[#E3E1D9]">
      {industries.map((ind, i) => {
        const isOpen = open === i;
        return (
          <div key={ind.name} className="border-b border-[#E3E1D9]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-baseline gap-5 py-5 text-left"
            >
              <span className="min-w-[26px] text-[13px] font-extrabold text-[#0E8797]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`${manrope.className} text-lg font-extrabold text-[#191D23]`}>
                {ind.name}
              </span>
              <span
                className={`ml-auto text-lg text-[#59616B] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pl-12 text-[13.5px] leading-[1.7] text-[#3F454D]">
                  {ind.detail}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
