"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle } from "lucide-react";

const leadSources = [
  "Website",
  "Referral",
  "Social Media",
  "Search Engine",
  "Event",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <div className="rounded-xl border border-[#E4E8F0] bg-white p-6 sm:p-8">
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
          status === "sent" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle size={36} className="text-[#1D4ED8]" />
            <p className="text-sm font-bold text-[#0B1B33]">
              Thanks, your message is on its way.
            </p>
            <p className="text-xs text-[#55607A]">
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
          status === "sent" ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="flex flex-col gap-4 overflow-hidden">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold text-[#33405C]">
                First name
              </label>
              <input
                required
                type="text"
                placeholder="Jordan"
                className="w-full rounded-lg border border-[#E4E8F0] px-3 py-2.5 text-sm text-[#0B1B33] outline-none transition-colors duration-200 placeholder:text-[#8A93A8] focus:border-[#1D4ED8]"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold text-[#33405C]">
                Last name
              </label>
              <input
                required
                type="text"
                placeholder="Taylor"
                className="w-full rounded-lg border border-[#E4E8F0] px-3 py-2.5 text-sm text-[#0B1B33] outline-none transition-colors duration-200 placeholder:text-[#8A93A8] focus:border-[#1D4ED8]"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-[#33405C]">
              Email
            </label>
            <input
              required
              type="email"
              placeholder="jordan@company.com"
              className="w-full rounded-lg border border-[#E4E8F0] px-3 py-2.5 text-sm text-[#0B1B33] outline-none transition-colors duration-200 placeholder:text-[#8A93A8] focus:border-[#1D4ED8]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-[#33405C]">
              How did you hear about us
            </label>
            <select className="w-full rounded-lg border border-[#E4E8F0] px-3 py-2.5 text-sm text-[#0B1B33] outline-none transition-colors duration-200 focus:border-[#1D4ED8]">
              {leadSources.map((source) => (
                <option key={source}>{source}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-[#33405C]">
              Your requirements
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you're looking to build or automate"
              className="w-full rounded-lg border border-[#E4E8F0] px-3 py-2.5 text-sm text-[#0B1B33] outline-none transition-colors duration-200 placeholder:text-[#8A93A8] focus:border-[#1D4ED8]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EA6A0C] hover:shadow-md active:translate-y-0 disabled:opacity-70"
          >
            {status === "loading" && (
              <Loader2 size={16} className="animate-spin" />
            )}
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
}
