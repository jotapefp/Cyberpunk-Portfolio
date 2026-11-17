import type { CSSProperties, ReactNode } from "react";

/* Quadrado da direita do cartão: imagem (se houver) sobre um degradê da cor (hue) */
type Props = {
  hue: number | string;
  image?: string | null;
  className?: string;
  children?: ReactNode;
};

export default function CardThumb({
  hue,
  image,
  className = "",
  children,
}: Props) {
  const style: CSSProperties = {
    backgroundImage: `${image ? `url(${image}), ` : ""}linear-gradient(135deg, hsl(${hue} 85% 38%), hsl(calc(${hue} + 50) 80% 14%))`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <span
      aria-hidden="true"
      style={style}
      className={`grid aspect-square place-items-center self-start text-white ${className}`}
    >
      {children}
    </span>
  );
}
