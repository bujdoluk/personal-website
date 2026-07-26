import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-black/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
          Projects
        </p>
        <h2 className="font-display mb-12 text-3xl font-bold tracking-tight md:text-4xl">
          Things I&apos;ve built
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg ${
                project.featured
                  ? "border-transparent bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white md:col-span-2"
                  : "border-black/5 bg-white/70"
              }`}
            >
              <div>
                {project.featured && (
                  <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    Featured project
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
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        project.featured
                          ? "bg-white/20 text-white"
                          : "bg-black/5 text-foreground/70"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1 ${
                    project.featured ? "text-white" : "text-fuchsia-600"
                  }`}
                >
                  Visit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
