import JsonLd from "./JsonLd";
import { faqJsonLd } from "@/lib/seo";

export default function Faq({ items }) {
  return (
    <section className="section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div>
          {items.map((it, i) => (
            <div className="faq-item" key={i}>
              <h3>{it.q}</h3>
              <p>{it.a}</p>
            </div>
          ))}
        </div>
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  );
}
