import type { Metadata } from "next";
import Footer from "@/components/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/Reveal";
import { Layers, Users, Scale, Code2, BrainCircuit } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | VectorWave Technologies",
  description:
    "Meet the innovators, strategists, and technologists behind VectorWave's Zoho, CRM, finance, web development, and AI solutions.",
};

const departments = [
  {
    icon: Layers,
    title: "Certified Zoho Consultants & Implementation Experts",
    desc: "Our Zoho Consulting Team consists of certified Zoho experts with extensive experience implementing and customizing the complete Zoho ecosystem: CRM, Books, Zoho One deployment, workflow automation, and advanced integrations. From requirement gathering and solution architecture to data migration and optimization, the team ensures structured and seamless Zoho implementation.",
  },
  {
    icon: Users,
    title: "CRM Consulting & Business Automation Specialists",
    desc: "The CRM Implementation Team builds CRM systems that are structured, scalable, and fully customised around how the business actually operates, with customer data centralised and workflows running automatically. The team specialises in Zoho CRM implementation, lead management, sales automation, and reporting dashboards.",
  },
  {
    icon: Scale,
    title: "Finance & Compliance Team",
    desc: "Qualified accounting and taxation professionals with strong expertise in corporate finance, GST compliance, payroll management, statutory reporting, and financial planning, keeping your finances accurate and operations transparent.",
  },
  {
    icon: Code2,
    title: "Web Development Team",
    desc: "Builds digital platforms that are fast, responsive, and built to perform: custom websites, business web applications, portal systems, and SEO-optimised architecture, with a focus on clean code, mobile responsiveness, and seamless integration with CRM and business systems.",
  },
  {
    icon: BrainCircuit,
    title: "AI Team",
    desc: "Builds intelligent, data-driven systems that help businesses work smarter: AI, machine learning, automation, and predictive analytics that optimise workflows and support better decision-making, integrated directly into CRM and finance platforms.",
  },
];

export default function TeamPage() {
  return (
    <>
      <main className="flex-1">
        <section className="bg-surface-alt px-4 py-14 text-center sm:px-6 sm:py-16">
          <Reveal>
            <span className="inline-block rounded-full bg-surface-chip px-4 py-1.5 text-[11px] font-bold text-primary">
              Team
            </span>
            <h1 className="mx-auto mt-5 max-w-xl text-[26px] font-bold leading-tight text-ink sm:text-3xl">
              Welcome to the VectorWave team
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted sm:text-base">
              Behind every solution we deliver is a group of people who
              genuinely care about getting it right: specialists across Zoho
              consulting, CRM implementation, finance, web development, and
              artificial intelligence.
            </p>
          </Reveal>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            {departments.map((dept, i) => (
              <Reveal key={dept.title} delay={i * 60}>
                <div className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:flex-row sm:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink-inverse text-on-inverse transition-transform duration-300 group-hover:scale-110">
                    <dept.icon size={20} />
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-bold text-ink sm:text-base">
                      {dept.title}
                    </div>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {dept.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
