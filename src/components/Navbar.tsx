import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* Components */
import LanguageSelect from "./LanguageSelect.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

/* Links da navbar */
const navLinks = [
  { label: "Sobre mim", to: "/AboutMe" },
  { label: "Experiência", to: "/Experience" },
  { label: "Projetos", to: "/Projects" },
  { label: "Certificados e Cursos", to: "/Certificates" },
];

const BRAND = "HOME";
const GITHUB = "https://github.com/jotapefp";
const LINKEDIN =
  "https://www.linkedin.com/in/joao-paulo-pinheiro-ferraz-de-arruda";

/*
  Tamanhos da navbar (mexa aqui para aumentar ou diminuir):
  --nb-box  = quadrados do GitHub e do LinkedIn (o botão de tema usa o mesmo valor)
  --nb-icon = desenho dentro dos quadrados e do botão de tema
  --nb-gx/gy = afastamento das bordas da tela (o mesmo da moldura da Home)
  --nb-pad-y = respiro acima e abaixo do conteúdo
*/
const header =
  "relative z-20 mx-(--nb-gx) mt-(--nb-gy) flex items-center justify-between border-b border-line bg-transparent px-[0.85rem] pt-(--nb-pad-y) pb-[calc(var(--nb-gy)_+_var(--nb-pad-y))] text-secondary transition-colors duration-250 " +
  "[--nb-gx:12px] [--nb-gy:12px] [--nb-pad-y:0.55rem] [--nb-box:1.9rem] [--nb-icon:1rem] " +
  "home:[--nb-gx:clamp(12px,2vw,32px)] home:[--nb-gy:clamp(12px,2.2vh,24px)] " +
  "xl:grid xl:grid-cols-[1fr_auto_1fr] xl:px-[1.1rem] xl:[--nb-pad-y:0.7rem] xl:[--nb-box:clamp(1.8rem,1.8vw,2.1rem)] xl:[--nb-icon:clamp(1rem,1.05vw,1.15rem)]";

const outline =
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary";

const navDesktop =
  "xl:static xl:flex xl:flex-row xl:gap-[clamp(0.9rem,1.8vw,2.2rem)] xl:border-0 xl:bg-transparent xl:p-0";
const navMobileOpen =
  "absolute top-full right-0 z-5 flex flex-col gap-[0.2rem] border border-secondary bg-main px-[0.9rem] py-[0.6rem]";

const link =
  "border-y-2 border-transparent py-[0.3rem] text-[0.9rem] font-bold tracking-[0.06em] text-secondary uppercase no-underline transition-colors duration-150 hover:border-b-secondary focus-visible:border-b-secondary focus-visible:outline-none aria-[current=page]:border-b-secondary xl:py-[0.2rem] xl:text-[clamp(0.8rem,0.9vw,1rem)]";

const social = `cut-box size-(--nb-box) ${outline}`;
const socialIcon = "size-(--nb-icon) fill-current";
const bar = "block h-[2.5px] bg-secondary";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isCurrent = (to: string) =>
    to !== "/" && pathname.toLowerCase() === to.toLowerCase();

  return (
    <header className={header}>
      <Link
        to="/"
        className={`text-base font-bold tracking-[0.06em] no-underline xl:text-[clamp(0.95rem,1.05vw,1.15rem)] ${outline}`}
      >
        {BRAND}
      </Link>

      {/* menu compacto abre pelo hambúrguer; a partir de 1280px os links ficam no centro */}
      <nav
        id="nb-nav"
        className={`${menuOpen ? navMobileOpen : "hidden"} ${navDesktop}`}
        aria-label="Seções do portfólio"
      >
        {navLinks.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className={link}
            aria-current={isCurrent(to) ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 xl:justify-self-end">
        {/* o seletor some em telas muito estreitas; no desktop fica afastado do botão de tema */}
        <div className="flex max-[519px]:hidden xl:mr-[clamp(0.5rem,calc(8.6vw-80px),7rem)]">
          <LanguageSelect />
        </div>
        <ThemeToggle />

        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={social}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" className={socialIcon}>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={social}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className={socialIcon}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="nb-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className={`ml-[0.4rem] grid w-[calc(var(--nb-box)*1.05)] cursor-pointer gap-1.25 border-0 bg-transparent py-[0.3rem] xl:hidden ${outline}`}
        >
          <span className={bar} />
          <span className={bar} />
          <span className={bar} />
        </button>
      </div>
    </header>
  );
}
