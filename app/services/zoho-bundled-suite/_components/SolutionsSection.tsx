import { Statement } from "./Statement";
import { SolutionsTabs } from "./SolutionsTabs";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-[#F5F4EF] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Statement
          heading="What can we build"
          mutedLine="around Zoho?"
          lede="Zoho is the platform. These are the kinds of business problems we solve on top of it."
        />
        <SolutionsTabs />
      </div>
    </section>
  );
}
