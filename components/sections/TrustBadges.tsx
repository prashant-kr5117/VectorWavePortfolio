import { ShieldCheck, Clock, Target, Award } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Zoho Authorised Partner" },
  { icon: Clock, label: "24x7 Live Support" },
  { icon: Target, label: "Result Oriented Projects" },
  { icon: Award, label: "Experienced Professionals" },
];

const loop = [...badges, ...badges];

export default function TrustBadges() {
  return (
    <section className="group relative overflow-hidden border-b border-border py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-24" />

      <div className="flex w-max gap-3 animate-marquee">
        {loop.map((b, i) => (
          <span
            key={`${b.label}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface-alt px-4 py-2 text-xs font-bold text-ink-soft"
          >
            <b.icon size={14} className="text-primary" />
            {b.label}
          </span>
        ))}
      </div>
    </section>
  );
}
