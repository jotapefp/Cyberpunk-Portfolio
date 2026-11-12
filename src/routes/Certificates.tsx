import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUp, Award } from "lucide-react";

/* Components */
import { courses, type Course } from "../types/Certificates.ts";
import "./Certificates.css";

const ALL = "Todos";
const tabs = [ALL, ...Array.from(new Set(courses.map((c) => c.type)))];

const pad = (n: number) => String(n).padStart(2, "0");

type Order = "newest" | "oldest";

// Transforma a data em um número para comparar: ano primeiro, depois o mês.
// "06/2026" vira 202606 e "27/09/2026" vira 202609. Sem data (ou inválida): null.
const dateKey = (date?: string) => {
  if (!date) return null;
  const parts = date.split("/").map(Number);
  const year = parts[parts.length - 1];
  const month = parts.length >= 2 ? parts[parts.length - 2] : 0;
  if (!year) return null;
  return year * 100 + (month || 0);
};

function Thumb({ course }: { course: Course }) {
  const style = {
    "--h": course.hue,
    "--shot": course.image ? `url(${course.image})` : "none",
  } as CSSProperties;

  return (
    <span className="ct-thumb" style={style} aria-hidden="true">
      {!course.image && <Award size={44} strokeWidth={1.5} />}
    </span>
  );
}

export default function Certificates() {
  const [tab, setTab] = useState(ALL);
  // começa do mais novo para o mais velho
  const [order, setOrder] = useState<Order>("newest");

  const visible = tab === ALL ? courses : courses.filter((c) => c.type === tab);

  // ordena por data; certificados sem data vão para o fim, nas duas ordens.
  // Datas iguais mantêm a ordem em que aparecem na lista.
  const sorted = [...visible].sort((a, b) => {
    const ka = dateKey(a.date);
    const kb = dateKey(b.date);
    if (ka === null && kb === null) return 0;
    if (ka === null) return 1;
    if (kb === null) return -1;
    return order === "newest" ? kb - ka : ka - kb;
  });

  return (
    <div className="ct">
      <main className="ct-main">
        <div className="ct-bar">
          <nav className="ct-crumbs" aria-label="Você está em">
            <Link to="/">Home</Link> /{" "}
            <span aria-current="page">Certificados e Cursos_</span>
          </nav>
          <span
            className="ct-count"
            aria-label={`${visible.length} de ${courses.length} cursos`}
          >
            {pad(visible.length)} / {pad(courses.length)}
          </span>
        </div>

        <div className="ct-tabs">
          {tabs.map((name) => (
            <button
              key={name}
              type="button"
              className="ct-tab"
              aria-pressed={tab === name}
              onClick={() => setTab(name)}
            >
              {name}
            </button>
          ))}

          <button
            type="button"
            className="ct-sort"
            aria-label={`Ordenar por data: ${
              order === "newest" ? "mais novos primeiro" : "mais antigos primeiro"
            }. Clique para inverter.`}
            onClick={() =>
              setOrder((current) => (current === "newest" ? "oldest" : "newest"))
            }
          >
            {order === "newest" ? "Mais novos" : "Mais antigos"}
            {order === "newest" ? (
              <ArrowDown size={16} aria-hidden="true" />
            ) : (
              <ArrowUp size={16} aria-hidden="true" />
            )}
          </button>
        </div>

        <h1 className="ct-sr">Certificados e Cursos</h1>

        <ul className="ct-grid">
          {sorted.map((course) => (
            <li key={course.title} className="ct-card">
              <div className="ct-top">
                <div className="ct-text">
                  <span className="ct-label">{course.type}</span>
                  <h2 className="ct-title">{course.title}</h2>
                </div>

                <Thumb course={course} />

                <div className="ct-foot">
                  {course.issuer && (
                    <span className="ct-meta">{course.issuer}</span>
                  )}
                  {course.date && (
                    <span className="ct-date">{course.date}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
