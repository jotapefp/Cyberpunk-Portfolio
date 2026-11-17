import type { ReactNode } from "react";

/* Aba de filtro (Projetos e Certificados). A aba ativa usa aria-pressed. */
type Props = {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
};

export default function TabButton({ pressed, onClick, children }: Props) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className="-mb-px cursor-pointer border-b-2 border-transparent bg-transparent py-[0.8rem] text-[clamp(0.72rem,0.8vw,0.9rem)] font-semibold tracking-[0.06em] text-secondary/45 uppercase transition-colors duration-150 hover:text-secondary aria-pressed:border-b-secondary aria-pressed:text-secondary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary"
    >
      {children}
    </button>
  );
}
