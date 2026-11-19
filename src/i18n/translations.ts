export type Lang = "pt" | "en";

const pt = {
  common: {
    all: "Todos",
  },
  footer: {
    credit: "Desenvolvido por João Paulo Pinheiro",
  },
  info: {
    project: "Projeto em destaque",
    certificate: "Certificado",
  },
  nav: {
    about: "Sobre mim",
    experience: "Experiência",
    projects: "Projetos",
    certificates: "Certificados e Cursos",
    menuLabel: "Seções do portfólio",
    openMenu: "Abrir menu",
  },
  lang: {
    code: "PT",
    switchTo: "Mudar idioma para English",
  },
  home: {
    titleLines: ["Seja", "bem-vindo"],
    description:
      "Explore as seções para conhecer mais sobre mim, meus projetos e experiências além de acompanhar minha evolução. Fique à vontade para descobrir!",
    cta: "Ver projetos",
    stackLabel: "Tecnologias",
  },
  about: {
    nameLabel: "Nome /",
    photoAlt: "Foto de",
    description:
      "Sou Desenvolvedor Web e estudante de Ciência da Computação (IBMR - 4º período) com formação técnica em Informática pelo CEFET/RJ. Gosto de transformar ideias em soluções digitais, desenvolver interfaces intuitivas e aprender novas tecnologias. Estou sempre buscando evoluir minhas habilidades e criar projetos que unam funcionalidade, criatividade e uma boa experiência para o usuário.",
    tools: "Ferramentas",
    skills: "Habilidades",
    average: "Média",
  },
  experience: {
    heading: "Experiência",
  },
  projects: {
    heading: "Projetos",
    label: "Projeto",
    viewProject: "Ver Projeto",
    counter: (shown: number, total: number) => `${shown} de ${total} projetos`,
    repoLabel: (title: string) =>
      `${title}: abrir o repositório no GitHub (nova aba)`,
    demoLabel: (title: string) =>
      `${title}: abrir o projeto funcionando (nova aba)`,
  },
  certificates: {
    heading: "Certificados e Cursos",
    newest: "Mais novos",
    oldest: "Mais antigos",
    counter: (shown: number, total: number) => `${shown} de ${total} cursos`,
    sortLabel: (newestFirst: boolean) =>
      `Ordenar por data: ${
        newestFirst ? "mais novos primeiro" : "mais antigos primeiro"
      }. Clique para inverter.`,
  },
};

// `typeof pt` obriga o inglês a ter exatamente as mesmas chaves
const en: typeof pt = {
  common: {
    all: "All",
  },
  footer: {
    credit: "Developed by João Paulo Pinheiro",
  },
  info: {
    project: "Featured project",
    certificate: "Certificate",
  },
  nav: {
    about: "About me",
    experience: "Experience",
    projects: "Projects",
    certificates: "Certificates & Courses",
    menuLabel: "Portfolio sections",
    openMenu: "Open menu",
  },
  lang: {
    code: "EN",
    switchTo: "Switch language to Português",
  },
  home: {
    titleLines: ["Welcome"],
    description:
      "Explore the sections to learn more about me, my projects and experience, and to follow my progress. Feel free to look around!",
    cta: "View projects",
    stackLabel: "Technologies",
  },
  about: {
    nameLabel: "Name /",
    photoAlt: "Photo of",
    description:
      "I'm a Web Developer and Computer Science student (IBMR - 4th term) with technical training in Computer Science from CEFET/RJ. I enjoy turning ideas into digital solutions, building intuitive interfaces and learning new technologies. I'm always looking to improve my skills and create projects that combine functionality, creativity and a great user experience.",
    tools: "Tools",
    skills: "Skills",
    average: "Average",
  },
  experience: {
    heading: "Experience",
  },
  projects: {
    heading: "Projects",
    label: "Project",
    viewProject: "View Project",
    counter: (shown: number, total: number) => `${shown} of ${total} projects`,
    repoLabel: (title: string) =>
      `${title}: open the GitHub repository (new tab)`,
    demoLabel: (title: string) => `${title}: open the live project (new tab)`,
  },
  certificates: {
    heading: "Certificates & Courses",
    newest: "Newest",
    oldest: "Oldest",
    counter: (shown: number, total: number) => `${shown} of ${total} courses`,
    sortLabel: (newestFirst: boolean) =>
      `Sort by date: ${
        newestFirst ? "newest first" : "oldest first"
      }. Click to reverse.`,
  },
};

export const translations: Record<Lang, typeof pt> = { pt, en };
