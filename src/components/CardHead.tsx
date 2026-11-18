import type { ReactNode } from "react";

/* Parte de cima do cartão: texto à esquerda, quadrado à direita e rodapé embaixo */
type Props = {
  label: string;
  title: ReactNode;
  thumb: ReactNode;
  foot: ReactNode;
  className?: string;
};

export default function CardHead({
  label,
  title,
  thumb,
  foot,
  className = "flex-1",
}: Props) {
  return (
    <div
      className={`grid min-h-[10.8rem] grid-cols-[1fr_clamp(4.5rem,32%,7.5rem)] grid-rows-[1fr_auto] gap-x-4 gap-y-2 p-5 ${className}`}
    >
      <div className="flex flex-col gap-[0.9rem]">
        <span className="text-[0.75rem] font-semibold tracking-[0.1em] text-cool uppercase">
          {label}
        </span>
        <h2 className="m-0 text-[clamp(1.25rem,1.8vw,1.65rem)] leading-[1.2] font-medium tracking-[0.03em] text-secondary uppercase">
          {title}
        </h2>
      </div>

      {thumb}

      <div className="col-span-2 flex items-center justify-between gap-3">
        {foot}
      </div>
    </div>
  );
}
