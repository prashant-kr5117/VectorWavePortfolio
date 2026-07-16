import Reveal from "@/components/Reveal";

export default function Testimonial() {
  return (
    <section className="px-4 py-14 text-center sm:px-6 lg:px-10">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-xl font-bold text-[#0B1B33] sm:text-2xl">
          Delight over satisfaction
        </h2>
        <p className="mt-4 text-base italic text-[#55607A] sm:text-lg">
          &ldquo;I don&apos;t believe in customer satisfaction, it sets the
          bar too low. Customers should be truly delighted by the solutions
          we deliver.&rdquo;
        </p>
        <p className="mt-4 text-sm font-bold text-[#0B1B33]">
          Sam, Founder &amp; CEO
        </p>
      </Reveal>
    </section>
  );
}
