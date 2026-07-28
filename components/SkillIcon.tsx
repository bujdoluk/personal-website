import { getSkillIcon } from "@/lib/skill-icons";

export default function SkillIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  const icon = getSkillIcon(name);
  if (!icon) return null;

  if ("Icon" in icon) {
    const Icon = icon.Icon;
    return <Icon className={`${className} ${icon.colorClassName}`} />;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      fill={icon.color}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
