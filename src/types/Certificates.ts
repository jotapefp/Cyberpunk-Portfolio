export type Course = {
  title: string;
  type: string;
  issuer?: string;
  date?: string
  hue: number;
  image?: string;
};

export const courses: Course[] = [
  {
    title: "HTML Essentials",
    type: "HTML",
    issuer: "Cisco Networking Academy",
    date: "27/09/2026",
    hue: 15,
    // image: "/certificates/html-essentials.png",
  },
  {
    title: "CSS Essentials",
    type: "CSS",
    issuer: "Cisco Networking Academy",
    date: "29/09/2026",
    hue: 210,
    // image: "/certificates/css-essentials.png",
  },
  {
    title: "Lógica de programação essencial",
    type: "Lógica de programação",
    hue: 150,
  },
  {
    title: "Programador Web em Tecnologias Front-end",
    type: "Front-end",
    issuer: "IFMG",
    date: "10/2026",
    hue: 190,
  },
  {
    title: "Engenharia de Software",
    type: "Engenharia de Software",
    issuer: "FIAP, 100 horas",
    date: "01/10/2026",
    hue: 340,
  },
  {
    title: "Bootcamp Everis FullStack Developer",
    type: "Full Stack",
    hue: 265,
  },
  {
    title: "Internet Segura",
    type: "Fundamentos",
    hue: 120,
  },
  {
    title: "Introdução ao Mundo Digital",
    type: "Fundamentos",
    hue: 50,
  },
];
