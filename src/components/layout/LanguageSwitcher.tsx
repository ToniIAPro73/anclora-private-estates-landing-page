type LanguageCode = "es" | "en" | "de";

const languages: Array<{ code: LanguageCode; label: string; ariaLabel: string }> = [
  { code: "es", label: "ES", ariaLabel: "Idioma español" },
  { code: "en", label: "EN", ariaLabel: "Idioma inglés" },
  { code: "de", label: "DE", ariaLabel: "Idioma alemán" },
];

type LanguageSwitcherProps = {
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="pe-lang-switcher" role="group" aria-label="Selector de idioma">
      {languages.map((entry) => (
        <button
          key={entry.code}
          type="button"
          className={`pe-lang-btn ${language === entry.code ? "is-active" : ""}`}
          aria-label={entry.ariaLabel}
          aria-pressed={language === entry.code}
          onClick={() => onLanguageChange(entry.code)}
        >
          {entry.label}
        </button>
      ))}
    </div>
  );
}
