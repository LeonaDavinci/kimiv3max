import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TokenCalculator from "@/components/TokenCalculator";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 Token Cost Calculator",
  description:
    "Estimate your Kimi K3 API spend from input/output volumes and cache-hit ratio using official pricing ($0.30 / $3.00 / $15.00 per 1M tokens).",
  alternates: { canonical: "/tools/token-cost-calculator" },
  openGraph: {
    title: "Kimi K3 Token Cost Calculator",
    description: "Estimate Kimi K3 API cost with official pricing.",
    url: `${site.url}/tools/token-cost-calculator`,
    type: "website",
  },
};

export default function CalculatorPage() {
  return (
    <div className="page">
      <div className="container">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Token Calculator", url: `${site.url}/tools/token-cost-calculator` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › Token Calculator
        </nav>
        <h1 style={{ fontSize: 34, margin: "0 0 8px" }}>Kimi K3 Token Cost Calculator</h1>
        <p style={{ color: "var(--muted)", maxWidth: 680, marginBottom: 24 }}>
          A free, instant estimator for Kimi K3 API spend. This is the kind of
          original tool that earns backlinks — bookmark it and share it.
        </p>
        <TokenCalculator />
        <p style={{ marginTop: 24 }}>
          <Link href="/kimi-k3/pricing" className="btn secondary">
            See official pricing
          </Link>
        </p>
        <div className="disclaimer">{site.disclaimer}</div>
      </div>
    </div>
  );
}
