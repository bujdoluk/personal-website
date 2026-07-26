import { skills } from "@/lib/data";

const badgeStyles = [
  "from-violet-600 to-fuchsia-500",
  "from-fuchsia-500 to-orange-400",
  "from-orange-400 to-violet-600",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
        Skills
      </p>
      <h2 className="font-display mb-12 text-3xl font-bold tracking-tight md:text-4xl">
        What I work with
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className="rounded-2xl border border-black/5 bg-white/60 p-6 shadow-sm"
          >
            <h3 className="font-display mb-4 text-lg font-bold">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full bg-gradient-to-r ${badgeStyles[i % badgeStyles.length]} px-3 py-1.5 text-xs font-semibold text-white shadow-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
