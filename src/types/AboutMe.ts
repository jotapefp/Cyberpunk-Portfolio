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

export const icons: { name: string; Icon: IconType; color: string }[] = [
  { name: "HTML5", Icon: TbBrandHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: TbBrandCss3, color: "#2d9bf0" },
  { name: "JavaScript", Icon: TbBrandJavascript, color: "#f7df1e" },
  { name: "TypeScript", Icon: TbBrandTypescript, color: "#3a86d8" },
  { name: "React.js", Icon: TbBrandReact, color: "#0081A3" },
  { name: "Git", Icon: TbBrandGit, color: "#f1502f" },
  { name: "Taildwind CSS", Icon: TbBrandTailwind, color: "#38bdf8" },
  { name: "GitHub", Icon: TbBrandGithub, color: "#fff" },
  { name: "Node JS", Icon: TbBrandNodejs, color: "#339933" },
];

export const skills: { name: string; level: number; note?: string }[] = [
  { name: "Inglês", level: 85, note: "Avançado" },
  { name: "Boa Comunicação", level: 98 },
  { name: "Trabalho em Equipe", level: 97 },
  { name: "Aprendizagem Rápida", level: 96 },
];

export type Tab = "icons" | "skills";
