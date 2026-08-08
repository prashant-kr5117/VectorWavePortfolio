const links = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#erp", label: "Zoho ERP" },
  { href: "#plans", label: "Plans" },
  { href: "#architecture", label: "Architecture" },
  { href: "#finance", label: "Finance" },
  { href: "#crm", label: "CRM" },
  { href: "#industries", label: "Industries" },
  { href: "#integrations", label: "Integrations" },
  { href: "#data", label: "Dashboards" },
  { href: "#team", label: "Team" },
  { href: "#solutions", label: "Solutions" },
  { href: "#why", label: "Why VectorWave" },
];

export function PageNav() {
  return (
    <div className="sticky top-[57px] z-30 hidden border-b border-white/5 bg-[#0B0E12]/85 backdrop-blur lg:block">
      <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-4 py-2.5 sm:px-6 lg:px-10">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-[#9AA0A6]/60 transition-colors duration-200 hover:text-[#72D5DF]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
