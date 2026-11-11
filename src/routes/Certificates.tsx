import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

/* Components */
import { courses } from "../types/Certificates.ts";
import "./Certificates.css";

const ALL = "Todos";
const tabs = [ALL, ...Array.from(new Set(courses.map((c) => c.type)))];

const pad = (n: number) => String(n).padStart(2, "0");

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

  const visible = tab === ALL ? courses : courses.filter((c) => c.type === tab);

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
        </div>

        <h1 className="ct-sr">Certificados e Cursos</h1>

        <ul className="ct-grid">
          {visible.map((course) => (
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
