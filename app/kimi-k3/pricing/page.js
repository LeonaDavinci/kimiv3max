import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 Pricing & API Cost (per 1M tokens)",
  description:
    "Kimi K3 API pricing: $0.30 cache-hit input, $3.00 cache-miss input, $15.00 output per million tokens. Estimate your cost with the live calculator.",
  alternates: { canonical: "/kimi-k3/pricing" },
  openGraph: {
    title: "Kimi K3 Pricing & API",
    description:
      "Token pricing and a live cost calculator for Moonshot's Kimi K3 API.",
    url: `${site.url}/kimi-k3/pricing`,
    type: "article",
  },
};

const faqs = [
  {
    q: "How much does the Kimi K3 API cost?",
    a: "Official pricing is $0.30 per million cache-hit input tokens, $3.00 per million cache-miss input tokens, and $15.00 per million output tokens.",
  },
  {
    q: "Does caching reduce Kimi K3 cost?",
    a: "Yes. Cache-hit input is $0.30/MTok versus $3.00/MTok for cache-miss input. The official API reports cache hit rates above 90% on coding workloads.",
  },
  {
    q: "Is Kimi K3 cheaper than GPT-5.6 Sol?",
    a: "K3's list prices are close to Claude Sonnet 5's standard rate and roughly in line with frontier Western models — no longer the budget option K2 was.",
  },
];

export default function PricingPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Kimi K3 Guide", url: `${site.url}/kimi-k3-guide` },
            { name: "Pricing", url: `${site.url}/kimi-k3/pricing` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › <Link href="/kimi-k3-guide">Kimi K3 Guide</Link> › Pricing
        </nav>

        <h1>Kimi K3 Pricing &amp; API</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          Official token pricing and a calculator to estimate your real spend.
        </p>

        <h2>Official API pricing</h2>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Price per 1M tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cache-hit input</td>
              <td>$0.30</td>
            </tr>
            <tr>
              <td>Cache-miss input</td>
              <td>$3.00</td>
            </tr>
            <tr>
              <td>Output</td>
              <td>$15.00</td>
            </tr>
          </tbody>
        </table>

        <h2>Estimate your cost</h2>
        <p>
          Use the <Link href="/tools/token-cost-calculator">Kimi K3 Token Cost Calculator</Link> to
          model spend from your input/output volumes and cache-hit ratio.
        </p>

        <h2>How to get API access</h2>
        <p>
          Select <code>kimi-k3</code> on the Kimi API Platform. See the{" "}
          <Link href="/kimi-k3/api">API guide</Link> for request formats and tips.
        </p>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
      <Faq items={faqs} />
    </div>
  );
}
