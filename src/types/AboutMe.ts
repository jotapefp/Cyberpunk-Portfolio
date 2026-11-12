import type { IconType } from "react-icons";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandGit,
} from "react-icons/tb";

export const icons: { name: string; Icon: IconType; color: string }[] = [
  { name: "HTML5", Icon: TbBrandHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: TbBrandCss3, color: "#2d9bf0" },
  { name: "JavaScript", Icon: TbBrandJavascript, color: "#f7df1e" },
  { name: "TypeScript", Icon: TbBrandTypescript, color: "#3a86d8" },
  { name: "React.js", Icon: TbBrandReact, color: "#61dafb" },
  { name: "Git", Icon: TbBrandGit, color: "#f1502f" },
];

export const skills: { name: string; level: number; note?: string }[] = [
  { name: "Inglês", level: 85, note: "Avançado" },
  { name: "Boa comunicação", level: 95 },
  { name: "Trabalho em equipe", level: 95 },
];

export type Tab = "icons" | "skills";
