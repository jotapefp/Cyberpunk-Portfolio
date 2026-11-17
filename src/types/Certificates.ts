export type Course = {
  title: string;
  type: string;
  issuer?: string;
  date?: string;
  hue: number;
  image?: string;
};

export const courses: Course[] = [
  {
    title: "Ciência da Computação de Harvard no Brasil",
    type: "Lógica de Programação",
    issuer: "Fundação Escola",
    date: "06/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_Havard.webp",
  },
  {
    title: "Programador Web em Tecnologias Front-end",
    type: "Front-End",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_FrontEnd.webp",
  },
  {
    title: "Programação Web (Básico)",
    type: "Front-End",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_WebBasico.webp",
  },
  {
    title: "Programação Web (Avançado)",
    type: "Front-End",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_WebAvancado.webp",
  },
  {
    title: "JavaScript (básico)",
    type: "JavaScript",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/JavaScript_basico.webp",
  },
  {
    title: "JavaScript (avançado)",
    type: "JavaScript",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/JavaScript_avancado.webp",
  },
  {
    title: "CSS Essentials",
    type: "Front-End",
    issuer: "Cisco Academy",
    date: "09/2026",
    hue: 15,
    image: "/ImageCertificate/CSS_Essentials.webp",
  },
  {
    title: "HTML Essentials",
    type: "Front-End",
    issuer: "Cisco Academy",
    date: "09/2026",
    hue: 15,
    image: "/ImageCertificate/HTML_Essentials.webp",
  },
  {
    title: "Introdução a criação de websites com HTML5 e CSS3",
    type: "Front-End",
    issuer: "Digital Innovation One",
    date: "11/2020",
    hue: 15,
    image: "/ImageCertificate/Introducao_Criacao_Websites.webp",
  },
  {
    title: "Lógica de programação essencial",
    type: "Lógica de Programação",
    issuer: "Digital Innovation One",
    date: "11/2020",
    hue: 15,
    image: "/ImageCertificate/Logica_Programacao.webp",
  },
  {
    title: "Engenharia de Software",
    type: "Lógica de Programação",
    issuer: "FIAP",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Engenharia_Software.webp",
  },
  {
    title: "Formação Front-end - HTML, CSS, JavaScript, React",
    type: "JavaScript",
    issuer: "Udemy",
    date: "08/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_Udemy_React_HTML_CSS.webp",
  },
];
