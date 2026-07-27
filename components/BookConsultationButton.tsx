"use client";

import type { ReactNode } from "react";
import { useConsultationModal } from "@/components/ConsultationModal";

export default function BookConsultationButton({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { open } = useConsultationModal();

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
