import "./LanguageSelect.css";

// Por enquanto é só visual: o idioma ainda não muda.
// Quando for implementar, troque o <button> por um menu com as opções.
const CURRENT = "PT";

export default function LanguageSelect() {
  return (
    <button
      type="button"
      className="yh-lang"
      aria-disabled="true"
      aria-label="Idioma: Português (troca de idioma em breve)"
      title="Troca de idioma em breve"
    >
      <span>{CURRENT}</span>
      <span className="yh-lang-arrow" aria-hidden="true" />
    </button>
  );
}
