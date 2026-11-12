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
    items: ["Cypress", "Vitest", "Playwright"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Keycloack", "Vercel", "Github", "Gitlab", "Vite", "JSON:API"],
  },
  {
    category: "Project management",
    items: ["Jira", "Slack"],
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
    name: "downDATA",
    url: "https://github.com/bujdoluk/downdata",
    languages: [
      { name: "TypeScript", percent: 95.1, widthClassName: "w-[95.1%]", colorClassName: "bg-[#3178c6]" },
      { name: "PLpgSQL", percent: 2.6, widthClassName: "w-[2.6%]", colorClassName: "bg-[#336790]" },
      { name: "JavaScript", percent: 1.2, widthClassName: "w-[1.2%]", colorClassName: "bg-[#f1e05a]" },
      { name: "Python", percent: 0.6, widthClassName: "w-[0.6%]", colorClassName: "bg-[#3572a5]" },
      { name: "CSS", percent: 0.5, widthClassName: "w-[0.5%]", colorClassName: "bg-[#663399]" },
    ],
    featured: true,
    imageUrl: "/projects/downdata.webp",
  },
  {
    name: "QuickResumeBuilder",
    url: "https://github.com/bujdoluk/resume-builder",
    languages: [
      { name: "TypeScript", percent: 98.0, widthClassName: "w-[98%]", colorClassName: "bg-[#3178c6]" },
      { name: "TSQL", percent: 0.9, widthClassName: "w-[0.9%]", colorClassName: "bg-[#e38c00]" },
      { name: "JavaScript", percent: 0.8, widthClassName: "w-[0.8%]", colorClassName: "bg-[#f1e05a]" },
      { name: "CSS", percent: 0.3, widthClassName: "w-[0.3%]", colorClassName: "bg-[#663399]" },
    ],
    imageUrl: "/projects/quickresumebuilder.webp",
  },
  {
    name: "Feedback App",
    url: "https://github.com/bujdoluk/Product-feedback-app",
    languages: [
      { name: "Vue", percent: 92.1, widthClassName: "w-[92.1%]", colorClassName: "bg-[#41b883]" },
      { name: "JavaScript", percent: 7.1, widthClassName: "w-[7.1%]", colorClassName: "bg-[#f1e05a]" },
      { name: "HTML", percent: 0.8, widthClassName: "w-[0.8%]", colorClassName: "bg-[#e34c26]" },
    ],
    imageUrl: "/projects/feedback-app.webp",
  },
];
