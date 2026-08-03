"use client";

import { useRef } from "react";
import Reveal from "@/components/Reveal";
import BookConsultationButton from "@/components/BookConsultationButton";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <Reveal>
        <div
          ref={ref}
          onMouseMove={handleMove}
          className="group relative overflow-hidden rounded-2xl border border-border bg-ink-inverse px-6 py-14 text-center transition-all duration-300 hover:border-accent/50 sm:px-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(48,182,205,0.28), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-lg font-bold text-on-inverse sm:text-xl">
              Would you like to start a project with us?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-on-inverse-muted">
              Let&apos;s collaborate to turn your ideas into impactful digital
              solutions that drive real results.
            </p>
            <BookConsultationButton className="btn-shine mt-5 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:translate-y-0">
              Book free consultation
            </BookConsultationButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
