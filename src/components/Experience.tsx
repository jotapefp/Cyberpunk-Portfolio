import { Link } from "react-router-dom";

/* Components */
import Navbar from "./Navbar.tsx";
import "./Experience.css";

type Tone = "cyan" | "yellow" | "red";

type Item = {
  period: string; // texto da barra de data
  kind: string; // etiqueta pequena acima do título
  title: string;
  org: string;
  description: string;
  tone: Tone; // cor do cartão
  image?: string; // imagem do lado direito, em public/ (ex.: "/experience/tac.png")
};

// Ordem cronológica, como na referência. Para o mais recente aparecer em cima,
// inverta a lista. Acrescente suas atividades em "description".
const experiences: Item[] = [
  {
    period: "12/2021 – 08/2022",
    kind: "Estágio",
    title: "Suporte de TI",
    org: "Toque a Campainha Móveis (Grupo TAC)",
    description:
      "-Prestei suporte técnico em informática, atuando em problemas de hardware e software. Auxiliei na manutenção e organização de sistemas e equipamentos, identificando e corrigindo falhas",
    tone: "yellow",
     image: "../public/ToqueCampainha.png",
  },
  {
    period: "12/2024 – 10/2026",
    kind: "Jovem Aprendiz",
    title: "Arco Administrativo",
    org: "Tekno",
    description:
      "Programa Jovem Aprendiz no Arco Administrativo.",
    tone: "cyan",
    image: "../public/Tekno.png",
  },
  {
    period: "10/2026 – ????",
    kind: "",
    title: "Buscando Estágio",
    org: "",
    description:
      "A procura de um estágio na área de TI, voltado para o desenvolvimento web/software",
    tone: "red",
    image: "../public/BuscaEstagio.png",
  },
];

export default function Experience() {
  return (
    <div className="xp">
      <Navbar />

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

      <footer className="xp-foot">
        Desenvolvido por João Paulo Pinheiro &copy; 2026
      </footer>
    </div>
  );
}
