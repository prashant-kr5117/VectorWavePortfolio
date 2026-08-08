import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Statement } from "./Statement";
import ZohoEcosystemImage from "@/src/Zoho Ecosystem.png";

const columns = [
  {
    title: "Customer",
    items: [
      { name: "Zoho CRM", desc: "Sales pipeline & customer records" },
      { name: "Zoho SalesIQ", desc: "Website chat & visitor tracking" },
      { name: "Zoho Desk", desc: "Customer support & ticketing" },
      { name: "Zoho Campaigns", desc: "Email & marketing" },
    ],
  },
  {
    title: "Finance",
    items: [
      { name: "Zoho Books", desc: "Accounting & financial reporting" },
      { name: "Zoho Expense", desc: "Expense & reimbursement" },
      { name: "Zoho Payroll", desc: "Payroll processing" },
    ],
  },
  {
    title: "Operations",
    items: [
      { name: "Zoho Inventory", desc: "Stock & warehouse management" },
      { name: "Zoho FSM", desc: "Field service management" },
      { name: "Zoho Projects", desc: "Project & task management" },
      { name: "Zoho People", desc: "HR operations" },
    ],
  },
  {
    title: "Business Management",
    items: [
      { name: "Zoho Analytics", desc: "Reporting & dashboards" },
      { name: "Zoho Creator", desc: "Custom applications" },
      { name: "Zoho Flow", desc: "Automation & workflows" },
      { name: "Zoho ERP", desc: "Connected business operations" },
    ],
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="The Zoho ecosystem."
          mutedLine="One business. Connected applications."
          lede="We work across the broader Zoho ecosystem, grouped here by business function rather than as a flat product catalogue — because knowing where each application belongs is the actual skill."
        />
        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {columns.map((col, ci) => (
            <Reveal key={col.title} delay={ci * 60} className="border-t-2 border-[#191D23] pt-5">
              <h4 className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#0E8797]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`text-[14px] font-bold text-[#191D23] ${
                      i > 0 ? "border-t border-[#E3E1D9] pt-3" : ""
                    }`}
                  >
                    {item.name}
                    <span className="mt-0.5 block text-[11.5px] font-normal text-[#59616B]">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-lg text-[13px] italic text-[#59616B]">
          We know the ecosystem well enough to decide what belongs where —
          not every business needs every application.
        </p>

        <Reveal className="mt-14 overflow-hidden rounded-xl border border-[#E3E1D9] bg-white">
          <Image
            src={ZohoEcosystemImage}
            alt="The Zoho ecosystem grouped by function: Customer, Collaboration, Analytics & Data, People, Automation & Platform, Inventory & Operations, Finance, and Marketing"
            className="h-auto w-full"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </Reveal>
      </div>
    </section>
  );
}
