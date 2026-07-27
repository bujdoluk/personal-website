export const profile = {
  name: "Lukáš Bujdoš",
  role: "Web Developer",
  tagline: "I build fast, accessible, and delightful web experiences — from pixel to production.",
  bio: "I'm a full-stack web developer who loves turning ambiguous ideas into polished, shippable products. I've spent the last several years working across the stack — React and Next.js on the front end, Node.js and PostgreSQL on the back end — with a focus on performance, clean UX, and code that's easy to maintain. When I'm not shipping features, I'm usually tinkering on side projects like QuickResumeBuilder.",
  location: "Nižna Myšľa, Slovakia",
  email: "lukas.bujdos@gmail.com",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/lukas.webp",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
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
    category: "Languages",
    items: ["Javascript", "Typescript"],
  },
  {
    category: "Frameworks",
    items: ["Nuxt", "Next"],
  },
  {
    category: "Backend",
    items: ["Node.js"],
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
    items: ["Git", "Docker", "Keycloack"],
  },
];

export type Education = {
  school: string;
  subject: string;
  degree: string;
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
  },
  {
    school: "Czech Technical University in Prague",
    subject: "Lol",
    degree: "-",
    start: "Sept 2017",
    end: "Sept 2019",
  },
  {
    school: "Czech Technical University in Prague",
    subject: "Lol",
    degree: "Bc.",
    start: "Sept 2013",
    end: "Sept 2017",
  },
];

export type Project = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "QuickResumeBuilder",
    description:
      "A resume builder web app that lets anyone create a polished, ATS-friendly resume in minutes — live templates, instant PDF export, and no sign-up required to get started.",
    url: "https://www.quickresumebuilder.online",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    name: "Habitloop",
    description:
      "A minimalist habit-tracking app with streaks, reminders, and weekly progress charts.",
    url: "#",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];
