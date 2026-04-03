import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { ContactCopy } from "@/content/site-copy";

type ContactSectionProps = {
  copy: ContactCopy;
};

export function ContactSection({ copy }: ContactSectionProps) {
  return (
    <section id="contacto" className="pe-section">
      <div className="pe-container pe-split-grid" style={{ gap: "2rem" }}>
        <div>
          <p className="pe-eyebrow">{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ marginTop: "1rem" }}>
            {copy.title}
          </h2>
          <p className="pe-section-copy" style={{ marginTop: "1.25rem" }}>{copy.body}</p>
          <div style={{ marginTop: "1rem" }}>
            <ExpTrustBadge mode="card" text={copy.trustBadgeText} />
          </div>
        </div>
        <div className="pe-card" style={{ padding: "1.75rem" }}>
          <p className="pe-eyebrow">{copy.detailsTitle}</p>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {copy.details.map((detail) => (
              <div key={detail.label}>
                <div className="pe-eyebrow">{detail.label}</div>
                {detail.href ? (
                  <a href={detail.href} style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.8rem" }}>
                    {detail.value}
                  </a>
                ) : (
                  <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8 }}>{detail.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
