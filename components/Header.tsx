"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from "lucide-react";
import Logo from "@/src/logo2.png";
import ThemeToggle from "@/components/ThemeToggle";
import ServiceIcon from "@/components/ServiceIcon";
import { platforms, getServicesByPlatform } from "@/lib/services";
import { useIsDarkTheme } from "@/lib/theme";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    path: "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z",
  },
  {
    name: "Facebook",
    href: "#",
    path: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.33-.04-1.54-.14-2.82-.14C11.98 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5Z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76c-.5.5-1.1.9-1.76 1.15-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 3.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm6.75-1.75a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1Z",
  },
];

const itemDotStyles = [
  "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
  "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
  "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [openPlatform, setOpenPlatform] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDark = useIsDarkTheme();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  // The homepage hero has a permanently-dark background, so the transparent,
  // white-text overlay treatment only makes sense in dark theme. In light
  // theme the nav bar should always read as a normal light bar.
  const transparent = isHome && !scrolled && !open && isDark;

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
      <div className="hidden items-center justify-between bg-ink-inverse px-4 py-1.5 text-on-inverse-muted sm:px-6 lg:flex lg:px-10">
        <div className="flex items-center gap-5 text-[11.5px]">
          <a
            href="tel:+918791810555"
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-on-inverse"
          >
            <Phone size={12} />
            +91-8791810555
          </a>
          <a
            href="mailto:admin@vectorwavetechnologies.com"
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-on-inverse"
          >
            <Mail size={12} />
            admin@vectorwavetechnologies.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="transition-colors duration-200 hover:text-on-inverse"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="VectorWave Technologies" className="-my-3 h-10 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href === "/services" && pathname.startsWith("/services"));

            if (link.href === "/services") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setServicesOpen(false);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className={`relative flex items-center gap-1 py-1 text-[13px] font-bold transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                      transparent
                        ? `text-on-inverse after:bg-on-inverse ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                        : `after:bg-primary ${
                            active
                              ? "text-primary after:w-full"
                              : "text-ink-soft hover:text-primary hover:after:w-full after:w-0"
                          }`
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full z-20 w-[880px] max-w-[92vw] -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0,0.71,0.2,1.01)] ${
                      servicesOpen
                        ? "visible translate-y-0 scale-100 opacity-100"
                        : "invisible translate-y-1 scale-[0.98] opacity-0"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-surface p-6 shadow-xl">
                      <div className="grid grid-cols-4 gap-6">
                        {platforms.map((platform, colIndex) => (
                          <div
                            key={platform.slug}
                            className={`transition-[opacity,transform] duration-300 ease-[cubic-bezier(0,0.71,0.2,1.01)] ${
                              servicesOpen ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                            }`}
                            style={{ transitionDelay: "0ms" }}
                          >
                            <div
                              className={`mb-3 flex items-center gap-2 border-b border-border pb-3 transition-opacity duration-300 ${
                                servicesOpen ? "opacity-100" : "opacity-0"
                              }`}
                              style={{ transitionDelay: `${colIndex * 50}ms` }}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface-chip text-primary">
                                <ServiceIcon icon={platform.icon} size={13} />
                              </span>
                              <span className="text-[11px] font-bold uppercase tracking-wide text-ink-faint">
                                {platform.name}
                              </span>
                            </div>

                            <div className="flex flex-col gap-0.5">
                              {getServicesByPlatform(platform.slug).map((service, i) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={() => setServicesOpen(false)}
                                  className="group/item flex items-center gap-2.5 rounded-lg px-1.5 py-2 transition-colors duration-200 hover:bg-surface-alt"
                                >
                                  <div
                                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-transform duration-300 group-hover/item:scale-110 ${itemDotStyles[i % itemDotStyles.length]}`}
                                  >
                                    <ServiceIcon icon={service.icon} size={13} />
                                  </div>
                                  <div className="text-xs font-bold leading-tight text-ink-soft group-hover/item:text-ink">
                                    {service.title}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between rounded-lg border border-border bg-surface-alt px-4 py-3">
                        <span className="text-xs text-ink-muted">
                          Not sure what you need?
                        </span>
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="group/cta flex items-center gap-1 text-xs font-bold text-primary transition-colors duration-200"
                        >
                          Explore Capabilities
                          <ArrowRight
                            size={13}
                            className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
                          />
                        </Link>
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
                className={`relative py-1 text-[13px] font-bold transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                  transparent
                    ? `text-on-inverse after:bg-on-inverse ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                    : `after:bg-primary ${
                        active
                          ? "text-primary after:w-full"
                          : "text-ink-soft hover:text-primary hover:after:w-full after:w-0"
                      }`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-300 ${
              transparent
                ? "border-white/25 text-on-inverse"
                : "border-border bg-surface-alt text-ink"
            }`}
          >
            <ThemeToggle colorClassName={transparent ? "text-on-inverse" : "text-ink"} />
          </span>
          <Link
            href="/contact"
            className="btn-shine inline-block rounded-lg bg-accent px-5 py-2.5 text-[13px] font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:translate-y-0"
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
          <nav className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto border-t border-border bg-surface px-4 py-3">
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
                          {platforms.map((platform) => {
                            const platformOpen = openPlatform === platform.slug;
                            return (
                              <div key={platform.slug}>
                                <button
                                  onClick={() =>
                                    setOpenPlatform(platformOpen ? null : platform.slug)
                                  }
                                  aria-expanded={platformOpen}
                                  className="flex w-full items-center justify-between rounded-md px-2 py-2 text-xs font-bold text-ink-muted transition-colors duration-200 hover:bg-surface-alt hover:text-ink"
                                >
                                  <span className="flex items-center gap-2">
                                    <ServiceIcon icon={platform.icon} size={14} />
                                    {platform.name}
                                  </span>
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${
                                      platformOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                <div
                                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                    platformOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                  }`}
                                >
                                  <div className="overflow-hidden">
                                    <div className="ml-2 flex flex-col gap-0.5 border-l border-border pl-3">
                                      {getServicesByPlatform(platform.slug).map((service) => (
                                        <Link
                                          key={service.slug}
                                          href={`/services/${service.slug}`}
                                          className="rounded-md px-2 py-2 text-[11.5px] font-semibold text-ink-faint transition-colors duration-200 hover:bg-surface-alt hover:text-ink"
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
                          })}
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
