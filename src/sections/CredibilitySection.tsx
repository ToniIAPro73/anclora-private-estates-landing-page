import type { CredibilityCopy } from "@/content/site-copy";

type CredibilitySectionProps = {
  copy: CredibilityCopy;
};

export function CredibilitySection({ copy }: CredibilitySectionProps) {
  return (
    <section className="pe-section pe-section-soft">
      <div className="pe-container">
        <div className="pe-section-heading">
          <p className="pe-eyebrow">{copy.eyebrow}</p>
          <h2 className="pe-section-title">{copy.title}</h2>
        </div>
        <div className="pe-grid-3" style={{ marginTop: "2rem" }}>
          {copy.pillars.map((pillar) => (
            <article key={pillar} className="pe-card pe-offset-card" style={{ padding: "1.5rem" }}>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.85 }}>{pillar}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
