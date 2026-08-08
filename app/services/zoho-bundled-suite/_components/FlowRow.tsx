import { manrope } from "./fonts";

type Step = string | { label: string; emphasis?: boolean };

export function FlowRow({
  steps,
  onLight = false,
  center = false,
  className = "",
}: {
  steps: Step[];
  onLight?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${center ? "justify-center" : ""} ${className}`}
    >
      {steps.map((step, i) => {
        const label = typeof step === "string" ? step : step.label;
        const emphasis = typeof step === "string" ? false : step.emphasis;
        return (
          <span key={`${label}-${i}`} className="flex items-center gap-2">
            {i > 0 && (
              <span className={`text-[13px] ${onLight ? "text-[#59616B]" : "text-[#9AA0A6]"}`}>
                →
              </span>
            )}
            <span
              className={`${manrope.className} whitespace-nowrap rounded-lg border px-3.5 py-2 text-[12.5px] font-bold ${
                emphasis
                  ? onLight
                    ? "border-[#102A43] text-[#102A43]"
                    : "border-[#20C4D9] text-[#72D5DF]"
                  : onLight
                    ? "border-[#E3E1D9] bg-[#EFEEE8] text-[#191D23]"
                    : "border-[#20C4D9]/20 bg-[#141922] text-[#F2F1EA]"
              }`}
            >
              {label}
            </span>
          </span>
        );
      })}
    </div>
  );
}
