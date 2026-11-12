import { Link } from "react-router-dom";

/* Components */
import { experiences } from "../types/Experiences.ts";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="xp">
      <main className="xp-main">
        <nav className="xp-crumbs" aria-label="Você está em">
          <Link to="/">Home</Link> /{" "}
          <span aria-current="page">Experiência</span>
        </nav>

        <h1 className="xp-sr">Experiência</h1>

        <ol className="xp-list">
          {experiences.map((item) => (
            <li
              key={`${item.period}-${item.title}`}
              className="xp-item"
              data-tone={item.tone}
            >
              <span className="xp-dot" aria-hidden="true" />
              <span className="xp-conn" aria-hidden="true" />

              <article
                className={`xp-card${item.image ? " xp-card--img" : ""}`}
              >
                <div className="xp-body">
                  <span className="xp-kind">{item.kind}</span>
                  <h2 className="xp-title">{item.title}</h2>
                  <p className="xp-org">{item.org}</p>
                  <p className="xp-desc">{item.description}</p>
                </div>

                {item.image && (
                  <img className="xp-img" src={item.image} alt="" />
                )}

                <p className="xp-year">{item.period}</p>
              </article>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
