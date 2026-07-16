"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle } from "lucide-react";

const leadSources = ["Facebook Ads", "Google Ads", "Website", "Walk-in", "Referral"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
        method: "POST",
        body: new FormData(e.currentTarget),
        cache: "no-cache",
      });
      if (!response.ok) throw new Error("Zoho webform submission failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
          status === "sent" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle size={36} className="text-primary" />
            <p className="text-sm font-bold text-ink">
              Thanks, your message is on its way.
            </p>
            <p className="text-xs text-ink-muted">
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
          <input
            type="hidden"
            name="xnQsjsdp"
            value="f7f8c3a086f7bdab1f0de876eb6d57608a909fa2cf50898341b089d1e4535878"
          />
          <input type="hidden" name="zc_gad" value="" />
          <input
            type="hidden"
            name="xmIwtLD"
            value="893ba5c89bad9cd4bc15197577acf25ec374220f91365a90591a73251deaa9e791cfeb31fff37f045ae53e6302b780bc"
          />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="returnURL" value="null" />
          <input type="hidden" name="aG9uZXlwb3Q" value="" />
          <input type="hidden" name="wFaTrisJS" value="true" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold text-ink-soft">
                First name
              </label>
              <input
                required
                type="text"
                name="First Name"
                placeholder="Jordan"
                className="w-full rounded-lg border border-border px-3 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold text-ink-soft">
                Last name
              </label>
              <input
                required
                type="text"
                name="Last Name"
                placeholder="Taylor"
                className="w-full rounded-lg border border-border px-3 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-ink-soft">
              Email
            </label>
            <input
              required
              type="email"
              name="Email"
              placeholder="jordan@company.com"
              className="w-full rounded-lg border border-border px-3 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-ink-soft">
              How did you hear about us
            </label>
            <select
              name="Lead Source"
              defaultValue="Website"
              className="w-full rounded-lg border border-border px-3 py-2.5 text-sm text-ink outline-none transition-colors duration-200 focus:border-primary"
            >
              {leadSources.map((source) => (
                <option key={source}>{source}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-ink-soft">
              Your requirements
            </label>
            <textarea
              rows={4}
              name="LEADCF5"
              placeholder="Tell us what you're looking to build or automate"
              className="w-full rounded-lg border border-border px-3 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-primary"
            />
          </div>

          {status === "error" && (
            <p className="text-xs font-bold text-red-600">
              Something went wrong sending your message. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-on-inverse transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:translate-y-0 disabled:opacity-70"
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
