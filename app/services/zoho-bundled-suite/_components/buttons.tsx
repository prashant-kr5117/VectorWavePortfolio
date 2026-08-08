import type { ReactNode } from "react";
import Link from "next/link";
import BookConsultationButton from "@/components/BookConsultationButton";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-[13.5px] font-bold tracking-wide transition-all duration-200 whitespace-nowrap";

export function PrimaryConsultButton({ children }: { children: ReactNode }) {
  return (
    <BookConsultationButton
      className={`${base} bg-gradient-to-br from-[#20C4D9] to-[#72D5DF] text-[#0B0E12] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(32,196,217,0.32)]`}
    >
      {children}
    </BookConsultationButton>
  );
}

export function OutlineDarkConsultButton({ children }: { children: ReactNode }) {
  return (
    <BookConsultationButton
      className={`${base} border border-white/25 text-[#F2F1EA] hover:border-[#20C4D9] hover:bg-[#20C4D9]/[0.06]`}
    >
      {children}
    </BookConsultationButton>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 border-b border-[#0E8797]/40 pb-0.5 text-[12.5px] font-extrabold tracking-wide text-[#0E8797] transition-colors duration-200 hover:border-[#191D23] hover:text-[#191D23]"
    >
      {children}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </Link>
  );
}
