import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Atom,
  Braces,
  Globe,
  Palette,
  Type,
  Webhook,
  X,
  type LucideIcon,
} from "lucide-react";

/* Components */
import Navbar from "./Navbar.tsx";
import "./AboutMe.css";

/* ---------- conteúdo: edite à vontade ---------- */

// Troque pela sua foto em public/. Funciona melhor com fundo transparente:
// ela "sai" do painel, como nas referências.
const PHOTO = "/eu.png";

const NAME = "João Paulo";

const DESCRIPTION =
  "Estudante de Ciência da Computação em busca de estágio em desenvolvimento web e full stack. Gosto de construir interfaces com React e TypeScript e estou sempre criando projetos novos para praticar.";

// aba Especificações: linguagens e tecnologias
const specs: { name: string; Icon: LucideIcon; color: string }[] = [
  { name: "HTML5", Icon: Globe, color: "#ff8a1f" },
  { name: "CSS3", Icon: Palette, color: "#19d3da" },
  { name: "JavaScript", Icon: Braces, color: "#f5e60a" },
  { name: "TypeScript", Icon: Type, color: "#b04cff" },
  { name: "React.js", Icon: Atom, color: "#ff3a52" },
  { name: "REST API", Icon: Webhook, color: "#6bde2c" },
];

// aba Habilidades. Os níveis (0 a 100) são EXEMPLOS: ajuste como achar justo.
// "note" é um texto opcional ao lado do nome.
const skills: { name: string; level: number; note?: string }[] = [
  { name: "Inglês", level: 85, note: "Full Professional" },
  { name: "Boa comunicação", level: 80 },
  { name: "Trabalho em equipe", level: 90 },
];

type Tab = "specs" | "skills";

export default function AboutMe() {
  const [tab, setTab] = useState<Tab>("specs");

  // média dos níveis, mostrada no losango
  const average = Math.round(
    skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length,
  );

  return (
    <div className="ab">
      <Navbar />

      <main className="ab-main">
        <nav className="ab-crumbs" aria-label="Você está em">
          <Link to="/">Home</Link> / <span>Sobre mim</span>
        </nav>

        <div className="ab-stage">
          <span className="ab-edge ab-edge--left" aria-hidden="true" />
          <span className="ab-edge ab-edge--right" aria-hidden="true" />

          <section className="ab-card" aria-labelledby="ab-name">
            <div className="ab-photo">
              <img className="ab-figure" src={PHOTO} alt={`Foto de ${NAME}`} />
            </div>

            <div className="ab-info">
              <Link
                to="/"
                className="ab-close"
                aria-label="Fechar e voltar para o início"
              >
                <X size={16} aria-hidden="true" />
              </Link>

              <header className="ab-head">
                <span className="ab-label">Nome /</span>
                <h1 id="ab-name" className="ab-name">
                  {NAME}
                </h1>
                <p className="ab-desc">{DESCRIPTION}</p>
              </header>

              <div className="ab-tabs">
                <button
                  type="button"
                  className="ab-tab"
                  aria-pressed={tab === "specs"}
                  onClick={() => setTab("specs")}
                >
                  Especificações
                </button>
                <button
                  type="button"
                  className="ab-tab"
                  aria-pressed={tab === "skills"}
                  onClick={() => setTab("skills")}
                >
                  Habilidades
                </button>
              </div>

              {tab === "specs" ? (
                <ul className="ab-specs">
                  {specs.map(({ name, Icon, color }) => (
                    <li
                      key={name}
                      className="ab-spec"
                      style={{ "--c": color } as React.CSSProperties}
                    >
                      <Icon size={34} strokeWidth={1.5} aria-hidden="true" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="ab-skills">
                  <ul className="ab-bars">
                    {skills.map(({ name, level, note }) => (
                      <li key={name} className="ab-skill">
                        <div className="ab-skill-head">
                          <span className="ab-skill-name">{name}</span>
                          {note && (
                            <span className="ab-skill-note">{note}</span>
                          )}
                        </div>
                        <div className="ab-skill-row">
                          <span
                            className="ab-bar"
                            role="progressbar"
                            aria-label={name}
                            aria-valuenow={level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span style={{ width: `${level}%` }} />
                          </span>
                          <span className="ab-skill-val">
                            <b>{level}</b> / 100
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="ab-total">
                    <span className="ab-diamond">
                      <b>{average}</b>
                    </span>
                    <span className="ab-total-label">Média</span>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className="ab-foot">
        Desenvolvido por João Paulo Pinheiro &copy; 2026
      </footer>
    </div>
  );
}
