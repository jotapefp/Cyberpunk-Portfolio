import { Link } from "react-router-dom";

/* Components */
import Navbar from "./Navbar.tsx";
import Emphasis from "./Emphasis.tsx";
import "./Menu.css";

const stack = ["React", "TS", "JS", "CSS", "HTML"];

export default function Menu() {
  return (
    <section className="yh">
      <span className="yh-line yh-line--a" aria-hidden="true" />
      <span className="yh-line yh-line--b" aria-hidden="true" />
      <div className="yh-frame" aria-hidden="true" />

      <div className="yh-ui">
        <Navbar />

        <div className="yh-main">
          <img className="yh-figure" src="/jp.png" alt="" decoding="async" />
          <div className="yh-left">
            <h1 className="yh-title">
              <span>Seja</span>
              <span>Bem-Vindo</span>
            </h1>
            <span className="yh-dash" aria-hidden="true" />
            <p className="yh-lead">
              Estudante de Ciência da Computação em busca de estágio em
              desenvolvimento web
            </p>
            <Link className="yh-cta" to="/projetos">
              Ver projetos
            </Link>

            <ul className="yh-stack" aria-label="Tecnologias">
              {stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="yh-right">
            <Emphasis />
          </div>
        </div>

        <footer className="yh-bottom">
          <span>Desenvolvido por João Paulo Pinheiro &copy; 2026</span>
        </footer>
      </div>
    </section>
  );
}
