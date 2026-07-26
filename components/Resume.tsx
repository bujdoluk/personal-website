import { education, experience, profile, skills } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
        Resume
      </p>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          My resume
        </h2>
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-sm">
        <div className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-8 py-10 text-white">
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            {profile.name}
          </h3>
          <p className="text-white/90">{profile.role} · {profile.location}</p>
          <p className="mt-1 text-sm text-white/80">{profile.email}</p>
        </div>

        <div className="grid gap-10 p-8 md:grid-cols-2 md:p-10">
          <div>
            <h4 className="font-display mb-4 text-lg font-bold text-fuchsia-600">
              Experience
            </h4>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={`${job.company}-${job.start}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-semibold">{job.role}</p>
                    <span className="text-xs text-foreground/50">
                      {job.start} — {job.end}
                    </span>
                  </div>
                  <p className="mb-1 text-sm text-foreground/60">{job.company}</p>
                  <ul className="list-disc space-y-1 pl-4 marker:text-fuchsia-400">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-foreground/70">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h4 className="font-display mb-4 text-lg font-bold text-fuchsia-600">
                Education
              </h4>
              <div className="space-y-3">
                {education.map((item) => (
                  <div key={item.school}>
                    <p className="font-semibold">{item.degree}</p>
                    <p className="text-sm text-foreground/60">{item.school}</p>
                    <p className="text-xs text-foreground/50">
                      {item.start} — {item.end}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display mb-4 text-lg font-bold text-fuchsia-600">
                Skills
              </h4>
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="mb-1.5 text-sm font-semibold text-foreground/80">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium text-foreground/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 bg-black/[0.02] px-8 py-5 text-sm text-foreground/60 md:px-10">
          Built this resume with my own tool —{" "}
          <a
            href="https://www.quickresumebuilder.com"
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
