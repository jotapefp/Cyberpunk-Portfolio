import type { Localized } from "../i18n/localized.ts";

type Tone = "cyan" | "green" | "red";

type Item = {
  period: string;
  kind: Localized;
  title: Localized;
  org: string;
  description: Localized;
  tone: Tone;
  image?: string;
};

export const experiences: Item[] = [
  {
    period: "12/2021 – 08/2022",
    kind: { pt: "Estágio", en: "Internship" },
    title: { pt: "Suporte de TI", en: "IT Support" },
    org: "Toque a Campainha Móveis (Grupo TAC)",
    description: {
      pt: "Prestei suporte técnico em informática, atuando em problemas de hardware e software. Auxiliei na manutenção e organização de sistemas e equipamentos, identificando e corrigindo falhas",
      en: "Provided IT technical support, handling hardware and software issues. Helped maintain and organize systems and equipment, identifying and fixing faults",
    },
    tone: "green",
    image: "/ImageIcons/ToqueCampainha.webp",
  },
  {
    period: "12/2024 – 10/2026",
    kind: { pt: "Jovem Aprendiz", en: "Young Apprentice" },
    title: { pt: "Arco Administrativo", en: "Administrative Track" },
    org: "Tekno",
    description: {
      pt: "Executei procedimentos administrativos com foco em organização, controle e disciplina. Contribuí com a comunicação eficaz em rotinas operacionais, apoiando diferentes áreas da empresa",
      en: "Carried out administrative procedures with a focus on organization, control and discipline. Contributed to effective communication in operational routines, supporting different areas of the company",
    },
    tone: "cyan",
    image: "/ImageIcons/Tekno.webp",
  },
  {
    period: "10/2026 – ????",
    kind: { pt: "Objetivo Atual", en: "Current Goal" },
    title: { pt: "Buscando Estágio", en: "Seeking an Internship" },
    org: "",
    description: {
      pt: "A procura de um estágio na área de TI, voltado para o desenvolvimento web/software",
      en: "Looking for an IT internship focused on web/software development",
    },
    tone: "red",
    image: "/ImageIcons/BuscaEstagio.webp",
  },
];
