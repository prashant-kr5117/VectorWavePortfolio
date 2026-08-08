import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { Statement } from "./Statement";
import { FlowRow } from "./FlowRow";
import { ExternalLink } from "./buttons";

const plans = [
  {
    name: "Zoho One",
    tag: "Broad business operating ecosystem",
    desc: "A single subscription spanning the breadth of Zoho's applications across CRM, Finance, HR, Operations, Analytics, Collaboration, Automation and Customer Experience. One possible architecture for organizations that want broad ecosystem coverage under one admin console — not a fit for every company.",
    scope: ["CRM", "Finance", "HR", "Operations", "Analytics", "Collaboration", "Automation", "Customer Experience"],
    pricingHref: "https://www.zoho.com/one/pricing.html",
  },
  {
    name: "Zoho CRM Plus",
    tag: "Customer experience & revenue ecosystem",
    desc: "Relevant when the primary transformation is customer acquisition, sales and customer experience — bringing CRM, sales, marketing, customer engagement, support and analytics onto one interface.",
    scope: ["CRM", "Sales", "Marketing", "Customer Engagement", "Support", "Analytics"],
    pricingHref: "https://www.zoho.com/crm/crmplus/pricing.html",
  },
  {
    name: "Zoho Finance Plus",
    tag: "Connected finance operations",
    desc: "Connects Books, Expense, Inventory, Billing and finance workflows into one back-office layer. This is the bundle we map most directly against our own Finance and reporting expertise.",
    scope: ["Books", "Expense", "Inventory", "Billing", "Finance Workflows", "Reporting"],
    pricingHref: "https://www.zoho.com/us/financeplus/pricing/",
  },
  {
    name: "Zoho People Plus",
    tag: "Connected people operations",
    desc: "A bundle for HR-led organizations that need hiring, HR operations, performance and workforce management connected in one place. Exact application inclusions are set by Zoho and are worth confirming against the current plan details before deciding.",
    scope: ["Hiring", "HR Operations", "Performance", "Workforce Management"],
    pricingHref: "https://www.zoho.com/peopleplus/pricing.html",
  },
];

export function PlansSection() {
  return (
    <section id="plans" className="bg-[#E8E7E2] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="One business."
          mutedLine="Different ways to build it."
          lede="Zoho offers multiple product bundles and individual applications. The right choice depends on your business model, processes, departments, users, data and growth plans. We don't sell a plan — we help you choose the right architecture. Pricing and packaging change on Zoho's side, so figures live on Zoho's own pages, not here."
        />

        <div className="mt-4">
          {plans.map((plan) => (
            <Reveal
              key={plan.name}
              className="grid grid-cols-1 gap-4 border-t border-[#191D23]/[0.14] py-8 last:border-b lg:grid-cols-[220px_1fr] lg:gap-9"
            >
              <div>
                <div className={`${manrope.className} text-xl font-extrabold text-[#191D23]`}>
                  {plan.name}
                </div>
                <div className="mt-1.5 text-[12.5px] font-bold text-[#0E8797]">{plan.tag}</div>
              </div>
              <div>
                <p className="mb-4 max-w-2xl text-[14.5px] leading-[1.7] text-[#3F454D]">
                  {plan.desc}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {plan.scope.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-[#E3E1D9] bg-[#F5F4EF] px-3 py-1.5 text-xs font-bold text-[#191D23]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-5">
                  <ExternalLink href={plan.pricingHref}>View Official Zoho Pricing</ExternalLink>
                  <a href="#cta" className="text-[12.5px] font-bold text-[#59616B] hover:text-[#191D23]">
                    Talk to VectorWave
                  </a>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal className="grid grid-cols-1 gap-4 border-t border-[#191D23]/[0.14] py-8 last:border-b lg:grid-cols-[220px_1fr] lg:gap-9">
            <div>
              <div className={`${manrope.className} text-xl font-extrabold text-[#191D23]`}>
                Zoho Books
              </div>
              <div className="mt-1.5 text-[12.5px] font-bold text-[#0E8797]">
                Accounting at the core of your business system
              </div>
            </div>
            <div>
              <p className="mb-4 max-w-2xl text-[14.5px] leading-[1.7] text-[#3F454D]">
                Standalone accounting — AR, AP, banking, tax, reconciliation
                and reporting — for businesses that need Finance solved
                first and everything else connected around it later.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {["Accounting", "AR / AP", "Banking", "Tax", "Reconciliation", "Reporting", "Automation"].map(
                  (s) => (
                    <span
                      key={s}
                      className="rounded-md border border-[#E3E1D9] bg-[#F5F4EF] px-3 py-1.5 text-xs font-bold text-[#191D23]"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
              <FlowRow
                className="mb-4"
                onLight
                steps={["Tally", { label: "Zoho Books", emphasis: true }, "Management Reporting"]}
              />
              <div className="flex flex-wrap items-center gap-5">
                <ExternalLink href="https://www.zoho.com/us/books/pricing/">
                  View Official Zoho Pricing
                </ExternalLink>
                <a href="#cta" className="text-[12.5px] font-bold text-[#59616B] hover:text-[#191D23]">
                  Talk to VectorWave
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <h3 className={`${manrope.className} text-2xl font-extrabold text-[#191D23]`}>
            Or build only what you need.
          </h3>
          <p className="mt-3.5 max-w-xl text-[14.5px] leading-[1.7] text-[#3F454D]">
            Not every business needs a full suite. Sometimes the right
            solution is a focused set of applications connected around a
            specific business process.
          </p>
          <FlowRow
            className="mt-4"
            onLight
            steps={["CRM", "Books", "Inventory", "Desk", "SalesIQ", "FSM", "Analytics", "Creator"]}
          />
        </Reveal>

        <Reveal className="mt-16 flex flex-col items-center gap-2">
          <FlowRow
            center
            onLight
            steps={["Business Size", "Complexity", "Departments", "Processes", "Data", "Growth Plans"]}
          />
          <div className="h-6 w-0.5 bg-gradient-to-b from-[#191D23] to-[#20C4D9] opacity-50" />
          <div className={`${manrope.className} rounded-lg bg-[#191D23] px-5 py-2.5 text-[13px] font-extrabold text-[#F2F1EA]`}>
            ZOHO ECOSYSTEM
          </div>
          <div className="h-6 w-0.5 bg-gradient-to-b from-[#191D23] to-[#20C4D9] opacity-50" />
          <FlowRow
            center
            onLight
            steps={["Zoho One", "CRM Plus", "Finance Plus", "People Plus", "Individual Applications"]}
          />
          <div className="h-6 w-0.5 bg-gradient-to-b from-[#191D23] to-[#20C4D9] opacity-50" />
          <div
            className={`${manrope.className} rounded-lg px-6 py-3 text-center text-[15px] font-extrabold text-[#F2F1EA]`}
            style={{ background: "linear-gradient(120deg, #191D23, #0E8797, #20C4D9)" }}
          >
            VectorWave Solution Architecture
          </div>
        </Reveal>
        <p className="mt-7 text-center text-[15px] font-bold text-[#3F454D]">
          The package is not the starting point. The business is.
        </p>

        <div className="mt-16">
          <Statement
            size="small"
            heading="Which Zoho plan should you choose?"
            mutedLine="That depends on how your business operates."
            lede="We evaluate business model, departments, users, processes, finance, CRM, inventory, HR, integrations, reporting and future growth — then help you choose what you actually need."
          />
          <div className="mt-6">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E3E1D9] px-6 py-4 text-[13.5px] font-bold tracking-wide text-[#191D23] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#102A43] hover:bg-[#EFEEE8]"
            >
              Talk to a Solution Architect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
