export type Project = {
  title: string;
  description: string;
  url: string;
  urlTest?: string;
  stack?: string;
  tags: string[];
  hue: number;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Rick and Morty Wanted",
    description:
      "Projeto autoral desenvolvido para fins de estudo, com o objetivo de praticar consumo de API, componentização em React e boas práticas de desenvolvimento front-end usando TypeScript.",
    url: "https://github.com/jotapefp/Rick-and-Morty-Wanted",
    urlTest: "https://rick-and-morty-wanted.vercel.app/",
    stack: "HTML5 + CSS3 + React + TypeScript + API REST",
    tags: ["TypeScript"],
    hue: 190,
    image: "../public/ImageProjects/Rick_And_Morty.png",
  },
  {
    title: "Dev Quiz",
    description:
      "Quiz interativo para testar seus conhecimentos em programação web. O usuário escolhe uma categoria, responde a uma sequência de perguntas de múltipla escolha e, no final, vê sua pontuação.",
    url: "https://github.com/jotapefp/Dev-Quiz",
    stack: "HTML5 + CSS3 + JavaScript + React",
    tags: ["JavaScript"],
    hue: 265,
    image: "../public/ImageProjects/Dev_Quiz.png",
  },
  {
    title: "Multi-Step Form",
    description:
      "Formulário de avaliação de produto dividido em etapas. O usuário informa seus dados, dá uma nota de satisfação com um comentário e, antes de enviar, confere um resumo da avaliação.",
    url: "https://github.com/jotapefp/Multi-Step-Form",
    stack: "HTML5 + CSS3 + React + TypeScript",
    tags: ["TypeScript"],
    hue: 150,
    image: "../public/ImageProjects/Multi_Step_Form.png",
  },
  {
    title: "Dev Notes",
    description:
      "Aplicação web de notas rápidas para o dia a dia de quem programa. Dá para criar, pesquisar, fixar, duplicar e remover notas, além de exportar tudo em CSV — direto no navegador, sem dependências ou etapa de build.",
    url: "https://github.com/jotapefp/Dev-Notes",
    stack: "HTML5 + CSS3 + JavaScript",
    tags: ["JavaScript"],
    hue: 330,
    image: "../public/ImageProjects/Dev_Notes.png",
  },
  {
    title: "To-do List",
    description:
      "Aplicação web simples para organizar tarefas do dia a dia. Dá para adicionar, concluir, editar e remover tarefas, além de pesquisar por texto e filtrar por status — tudo direto no navegador, sem dependências ou etapa de build.",
    url: "https://github.com/jotapefp/To-do-List",
    stack: "HTML5 + CSS3 + JavaScript",
    tags: ["JavaScript"],
    hue: 25,
    image: "../public/ImageProjects/To_Do_List.png",
  },
  {
    title: "Countdown",
    description:
      "Aplicação web para montar a sua própria contagem regressiva. Você define o título do evento, a data e hora, uma imagem de fundo e a cor do tema, e o app mostra quantos dias, horas, minutos e segundos faltam — atualizando em tempo real.",
    url: "https://github.com/jotapefp/Countdown",
    stack: "HTML5 + CSS3 + JavaScript+ React",
    tags: ["JavaScript"],
    hue: 210,
    image: "../public/ImageProjects/Countdown.png",
  },
];
