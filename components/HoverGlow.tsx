"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export default function HoverGlow({
  as = "div",
  children,
  className = "",
}: {
  as?: "div" | "section" | "footer";
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const Component = as;

  function handleMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <Component
      ref={ref as never}
      onMouseMove={handleMove}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(480px circle at var(--mx, 50%) var(--my, 50%), rgba(48,182,205,0.28), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </Component>
  );
}
