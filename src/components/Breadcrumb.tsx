import { Link } from "react-router-dom";

/* "Home / Página atual" no topo das páginas internas */
export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav
      className="text-[clamp(0.8rem,0.9vw,1rem)] font-semibold tracking-[0.08em] uppercase"
      aria-label="Você está em"
    >
      <Link
        to="/"
        className="text-inherit no-underline hover:underline focus-visible:underline"
      >
        Home
      </Link>{" "}
      / <span aria-current="page">{current}</span>
    </nav>
  );
}
