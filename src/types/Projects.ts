import type { Localized } from "../i18n/localized.ts";

export type Project = {
  title: string;
  description: Localized;
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
    description: {
      pt: "Projeto autoral desenvolvido para fins de estudo, com o objetivo de praticar consumo de API, componentização em React e boas práticas de desenvolvimento front-end usando TypeScript.",
      en: "Original project built for study purposes, aiming to practice API consumption, component-based architecture in React and front-end best practices using TypeScript.",
    },
    url: "https://github.com/jotapefp/Rick-and-Morty-Wanted",
    urlTest: "https://rick-and-morty-wanted.vercel.app/",
    stack: "HTML5 + CSS3 + React + TypeScript + API REST",
    tags: ["TypeScript"],
    hue: 190,
    image: "/ImageProjects/Rick_And_Morty.webp",
  },
  {
    title: "Dev Quiz",
    description: {
      pt: "Quiz interativo para testar seus conhecimentos em programação web. O usuário escolhe uma categoria, responde a uma sequência de perguntas de múltipla escolha e, no final, vê sua pontuação.",
      en: "Interactive quiz to test your web programming knowledge. The user picks a category, answers a sequence of multiple-choice questions and sees their score at the end.",
    },
    url: "https://github.com/jotapefp/Dev-Quiz",
    stack: "HTML5 + CSS3 + JavaScript + React",
    tags: ["JavaScript"],
    hue: 265,
    image: "/ImageProjects/Dev_Quiz.webp",
  },
  {
    title: "Multi-Step Form",
    description: {
      pt: "Formulário de avaliação de produto dividido em etapas. O usuário informa seus dados, dá uma nota de satisfação com um comentário e, antes de enviar, confere um resumo da avaliação.",
      en: "Product review form split into steps. The user enters their details, gives a satisfaction rating with a comment and, before submitting, checks a summary of the review.",
    },
    url: "https://github.com/jotapefp/Multi-Step-Form",
    stack: "HTML5 + CSS3 + React + TypeScript",
    tags: ["TypeScript"],
    hue: 150,
    image: "/ImageProjects/Multi_Step_Form.webp",
  },
  {
    title: "Dev Notes",
    description: {
      pt: "Aplicação web de notas rápidas para o dia a dia de quem programa. Dá para criar, pesquisar, fixar, duplicar e remover notas, além de exportar tudo em CSV — direto no navegador, sem dependências ou etapa de build.",
      en: "Quick-notes web app for everyday programming. You can create, search, pin, duplicate and delete notes, and export everything as CSV — right in the browser, with no dependencies or build step.",
    },
    url: "https://github.com/jotapefp/Dev-Notes",
    stack: "HTML5 + CSS3 + JavaScript",
    tags: ["JavaScript"],
    hue: 330,
    image: "/ImageProjects/Dev_Notes.webp",
  },
  {
    title: "To-do List",
    description: {
      pt: "Aplicação web simples para organizar tarefas do dia a dia. Dá para adicionar, concluir, editar e remover tarefas, além de pesquisar por texto e filtrar por status — tudo direto no navegador, sem dependências ou etapa de build.",
      en: "Simple web app to organize everyday tasks. You can add, complete, edit and delete tasks, as well as search by text and filter by status — all right in the browser, with no dependencies or build step.",
    },
    url: "https://github.com/jotapefp/To-do-List",
    stack: "HTML5 + CSS3 + JavaScript",
    tags: ["JavaScript"],
    hue: 25,
    image: "/ImageProjects/To_Do_List.webp",
  },
  {
    title: "Countdown",
    description: {
      pt: "Aplicação web para montar a sua própria contagem regressiva. Você define o título do evento, a data e hora, uma imagem de fundo e a cor do tema, e o app mostra quantos dias, horas, minutos e segundos faltam — atualizando em tempo real.",
      en: "Web app to build your own countdown. You set the event title, date and time, a background image and the theme color, and the app shows how many days, hours, minutes and seconds are left — updating in real time.",
    },
    url: "https://github.com/jotapefp/Countdown",
    stack: "HTML5 + CSS3 + JavaScript + React",
    tags: ["JavaScript"],
    hue: 210,
    image: "/ImageProjects/Countdown.webp",
  },
];
