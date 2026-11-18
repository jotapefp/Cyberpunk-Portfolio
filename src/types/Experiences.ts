type Tone = "cyan" | "green" | "red";

type Item = {
  period: string;
  kind: string;
  title: string;
  org: string;
  description: string;
  tone: Tone;
  image?: string;
};

export const experiences: Item[] = [
  {
    period: "12/2021 – 08/2022",
    kind: "Estágio",
    title: "Suporte de TI",
    org: "Toque a Campainha Móveis (Grupo TAC)",
    description:
      "Prestei suporte técnico em informática, atuando em problemas de hardware e software. Auxiliei na manutenção e organização de sistemas e equipamentos, identificando e corrigindo falhas",
    tone: "green",
    image: "/ImageIcons/ToqueCampainha.webp",
  },
  {
    period: "12/2024 – 10/2026",
    kind: "Jovem Aprendiz",
    title: "Arco Administrativo",
    org: "Tekno",
    description:
      "Executei procedimentos administrativos com foco em organização, controle e disciplina. Contribuí com a comunicação eficaz em rotinas operacionais, apoiando diferentes áreas da empresa",
    tone: "cyan",
    image: "/ImageIcons/Tekno.webp",
  },
  {
    period: "10/2026 – ????",
    kind: "Objetivo Atual",
    title: "Buscando Estágio",
    org: "",
    description:
      "A procura de um estágio na área de TI, voltado para o desenvolvimento web/software",
    tone: "red",
    image: "/ImageIcons/BuscaEstagio.webp",
  },
];
