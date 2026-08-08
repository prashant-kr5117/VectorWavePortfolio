import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { Statement } from "./Statement";

const rows = [
  { title: "Finance", desc: "Understands accounting and reporting." },
  { title: "Supply Chain", desc: "Understands procurement, inventory and movement." },
  { title: "Operations", desc: "Understands how work gets executed." },
  { title: "Solution Architecture", desc: "Connects business requirements to system design." },
  { title: "Development", desc: "Builds automation and integrations." },
  { title: "Data & Analytics", desc: "Turns transactions into management visibility." },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="One implementation."
          mutedLine="Multiple disciplines."
          lede={`That is why we don't design Zoho in silos.`}
        />
        <Reveal className="relative mt-14 border-l-2 border-[#20C4D9] pl-7">
          {rows.map((row) => (
            <div key={row.title} className="relative py-5">
              <span className="absolute -left-[33px] top-[26px] h-2 w-2 rounded-full bg-[#20C4D9]" />
              <div className="flex flex-wrap items-baseline gap-4">
                <h4 className={`${manrope.className} min-w-[220px] text-base font-extrabold text-[#191D23]`}>
                  {row.title}
                </h4>
                <p className="text-[13.5px] leading-[1.6] text-[#3F454D]">{row.desc}</p>
              </div>
            </div>
          ))}
          <div className={`${manrope.className} mt-2 pt-0 text-base font-extrabold text-[#191D23]`}>
            One business system.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
