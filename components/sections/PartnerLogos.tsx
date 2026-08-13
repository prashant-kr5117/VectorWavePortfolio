import Image from "next/image";
import Reveal from "@/components/Reveal";
import ZohoLogo from "@/src/GIF by Zoho.gif";
import OdooLogo from "@/src/odoo_logo.png";
import MicrosoftDynamics365Logo from "@/src/Microsoft_Dynamics_365_Logo.svg";
import ReactLogo from "@/src/react_original_wordmark_logo_icon_146375.webp";
import ShopifyLogo from "@/src/shopify.png";
import NetSuiteLogo from "@/src/NetSuite_idNc45xmoe_0.svg";
import TallyLogo from "@/src/tally.svg";

const partners = [
  { src: ZohoLogo, alt: "Zoho" },
  { src: OdooLogo, alt: "Odoo" },
  { src: MicrosoftDynamics365Logo, alt: "Microsoft Dynamics 365" },
  { src: ShopifyLogo, alt: "Shopify" },
  { src: ReactLogo, alt: "React" },
  { src: NetSuiteLogo, alt: "NetSuite", className: "h-3.5 sm:h-4" },
  { src: TallyLogo, alt: "Tally" },
];
const partnersLoop = [...partners, ...partners];

export default function PartnerLogos({ reverse = false }: { reverse?: boolean }) {
  return (
    <section className="group relative overflow-hidden border-b border-border py-8">
      <Reveal className="mb-5 text-center">
        <span className="text-[11px] font-bold uppercase tracking-wide text-ink-muted">
          Trusted technology partners
        </span>
      </Reveal>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-24" />

      <div
        className={`flex w-max items-center gap-14 sm:gap-20 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {partnersLoop.map((partner, i) => (
          <Image
            key={`${partner.alt}-${i}`}
            src={partner.src}
            alt={partner.alt}
            className={`w-auto shrink-0 object-contain ${partner.className ?? "h-7 sm:h-8"}`}
          />
        ))}
      </div>
    </section>
  );
}
