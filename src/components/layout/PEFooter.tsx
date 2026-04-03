import { BrandLockup } from "@/components/brand/BrandLockup";
import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { FooterCopy } from "@/content/site-copy";

type PEFooterProps = {
  copy: FooterCopy;
  trustBadgeText: string;
};

export function PEFooter({ copy, trustBadgeText }: PEFooterProps) {
  return (
    <footer className="pe-section" style={{ background: "var(--pe-bg)" }}>
      <div className="pe-container" style={{ borderTop: "1px solid var(--pe-line-soft)", paddingTop: "2.5rem" }}>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.4fr)",
          }}
        >
          <div>
            <BrandLockup />
            <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8, maxWidth: "36rem" }}>{copy.summary}</p>
            <div style={{ marginTop: "1rem" }}>
              <ExpTrustBadge mode="footer" text={trustBadgeText} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "1.5rem" }}>
            {copy.columns.map((column) => (
              <FooterColumn key={column.title} title={column.title} links={column.links} />
            ))}
          </div>
        </div>
        <p style={{ marginTop: "2rem", color: "var(--pe-text-muted)", fontSize: "0.8rem" }}>{copy.copyright}</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <div className="pe-eyebrow">{title}</div>
      <ul style={{ margin: "1rem 0 0", padding: 0, listStyle: "none", display: "grid", gap: "0.7rem" }}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} style={{ color: "var(--pe-text-soft)", fontSize: "0.92rem" }}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
