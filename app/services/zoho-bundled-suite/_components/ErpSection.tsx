import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { Statement } from "./Statement";

const stack = ["Zoho ERP", "CRM", "Books", "Inventory", "Desk / FSM", "Analytics"];

export function ErpSection() {
  return (
    <section id="erp" className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="Zoho ERP."
          mutedLine="The next layer of connected business operations."
          lede="Zoho ERP is a newer part of the ecosystem, and one we evaluate carefully in the context of the broader business architecture — alongside process design, finance, operations, inventory, integration and reporting."
        />
        <Reveal className="mt-10 rounded-xl bg-[#0B0E12] px-6 py-12 sm:px-10">
          <div className="mx-auto flex max-w-lg flex-col items-center gap-3.5 text-center">
            <div className="text-[13px] font-extrabold uppercase tracking-[0.05em] text-[#72D5DF]">
              Business Requirements
            </div>
            <div className="h-6 w-0.5 bg-gradient-to-b from-[#20C4D9] to-[#102A43] opacity-70" />
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {stack.map((item, i) => (
                <span key={item} className="flex items-center gap-2.5">
                  {i > 0 && <span className="text-sm text-[#9AA0A6]">+</span>}
                  <span className="rounded-lg border border-[#20C4D9]/20 bg-[#141922] px-4 py-2.5 text-[13px] font-bold text-[#F2F1EA]">
                    {item}
                  </span>
                </span>
              ))}
            </div>
            <div className="h-6 w-0.5 bg-gradient-to-b from-[#20C4D9] to-[#102A43] opacity-70" />
            <div className={`${manrope.className} text-base font-extrabold text-white`}>
              Connected Business System
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
