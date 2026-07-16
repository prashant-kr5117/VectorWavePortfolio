import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HowWeHelp() {
  return (
    <section className="px-4 py-14 text-center sm:px-6 lg:px-10">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-xl font-bold text-ink sm:text-2xl">
          How can we help you?
        </h2>
        <p className="mt-4 text-sm text-ink-muted sm:text-base">
          At VectorWave Technologies, we take the time to understand your
          business first, then build solutions that actually fit. We focus on
          what matters, solutions that are secure, scalable, and are built to
          perform. Whether you&apos;re just starting out or ready to grow,
          we&apos;re here to make your journey smoother.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:translate-y-0"
        >
          Book appointment
        </Link>
      </Reveal>
    </section>
  );
}
