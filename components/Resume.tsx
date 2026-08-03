import { education, experience, profile, skills, spokenLanguages } from "@/lib/data";
import SkillIcon from "@/components/SkillIcon";
import type { Dictionary } from "@/lib/i18n";
import { formatDate } from "@/lib/format";

export default function Resume({ dict, locale }: { dict: Dictionary; locale: string }) {
  const t = dict.resume;
  const categories = dict.data.skills.categories as Record<string, string>;
  const levels = dict.data.spokenLanguages.levels as Record<string, string>;

  return (
    <section id="resume" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t.heading}
        </h2>
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t.downloadPdf}
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-sm">
        <div className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-8 py-10 text-white">
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            {profile.name}
          </h3>
          <p className="text-white/90">{dict.data.profile.role} · {profile.location}</p>
          <p className="mt-1 text-sm text-white/80">{profile.email}</p>
        </div>

        <div className="grid gap-10 p-8 md:grid-cols-2 md:p-10">
          <div>
            <h4 className="font-display mb-4 text-lg font-bold text-fuchsia-600">
              {t.subsections.experience}
            </h4>
            <div className="space-y-6">
              {experience.map((job, i) => {
                const td = dict.data.experience[i];
                return (
                  <div key={`${job.company}-${job.start}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="font-semibold">{td.role}</p>
                      <span className="text-xs text-foreground/50">
                        {formatDate(job.start, locale)} — {formatDate(job.end, locale)}
                      </span>
                    </div>
                    <p className="mb-1 text-sm text-foreground/60">{job.company}</p>
                    <ul className="list-disc space-y-1 pl-4 marker:text-fuchsia-400">
                      {td.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm text-foreground/70">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h4 className="font-display mb-4 text-lg font-bold text-fuchsia-600">
                {t.subsections.education}
              </h4>
              <div className="space-y-3">
                {education.map((item, i) => {
                  const td = dict.data.education[i];
                  return (
                    <div key={`${item.school}-${item.start}`}>
                      <p className="font-semibold">{td.subject}</p>
                      <p className="text-sm text-foreground/60">
                        {item.school}
                        {item.degree !== "-" && ` · ${item.degree}`}
                      </p>
                      <p className="text-xs text-foreground/50">
                        {formatDate(item.start, locale)} — {formatDate(item.end, locale)}
                      </p>
                      {td.description && (
                        <p className="mt-1 text-sm text-foreground/70">
                          {td.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-display mb-4 text-lg font-bold text-fuchsia-600">
                {t.subsections.skills}
              </h4>
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="mb-1.5 text-sm font-semibold text-foreground/80">
                      {categories[group.category] ?? group.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium text-foreground/70"
                        >
                          <SkillIcon name={skill} className="h-3.5 w-3.5" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display mb-4 text-lg font-bold text-fuchsia-600">
                {t.subsections.languages}
              </h4>
              <div className="space-y-1.5">
                {spokenLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <p className="text-sm font-semibold">{lang.name}</p>
                    <p className="text-xs text-foreground/50">
                      {levels[lang.level] ?? lang.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display mb-4 text-lg font-bold text-fuchsia-600">
                {t.subsections.interests}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {dict.data.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium text-foreground/70"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 bg-black/[0.02] px-8 py-5 text-sm text-foreground/60 md:px-10">
          {t.footer}{" "}
          <a
            href="https://www.quickresumebuilder.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-fuchsia-600 hover:underline"
          >
            QuickResumeBuilder →
          </a>
        </div>
      </div>
    </section>
  );
}
