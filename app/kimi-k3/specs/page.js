import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 Specs & Architecture: Parameters, KDA, 1M Context",
  description:
    "Kimi K3 specifications explained: 2.8T parameters, Mixture-of-Experts, Kimi Delta Attention, Attention Residuals, and a 1,000,000-token context window.",
  alternates: { canonical: "/kimi-k3/specs" },
  openGraph: {
    title: "Kimi K3 Specs & Architecture",
    description:
      "Parameters, KDA attention, Attention Residuals, and the 1M-token context window explained.",
    url: `${site.url}/kimi-k3/specs`,
    type: "article",
  },
};

const faqs = [
  {
    q: "How many parameters does Kimi K3 have?",
    a: "Moonshot reports roughly 2.8 trillion total parameters using a sparse Mixture-of-Experts design. The exact active-parameter count has not been disclosed.",
  },
  {
    q: "What is Kimi Delta Attention?",
    a: "KDA is Moonshot's attention mechanism that uses lower-cost linear attention for most layers with periodic full-attention layers, sharply reducing KV-cache memory at 1M-token context.",
  },
  {
    q: "What is the Kimi K3 context window?",
    a: "Kimi K3 supports a context window of up to 1,000,000 tokens.",
  },
];

export default function SpecsPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Kimi K3 Guide", url: `${site.url}/kimi-k3-guide` },
            { name: "Specs", url: `${site.url}/kimi-k3/specs` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › <Link href="/kimi-k3-guide">Kimi K3 Guide</Link> › Specs
        </nav>

        <h1>Kimi K3 Specs &amp; Architecture</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          The engineering behind the largest open-weight model yet — and why its
          architecture matters for real workloads.
        </p>

        <h2>Parameter scale</h2>
        <p>
          Kimi K3 uses a sparse <strong>Mixture-of-Experts (MoE)</strong> design
          (Stable LatentMoE) with 896 total experts, activating only 16 per token.
          Total parameters are reported at ~2.8 trillion. The selective
          activation is what makes serving a 2.8T model practical at scale.
        </p>

        <h2>Attention: KDA + AttnRes</h2>
        <p>
          Two innovations underpin the 1M-token context.{" "}
          <strong>Kimi Delta Attention (KDA)</strong> combines cheaper linear
          attention with periodic full-attention layers, cutting KV-cache memory
          at long context. <strong>Attention Residuals (AttnRes)</strong> let
          each layer selectively pull from earlier representations instead of
          carrying everything forward through a fixed residual path.
        </p>

        <h2>Multimodal & reasoning</h2>
        <p>
          K3 accepts text, image, and video input, with reasoning always on and a
          tunable <code>reasoning_effort</code> control (launched at max effort).
        </p>

        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Experts</td>
              <td>896 total, 16 active per token</td>
            </tr>
            <tr>
              <td>Attention</td>
              <td>KDA + Attention Residuals</td>
            </tr>
            <tr>
              <td>Context</td>
              <td>1,048,576 tokens</td>
            </tr>
            <tr>
              <td>Input</td>
              <td>Text, image, video</td>
            </tr>
            <tr>
              <td>Quantization</td>
              <td>MXFP4 weights / MXFP8 activations (from SFT)</td>
            </tr>
          </tbody>
        </table>

        <p>
          Next: <Link href="/kimi-k3/benchmarks">see how K3 performs</Link> or{" "}
          <Link href="/kimi-k3/pricing">what it costs</Link>.
        </p>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
      <Faq items={faqs} />
    </div>
  );
}
