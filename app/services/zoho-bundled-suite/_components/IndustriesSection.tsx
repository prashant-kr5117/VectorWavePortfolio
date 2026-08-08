import { Statement } from "./Statement";
import { IndustriesAccordion } from "./IndustriesAccordion";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="Zoho should adapt"
          mutedLine="to the industry."
          lede="Not a fixed template — industry experience that shapes how the pipeline, inventory and reporting are actually built."
        />
        <IndustriesAccordion />
      </div>
    </section>
  );
}
