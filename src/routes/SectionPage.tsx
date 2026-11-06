import { Link, useParams } from "react-router-dom";

export default function SectionPage() {
  const { secao } = useParams();

  return (
    <main className="section">
      <Link to="/">← Voltar</Link>
      <h2> {secao} </h2>
    </main>
  );
}
