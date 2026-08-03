import { projects } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

export default function Projects({ dict }: { dict: Dictionary }) {
  const t = dict.projects;

  return (
    <section id="projects" className="bg-black/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
          {t.sectionLabel}
        </p>
        <h2 className="font-display mb-12 text-3xl font-bold tracking-tight md:text-4xl">
          {t.heading}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const td = dict.data.projects[i];
            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg ${
                  project.featured
                    ? "border-transparent bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white"
                    : "border-black/5 bg-white/70"
                }`}
              >
                {project.imageUrl && (
                  <div className="aspect-video w-full overflow-hidden bg-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.imageUrl}
                      alt={`${project.name} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {project.featured && (
                      <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                        {t.featuredBadge}
                      </span>
                    )}
                    <h3 className="font-display mb-2 text-xl font-bold">
                      {project.name}
                    </h3>
                    <p
                      className={`mb-4 text-sm leading-relaxed md:text-base ${
                        project.featured ? "text-white/90" : "text-foreground/70"
                      }`}
                    >
                      {td.description}
                    </p>
                  </div>

                  <div>
                    <div
                      className={`mb-3 flex h-1.5 w-full overflow-hidden rounded-full ${
                        project.featured ? "bg-black/20" : "bg-black/10"
                      }`}
                    >
                      {project.languages.map((lang) => (
                        <div
                          key={lang.name}
                          className={`${lang.widthClassName} ${lang.colorClassName}`}
                        />
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {project.languages.map((lang) => (
                          <span
                            key={lang.name}
                            className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                              project.featured ? "text-white/90" : "text-foreground/60"
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${lang.colorClassName}`}
                            />
                            {lang.name}
                            <span className={project.featured ? "text-white/60" : "text-foreground/40"}>
                              {lang.percent}%
                            </span>
                          </span>
                        ))}
                      </div>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1 ${
                          project.featured ? "text-white" : "text-fuchsia-600"
                        }`}
                      >
                        {t.visitLink}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
