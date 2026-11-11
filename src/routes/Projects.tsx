import { useEffect, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* Components */

import "./Projects.css";

const GITHUB = "https://github.com/jotapefp";

type Project = {
  title: string;
  description: string; // aparece no cartão grande
  url: string; // link do repositório
  stack?: string; // texto no canto de baixo do cartão
  tags: string[]; // criam as abas de filtro
  hue: number; // cor do degradê enquanto não há imagem
  image?: string; // imagem em public/, ex.: "/projects/dev-quiz.png"
};

// O primeiro da lista vira o cartão grande. Cada cartão abre o repositório no GitHub.
const projects: Project[] = [
  {
    title: "Rick and Morty Wanted",
    description: "Desenvolvimento front-end usando TypeScript.",
    // TROQUE pelo link do repositório deste projeto (por enquanto abre a lista dos seus repositórios)
    url: `${GITHUB}?tab=repositories`,
    stack: "TypeScript",
    tags: ["TypeScript"],
    hue: 190,
    // image: "/projects/rick-and-morty.png",
  },
  {
    title: "Dev Quiz",
    description: "Quiz de programação feito com React e Vite.",
    url: `${GITHUB}/Dev-Quiz`,
    stack: "React + Vite",
    tags: ["React"],
    hue: 265,
    // image: "/projects/dev-quiz.png",
  },
  {
    title: "Multi-Step Form",
    description:
      "Formulário de avaliação em várias etapas, feito com React, TypeScript e Vite.",
    url: `${GITHUB}/Multi-Step-Form`,
    stack: "React + TypeScript + Vite",
    tags: ["React", "TypeScript"],
    hue: 150,
    // image: "/projects/multi-step-form.png",
  },
  {
    title: "Dev Notes",
    description: "Aplicativo de notas.",
    url: `${GITHUB}/Dev-Notes`,
    tags: [], // sem tags: aparece só na aba "Todos". Preencha para entrar nos filtros.
    hue: 330,
    // image: "/projects/dev-notes.png",
  },
  {
    title: "To-do List",
    description: "Lista de tarefas.",
    url: `${GITHUB}/To-do-List`,
    tags: [],
    hue: 25,
    // image: "/projects/to-do-list.png",
  },
  {
    title: "Countdown",
    description: "Contador regressivo feito com React e Vite.",
    url: `${GITHUB}/Countdown`,
    stack: "React + Vite",
    tags: ["React"],
    hue: 210,
    // image: "/projects/countdown.png",
  },
];

const ALL = "Todos";
const tabs = [ALL, ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const pad = (n: number) => String(n).padStart(2, "0");

function Thumb({ project }: { project: Project }) {
  const style = {
    "--h": project.hue,
    "--shot": project.image ? `url(${project.image})` : "none",
  } as CSSProperties;

  return (
    <span className="pj-thumb" style={style} aria-hidden="true">
      {!project.image && project.title.charAt(0)}
    </span>
  );
}

// Só este link leva ao GitHub: o resto do cartão abre e fecha.
function GithubLink({ project }: { project: Project }) {
  return (
    <a
      className="pj-more"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title}: abrir o repositório no GitHub (nova aba)`}
    >
      GitHub <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

export default function Projects() {
  const [tab, setTab] = useState(ALL);
  // título do cartão aberto; null = todos fechados (como começa)
  const [open, setOpen] = useState<string | null>(null);

  const visible =
    tab === ALL ? projects : projects.filter((p) => p.tags.includes(tab));

  // o cartão aberto fica no mesmo lugar da lista: só cresce, ocupando duas linhas
  const openProject = visible.find((p) => p.title === open);

  // abre o cartão clicado e fecha o que estava aberto; clicar no aberto fecha
  const toggle = (title: string) => {
    const update = () =>
      flushSync(() => setOpen((current) => (current === title ? null : title)));

    const doc = document as ViewTransitionDocument;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // nos navegadores com suporte, a troca de lugar é animada
    if (doc.startViewTransition && !calm) doc.startViewTransition(update);
    else update();
  };

  // se o cartão aberto ficou fora da tela (celular), rola até ele
  useEffect(() => {
    if (!open) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .querySelector(".pj-card--feat")
      ?.scrollIntoView({
        block: "nearest",
        behavior: calm ? "auto" : "smooth",
      });
  }, [open]);

  return (
    <div className="pj">
      

      <main className="pj-main">
        <div className="pj-bar">
          <nav className="pj-crumbs" aria-label="Você está em">
            <Link to="/">Home</Link> /{" "}
            <span aria-current="page">Projetos_</span>
          </nav>
          <span
            className="pj-count"
            aria-label={`${visible.length} de ${projects.length} projetos`}
          >
            {pad(visible.length)} / {pad(projects.length)}
          </span>
        </div>

        <div className="pj-tabs">
          {tabs.map((name) => (
            <button
              key={name}
              type="button"
              className="pj-tab"
              aria-pressed={tab === name}
              onClick={() => {
                setTab(name);
                setOpen(null);
              }}
            >
              {name}
            </button>
          ))}
        </div>

        <h1 className="pj-sr">Projetos</h1>

        <div className="pj-grid">
          {visible.map((project) => {
            const index = projects.indexOf(project);
            const isOpen = project === openProject;

            return (
              <article
                key={project.title}
                className={`pj-card${isOpen ? " pj-card--feat" : ""}`}
                style={{ "--vt": `pj-${index}` } as CSSProperties}
              >
                <div className="pj-top">
                  <div className="pj-text">
                    <span className="pj-label">Projeto</span>
                    <h2 className="pj-title">
                      <button
                        type="button"
                        className="pj-toggle"
                        aria-expanded={isOpen}
                        onClick={() => toggle(project.title)}
                      >
                        {project.title}
                      </button>
                    </h2>
                  </div>

                  <Thumb project={project} />

                  <div className="pj-foot">
                    {project.stack && (
                      <span className="pj-meta">{project.stack}</span>
                    )}
                    {!isOpen && <GithubLink project={project} />}
                  </div>
                </div>

                {isOpen && (
                  <>
                    <div className="pj-desc">
                      <p>{project.description}</p>
                      <GithubLink project={project} />
                    </div>
                    <span className="pj-index" aria-hidden="true">
                      {pad(index + 1)}
                    </span>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </main>

      
    </div>
  );
}
