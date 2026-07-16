"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/src/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E8F0] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="VectorWave Technologies" className="h-9 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-[13px] font-bold transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[#1D4ED8] after:transition-all after:duration-300 ${
                  active
                    ? "text-[#1D4ED8] after:w-full"
                    : "text-[#33405C] after:w-0 hover:text-[#1D4ED8] hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#F97316] px-5 py-2.5 text-[13px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EA6A0C] hover:shadow-md active:translate-y-0"
          >
            Book a call
          </Link>
        </div>

        <button
          className="text-[#0B1B33] transition-transform duration-200 active:scale-90 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 border-t border-[#E4E8F0] px-4 py-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-2 py-2.5 text-sm font-bold transition-colors duration-200 ${
                    active
                      ? "bg-[#EFF4FE] text-[#1D4ED8]"
                      : "text-[#33405C] hover:bg-[#F8FAFC]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 rounded-lg bg-[#F97316] px-4 py-2.5 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-[#EA6A0C]"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
