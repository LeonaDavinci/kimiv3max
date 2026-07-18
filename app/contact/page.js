import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the KimiK3 Max team with corrections, tips, or partnership ideas.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Contact", url: `${site.url}/contact` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › Contact
        </nav>
        <h1>Contact</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          Corrections, tips, and partnership ideas are welcome.
        </p>

        <h2>Email</h2>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2>Before you write</h2>
        <ul>
          <li>For account, billing, or API support, use official Moonshot channels.</li>
          <li>For factual corrections, include the page URL and the source.</li>
        </ul>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
    </div>
  );
}
