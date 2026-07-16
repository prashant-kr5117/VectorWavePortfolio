import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="bg-ink-inverse px-4 py-12 text-center sm:px-6">
      <Reveal>
        <h2 className="text-lg font-bold text-on-inverse sm:text-xl">
          Would you like to start a project with us?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-on-inverse-muted">
          Let&apos;s collaborate to turn your ideas into impactful digital
          solutions that drive real results.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:translate-y-0"
        >
          Book free consultation
        </Link>
      </Reveal>
    </section>
  );
}
