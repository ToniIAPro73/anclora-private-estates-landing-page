import type { LanguageCode, LanguageSwitcherCopy } from "@/content/site-copy";

type LanguageSwitcherProps = {
  copy: LanguageSwitcherCopy;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export function LanguageSwitcher({ copy, language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="pe-lang-switcher" role="group" aria-label={copy.groupLabel} data-testid="language-switcher">
      {copy.options.map((entry) => (
        <button
          key={entry.code}
          type="button"
          className={`pe-lang-btn ${language === entry.code ? "is-active" : ""}`}
          aria-label={entry.ariaLabel}
          aria-pressed={language === entry.code}
          data-testid={`language-button-${entry.code}`}
          onClick={() => onLanguageChange(entry.code)}
        >
          {entry.label}
        </button>
      ))}
    </div>
  );
}
