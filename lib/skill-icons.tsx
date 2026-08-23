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
  | { Icon: IconType; colorClassName: string }
  | { paths: { d: string; fill: string }[]; viewBox: string };

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
  // Slack's official 4-color mark isn't in simple-icons (removed per Slack's brand
  // guidelines), so it's inlined directly from Slack's own brand assets.
  slack: {
    viewBox: "0 0 127 127",
    paths: [
      {
        fill: "#E01E5A",
        d: "M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z",
      },
      {
        fill: "#36C5F0",
        d: "M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z",
      },
      {
        fill: "#2EB67D",
        d: "M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z",
      },
      {
        fill: "#ECB22E",
        d: "M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z",
      },
    ],
  },
};

export function getSkillIcon(name: string): SkillIconData | undefined {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return skillIconMap[key];
}
