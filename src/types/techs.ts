import type { IconType } from "react-icons";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandGit
} from "react-icons/tb";

// Tecnologias da aba "Especificações".
// As cores são próximas às das marcas, ajustadas para ler bem no fundo escuro.
// Para incluir outra, basta acrescentar uma linha (ícones: react-icons.github.io/react-icons, pasta "Tabler Icons").
export const specs: { name: string; Icon: IconType; color: string }[] = [
  { name: "HTML5", Icon: TbBrandHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: TbBrandCss3, color: "#2d9bf0" },
  { name: "Git", Icon: TbBrandGit, color: "#f1502f" },
  { name: "JavaScript", Icon: TbBrandJavascript, color: "#f7df1e" },
  { name: "TypeScript", Icon: TbBrandTypescript, color: "#3a86d8" },
  { name: "React.js", Icon: TbBrandReact, color: "#61dafb" },
   
];
