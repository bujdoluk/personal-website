import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-black/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
          Experience
        </p>
        <h2 className="font-display mb-12 text-3xl font-bold tracking-tight md:text-4xl">
          Where I&apos;ve worked
        </h2>

        <ol className="relative list-none space-y-10 border-l-2 border-fuchsia-500/20 pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.start}`} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-violet-600 to-orange-400 ring-4 ring-[var(--background)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold">{job.role}</h3>
                <span className="text-sm font-medium text-foreground/50">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="mb-3 text-sm font-semibold text-fuchsia-600">
                {job.company}
              </p>
              <ul className="list-disc space-y-1.5 pl-4 marker:text-fuchsia-400">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm leading-relaxed text-foreground/70 md:text-base"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
