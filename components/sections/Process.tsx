import { Fragment } from "react";
import Reveal from "@/components/Reveal";

const steps = [
  { n: 1, label: "Discover" },
  { n: 2, label: "Design" },
  { n: 3, label: "Build" },
  { n: 4, label: "Support" },
];

export default function Process() {
  return (
    <section className="bg-surface-alt px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-8 text-center">
          <h2 className="text-xl font-bold text-ink sm:text-2xl">
            How we work
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            A clear path from first call to a live, working system.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0">
          {steps.map((step, i) => (
            <Fragment key={step.n}>
              <Reveal
                delay={i * 80}
                className="group flex items-center gap-3 sm:flex-col sm:gap-3 sm:text-center"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-inverse text-xs font-bold text-on-inverse transition-all duration-300 group-hover:scale-110 group-hover:bg-accent">
                  {step.n}
                </div>
                <div className="text-sm font-bold text-ink">
                  {step.label}
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div className="hidden flex-1 sm:mt-4 sm:block sm:h-0.5 sm:bg-border" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
