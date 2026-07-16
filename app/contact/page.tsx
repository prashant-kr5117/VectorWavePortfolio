import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | VectorWave Technologies",
  description:
    "Connect with our experts to get customized, high-impact digital solutions tailored to help your business scale efficiently.",
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    desc: "Speak to a representative from Monday to Friday, 9:30 AM - 6:30 PM (IST).",
    action: "Start chat",
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "Send us a message at admin@vectorwavetechnologies.com. We'll get back to you within 24 hours.",
    action: "Send email",
    href: "mailto:admin@vectorwavetechnologies.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    desc: "Call us Monday to Friday, 9:30 AM - 6:30 PM IST to speak directly with our team.",
    action: "Call +91-8791810555",
    href: "tel:+918791810555",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[#F8FAFC] px-4 py-14 text-center sm:px-6 sm:py-16">
          <Reveal>
            <span className="inline-block rounded-full bg-[#EFF4FE] px-4 py-1.5 text-[11px] font-bold text-[#1D4ED8]">
              Contact us
            </span>
            <h1 className="mx-auto mt-5 max-w-xl text-[26px] font-bold leading-tight text-[#0B1B33] sm:text-3xl">
              Powering intelligent business flow
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-[#55607A] sm:text-base">
              Connect with our experts to get customized, high-impact digital
              solutions tailored to help your business scale efficiently.
            </p>
          </Reveal>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {contactMethods.map((m, i) => (
                <Reveal key={m.title} delay={i * 60}>
                  <div className="group h-full rounded-xl border border-[#E4E8F0] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF4FE] text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                      <m.icon size={20} />
                    </div>
                    <div className="mb-1 text-sm font-bold text-[#0B1B33]">
                      {m.title}
                    </div>
                    <p className="mb-3 text-xs leading-relaxed text-[#55607A]">
                      {m.desc}
                    </p>
                    <a
                      href={m.href ?? "#"}
                      className="text-xs font-bold text-[#1D4ED8] transition-colors duration-200 hover:text-[#0C447C]"
                    >
                      {m.action} &rarr;
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Reveal>
                <ContactForm />
              </Reveal>
              <Reveal delay={100}>
                <div className="h-full rounded-xl border border-[#E4E8F0] bg-[#F8FAFC] p-6 sm:p-8">
                  <h2 className="mb-4 text-sm font-bold text-[#0B1B33]">
                    Our office location
                  </h2>
                  <div className="flex items-start gap-3 text-sm text-[#55607A]">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-[#1D4ED8]" />
                    <span>
                      GOLDEN-I, Office No 1034-1035, 10th Floor, Tower 3, Plot
                      No 11, Sector-Techzone IV, Greater Noida (West), Uttar
                      Pradesh 201318, India
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-sm text-[#55607A]">
                    <Mail size={18} className="shrink-0 text-[#1D4ED8]" />
                    <a
                      href="mailto:admin@vectorwavetechnologies.com"
                      className="transition-colors duration-200 hover:text-[#1D4ED8]"
                    >
                      admin@vectorwavetechnologies.com
                    </a>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-sm text-[#55607A]">
                    <Phone size={18} className="shrink-0 text-[#1D4ED8]" />
                    <a
                      href="tel:+918791810555"
                      className="transition-colors duration-200 hover:text-[#1D4ED8]"
                    >
                      +91-8791810555
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
