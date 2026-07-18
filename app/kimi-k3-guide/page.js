import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 Guide: Specs, Benchmarks, Pricing & API (Independent)",
  description:
    "The complete independent guide to Moonshot AI's Kimi K3 — a 2.8T-parameter open-weight model with a 1M-token context. Specs, benchmarks, pricing, API, and comparisons.",
  alternates: { canonical: "/kimi-k3-guide" },
  openGraph: {
    title: "Kimi K3 Guide — Independent Reference",
    description:
      "Specs, benchmarks, pricing, API, and comparisons for Moonshot AI's Kimi K3 model.",
    url: `${site.url}/kimi-k3-guide`,
    type: "article",
  },
};

const faqs = [
  {
    q: "What is Kimi K3?",
    a: "Kimi K3 is Moonshot AI's flagship large language model, released July 16, 2026. It uses a Mixture-of-Experts design with a reported 2.8 trillion total parameters and a 1,000,000-token context window, and Moonshot plans to release it as an open-weight model.",
  },
  {
    q: "Is Kimi K3 open source?",
    a: "Moonshot describes K3 as an open-weight model. The full model weights were scheduled for release on July 27, 2026, under a Modified MIT licence, but the final licence terms should be verified on the official release.",
  },
  {
    q: "How much does Kimi K3 cost?",
    a: "Official API pricing is $0.30 per million cache-hit input tokens, $3.00 per million cache-miss input tokens, and $15.00 per million output tokens. See our pricing page and token calculator for estimates.",
  },
  {
    q: "Is KimiK3 Max affiliated with Moonshot AI?",
    a: "No. KimiK3 Max is an independent fan and reference site. It is not affiliated with, endorsed by, or operated by Moonshot AI.",
  },
];

export default function KimiK3Guide() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Kimi K3 Guide", url: `${site.url}/kimi-k3-guide` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › Kimi K3 Guide
        </nav>

        <h1>Kimi K3: The Independent Guide</h1>
        <p className="lead" style={{ fontSize: 19, color: "var(--muted)" }}>
          Kimi K3 is Moonshot AI&apos;s 2.8-trillion-parameter flagship — the
          largest open-weight model announced to date. This guide breaks down
          what it is, how it works, how it performs, what it costs, and how to
          use it.
        </p>

        <div className="callout">
          <strong>At a glance:</strong> 2.8T total params (MoE, 16 of 896 experts
          active) · 1,000,000-token context · text/image/video input · API live
          since July 16, 2026 · open weights expected July 27, 2026.
        </div>

        <h2>What is Kimi K3?</h2>
        <p>
          Kimi K3 is the flagship model from Beijing-based Moonshot AI, the lab
          behind the Kimi assistant. Announced on July 16, 2026, it is described
          by Moonshot as the world&apos;s first open model in the 3-trillion
          parameter class. Rather than iterating on the prior K2 design, K3
          rebuilds the attention stack and nearly triples total parameters.
        </p>

        <h2>Key specifications</h2>
        <table>
          <thead>
            <tr>
              <th>Spec</th>
              <th>Kimi K3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Developer</td>
              <td>Moonshot AI</td>
            </tr>
            <tr>
              <td>Released</td>
              <td>July 16, 2026</td>
            </tr>
            <tr>
              <td>Architecture</td>
              <td>Mixture-of-Experts (Stable LatentMoE)</td>
            </tr>
            <tr>
              <td>Total parameters</td>
              <td>~2.8 trillion (reported)</td>
            </tr>
            <tr>
              <td>Active experts</td>
              <td>16 of 896 per token</td>
            </tr>
            <tr>
              <td>Context window</td>
              <td>1,000,000 tokens</td>
            </tr>
            <tr>
              <td>Input types</td>
              <td>Text, image, video</td>
            </tr>
            <tr>
              <td>API pricing</td>
              <td>$0.30 / $3.00 / $15.00 per 1M tokens</td>
            </tr>
            <tr>
              <td>Weights</td>
              <td>Open weights expected July 27, 2026 (Modified MIT)</td>
            </tr>
          </tbody>
        </table>

        <h2>Architecture in plain terms</h2>
        <p>
          K3 is built on <strong>Kimi Delta Attention (KDA)</strong> and{" "}
          <strong>Attention Residuals (AttnRes)</strong>. KDA uses cheaper linear
          attention for most of the model with periodic full-attention layers,
          cutting KV-cache memory at long context. The MoE design (Stable
          LatentMoE) activates only 16 of 896 experts per token, keeping
          inference practical at 2.8T scale. On the Artificial Analysis
          Intelligence Index, K3 scores ~57, placing fourth among 189 models.
        </p>

        <h2>Explore the clusters</h2>
        <ul>
          <li>
            <Link href="/kimi-k3/specs">Specs &amp; Architecture</Link> — deep dive
            into KDA, parameters, and context.
          </li>
          <li>
            <Link href="/kimi-k3/benchmarks">Benchmarks</Link> — coding, agentic,
            and intelligence-index results vs rivals.
          </li>
          <li>
            <Link href="/kimi-k3/pricing">Pricing &amp; API</Link> — token costs and
            a live calculator.
          </li>
          <li>
            <Link href="/guides/how-to-use-kimi-k3">How-To Guides</Link> — practical
            walkthroughs.
          </li>
            <li>
              <Link href="/open-weights">Open Weights</Link> — weights, licence, and
              self-hosting.
            </li>
            <li>
              <Link href="/faq">FAQ</Link> — answers to the most-asked Kimi K3
              questions.
            </li>
            <li>
              <Link href="/playground">Playground</Link> — try Kimi K3 in your
              browser right now.
            </li>
          </ul>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>

      <Faq items={faqs} />
    </div>
  );
}
