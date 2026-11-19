import type { IconType } from "react-icons";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandGit,
  TbBrandTailwind,
  TbBrandGithub,
  TbBrandNodejs,
} from "react-icons/tb";

import type { Localized } from "../i18n/localized.ts";

export const icons: { name: string; Icon: IconType; color: string }[] = [
  { name: "HTML5", Icon: TbBrandHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: TbBrandCss3, color: "#2d9bf0" },
  { name: "JavaScript", Icon: TbBrandJavascript, color: "#f7df1e" },
  { name: "TypeScript", Icon: TbBrandTypescript, color: "#3a86d8" },
  { name: "React.js", Icon: TbBrandReact, color: "#0081A3" },
  { name: "Git", Icon: TbBrandGit, color: "#f1502f" },
  { name: "Tailwind CSS", Icon: TbBrandTailwind, color: "#38bdf8" },
  { name: "GitHub", Icon: TbBrandGithub, color: "#fff" },
  { name: "Node JS", Icon: TbBrandNodejs, color: "#339933" },
];

export const skills: { name: Localized; level: number; note?: Localized }[] = [
  {
    name: { pt: "Inglês", en: "English" },
    level: 85,
    note: { pt: "Avançado", en: "Advanced" },
  },
  {
    name: { pt: "Boa Comunicação", en: "Good Communication" },
    level: 98,
  },
  {
    name: { pt: "Trabalho em Equipe", en: "Teamwork" },
    level: 97,
  },
  {
    name: { pt: "Aprendizagem Rápida", en: "Fast Learning" },
    level: 96,
  },
];

export type Tab = "icons" | "skills";
