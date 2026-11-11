import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

/* Components */
import Navbar from "./Navbar.tsx";
import "./Certificates.css";

type Course = {
  title: string;
  type: string; // cria as abas de filtro
  issuer?: string; // quem emitiu (aparece no canto de baixo, à esquerda)
  date?: string; // aparece no canto de baixo, à direita
  hue: number; // cor do degradê enquanto não há imagem
  image?: string; // imagem do certificado em public/, ex.: "/certificates/html.png"
};

// Edite à vontade. Cursos com o mesmo "type" ficam na mesma aba.
const courses: Course[] = [
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

const ALL = "Todos";
const tabs = [ALL, ...Array.from(new Set(courses.map((c) => c.type)))];

const pad = (n: number) => String(n).padStart(2, "0");

function Thumb({ course }: { course: Course }) {
  const style = {
    "--h": course.hue,
    "--shot": course.image ? `url(${course.image})` : "none",
  } as CSSProperties;

  return (
    <span className="ct-thumb" style={style} aria-hidden="true">
      {!course.image && <Award size={44} strokeWidth={1.5} />}
    </span>
  );
}

export default function Certificates() {
  const [tab, setTab] = useState(ALL);

  const visible = tab === ALL ? courses : courses.filter((c) => c.type === tab);

  return (
    <div className="ct">
      <Navbar />

      <main className="ct-main">
        <div className="ct-bar">
          <nav className="ct-crumbs" aria-label="Você está em">
            <Link to="/">Home</Link> /{" "}
            <span aria-current="page">Certificados e Cursos_</span>
          </nav>
          <span
            className="ct-count"
            aria-label={`${visible.length} de ${courses.length} cursos`}
          >
            {pad(visible.length)} / {pad(courses.length)}
          </span>
        </div>

        <div className="ct-tabs">
          {tabs.map((name) => (
            <button
              key={name}
              type="button"
              className="ct-tab"
              aria-pressed={tab === name}
              onClick={() => setTab(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <h1 className="ct-sr">Certificados e Cursos</h1>

        <ul className="ct-grid">
          {visible.map((course) => (
            <li key={course.title} className="ct-card">
              <div className="ct-top">
                <div className="ct-text">
                  <span className="ct-label">{course.type}</span>
                  <h2 className="ct-title">{course.title}</h2>
                </div>

                <Thumb course={course} />

                <div className="ct-foot">
                  {course.issuer && (
                    <span className="ct-meta">{course.issuer}</span>
                  )}
                  {course.date && (
                    <span className="ct-date">{course.date}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <footer className="ct-end">
        Desenvolvido por João Paulo Pinheiro &copy; 2026
      </footer>
    </div>
  );
}
