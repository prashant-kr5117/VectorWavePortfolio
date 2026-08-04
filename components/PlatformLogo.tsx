import Image from "next/image";
import ServiceIcon from "@/components/ServiceIcon";
import ZohoLogo from "@/src/zoho.png";
import OdooLogo from "@/src/odoo_logo.png";
import Microsoft365Logo from "@/src/microsoft-365.png";
import WebCodingImage from "@/src/Web Coding.png";
import type { Platform, PlatformSlug } from "@/lib/services";

const logos: Partial<Record<PlatformSlug, typeof ZohoLogo>> = {
  zoho: ZohoLogo,
  odoo: OdooLogo,
  "microsoft-365": Microsoft365Logo,
  "custom-development": WebCodingImage,
};

export default function PlatformLogo({
  platform,
  size = 40,
  iconSize = 18,
  fallbackBg = "rounded-lg bg-ink-inverse text-on-inverse",
}: {
  platform: Platform;
  size?: number;
  iconSize?: number;
  fallbackBg?: string;
}) {
  const logo = logos[platform.slug];

  if (!logo) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center ${fallbackBg}`}
        style={{ width: size, height: size }}
      >
        <ServiceIcon icon={platform.icon} size={iconSize} />
      </div>
    );
  }

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-lg border border-border bg-white px-2"
      style={{ height: size, minWidth: size }}
    >
      <Image
        src={logo}
        alt={`${platform.name} logo`}
        style={{ height: size * 0.6, width: "auto" }}
      />
    </div>
  );
}
