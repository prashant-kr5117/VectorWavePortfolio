"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/src/logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import ServiceIcon from "@/components/ServiceIcon";
import { serviceCategories } from "@/lib/services";

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
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`z-50 border-b transition-colors duration-300 ${
        isHome ? "fixed left-0 right-0 top-0" : "sticky top-0"
      } ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-border bg-surface/95 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="VectorWave Technologies" className="-my-3 h-24 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href === "/services" && pathname.startsWith("/services"));

            if (link.href === "/services") {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 py-1 text-[13px] font-bold transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                      transparent
                        ? `text-on-inverse after:bg-on-inverse ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                        : `after:bg-primary ${
                            active
                              ? "text-primary after:w-full"
                              : "text-ink-soft after:w-0 hover:text-primary hover:after:w-full"
                          }`
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </Link>

                  <div className="invisible absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-xl border border-border bg-surface p-2 shadow-lg">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-surface-alt"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-chip text-primary transition-transform duration-300 group-hover/item:scale-110">
                            <ServiceIcon icon={service.icon} size={16} />
                          </div>
                          <span className="text-xs font-bold text-ink-soft group-hover/item:text-ink">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-[13px] font-bold transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                  transparent
                    ? `text-on-inverse after:bg-on-inverse ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                    : `after:bg-primary ${
                        active
                          ? "text-primary after:w-full"
                          : "text-ink-soft after:w-0 hover:text-primary hover:after:w-full"
                      }`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle colorClassName={transparent ? "text-on-inverse" : "text-ink"} />
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-accent px-5 py-2.5 text-[13px] font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:translate-y-0"
          >
            Book a call
          </Link>
        </div>

        <button
          className={`transition-colors duration-300 active:scale-90 lg:hidden ${
            transparent ? "text-on-inverse" : "text-ink"
          }`}
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
          <nav className="flex flex-col gap-1 border-t border-border bg-surface px-4 py-3">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href === "/services" && pathname.startsWith("/services"));

              if (link.href === "/services") {
                return (
                  <div key={link.href}>
                    <div
                      className={`flex items-center justify-between rounded-md px-2 py-2.5 text-sm font-bold transition-colors duration-200 ${
                        active ? "bg-surface-chip text-primary" : "text-ink-soft"
                      }`}
                    >
                      <Link
                        href={link.href}
                        className="flex-1"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <button
                        aria-label="Toggle services submenu"
                        aria-expanded={servicesExpanded}
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className="p-1"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            servicesExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        servicesExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-2 flex flex-col gap-0.5 border-l border-border pl-3">
                          {serviceCategories.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="rounded-md px-2 py-2 text-xs font-bold text-ink-muted transition-colors duration-200 hover:bg-surface-alt hover:text-ink"
                              onClick={() => setOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-2 py-2.5 text-sm font-bold transition-colors duration-200 ${
                    active
                      ? "bg-surface-chip text-primary"
                      : "text-ink-soft hover:bg-surface-alt"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm font-bold text-ink-soft">Theme</span>
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className="mt-2 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-bold text-on-inverse transition-colors duration-200 hover:bg-accent-hover"
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
