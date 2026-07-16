import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

const socials = [
  { label: "in", name: "LinkedIn" },
  { label: "f", name: "Facebook" },
  { label: "ig", name: "Instagram" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1B33] px-4 pb-6 pt-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border-b border-[#23324F] pb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-2 text-sm font-bold text-white">
            VectorWave Technologies
          </div>
          <p className="text-xs leading-relaxed text-[#93A0BD]">
            Streamline your operations and scale faster. Our experts build
            custom Zoho, Odoo, and AI-driven ERP/CRM solutions tailored to
            power your business.
          </p>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold text-white">Company</div>
          <ul className="space-y-2 text-xs text-[#93A0BD]">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold text-white">Services</div>
          <ul className="space-y-2 text-xs text-[#93A0BD]">
            <li>Zoho ERP</li>
            <li>CRM</li>
            <li>Web development</li>
            <li>AI tools</li>
          </ul>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold text-white">Get in touch</div>
          <ul className="space-y-2 text-xs text-[#93A0BD]">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              GOLDEN-I, Office No 1034-1035, 10th Floor, Tower 3, Plot No 11,
              Sector-Techzone IV, Greater Noida (West), Uttar Pradesh 201318,
              India
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} />
              <a
                href="mailto:admin@vectorwavetechnologies.com"
                className="transition-colors duration-200 hover:text-white"
              >
                admin@vectorwavetechnologies.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 pt-5 sm:flex-row sm:justify-between">
        <span className="text-[11px] text-[#6B7690]">
          Copyright 2026 VectorWave Technologies
        </span>
        <div className="flex gap-2">
          {socials.map((s) => (
            <span
              key={s.name}
              aria-label={s.name}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#33405C] text-[10px] font-bold text-[#93A0BD] transition-colors duration-200 hover:border-[#1D4ED8] hover:text-white"
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
