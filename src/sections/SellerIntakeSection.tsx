import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import { SellerIntakeForm } from "@/components/forms/SellerIntakeForm";
import type { SellerIntakeCopy } from "@/content/site-copy";

type SellerIntakeSectionProps = {
  copy: SellerIntakeCopy;
};

export function SellerIntakeSection({ copy }: SellerIntakeSectionProps) {
  return (
    <section id="propietarios" className="pe-section">
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
        <div className="pe-card" style={{ padding: "1.5rem" }}>
          <SellerIntakeForm copy={copy.form} />
        </div>
      </div>
    </section>
  );
}
