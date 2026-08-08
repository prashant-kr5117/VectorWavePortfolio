import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";
import { PrimaryConsultButton, OutlineDarkConsultButton } from "./buttons";

export function ZohoCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-10"
      style={{
        background:
          "radial-gradient(circle at 70% 30%, rgba(32,196,217,0.07), transparent 45%), linear-gradient(135deg,#0B0E12 0%,#102A43 100%)",
      }}
    >
      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <h2 className={`${manrope.className} text-[28px] font-bold leading-tight tracking-tight text-white sm:text-[42px]`}>
          Let&apos;s design your Zoho system around your business.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-[#9AA0A6]">
          Tell us how your business operates today. We&apos;ll help
          determine the right Zoho applications, processes, integrations
          and reporting architecture for where you want to go.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <PrimaryConsultButton>Book a Zoho Consultation</PrimaryConsultButton>
          <OutlineDarkConsultButton>Talk to a Solution Architect</OutlineDarkConsultButton>
        </div>
      </Reveal>
    </section>
  );
}
