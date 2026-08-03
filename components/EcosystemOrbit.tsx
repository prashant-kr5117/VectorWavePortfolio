"use client";

import { useState } from "react";
import {
  Boxes,
  Workflow,
  Calculator,
  Code2,
  Bot,
  Building2,
  Layers,
  type LucideIcon,
} from "lucide-react";

type Node = {
  key: string;
  label: string;
  desc: string;
  icon: LucideIcon;
};

const NODES: Node[] = [
  { key: "zoho", label: "Zoho", desc: "CRM, Books, Inventory and more, fully implemented and connected.", icon: Boxes },
  { key: "odoo", label: "Odoo", desc: "Modular open-source ERP tailored to your sales and finance flow.", icon: Workflow },
  { key: "finance", label: "Finance", desc: "Invoicing, expenses and reconciliation kept accurate and in sync.", icon: Calculator },
  { key: "web", label: "Web Development", desc: "Fast, SEO-ready websites that convert visitors into leads.", icon: Code2 },
  { key: "ai", label: "AI", desc: "Automation and AI tooling that speeds up decisions and tasks.", icon: Bot },
  { key: "dynamics", label: "Microsoft Dynamics 365", desc: "Enterprise CRM and ERP rollouts for larger, complex teams.", icon: Building2 },
];

const RADIUS = 40;

function position(index: number, count: number) {
  const angle = -90 + index * (360 / count);
  const rad = (angle * Math.PI) / 180;
  return { x: 50 + RADIUS * Math.cos(rad), y: 50 + RADIUS * Math.sin(rad) };
}

export default function EcosystemOrbit() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] sm:block">
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-2xl" />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="orbit-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" style={{ stopColor: "var(--color-primary)" }} />
              <stop offset="100%" style={{ stopColor: "var(--color-accent)" }} />
            </linearGradient>
          </defs>
          {NODES.map((node, i) => {
            const { x, y } = position(i, NODES.length);
            return (
              <line
                key={node.key}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="url(#orbit-line)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeDasharray="2 2"
                className={`animate-orbit-dash transition-opacity duration-300 ${
                  active && active !== node.key ? "opacity-20" : "opacity-75"
                }`}
              />
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_0_12px_rgba(48,182,205,0.12),0_20px_45px_-10px_rgba(48,182,205,0.55)]">
          <Layers size={34} className="text-white" />
        </div>

        {NODES.map((node, i) => {
          const { x, y } = position(i, NODES.length);
          const Icon = node.icon;
          const isActive = active === node.key;
          const hSide = x > 62 ? "right" : x < 38 ? "left" : "center";
          const vSide = y > 60 ? "top" : "bottom";

          return (
            <div
              key={node.key}
              className={`absolute -translate-x-1/2 -translate-y-1/2 ${isActive ? "z-40" : "z-20"}`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className="group relative">
                <button
                  type="button"
                  onMouseEnter={() => setActive(node.key)}
                  onMouseLeave={() => setActive((cur) => (cur === node.key ? null : cur))}
                  onFocus={() => setActive(node.key)}
                  onBlur={() => setActive((cur) => (cur === node.key ? null : cur))}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-bold shadow-lg backdrop-blur transition-all duration-300 ${
                    isActive
                      ? "-translate-y-0.5 scale-105 border-accent bg-ink-inverse-alt text-on-inverse shadow-[0_16px_34px_-10px_rgba(48,182,205,0.5)]"
                      : "border-on-inverse-border bg-ink-inverse-alt/80 text-on-inverse"
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <Icon size={13} />
                  </span>
                  <span className="whitespace-nowrap">{node.label}</span>
                </button>

                <div
                  className={`pointer-events-none absolute z-30 w-44 rounded-xl border border-accent/60 bg-ink-inverse-alt p-3 text-left shadow-2xl transition-all duration-200 ${
                    vSide === "bottom" ? "top-full mt-3" : "bottom-full mb-3"
                  } ${
                    hSide === "center"
                      ? "left-1/2 -translate-x-1/2"
                      : hSide === "right"
                        ? "right-0"
                        : "left-0"
                  } ${isActive ? "visible translate-y-0 opacity-100" : "invisible opacity-0"}`}
                >
                  <div className="mb-1 text-[11px] font-bold text-accent">{node.label}</div>
                  <div className="text-[11px] leading-relaxed text-on-inverse-muted">{node.desc}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:hidden">
        {NODES.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.key}
              className="flex items-center gap-2 rounded-xl border border-on-inverse-border bg-ink-inverse-alt px-3 py-2.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Icon size={14} />
              </span>
              <span className="text-[11px] font-bold text-on-inverse">{node.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
