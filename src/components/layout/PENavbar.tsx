import { BrandLockup } from "@/components/brand/BrandLockup";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { NavbarCopy, LanguageCode } from "@/content/site-copy";

type PENavbarProps = {
  copy: NavbarCopy;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export function PENavbar({ copy, language, onLanguageChange }: PENavbarProps) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, padding: "1rem 0 0" }}>
      <nav aria-label={copy.navAriaLabel} className="pe-container pe-glass pe-nav-shell">
        <div className="pe-nav-inner">
          <BrandLockup variant="full-exp" />

          <div className="pe-nav-links">
            {copy.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="pe-nav-actions">
            <LanguageSwitcher copy={copy.languageSwitcher} language={language} onLanguageChange={onLanguageChange} />
            <a className="pe-btn-primary" href="#propietarios" style={{ minHeight: "46px" }}>
              {copy.ctaLabel}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
