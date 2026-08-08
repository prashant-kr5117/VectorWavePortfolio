import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { PrimaryConsultButton } from "./buttons";

const chain: { label: string; desc: string; emphasis?: boolean }[] = [
  { label: "BUSINESS", desc: "How your business actually operates", emphasis: true },
  { label: "CRM", desc: "Customer & sales management" },
  { label: "FINANCE", desc: "Books, receivables, reporting" },
  { label: "INVENTORY", desc: "Stock, warehouse, fulfillment" },
  { label: "OPERATIONS", desc: "Field service, projects, workflow" },
  { label: "DATA", desc: "One structure across every app" },
  { label: "MANAGEMENT", desc: "Dashboards leadership actually uses", emphasis: true },
];

export function Hero() {
  return (
    <header
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      style={{
        background:
          "radial-gradient(circle at 75% 20%, rgba(32,196,217,0.10) 0%, rgba(16,42,67,0.35) 28%, rgba(11,14,18,1) 65%), #0B0E12",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A7B0BA]">
            <span className="h-[5px] w-[5px] rounded-full bg-[#20C4D9] shadow-[0_0_6px_#20C4D9]" />
            Zoho Implementation · Consulting · Automation · Integration · Migration · Analytics
          </div>
          <h1
            className={`${manrope.className} mt-4 text-[42px] font-extrabold leading-[0.94] tracking-[-0.045em] text-white sm:text-[64px] lg:text-[88px]`}
          >
            Zoho, <span className="text-[#20C4D9]">designed</span>
            <br />
            around your business.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#9AA0A6] sm:text-lg">
            From CRM and Finance to Inventory, Operations, Automation and
            Management Reporting — we design Zoho as one connected business
            system, not a set of disconnected apps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <PrimaryConsultButton>Book a Zoho Consultation</PrimaryConsultButton>
            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-4 text-[13.5px] font-bold tracking-wide text-[#F2F1EA] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#20C4D9] hover:bg-[#20C4D9]/[0.06]"
            >
              Talk to a Solution Architect
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto flex w-full max-w-[340px] flex-col">
          {chain.map((node, i) => (
            <div key={node.label}>
              <div
                className={`border-l-2 py-2.5 pl-5 ${
                  node.emphasis ? "border-[#20C4D9]" : "border-white/[0.14]"
                }`}
              >
                <b
                  className={`${manrope.className} block text-[13px] font-extrabold tracking-[0.06em] ${
                    node.emphasis ? "text-[15px] text-[#72D5DF]" : "text-[#F2F1EA]"
                  }`}
                >
                  {node.label}
                </b>
                <span className="mt-0.5 block text-[11.5px] text-[#9AA0A6]">{node.desc}</span>
              </div>
              {i < chain.length - 1 && <div className="h-3 w-0.5 bg-white/10" />}
            </div>
          ))}
        </Reveal>
      </div>
    </header>
  );
}
