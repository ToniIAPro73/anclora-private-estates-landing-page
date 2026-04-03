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
      <nav aria-label="Principal" className="pe-container pe-glass" style={{ borderRadius: "999px", padding: "0.9rem 1.1rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <BrandLockup variant="full-exp" />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.1rem",
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--pe-text-soft)",
            }}
          >
            {copy.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifySelf: "end" }}>
            <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
            <a className="pe-btn-primary" href="#propietarios" style={{ minHeight: "46px" }}>
              {copy.ctaLabel}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
