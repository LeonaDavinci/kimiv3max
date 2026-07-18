import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 API: Access, Pricing & Request Format",
  description:
    "How to use the Kimi K3 API: select kimi-k3 on the Kimi API Platform, pricing, and a minimal request example. Independent guide.",
  alternates: { canonical: "/kimi-k3/api" },
  openGraph: {
    title: "Kimi K3 API Guide",
    description: "Access, pricing, and a request example for the Kimi K3 API.",
    url: `${site.url}/kimi-k3/api`,
    type: "article",
  },
};

const faqs = [
  {
    q: "How do I access the Kimi K3 API?",
    a: "Sign in to the Kimi API Platform and select the kimi-k3 model. Pricing is $0.30 / $3.00 / $15.00 per million cache-hit input / cache-miss input / output tokens.",
  },
  {
    q: "Does Kimi K3 support context caching?",
    a: "Yes. Caching is automatic (no cache ID required). Moonshot reports cache hit rates above 90% on coding workloads, which sharply lowers effective input cost.",
  },
  {
    q: "Is the Kimi K3 API open weight?",
    a: "The API is a hosted service. The open-weight release (Modified MIT, expected July 27, 2026) is separate and intended for self-hosting.",
  },
];

export default function ApiPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Kimi K3 Guide", url: `${site.url}/kimi-k3-guide` },
            { name: "API", url: `${site.url}/kimi-k3/api` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › <Link href="/kimi-k3-guide">Kimi K3 Guide</Link> › API
        </nav>

        <h1>Kimi K3 API</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          Get started with the hosted Kimi K3 API — access, pricing, and a
          minimal example.
        </p>

        <h2>Access</h2>
        <p>
          Select <code>kimi-k3</code> on the Kimi API Platform. Context caching
          is automatic, with reported cache hit rates above 90% on coding
          workloads, lowering effective input cost.
        </p>

        <h2>Pricing</h2>
        <table>
          <tbody>
            <tr>
              <td>Cache-hit input</td>
              <td>$0.30 / 1M tokens</td>
            </tr>
            <tr>
              <td>Cache-miss input</td>
              <td>$3.00 / 1M tokens</td>
            </tr>
            <tr>
              <td>Output</td>
              <td>$15.00 / 1M tokens</td>
            </tr>
          </tbody>
        </table>

        <h2>Minimal request shape</h2>
        <p>
          A standard chat-completions style call, specifying the{" "}
          <code>kimi-k3</code> model and your messages. Always verify the exact
          request format against the official Kimi API documentation before
          production use.
        </p>
        <pre
          style={{
            background: "#0f172a",
            color: "#e2e8f0",
            padding: 16,
            borderRadius: 10,
            overflowX: "auto",
            fontSize: 14,
          }}
        >
{`{
  "model": "kimi-k3",
  "messages": [
    { "role": "user", "content": "Summarize this PDF and draft a team update." }
  ]
}`}
        </pre>

        <p>
          Related: <Link href="/kimi-k3/pricing">pricing</Link>,{" "}
          <Link href="/tools/token-cost-calculator">token calculator</Link>.
        </p>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
      <Faq items={faqs} />
    </div>
  );
}
