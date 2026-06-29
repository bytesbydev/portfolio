import {
  Code2,
  Globe,
  Database,
  Cloud,
  Wrench,
  Terminal,
} from "lucide-react";

export const skills = [
  {
    title: "Frontend",
    icon: Globe,
    color: "blue",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
    ],
  },

  {
    title: "Backend",
    icon: Code2,
    color: "violet",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Python", level: 70 },
    ],
  },

  {
    title: "Database",
    icon: Database,
    color: "blue",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "PostgreSQL", level: 65 },
    ],
  },

  {
    title: "Cloud",
    icon: Cloud,
    color: "violet",
    items: [
      { name: "AWS", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Vercel", level: 90 },
    ],
  },

  {
    title: "Programming",
    icon: Terminal,
    color: "blue",
    items: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "C++", level: 75 },
    ],
  },

  {
    title: "Tools",
    icon: Wrench,
    color: "violet",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
    ],
  },
];