import Link from "next/link";
import Image from "next/image";
import {
  Boxes,
  Users,
  Headset,
  Calculator,
  UserCog,
  Database,
  ShoppingCart,
  Bot,
  Smartphone,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import WebCodingImage from "@/src/Web Coding.png";

const services = [
  {
    icon: Boxes,
    title: "Zoho Bundle Suite",
    desc: "CRM, Finance, HR and Analytics set up as one suite.",
    slug: "zoho-bundled-suite",
  },
  {
    icon: Users,
    title: "Zoho Sales",
    desc: "Pipeline automation, lead capture and reporting.",
    slug: "sales",
  },
  {
    icon: Headset,
    title: "IT & Support",
    desc: "Infrastructure, helpdesk and reliable uptime.",
    slug: "it-support",
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    desc: "Invoicing, expenses, compliance and reporting.",
    slug: "zoho-finance",
  },
  {
    icon: UserCog,
    title: "Human Resources",
    desc: "Recruitment, onboarding, attendance and payroll.",
    slug: "human-resources",
  },
  {
    icon: Database,
    title: "Data Migration",
    desc: "Secure, accurate transfers with minimal downtime.",
  },
  {
    logo: WebCodingImage,
    title: "Web Development",
    desc: "Fast, SEO-friendly websites that convert visitors.",
    slug: "web-development",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Secure online stores built to grow sales.",
    slug: "web-development",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    desc: "Automation that speeds up decisions and tasks.",
    slug: "ai-integration",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Android, iOS and cross-platform apps for your team.",
    slug: "mobile-app-development",
  },
];

export default function Services() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
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
          {services.map((s, i) => {
            const cardClasses =
              "group h-full rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg";
            const content = (
              <>
                {s.logo ? (
                  <div className="mb-3 h-12 w-12 shrink-0 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                    <Image src={s.logo} alt="" className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-surface-chip text-primary transition-transform duration-300 group-hover:scale-110">
                    <s.icon size={18} />
                  </div>
                )}
                <div className="mb-1 text-sm font-bold text-ink">
                  {s.title}
                </div>
                <p className="text-sm text-ink-muted">{s.desc}</p>
              </>
            );

            return (
              <Reveal key={s.title} delay={i * 60}>
                {s.slug ? (
                  <Link href={`/services/${s.slug}`} className={`block ${cardClasses}`}>
                    {content}
                  </Link>
                ) : (
                  <div className={cardClasses}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
