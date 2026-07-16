import {
  Boxes,
  Users,
  Headset,
  Calculator,
  Database,
  Code2,
  ShoppingCart,
  Bot,
  Smartphone,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Boxes,
    title: "Zoho Bundle Suite",
    desc: "CRM, Finance, HR and Analytics set up as one suite.",
  },
  {
    icon: Users,
    title: "Zoho Sales",
    desc: "Pipeline automation, lead capture and reporting.",
  },
  {
    icon: Headset,
    title: "IT & Support",
    desc: "Infrastructure, helpdesk and reliable uptime.",
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    desc: "Invoicing, expenses, compliance and reporting.",
  },
  {
    icon: Database,
    title: "Data Migration",
    desc: "Secure, accurate transfers with minimal downtime.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, SEO-friendly websites that convert visitors.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Secure online stores built to grow sales.",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    desc: "Automation that speeds up decisions and tasks.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Android, iOS and cross-platform apps for your team.",
  },
];

export default function Services() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 text-center">
          <h2 className="text-xl font-bold text-ink sm:text-2xl">
            Services we provide
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            One connected system in place of scattered spreadsheets and tools.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-surface-chip text-primary transition-transform duration-300 group-hover:scale-110">
                  <s.icon size={18} />
                </div>
                <div className="mb-1 text-sm font-bold text-ink">
                  {s.title}
                </div>
                <p className="text-sm text-ink-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
