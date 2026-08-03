import { profile } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

export default function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-blob absolute inset-0 -z-10 opacity-20 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-28 md:py-36">
        <span className="rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-foreground/70 shadow-sm">
          👋 {t.badge}
        </span>

        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          {t.greeting}{" "}
          <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          <br />
          {dict.data.profile.role}.
        </h1>

        <p className="max-w-2xl text-lg text-foreground/70 md:text-xl">
          {dict.data.profile.tagline}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#resume"
            className="rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
          >
            {t.viewResume}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-105"
          >
            {t.contactMe}
          </a>
        </div>
      </div>
    </section>
  );
}
