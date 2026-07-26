export const profile = {
  name: "Alex Novak",
  role: "Web Developer",
  tagline: "I build fast, accessible, and delightful web experiences — from pixel to production.",
  bio: "I'm a full-stack web developer who loves turning ambiguous ideas into polished, shippable products. I've spent the last several years working across the stack — React and Next.js on the front end, Node.js and PostgreSQL on the back end — with a focus on performance, clean UX, and code that's easy to maintain. When I'm not shipping features, I'm usually tinkering on side projects like QuickResumeBuilder.",
  location: "Bratislava, Slovakia",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
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
    role: "Senior Frontend Developer",
    company: "Brightloop Software",
    start: "2023",
    end: "Present",
    bullets: [
      "Led the migration of a legacy React app to Next.js App Router, cutting page load times by 40%.",
      "Built a component library used across 6 internal products, reducing UI inconsistencies and dev time.",
      "Mentored two junior developers and ran weekly code reviews focused on performance and accessibility.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Northwind Digital",
    start: "2021",
    end: "2023",
    bullets: [
      "Shipped and maintained customer-facing features for a SaaS platform serving 50k+ monthly users.",
      "Designed REST and GraphQL APIs backed by PostgreSQL, with a focus on query performance.",
      "Introduced automated E2E testing with Playwright, cutting regression bugs in production by half.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Studio Forma",
    start: "2019",
    end: "2021",
    bullets: [
      "Built marketing sites and landing pages for clients using React, and later Next.js.",
      "Collaborated directly with designers to translate Figma mockups into responsive, accessible UI.",
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
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Docker", "CI/CD", "Testing (Playwright/Vitest)", "Vercel"],
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
    school: "Comenius University Bratislava",
    degree: "B.Sc. in Computer Science",
    start: "2016",
    end: "2020",
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
    url: "https://www.quickresumebuilder.com",
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
  {
    name: "DevNotes",
    description:
      "A markdown-based note-taking tool for developers, with code-block syntax highlighting and instant search.",
    url: "#",
    tags: ["Next.js", "SQLite"],
  },
];
