import { useEffect, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import { ArrowRight } from "lucide-react";

/* Idioma */
import { useLanguage } from "../i18n/LanguageContext.tsx";

/* Components */
import Breadcrumb from "../components/Breadcrumb.tsx";
import CardHead from "../components/CardHead.tsx";
import CardThumb from "../components/CardThumb.tsx";
import TabButton from "../components/TabButton.tsx";
import { projects } from "../types/Projects.ts";

/* valor interno da aba "todos" (o texto mostrado vem do dicionário) */
const ALL = "__all__";
const tabs = [ALL, ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const pad = (n: number) => String(n).padStart(2, "0");

/* Link com seta. Fica acima do botão que cobre o cartão (z-1). */
function ProjectLink({
  href,
  text,
  label,
  className = "",
}: {
  href: string;
  text: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`group/link relative z-1 inline-flex items-center gap-[0.4rem] text-[0.82rem] font-semibold tracking-[0.08em] text-cool uppercase underline-offset-[0.25em] hover:underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary ${className}`}
    >
      {text}
      <ArrowRight
        size={18}
        aria-hidden="true"
        className="transition-transform duration-150 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1"
      />
    </a>
  );
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

export default function Projects() {
  const { t, lang } = useLanguage();
  const [tab, setTab] = useState(ALL);

  const [open, setOpen] = useState<string | null>(null);

  const visible =
    tab === ALL ? projects : projects.filter((p) => p.tags.includes(tab));

  const openProject = visible.find((p) => p.title === open);

  const toggle = (title: string) => {
    const update = () =>
      flushSync(() => setOpen((current) => (current === title ? null : title)));

    const doc = document as ViewTransitionDocument;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !calm) doc.startViewTransition(update);
    else update();
  };

  useEffect(() => {
    if (!open) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector("[data-featured]")?.scrollIntoView({
      block: "nearest",
      behavior: calm ? "auto" : "smooth",
    });
  }, [open]);

  return (
    <div className="flex flex-1 flex-col bg-main font-sans text-fg transition-colors duration-250">
      <main className="flex flex-1 flex-col px-[clamp(1rem,3vw,2.5rem)] pt-4 pb-10">
        <div className="flex items-baseline justify-between gap-4 text-[clamp(0.8rem,0.9vw,1rem)] font-semibold tracking-[0.08em] uppercase">
          <Breadcrumb current={t.nav.projects} />
          <span
            aria-label={t.projects.counter(visible.length, projects.length)}
          >
            {pad(visible.length)} / {pad(projects.length)}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-8 border-b border-line">
          {tabs.map((name) => (
            <TabButton
              key={name}
              pressed={tab === name}
              onClick={() => {
                setTab(name);
                setOpen(null);
              }}
            >
              {name === ALL ? t.common.all : name}
            </TabButton>
          ))}
        </div>

        <h1 className="sr-only">{t.projects.heading}</h1>

        <div className="mx-auto mt-7 grid w-[min(100%,1180px)] grid-cols-1 gap-4 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1100px]:gap-[1.1rem]">
          {visible.map((project) => {
            const index = projects.indexOf(project);
            const isOpen = project === openProject;

            const github = (
              <ProjectLink
                href={project.url}
                text="GitHub"
                label={t.projects.repoLabel(project.title)}
                className={isOpen ? "" : "ml-auto"}
              />
            );

            return (
              <article
                key={project.title}
                data-featured={isOpen || undefined}
                // --vt anima a troca de lugar ao abrir e fechar
                style={{ "--vt": `pj-${index}` } as CSSProperties}
                className={`group relative flex flex-col text-fg [view-transition-name:var(--vt,none)] ${
                  isOpen
                    ? "cut-corner min-[700px]:row-span-2"
                    : "border border-line transition-colors duration-150 hover:border-secondary"
                }`}
              >
                <CardHead
                  label={t.projects.label}
                  className={
                    isOpen ? "flex-none border-b border-secondary" : "flex-1"
                  }
                  title={
                    // o botão cobre o cartão inteiro: clicar em qualquer parte abre ou fecha
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggle(project.title)}
                      className="m-0 cursor-pointer bg-transparent p-0 text-left text-inherit underline-offset-[0.25em] [letter-spacing:inherit] [text-transform:inherit] group-hover:underline after:absolute after:inset-0 focus-visible:underline focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-3 focus-visible:after:outline-secondary"
                    >
                      {project.title}
                    </button>
                  }
                  thumb={
                    <CardThumb
                      hue={project.hue}
                      image={project.image}
                      className="text-[2.4rem] font-bold"
                    >
                      {!project.image && project.title.charAt(0)}
                    </CardThumb>
                  }
                  foot={
                    <>
                      {project.stack && (
                        <span className="text-[0.8rem] tracking-[0.05em] uppercase">
                          {project.stack}
                        </span>
                      )}
                      {!isOpen && github}
                    </>
                  }
                />

                {isOpen && (
                  <>
                    <div className="flex flex-1 flex-col justify-between gap-4 px-5 pt-5 pb-7 text-[clamp(0.95rem,1.1vw,1.05rem)] leading-[1.5] text-cool">
                      <p className="m-0">{project.description[lang]}</p>
                      <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {github}
                        {project.urlTest && (
                          <ProjectLink
                            href={project.urlTest}
                            text={t.projects.viewProject}
                            label={t.projects.demoLabel(project.title)}
                          />
                        )}
                      </div>
                    </div>
                    {/* número no canto cortado */}
                    <span
                      className="absolute right-[0.35rem] bottom-[0.2rem] text-[0.8rem] font-semibold text-secondary"
                      aria-hidden="true"
                    >
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
