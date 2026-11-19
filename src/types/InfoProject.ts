import { projects } from "./Projects.ts";
import { courses, courseTypes } from "./Certificates.ts";
import type { Lang } from "../i18n/translations.ts";

export type Kind = "project" | "certificate";

export type Item = {
  title: string;
  description: string;
  hue: number;
  image?: string;
};

/* o conteúdo depende do idioma, por isso agora é uma função */
export const getContent = (lang: Lang): Record<Kind, Item[]> => ({
  project: projects.map((p) => ({
    title: p.title,
    description: p.stack ?? p.description[lang],
    hue: p.hue,
    image: p.image,
  })),

  certificate: courses.map((c) => ({
    title: c.title[lang],
    description: [courseTypes[c.type][lang], c.date].filter(Boolean).join(", "),
    hue: c.hue,
    image: c.image,
  })),
});
