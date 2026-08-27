import { certificates, experience, PROJECTS, technologies } from "@/constants";

export type Project = (typeof PROJECTS)[number] & {
  accent: "yellow" | "red" | "blue" | "pink" | "green";
};

export type Experience = (typeof experience)[number];

export const profile = {
  name: "Mitr Joshi",
  role: "Software Developer L2",
  location: "India",
  email: "",
  summary:
    "Full Stack Developer building production AI platforms, interactive campaign experiences, and scalable web systems using React, TypeScript, Node.js, cloud infrastructure, and generative AI.",
};

export const projects: Project[] = PROJECTS as Project[];

export const stack = technologies;

export const workHistory = experience;

export const certificatesData = certificates;

export const principles = [
  {
    number: "01",
    title: "SHIP SYSTEMS, NOT JUST SCREENS",
    body: "Great frontend work also means thinking about APIs, state, failures, infrastructure, and everything required to make a feature reliable in production.",
  },
  {
    number: "02",
    title: "MAKE COMPLEXITY FEEL SIMPLE",
    body: "AI and cloud workflows can be complex behind the scenes, but the experience should remain clear and effortless for the user.",
  },
  {
    number: "03",
    title: "EDGE CASES ARE FEATURES TOO",
    body: "Loading states, retries, validation, failures, and unexpected inputs deserve the same attention as the happy path.",
  },
  {
    number: "04",
    title: "DEBUG FIRST. GUESS NEVER.",
    body: "Trace the issue across frontend, APIs, databases, queues, and infrastructure until the real root cause becomes clear.",
  },
];

export const learning = [
  "SYSTEM DESIGN",
  "AWS ARCHITECTURE",
  "ADVANCED TYPESCRIPT",
  "PERFORMANCE",
  "AI SYSTEM DESIGN",
];
