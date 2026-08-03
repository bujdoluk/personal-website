import { profile } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

export default function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
        {profile.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            width={160}
            height={160}
            className="h-32 w-32 shrink-0 rounded-3xl object-cover shadow-lg shadow-fuchsia-500/20 md:h-40 md:w-40"
          />
        ) : (
          <div className="h-32 w-32 shrink-0 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 shadow-lg shadow-fuchsia-500/20 md:h-40 md:w-40" />
        )}

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
            {t.sectionLabel}
          </p>
          <h2 className="font-display mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t.heading}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
            {dict.data.profile.bio}
          </p>
          <p className="mt-4 text-sm text-foreground/50">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
