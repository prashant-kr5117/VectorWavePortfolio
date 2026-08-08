import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { manrope } from "./fonts";

export function Statement({
  label,
  heading,
  mutedLine,
  lede,
  onDark = false,
  center = false,
  size = "default",
}: {
  label?: string;
  heading: ReactNode;
  mutedLine?: ReactNode;
  lede?: ReactNode;
  onDark?: boolean;
  center?: boolean;
  size?: "default" | "small";
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {label && (
        <div
          className={`mb-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] ${
            onDark ? "text-[#A7B0BA]" : "text-[#59616B]"
          }`}
        >
          <span
            className={`h-[5px] w-[5px] rounded-full ${onDark ? "bg-[#20C4D9]" : "bg-[#102A43]"}`}
          />
          {label}
        </div>
      )}
      {!label && <div className="mb-4 h-[2px] w-9 bg-gradient-to-r from-[#102A43] to-[#20C4D9]" />}
      <h2
        className={`${manrope.className} font-bold leading-[0.98] tracking-[-0.035em] ${
          size === "small" ? "text-[26px] sm:text-[32px]" : "text-[32px] sm:text-[48px] lg:text-[56px]"
        } ${onDark ? "text-white" : "text-[#191D23]"}`}
      >
        {heading}
        {mutedLine && (
          <span className={`block ${onDark ? "text-[#9AA0A6]" : "text-[#59616B]"}`}>
            {mutedLine}
          </span>
        )}
      </h2>
      {lede && (
        <p
          className={`mt-5 max-w-xl text-[15px] leading-[1.7] sm:text-lg ${
            onDark ? "text-[#9AA0A6]" : "text-[#59616B]"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
