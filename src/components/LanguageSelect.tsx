import "./LanguageSelect.css";

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
