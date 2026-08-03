export const resumeUrls: Record<string, string> = {
  en: "/Lukas_Bujdos_Resume.pdf",
  sk: "/Lukas_Bujdos_Zivotopis.pdf",
  cs: "/Lukas_Bujdos_Zivotopis.pdf",
};

export const profile = {
  name: "Lukáš Bujdoš",
  location: "Nižná Myšľa, Slovakia",
  email: "lukas.bujdos@gmail.com",
  resumeUrl: "/Lukas_Bujdos_Resume.pdf",
  avatarUrl: "/lukas.webp",
  socials: {
    github: "https://github.com/bujdoluk",
    linkedin: "https://www.linkedin.com/in/lukas-bujdo%C5%A1-95560b180/",
  },
};

export type Experience = {
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
};

export const experience: Experience[] = [
  {
    company: "Logio, Prague, Czech Republic",
    start: "2022-06",
    end: "2025-12",
  },
  {
    company: "Marelli, Kechnec, Slovakia",
    start: "2020-11",
    end: "2022-05",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Javascript", "Typescript", "HTML5", "CSS3", "SASS", "SCSS"],
  },
  {
    category: "Frameworks",
    items: ["Vue", "React", "Nuxt", "Next"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Supabase", "Firebase"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL"],
  },
  {
    category: "Testing",
    items: ["Cypress", "Vitest"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Keycloack", "Vercel", "Github", "Gitlab", "Vite", "JSON:API"],
  },
  {
    category: "Project management",
    items: ["Jira"],
  },
  {
    category: "AI",
    items: ["ChatGPT", "Copilot", "Claude Code"],
  },
];

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export const education: Education[] = [
  {
    school: "IT v Kurze",
    degree: "-",
    start: "2019-10",
    end: "2020-05",
  },
  {
    school: "Czech Technical University in Prague",
    degree: "-",
    start: "2017-09",
    end: "2019-09",
  },
  {
    school: "Czech Technical University in Prague",
    degree: "Bc.",
    start: "2013-09",
    end: "2017-09",
  },
];

export type SpokenLanguage = {
  name: string;
  level: string;
};

export const spokenLanguages: SpokenLanguage[] = [
  { name: "Slovak", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];

export type LanguageStat = {
  name: string;
  percent: number;
  widthClassName: string;
  colorClassName: string;
};

export type Project = {
  name: string;
  url: string;
  languages: LanguageStat[];
  featured?: boolean;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    name: "QuickResumeBuilder",
    url: "https://www.quickresumebuilder.online",
    languages: [
      { name: "TypeScript", percent: 97.6, widthClassName: "w-[97.6%]", colorClassName: "bg-[#3178c6]" },
      { name: "TSQL", percent: 1.3, widthClassName: "w-[1.3%]", colorClassName: "bg-[#e38c00]" },
      { name: "JavaScript", percent: 0.7, widthClassName: "w-[0.7%]", colorClassName: "bg-[#f1e05a]" },
      { name: "CSS", percent: 0.4, widthClassName: "w-[0.4%]", colorClassName: "bg-[#663399]" },
    ],
    featured: true,
    imageUrl: "/projects/quickresumebuilder.webp",
  },
  {
    name: "Feedback App",
    url: "https://feedback-app-a6506.web.app",
    languages: [
      { name: "Vue", percent: 74.5, widthClassName: "w-[74.5%]", colorClassName: "bg-[#41b883]" },
      { name: "JavaScript", percent: 14.6, widthClassName: "w-[14.6%]", colorClassName: "bg-[#f1e05a]" },
      { name: "TypeScript", percent: 7.8, widthClassName: "w-[7.8%]", colorClassName: "bg-[#3178c6]" },
      { name: "HTML", percent: 1.8, widthClassName: "w-[1.8%]", colorClassName: "bg-[#e34c26]" },
      { name: "CSS", percent: 0.9, widthClassName: "w-[0.9%]", colorClassName: "bg-[#663399]" },
      { name: "Dockerfile", percent: 0.3, widthClassName: "w-[0.3%]", colorClassName: "bg-[#384d54]" },
    ],
    imageUrl: "/projects/feedback-app.webp",
  },
];
