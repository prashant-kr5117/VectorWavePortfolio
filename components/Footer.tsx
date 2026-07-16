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
    <footer className="bg-ink-inverse px-4 pb-6 pt-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border-b border-ink-inverse-alt pb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-2 text-sm font-bold text-on-inverse">
            VectorWave Technologies
          </div>
          <p className="text-xs leading-relaxed text-on-inverse-muted">
            Streamline your operations and scale faster. Our experts build
            custom Zoho, Odoo, and AI-driven ERP/CRM solutions tailored to
            power your business.
          </p>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold text-on-inverse">Company</div>
          <ul className="space-y-2 text-xs text-on-inverse-muted">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-on-inverse"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold text-on-inverse">Services</div>
          <ul className="space-y-2 text-xs text-on-inverse-muted">
            <li>Zoho ERP</li>
            <li>CRM</li>
            <li>Web development</li>
            <li>AI tools</li>
          </ul>
        </div>

        <div>
          <div className="mb-2 text-xs font-bold text-on-inverse">Get in touch</div>
          <ul className="space-y-2 text-xs text-on-inverse-muted">
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
                className="transition-colors duration-200 hover:text-on-inverse"
              >
                admin@vectorwavetechnologies.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 pt-5 sm:flex-row sm:justify-between">
        <span className="text-[11px] text-on-inverse-faint">
          Copyright 2026 VectorWave Technologies
        </span>
        <div className="flex gap-2">
          {socials.map((s) => (
            <span
              key={s.name}
              aria-label={s.name}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-on-inverse-border text-[10px] font-bold text-on-inverse-muted transition-colors duration-200 hover:border-primary hover:text-on-inverse"
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
