import { skills } from "@/lib/data";
import SkillIcon from "@/components/SkillIcon";
import type { Dictionary } from "@/lib/i18n";

export default function Skills({ dict }: { dict: Dictionary }) {
  const t = dict.skills;
  const categories = dict.data.skills.categories as Record<string, string>;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display mb-12 text-3xl font-bold tracking-tight md:text-4xl">
        {t.heading}
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-black/5 bg-white/60 p-6 shadow-sm"
          >
            <h3 className="font-display mb-4 text-lg font-bold">
              {categories[group.category] ?? group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm"
                >
                  <SkillIcon name={skill} />
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
