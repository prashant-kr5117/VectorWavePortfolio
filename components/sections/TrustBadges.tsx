import { ShieldCheck, Clock, Target, Award } from "lucide-react";
import Reveal from "@/components/Reveal";

const badges = [
  { icon: ShieldCheck, label: "Zoho Authorised Partner" },
  { icon: Clock, label: "24x7 Live Support" },
  { icon: Target, label: "Result Oriented Projects" },
  { icon: Award, label: "Experienced Professionals" },
];

export default function TrustBadges() {
  return (
    <section className="border-b border-border px-4 py-6 sm:px-6 lg:px-10">
      <Reveal className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:gap-4">
        {badges.map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-2 rounded-full border border-border bg-surface-alt px-4 py-2 text-xs font-bold text-ink-soft"
          >
            <b.icon size={14} className="text-primary" />
            {b.label}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
