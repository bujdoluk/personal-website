import type { IconType } from "react-icons";
import { RiOpenaiFill } from "react-icons/ri";
import {
  siJavascript,
  siTypescript,
  siHtml5,
  siCss,
  siSass,
  siVuedotjs,
  siReact,
  siNuxt,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siCypress,
  siVitest,
  siGit,
  siDocker,
  siKeycloak,
  siGithubcopilot,
  siClaude,
  siSupabase,
  siFirebase,
  siVercel,
  siGithub,
  siGitlab,
  siVite,
  siJira,
} from "simple-icons";

export type SkillIconData =
  | { path: string; color: string }
  | { Icon: IconType; colorClassName: string };

function fromSimpleIcon(icon: { hex: string; path: string }): SkillIconData {
  return { color: `#${icon.hex}`, path: icon.path };
}

const skillIconMap: Record<string, SkillIconData> = {
  javascript: fromSimpleIcon(siJavascript),
  typescript: fromSimpleIcon(siTypescript),
  html5: fromSimpleIcon(siHtml5),
  css3: fromSimpleIcon(siCss),
  css: fromSimpleIcon(siCss),
  sass: fromSimpleIcon(siSass),
  scss: fromSimpleIcon(siSass),
  vue: fromSimpleIcon(siVuedotjs),
  react: fromSimpleIcon(siReact),
  nuxt: fromSimpleIcon(siNuxt),
  next: fromSimpleIcon(siNextdotjs),
  nodejs: fromSimpleIcon(siNodedotjs),
  postgresql: fromSimpleIcon(siPostgresql),
  cypress: fromSimpleIcon(siCypress),
  vitest: fromSimpleIcon(siVitest),
  git: fromSimpleIcon(siGit),
  docker: fromSimpleIcon(siDocker),
  keycloak: fromSimpleIcon(siKeycloak),
  keycloack: fromSimpleIcon(siKeycloak),
  copilot: fromSimpleIcon(siGithubcopilot),
  githubcopilot: fromSimpleIcon(siGithubcopilot),
  claude: fromSimpleIcon(siClaude),
  claudecode: fromSimpleIcon(siClaude),
  chatgpt: { Icon: RiOpenaiFill, colorClassName: "text-black" },
  openai: { Icon: RiOpenaiFill, colorClassName: "text-black" },
  supabase: fromSimpleIcon(siSupabase),
  firebase: fromSimpleIcon(siFirebase),
  vercel: fromSimpleIcon(siVercel),
  github: fromSimpleIcon(siGithub),
  gitlab: fromSimpleIcon(siGitlab),
  vite: fromSimpleIcon(siVite),
  jira: fromSimpleIcon(siJira),
};

export function getSkillIcon(name: string): SkillIconData | undefined {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return skillIconMap[key];
}
