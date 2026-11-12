import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";

import { FolderGit2, GraduationCap, type LucideIcon } from "lucide-react";

import "./InfoProject.css";

import { content, type Kind } from "../types/InfoProject.ts";

/* Tempo de tela */
const INTERVAL_MS = 6000;
const kinds: Kind[] = ["project", "certificate"];

const meta: Record<Kind, { label: string; to: string; Icon: LucideIcon }> = {
  project: { label: "Projeto em destaque", to: "/projetos", Icon: FolderGit2 },
  certificate: {
    label: "Certificado",
    to: "/certificados",
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
