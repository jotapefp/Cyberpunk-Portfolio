import { projects } from "./Projects.ts";
import { courses } from "./Certificates.ts";

export type Kind = "project" | "certificate";

export type Item = {
  title: string;
  description: string;
  hue: number;
  image?: string;
};

export const content: Record<Kind, Item[]> = {
  project: projects.map((p) => ({
    title: p.title,
    description: p.stack ?? p.description,
    hue: p.hue,
    image: p.image,
  })),

  certificate: courses.map((c) => ({
    title: c.title,
    description: [c.type, c.date].filter(Boolean).join(", "),
    hue: c.hue,
    image: c.image,
  })),
};
