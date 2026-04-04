import type { MallorcaFocusCopy } from "@/content/site-copy";

type MallorcaFocusSectionProps = {
  copy: MallorcaFocusCopy;
};

export function MallorcaFocusSection({ copy }: MallorcaFocusSectionProps) {
  return (
    <section id="mallorca-focus" className="pe-section pe-section-territory">
      <div className="pe-territory-band" aria-hidden="true">
        <div className="pe-territory-band__glow pe-territory-band__glow--gold" />
        <div className="pe-territory-band__glow pe-territory-band__glow--teal" />
        <div className="pe-territory-band__grid" />
        <div className="pe-territory-band__line pe-territory-band__line--one" />
        <div className="pe-territory-band__line pe-territory-band__line--two" />
        <div className="pe-territory-band__line pe-territory-band__line--three" />
      </div>

      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div className="pe-section-heading pe-section-heading--split">
          <div>
            <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
          </div>
          <p className="pe-section-copy pe-section-copy--narrow" style={{ margin: 0 }}>
            {copy.intro}
          </p>
        </div>

        <div className="pe-stack" style={{ gap: "1.5rem" }}>
          {copy.clusters.map((cluster, index) => (
            <article
              key={cluster.id}
              className={`${index === 0 ? "pe-card-deep" : "pe-card"} pe-microzone-card pe-microzone-card--editorial`}
              data-testid={`mallorca-cluster-${cluster.id}`}
            >
              <div className="pe-microzone-card__meta">
                <p className="pe-eyebrow" style={{ color: index === 0 ? "var(--pe-deep-muted)" : "var(--pe-text-muted)" }}>
                  {cluster.eyebrow}
                </p>
                <h3 className="pe-microzone-card__title">{cluster.title}</h3>
                <div className="pe-microzone-card__areas">
                  <strong>{copy.areasLabel}</strong>
                  <span>{cluster.areas.join(" · ")}</span>
                </div>
              </div>

              <div className="pe-stack" style={{ gap: "1rem" }}>
                <p style={{ color: index === 0 ? "var(--pe-deep-muted)" : "var(--pe-text-soft)", lineHeight: 1.9, margin: 0 }}>
                  {cluster.body}
                </p>
                <div className="pe-microzone-card__audience">
                  <span>{cluster.audienceLabel}</span>
                  <p style={{ margin: 0 }}>{cluster.audience}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
