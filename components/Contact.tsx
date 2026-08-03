"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { useTranslations } from "@/app/translations-context";

const socialLinks = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
];

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const t = useTranslations().contact;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link still works as a fallback.
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="bg-blob absolute inset-0 -z-10 opacity-20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
          {t.sectionLabel}
        </p>
        <h2 className="font-display mx-auto mb-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          {t.heading}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-foreground/70">
          {t.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 p-1.5 pl-6 shadow-lg shadow-fuchsia-500/20">
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={t.copyEmail}
              title={isCopied ? t.copied : t.copyEmail}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
            >
              {isCopied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="12" height="12" rx="2" />
                  <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <p aria-live="polite" className="mt-2 h-4 text-xs font-medium text-fuchsia-600">
          {isCopied ? t.emailCopied : ""}
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-fuchsia-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
