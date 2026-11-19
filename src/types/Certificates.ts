import { same, type Localized } from "../i18n/localized.ts";

/* chave interna de cada categoria; o texto mostrado vem de courseTypes */
export type CourseType = "logic" | "frontend" | "javascript";

export const courseTypes: Record<CourseType, Localized> = {
  logic: { pt: "Lógica de Programação", en: "Programming Logic" },
  frontend: same("Front-End"),
  javascript: same("JavaScript"),
};

export type Course = {
  title: Localized;
  type: CourseType;
  issuer?: Localized;
  date?: string;
  hue: number;
  image?: string;
};

const ifmg: Localized = {
  pt: "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
  en: "Federal Institute of Education, Science and Technology of Minas Gerais",
};
const cisco = same("Cisco Academy");
const dio = same("Digital Innovation One");

export const courses: Course[] = [
  {
    title: {
      pt: "Ciência da Computação de Harvard no Brasil",
      en: "Harvard Computer Science in Brazil",
    },
    type: "logic",
    issuer: same("Fundação Escola"),
    date: "06/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_Havard.webp",
  },
  {
    title: {
      pt: "Programador Web em Tecnologias Front-end",
      en: "Web Developer in Front-End Technologies",
    },
    type: "frontend",
    issuer: ifmg,
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_FrontEnd.webp",
  },
  {
    title: {
      pt: "Programação Web (Básico)",
      en: "Web Programming (Basic)",
    },
    type: "frontend",
    issuer: ifmg,
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_WebBasico.webp",
  },
  {
    title: {
      pt: "Programação Web (Avançado)",
      en: "Web Programming (Advanced)",
    },
    type: "frontend",
    issuer: ifmg,
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_WebAvancado.webp",
  },
  {
    title: { pt: "JavaScript (básico)", en: "JavaScript (Basic)" },
    type: "javascript",
    issuer: ifmg,
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/JavaScript_basico.webp",
  },
  {
    title: { pt: "JavaScript (avançado)", en: "JavaScript (Advanced)" },
    type: "javascript",
    issuer: ifmg,
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/JavaScript_avancado.webp",
  },
  {
    title: same("CSS Essentials"),
    type: "frontend",
    issuer: cisco,
    date: "09/2026",
    hue: 15,
    image: "/ImageCertificate/CSS_Essentials.webp",
  },
  {
    title: same("HTML Essentials"),
    type: "frontend",
    issuer: cisco,
    date: "09/2026",
    hue: 15,
    image: "/ImageCertificate/HTML_Essentials.webp",
  },
  {
    title: {
      pt: "Introdução a criação de websites com HTML5 e CSS3",
      en: "Introduction to Creating Websites with HTML5 and CSS3",
    },
    type: "frontend",
    issuer: dio,
    date: "11/2020",
    hue: 15,
    image: "/ImageCertificate/Introducao_Criacao_Websites.webp",
  },
  {
    title: {
      pt: "Lógica de programação essencial",
      en: "Essential Programming Logic",
    },
    type: "logic",
    issuer: dio,
    date: "11/2020",
    hue: 15,
    image: "/ImageCertificate/Logica_Programacao.webp",
  },
  {
    title: { pt: "Engenharia de Software", en: "Software Engineering" },
    type: "logic",
    issuer: same("FIAP"),
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Engenharia_Software.webp",
  },
  {
    title: {
      pt: "Formação Front-end - HTML, CSS, JavaScript, React",
      en: "Front-End Training - HTML, CSS, JavaScript, React",
    },
    type: "javascript",
    issuer: same("Udemy"),
    date: "08/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_Udemy_React_HTML_CSS.webp",
  },
];
