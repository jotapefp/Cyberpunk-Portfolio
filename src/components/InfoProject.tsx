import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";

import { FolderGit2, GraduationCap, type LucideIcon } from "lucide-react";

import { content, type Kind } from "../types/InfoProject.ts";

/* Tempo de tela */
const INTERVAL_MS = 5000;
const kinds: Kind[] = ["project", "certificate"];

const meta: Record<Kind, { label: string; to: string; Icon: LucideIcon }> = {
  project: { label: "Projeto em destaque", to: "/Projects", Icon: FolderGit2 },
  certificate: {
    label: "Certificado",
    to: "/Certificates",
    Icon: GraduationCap,
  },
};

export default function InfoProject() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setStep((s) => s + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const kind = kinds[step % kinds.length];
  const list = content[kind];
  const item = list[Math.floor(step / kinds.length) % list.length];
  const { label, to, Icon } = meta[kind];

  /* escurece a base (para o texto), depois a imagem, depois o degradê da cor */
  const background: CSSProperties = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent 60%), ${
      item.image ? `url(${item.image}), ` : ""
    }linear-gradient(135deg, hsl(${item.hue} 85% 38%), hsl(calc(${item.hue} + 50) 80% 14%))`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link
      to={to}
      className="group relative block w-[clamp(11rem,19vw,17rem)] text-white no-underline after:absolute after:bottom-3 after:-left-[1.15rem] after:border-y-[0.35rem] after:border-l-[0.55rem] after:border-y-transparent after:border-l-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span
        key={step}
        style={background}
        className="relative flex aspect-square animate-fade-up flex-col justify-end p-[0.9rem_0.9rem_1rem_30%] transition-[filter] duration-150 [clip-path:polygon(0_0,100%_0,100%_100%,26%_100%,0_74%)] group-hover:brightness-[1.12] motion-reduce:animate-none"
      >
        <Icon
          className="absolute top-[0.9rem] left-[0.9rem] opacity-90"
          size={22}
          aria-hidden="true"
        />
        <small className="text-[0.6rem] font-semibold tracking-[0.05em] uppercase opacity-80 dark:text-cool dark:opacity-100">
          {label}
        </small>
        <strong className="text-[1.15rem] leading-[1.1] font-bold">
          {item.title}
        </strong>
        <span className="text-[0.72rem] leading-[1.25] opacity-90">
          {item.description}
        </span>
      </span>
    </Link>
  );
}
