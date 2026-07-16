import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/Reveal";
import {
  Network,
  Users,
  Layers,
  Puzzle,
  ShieldCheck,
  Code2,
  Factory,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  Truck,
  Briefcase,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | VectorWave Technologies",
  description:
    "ERP, CRM, Zoho and Odoo implementation, annual maintenance, and custom application development for growing businesses.",
};

const coreServices = [
  {
    icon: Network,
    title: "ERP Implementation",
    desc: "A well implemented ERP system changes how your business operates. We design and deploy scalable ERP systems that connect your departments, improve data visibility, and make day-to-day operations run smoother.",
  },
  {
    icon: Users,
    title: "CRM Implementation",
    desc: "Managing leads, sales pipelines, and customer relationships becomes a lot easier with the right CRM in place. We customise workflows, automate follow-ups, and give your team the insights they need.",
  },
  {
    icon: Layers,
    title: "Zoho Implementation",
    desc: "Zoho has a tool for almost every part of your business. We implement and configure Zoho platforms so everything works together, giving your team one connected system for sales, finance, HR, and more.",
  },
  {
    icon: Puzzle,
    title: "Odoo Implementation",
    desc: "Odoo's modular approach means you only use what your business actually needs. We handle end-to-end Odoo implementation covering inventory, finance, sales, and operations.",
  },
  {
    icon: ShieldCheck,
    title: "Annual Maintenance & Support",
    desc: "Our AMC services keep your systems monitored, updated, and running at their best, with ongoing technical support that minimises downtime and disruption.",
  },
  {
    icon: Code2,
    title: "Custom Application Development",
    desc: "We build secure, scalable web and mobile applications designed around your specific business processes, focused on performance, ease of use, and long-term adaptability.",
  },
];

const industries = [
  { icon: Factory, title: "Manufacturing", desc: "Production planning, inventory, procurement, and quality management with real-time visibility on the floor." },
  { icon: ShoppingCart, title: "Retail & E-Commerce", desc: "Keep inventory in sync, manage orders, and engage customers with scalable CRM and ERP systems." },
  { icon: HeartPulse, title: "Healthcare", desc: "Patient management, billing, appointment scheduling, and operational tracking with data privacy intact." },
  { icon: GraduationCap, title: "Education", desc: "Admissions, student records, fee management, communication, and reporting in one integrated system." },
  { icon: Landmark, title: "Financial Services", desc: "Automation tools, CRM systems, and analytics platforms for reporting accuracy and compliance tracking." },
  { icon: Building2, title: "Real Estate", desc: "Lead management, property listings, contracts, and post-sale service across the full customer lifecycle." },
  { icon: Truck, title: "Logistics & Supply Chain", desc: "Shipment tracking, warehouse management, order fulfilment, and vendor coordination in real time." },
  { icon: Briefcase, title: "IT & Professional Services", desc: "Project management systems, client portals, time tracking, and billing automation." },
  { icon: Package, title: "Trading & Distribution", desc: "Tight control over inventory, procurement, and sales with automated reordering." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-surface-alt px-4 py-14 text-center sm:px-6 sm:py-16">
          <Reveal>
            <span className="inline-block rounded-full bg-surface-chip px-4 py-1.5 text-[11px] font-bold text-primary">
              Services
            </span>
            <h1 className="mx-auto mt-5 max-w-xl text-[26px] font-bold leading-tight text-ink sm:text-3xl">
              We provide a wide range of services
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted sm:text-base">
              We work with businesses of all sizes to simplify operations,
              improve productivity, and drive growth using the right cloud
              tools and custom technology built around how you work.
            </p>
          </Reveal>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-8 text-center">
              <h2 className="text-xl font-bold text-ink sm:text-2xl">
                Comprehensive digital solutions
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                From ERP and CRM to automation and cloud platforms.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreServices.map((s, i) => (
                <Reveal key={s.title} delay={i * 60}>
                  <div className="group h-full rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-chip text-primary transition-transform duration-300 group-hover:scale-110">
                      <s.icon size={20} />
                    </div>
                    <div className="mb-1 text-sm font-bold text-ink">
                      {s.title}
                    </div>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-alt px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-8 text-center">
              <h2 className="text-xl font-bold text-ink sm:text-2xl">
                Industries we serve
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Digital solutions built around the specific needs of the
                sectors we work with.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item, i) => (
                <Reveal key={item.title} delay={i * 50}>
                  <div className="group h-full rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-ink-inverse text-on-inverse transition-transform duration-300 group-hover:scale-110">
                      <item.icon size={18} />
                    </div>
                    <div className="mb-1 text-sm font-bold text-ink">
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
