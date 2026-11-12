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
    image: "/ImageCertificate/Certificado_Havard.png",
  },
  {
    title: "Programador Web em Tecnologias Front-end",
    type: "Front-End",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_FrontEnd.png",
  },
  {
    title: "Programação Web (Básico)",
    type: "Front-End",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_WebBasico.png",
  },
  {
    title: "Programação Web (Avançado)",
    type: "Front-End",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
  {
    title: "JavaScript (básico)",
    type: "JavaScript",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    //image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
  {
    title: "JavaScript (avançado)",
    type: "JavaScript",
    issuer:
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
    date: "10/2026",
    hue: 15,
    //image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
  {
    title: "CSS Essentials",
    type: "Front-End",
    issuer: "Cisco Academy",
    date: "09/2026",
    hue: 15,
    //image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
  {
    title: "HTML Essentials",
    type: "Front-End",
    issuer: "Cisco Academy",
    date: "09/2026",
    hue: 15,
    //image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
  {
    title: "Introdução a criação de websites com HTML5 e CSS3",
    type: "Front-End",
    issuer: "Digital Innovation One",
    date: "11/2020",
    hue: 15,
    //image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
  {
    title: "Lógica de programação essencial",
    type: "Lógica de Programação",
    issuer: "Digital Innovation One",
    date: "11/2020",
    hue: 15,
    //image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
  {
    title: "Engenharia de Software",
    type: "Lógica de Programação",
    issuer: "FIAP",
    date: "10/2026",
    hue: 15,
    //image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
  {
    title: "Formação Front-end - HTML, CSS, JavaScript, React",
    type: "Front-End",
    issuer: "Udemy",
    date: "08/2026",
    hue: 15,
    //image: "/ImageCertificate/Certificado_IFMG_WebAvancado.png",
  },
];
