import type { SellerFormCopy } from "@/content/site-copy";

type SellerIntakeFormProps = {
  copy: SellerFormCopy;
};

export function SellerIntakeForm({ copy }: SellerIntakeFormProps) {
  return (
    <form style={{ display: "grid", gap: "1rem" }}>
      <label>
        <span className="pe-eyebrow">{copy.name}</span>
        <input className="pe-input" name="name" placeholder={copy.placeholders.name} />
      </label>
      <label>
        <span className="pe-eyebrow">{copy.email}</span>
        <input className="pe-input" name="email" placeholder={copy.placeholders.email} />
      </label>
      <label>
        <span className="pe-eyebrow">{copy.phone}</span>
        <input className="pe-input" name="phone" placeholder={copy.placeholders.phone} />
      </label>
      <label>
        <span className="pe-eyebrow">{copy.zone}</span>
        <input className="pe-input" name="zone" placeholder={copy.placeholders.zone} />
      </label>
      <label>
        <span className="pe-eyebrow">{copy.propertyType}</span>
        <select className="pe-select" name="propertyType" defaultValue="">
          <option value="" disabled>
            {copy.selectPlaceholder}
          </option>
          {copy.propertyTypeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        <span className="pe-eyebrow">{copy.commercialization}</span>
        <select className="pe-select" name="commercialization" defaultValue="">
          <option value="" disabled>
            {copy.selectPlaceholder}
          </option>
          {copy.commercializationOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        <span className="pe-eyebrow">{copy.message}</span>
        <textarea className="pe-textarea" name="message" placeholder={copy.placeholders.message} />
      </label>
      <button className="pe-btn-primary" type="submit">
        {copy.submitLabel}
      </button>
    </form>
  );
}
