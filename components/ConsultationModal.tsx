"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import ContactForm from "@/components/ContactForm";

type ConsultationModalContextValue = {
  open: () => void;
  close: () => void;
};

const ConsultationModalContext =
  createContext<ConsultationModalContextValue | null>(null);

export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) {
    throw new Error(
      "useConsultationModal must be used within ConsultationModalProvider"
    );
  }
  return ctx;
}

const EXIT_DURATION_MS = 250;

function getFocusable(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'input, textarea, select, button, a[href], [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled"));
}

export function ConsultationModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const exitTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      clearTimeout(exitTimeout.current);
      setRendered(true);
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    setVisible(false);
    exitTimeout.current = setTimeout(
      () => setRendered(false),
      EXIT_DURATION_MS
    );
    return () => clearTimeout(exitTimeout.current);
  }, [isOpen]);

  useEffect(() => {
    if (!rendered) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimeout = setTimeout(() => {
      const target = panelRef.current;
      if (target) getFocusable(target)[0]?.focus();
    }, 0);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusable = getFocusable(panelRef.current);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(focusTimeout);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [rendered, close]);

  return (
    <ConsultationModalContext.Provider value={{ open, close }}>
      {children}

      {rendered && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            onClick={close}
            aria-hidden="true"
            className={`absolute inset-0 bg-ink-inverse/70 backdrop-blur-sm transition-opacity duration-200 ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
            className={`relative w-full max-w-lg transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2
                id="consultation-modal-title"
                className="text-sm font-bold text-on-inverse"
              >
                Book your free consultation
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full bg-surface/90 p-1.5 text-ink-muted shadow-md backdrop-blur transition-colors duration-200 hover:bg-surface hover:text-ink"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[calc(100vh-8rem)] overflow-y-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </ConsultationModalContext.Provider>
  );
}
