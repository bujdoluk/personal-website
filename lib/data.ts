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
    start: "Jun 2022",
    end: "Dec 2025",
  },
  {
    company: "Marelli, Kechnec, Slovakia",
    start: "Nov 2020",
    end: "May 2022",
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
    start: "Oct 2019",
    end: "May 2020",
  },
  {
    school: "Czech Technical University in Prague",
    degree: "-",
    start: "Sept 2017",
    end: "Sept 2019",
  },
  {
    school: "Czech Technical University in Prague",
    degree: "Bc.",
    start: "Sept 2013",
    end: "Sept 2017",
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
