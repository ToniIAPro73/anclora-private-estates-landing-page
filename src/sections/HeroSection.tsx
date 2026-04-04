import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { HeroCopy } from "@/content/site-copy";

type HeroSectionProps = {
  copy: HeroCopy;
  trustBadgeText: string;
};

export function HeroSection({ copy, trustBadgeText }: HeroSectionProps) {
  return (
    <section className="pe-hero-section pe-brand-panel">
      <div className="pe-container pe-hero-grid pe-hero-shell">
        <div className="pe-stack pe-hero-copy" style={{ gap: "1.5rem" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: 0 }}>
            {copy.eyebrow}
          </p>

          <h1
            className="pe-display"
            data-testid="hero-title"
            style={{ fontSize: "clamp(3.3rem, 9vw, 7.2rem)", margin: 0, maxWidth: "11ch" }}
          >
            {copy.title}
          </h1>

          <div className="pe-pull-quote">
            <p className="pe-section-copy" style={{ margin: 0, fontSize: "clamp(1.02rem, 1.8vw, 1.18rem)", maxWidth: "29rem" }}>
              {copy.description}
            </p>
            <div className="pe-stack" style={{ gap: "0.9rem", paddingTop: "0.2rem" }}>
              <div className="pe-chip-row">
                {copy.chips.map((chip) => (
                  <span key={chip} className="pe-chip">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="pe-note" style={{ margin: 0, maxWidth: "28rem" }}>
                {copy.note}
              </p>
            </div>
          </div>

          <div className="pe-cta-row">
            <a className="pe-btn-primary pe-btn-primary-gold" href="#propietarios" data-testid="hero-primary-cta">
              {copy.primaryCta}
            </a>
            <a className="pe-btn-secondary" href="#mallorca-focus" data-testid="hero-secondary-cta">
              {copy.secondaryCta}
            </a>
          </div>

          <ExpTrustBadge text={trustBadgeText} />
        </div>

        <div className="pe-hero-visual pe-editorial-window" data-testid="hero-editorial-visual">
          <div className="pe-editorial-window__frame">
            <div className="pe-editorial-window__topline">
              <span>Private Estates</span>
              <span>Mallorca · Editorial Selection</span>
            </div>

            <div className="pe-editorial-window__plan" aria-hidden="true">
              <span className="pe-editorial-window__grid pe-editorial-window__grid--a" />
              <span className="pe-editorial-window__grid pe-editorial-window__grid--b" />
              <span className="pe-editorial-window__grid pe-editorial-window__grid--c" />
              <span className="pe-editorial-window__pool" />
              <span className="pe-editorial-window__mass pe-editorial-window__mass--one" />
              <span className="pe-editorial-window__mass pe-editorial-window__mass--two" />
              <span className="pe-editorial-window__mass pe-editorial-window__mass--three" />
              <span className="pe-editorial-window__glow pe-editorial-window__glow--gold" />
              <span className="pe-editorial-window__glow pe-editorial-window__glow--teal" />
            </div>

            <div className="pe-editorial-window__content">
              <div className="pe-stack" style={{ gap: "0.75rem", maxWidth: "18rem" }}>
                <p className="pe-eyebrow" style={{ margin: 0, color: "var(--pe-deep-muted)" }}>
                  {copy.media.eyebrow}
                </p>
                <div className="pe-editorial-window__headline">{copy.media.title}</div>
              </div>

              <div className="pe-editorial-window__cards">
                <article className="pe-editorial-window__card pe-editorial-window__card--offset">
                  <p className="pe-eyebrow" style={{ margin: 0, color: "var(--pe-deep-muted)" }}>
                    {copy.media.methodEyebrow}
                  </p>
                  <p style={{ margin: 0, color: "var(--pe-deep-text)", lineHeight: 1.7 }}>{copy.media.method}</p>
                </article>
                <article className="pe-editorial-window__card pe-editorial-window__card--stat">
                  <span className="pe-editorial-window__stat">{copy.media.statValue}</span>
                  <p style={{ margin: 0, color: "var(--pe-deep-muted)", lineHeight: 1.7 }}>{copy.media.statCopy}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
