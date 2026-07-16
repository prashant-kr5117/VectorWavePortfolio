import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/Reveal";
import {
  Boxes,
  Code2,
  Headset,
  Calculator,
  Users,
  GraduationCap,
  Briefcase,
  Cpu,
  Truck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | VectorWave Technologies",
  description:
    "Learn how the VectorWave team helps businesses bring their sales, finance, HR, and operations together in one system.",
};

const whatWeDo = [
  { icon: Boxes, label: "Zoho Services" },
  { icon: Code2, label: "Website Development" },
  { icon: Headset, label: "IT Solutions" },
  { icon: Calculator, label: "Finance Services" },
  { icon: Users, label: "Human Resources" },
  { icon: GraduationCap, label: "Tech Support & Trainings" },
];

const leadership = [
  {
    icon: Briefcase,
    role: "Chief Executive Officer",
    desc: "A strategic ERP transformation leader with extensive experience in enterprise systems and digital change. Leads VectorWave with a clear focus on structured growth, operational clarity, and financial governance.",
  },
  {
    icon: Cpu,
    role: "Head of ERP Development",
    desc: "An enterprise systems architect who leads our technical team, specialising in Zoho architecture, system integrations, automation, and scalable ERP design.",
  },
  {
    icon: Calculator,
    role: "Finance Advisory Lead",
    desc: "Makes sure your chart of accounts is structured correctly, your reports are accurate, and your system holds up during audits and compliance reviews.",
  },
  {
    icon: Truck,
    role: "Supply Chain & Operations Lead",
    desc: "Handles the practical side of ERP: inventory management, procurement workflows, warehouse structure, and fulfilment logic that reflects how your business actually runs.",
  },
];

const process = [
  { n: "01", title: "Discover & Define", desc: "Every project starts with a conversation. Goals, challenges, and opportunities are mapped out clearly." },
  { n: "02", title: "Plan with Purpose", desc: "A clear roadmap built around your business with realistic timelines and the right tools." },
  { n: "03", title: "Design for Impact", desc: "Crafting intuitive, user-focused designs that align with your brand and business needs." },
  { n: "04", title: "Build & Integrate", desc: "Solid builds, smooth integrations, and architecture that holds up as business scales." },
  { n: "05", title: "Test & Optimise", desc: "Before anything goes live, it's tested thoroughly for quality, security, and efficiency." },
  { n: "06", title: "Launch & Support", desc: "The launch is managed carefully, with ongoing support, monitoring, and improvements after." },
];

const whyChooseUs = [
  "Best Quality Designs",
  "24x7 Live Support",
  "Result Oriented Projects",
  "Award Winning Support Team",
  "Best ROI Techniques",
  "Experienced Professionals",
];

const stats = [
  { value: "10", label: "Satisfied Clients" },
  { value: "15", label: "Projects Completed" },
  { value: "4", label: "Accolades Earned" },
  { value: "56K+", label: "Lines of Code" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-surface-alt px-4 py-14 text-center sm:px-6 sm:py-16">
          <Reveal>
            <span className="inline-block rounded-full bg-surface-chip px-4 py-1.5 text-[11px] font-bold text-primary">
              About Us
            </span>
            <h1 className="mx-auto mt-5 max-w-2xl text-[26px] font-bold leading-tight text-ink sm:text-3xl">
              Engineering ERP systems that drive business performance
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted sm:text-base">
              We specialize in ERP implementation and CRM automation, with deep
              hands-on expertise in Zoho and Odoo, helping growing businesses
              bring sales, finance, HR, and operations together into one system.
            </p>
          </Reveal>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
            <Reveal>
              <h2 className="text-lg font-bold text-ink">Who are we</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                We are a technology-driven solutions partner delivering
                innovative digital services, Zoho expertise, and reliable IT
                support, helping businesses streamline operations, scale
                efficiently, and achieve sustainable growth through smart,
                future-ready solutions.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-lg font-bold text-ink">Our mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Technology should make your business simpler, not more
                complicated. Our mission is to help growing businesses get the
                right systems in place, set up properly, used confidently, and
                built to grow with you.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface-alt px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-8 text-center">
              <h2 className="text-xl font-bold text-ink sm:text-2xl">
                What we do
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {whatWeDo.map((item, i) => (
                <Reveal key={item.label} delay={i * 60}>
                  <div className="group flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-chip text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-ink">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
            <Reveal>
              <h2 className="text-lg font-bold text-ink">Our position</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Many businesses invest in ERP software but fail to realize its
                full potential because it isn&apos;t tailored to their specific
                operations. We view ERP differently: it&apos;s the foundation of
                your business, connecting departments, ensuring data accuracy,
                and providing a comprehensive overview of company activities.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-lg font-bold text-ink">Why it matters</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                A well implemented ERP system enables smarter decision making,
                improves efficiency, reduces operational risk, and provides the
                visibility required to scale confidently in a competitive
                environment.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface-alt px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-8 text-center">
              <h2 className="text-xl font-bold text-ink sm:text-2xl">
                Individual leaderships
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((person, i) => (
                <Reveal key={person.role} delay={i * 60}>
                  <div className="group h-full rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-ink-inverse text-on-inverse transition-transform duration-300 group-hover:scale-110">
                      <person.icon size={18} />
                    </div>
                    <div className="mb-1 text-sm font-bold text-ink">
                      {person.role}
                    </div>
                    <p className="text-xs leading-relaxed text-ink-muted">
                      {person.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-8 text-center">
              <h2 className="text-xl font-bold text-ink sm:text-2xl">
                Our 6-D process
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((step, i) => (
                <Reveal key={step.n} delay={i * 60}>
                  <div className="h-full rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-2 text-xs font-bold text-primary">
                      {step.n}
                    </div>
                    <div className="mb-1 text-sm font-bold text-ink">
                      {step.title}
                    </div>
                    <p className="text-xs leading-relaxed text-ink-muted">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink-inverse px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-8 text-center">
              <h2 className="text-xl font-bold text-on-inverse sm:text-2xl">
                Why choose us
              </h2>
              <p className="mt-2 text-sm text-on-inverse-muted">
                Intelligent, dependable, and scalable solutions that enhance
                operational efficiency and foster sustainable growth.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, i) => (
                <Reveal key={item} delay={i * 50}>
                  <div className="flex items-center gap-3 rounded-lg border border-ink-inverse-alt px-4 py-3 transition-colors duration-200 hover:border-primary">
                    <CheckCircle2 size={18} className="shrink-0 text-primary" />
                    <span className="text-sm font-bold text-on-inverse">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-inverse-alt pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-on-inverse">{s.value}</div>
                  <div className="mt-1 text-xs text-on-inverse-muted">{s.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
