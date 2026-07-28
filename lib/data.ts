export const profile = {
  name: "Lukáš Bujdoš",
  role: "Web Developer",
  tagline: "I build fast, accessible, and delightful web experiences — from pixel to production.",
  bio: "I'm a full-stack web developer who loves turning ambiguous ideas into polished, shippable products. I've spent the last several years working across the stack — React and Next.js on the front end, Node.js and PostgreSQL on the back end — with a focus on performance, clean UX, and code that's easy to maintain. When I'm not shipping features, I'm usually tinkering on side projects like QuickResumeBuilder.",
  location: "Nižná Myšľa, Slovakia",
  email: "lukas.bujdos@gmail.com",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/lukas.webp",
  socials: {
    github: "https://github.com/bujdoluk",
    linkedin: "https://www.linkedin.com/in/lukas-bujdo%C5%A1-95560b180/",
  },
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Logio, Prague, Czech Republic",
    start: "Jun 2022",
    end: "Dec 2025",
    bullets: [
      "Worked on apps in retail and logistics",
      "Implemented UI components from Vuetify library",
      "Wrote custom components as a workaround for few broken components in Vuetify",
      "Designed reusable components in Vue JS",
      "Used leaflet.js, apexchart to implement map and graphs",
      "Migrated project from vue2 to vue3",
      "Used JSON:API spec for data",
      "Wrote e2e tests in Cypress",
      "Dockerized frontend client app",
      "Wrote frontend tasks in jira",
    ],
  },
  {
    role: "Production Operator",
    company: "Marelli, Kechnec, Slovakia",
    start: "Nov 2020",
    end: "May 2022",
    bullets: [
      "Assembly of radios and tachometers for Porsche, VW, Citroen, Peugeot, Opel",
      "Assembly, Testing, Quality Control",
    ],
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
  subject: string;
  degree: string;
  description?: string;
  start: string;
  end: string;
};

export const education: Education[] = [
   {
    school: "Diploma: Programming Basics in Java Language",
    subject: "Learning basic of programming OOP in Java, SQL database language.",
    degree: "-",
    start: "Oct 2019",
    end: "May 2020",
    description: ""
  },
  {
    school: "Czech Technical University in Prague",
    subject: "Industry 4.0",
    degree: "-",
    start: "Sept 2017",
    end: "Sept 2019",
    description: "Studied subjects -> AI, Statistical mechanics, Design of manufacturing processes, Industrial robots, Law, Economics"
  },
  {
    school: "Czech Technical University in Prague",
    subject: "Theoretical Basics of Mechanical Engineering",
    degree: "Bc.",
    start: "Sept 2013",
    end: "Sept 2017",
    description: "Studied subject -> mathematics, mechanics, physics, strength of materials, materials, technology, thermodynamics, fluid mechanics, microelectronics etc..."
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

export const interests: string[] = ["Hiking", "Reading", "Weight-lifting"];

export type LanguageStat = {
  name: string;
  percent: number;
  widthClassName: string;
  colorClassName: string;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  languages: LanguageStat[];
  featured?: boolean;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    name: "QuickResumeBuilder",
    description:
      "A resume builder web app that lets anyone create a polished, ATS-friendly resume in minutes — live templates, instant PDF export, and no sign-up required to get started.",
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
    description:
      "A product feedback management platform. Users can submit and vote on feature requests, product teams can share a public roadmap of planned/in-progress work, and publish a changelog to communicate updates — turning user feedback into actionable product decisions.",
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
