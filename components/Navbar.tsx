"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { useTranslations } from "@/app/translations-context";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations().navbar;

  const links = [
    { href: "#about", label: t.about },
    { href: "#experience", label: t.experience },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#resume", label: t.resume },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-gradient"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={t.toggleMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 md:hidden"
        >
          <span className="sr-only">{t.toggleMenu}</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/5 px-6 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-black/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
