export type Kind = "project" | "certificate";

export type Item = {
  title: string;
  description: string;
  hue: number; 
  image?: string;
};

/* Informações de projetos e certificados */
export const content: Record<Kind, Item[]> = {
  project: [
    {
      title: "Rick and Morty Wanted",
      description: "Desenvolvimento front-end usando TypeScript",
      hue: 190,
      image: "/prints/rick-and-morty.png",
    },
    {
      title: "Dev Quiz",
      description: "Mini Game de programação",
      hue: 265,
    },
    {
      title: "Multi-Step Form",
      description: "Formulário de avaliação em React, TypeScript e Vite",
      hue: 150,
    },
    { title: "Dev Notes", description: "App de notas", hue: 330 },
    { title: "To-do List", description: "Lista de tarefas", hue: 25 },
    {
      title: "Countdown",
      description: "Contador regressivo em React + Vite",
      hue: 210,
    },
  ],
  certificate: [
    {
      title: "HTML Essentials",
      description: "Cisco Networking Academy, 27/09/2026",
      hue: 200,
    },
    {
      title: "CSS Essentials",
      description: "Cisco Networking Academy, 29/09/2026",
      hue: 230,
    },
    {
      title: "Engenharia de Software",
      description: "FIAP, Nano Course de 100 horas",
      hue: 340,
    },
    {
      title: "Programador Web em Tecnologias Front-end",
      description: "IFMG, out/2026",
      hue: 120,
    },
  ],
};


