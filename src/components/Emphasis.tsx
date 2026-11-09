import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";

import { FolderGit2, GraduationCap, type LucideIcon } from "lucide-react";

import "./Emphasis.css";

type Kind = "project" | "certificate";

type Item = {
  title: string;
  description: string;
  hue: number; // cor do degradê de fundo
  image?: string;
};

/* Tempo de tela */
const INTERVAL_MS = 6000;

/* Informações de projetos e certificados */
const content: Record<Kind, Item[]> = {
  project: [
    {
      title: "Rick and Morty Wanted",
      description: "Desenvolvimento front-end usando TypeScript",
      hue: 190,
      image: "/prints/rick-and-morty.png",
    },
    {
      title: "Dev Quiz",
      description: "Mini Game de programação",
      hue: 265,
    },
    {
      title: "Multi-Step Form",
      description: "Formulário de avaliação em React, TypeScript e Vite",
      hue: 150,
    },
    { title: "Dev Notes", description: "App de notas", hue: 330 },
    { title: "To-do List", description: "Lista de tarefas", hue: 25 },
    {
      title: "Countdown",
      description: "Contador regressivo em React + Vite",
      hue: 210,
    },
  ],
  certificate: [
    {
      title: "HTML Essentials",
      description: "Cisco Networking Academy, 27/09/2026",
      hue: 200,
    },
    {
      title: "CSS Essentials",
      description: "Cisco Networking Academy, 29/09/2026",
      hue: 230,
    },
    {
      title: "Engenharia de Software",
      description: "FIAP, Nano Course de 100 horas",
      hue: 340,
    },
    {
      title: "Programador Web em Tecnologias Front-end",
      description: "IFMG, out/2026",
      hue: 120,
    },
  ],
};

const kinds: Kind[] = ["project", "certificate"];

const meta: Record<Kind, { label: string; to: string; Icon: LucideIcon }> = {
  project: { label: "Projeto em destaque", to: "/projetos", Icon: FolderGit2 },
  certificate: {
    label: "Certificado",
    to: "/certificados",
    Icon: GraduationCap,
  },
};

export default function Emphasis() {
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

  const tint = {
    "--h": item.hue,
    "--shot": item.image ? `url(${item.image})` : "none",
  } as CSSProperties;

  return (
    <Link
      to={to}
      className="fc"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span key={step} className="fc-img" style={tint}>
        <Icon className="fc-icon" size={22} aria-hidden="true" />
        <small className="fc-label">{label}</small>
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </span>
    </Link>
  );
}
