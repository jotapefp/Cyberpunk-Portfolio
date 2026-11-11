import { useState } from "react";
import { Link } from "react-router-dom";

/* Components */
import { specs } from "../types/techs.ts";
import "./AboutMe.css";

const PHOTO = "/eu.png";

const NAME = "João Paulo Pinheiro";

const DESCRIPTION =
  "Sou Desenvolvedor Web e estudante de Ciência da Computação (IBMR, 4º período), com formação técnica em Informática pelo CEFET/RJ. Estou em busca de uma oportunidade de estágio em desenvolvimento web/software.";

// aba Habilidades. Os níveis (0 a 100) são EXEMPLOS: ajuste como achar justo.
// "note" é um texto opcional ao lado do nome.
const skills: { name: string; level: number; note?: string }[] = [
  { name: "Inglês", level: 85, note: "Profissional" },
  { name: "Boa comunicação", level: 95 },
  { name: "Trabalho em equipe", level: 95 },
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
                  Ferramentas
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
    </div>
  );
}
