import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 FAQ: Answers to the Most-Asked Questions",
  description:
    "Frequently asked questions about Moonshot AI's Kimi K3 — parameters, context window, pricing, open weights, API access, and how to try it. Independent reference.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Kimi K3 FAQ",
    description:
      "Parameters, 1M context, pricing, open weights, API, and how to try Kimi K3 — answered.",
    url: `${site.url}/faq`,
    type: "article",
  },
};

const faqs = [
  {
    q: "What is Kimi K3?",
    a: "Kimi K3 is Moonshot AI's flagship large language model, released July 16, 2026. It uses a Mixture-of-Experts design with a reported 2.8 trillion total parameters and a 1,000,000-token context window, and Moonshot plans to release it as an open-weight model.",
  },
  {
    q: "Who makes Kimi K3?",
    a: "Kimi K3 is developed by Moonshot AI, the Beijing-based lab behind the Kimi assistant. \"Kimi\" is a trademark of Moonshot AI.",
  },
  {
    q: "How many parameters does Kimi K3 have?",
    a: "Moonshot reports roughly 2.8 trillion total parameters using a sparse Mixture-of-Experts design (896 experts, 16 active per token). The exact active-parameter count has not been disclosed.",
  },
  {
    q: "What is the Kimi K3 context window?",
    a: "Kimi K3 supports a context window of up to 1,000,000 tokens, enabled by Kimi Delta Attention, which cuts KV-cache memory at long context.",
  },
  {
    q: "Is Kimi K3 free to use?",
    a: "The Kimi assistant on kimi.ai offers a free tier for chat. The developer API is paid, billed per token (cache-hit input $0.30, cache-miss input $3.00, output $15.00 per 1M tokens). Self-hosting the open weights has no API fee but requires your own GPU hardware.",
  },
  {
    q: "How much does the Kimi K3 API cost?",
    a: "Official API pricing is $0.30 per million cache-hit input tokens, $3.00 per million cache-miss input tokens, and $15.00 per million output tokens. Use our token cost calculator for estimates.",
  },
  {
    q: "Is Kimi K3 open source / open weights?",
    a: "Moonshot describes K3 as an open-weight model. The full model weights were scheduled for release on July 27, 2026, under a Modified MIT licence, but verify the final licence terms on the official release before redistribution.",
  },
  {
    q: "What can Kimi K3 do?",
    a: "K3 accepts text, image, and video input, keeps reasoning always on with a tunable reasoning_effort control, and is strong at long-context analysis, coding, agentic tool use, and deep research. On the Artificial Analysis Intelligence Index it scores around 57.",
  },
  {
    q: "How do I access Kimi K3?",
    a: "Three ways: (1) chat for free at kimi.ai, (2) call the developer API with an API key, or (3) download the open weights and self-host. See our how-to guide and open-weights pages for steps.",
  },
  {
    q: "Does Kimi K3 support function calling / tools?",
    a: "Yes. The Kimi K3 API supports tool use (function calling) and agentic workflows, and the chat interface can browse and run deep-research tasks. Exact tool schemas are documented in the official API reference.",
  },
  {
    q: "What is the difference between Kimi K3 and Kimi K2?",
    a: "K3 (July 2026) is a major rebuild over K2: it nearly triples total parameters to ~2.8T, introduces Kimi Delta Attention and Attention Residuals, and pushes context to 1M tokens. K2 was the prior-generation model and remains available.",
  },
  {
    q: "Is KimiK3 Max affiliated with Moonshot AI?",
    a: "No. KimiK3 Max is an independent fan and reference site. It is not affiliated with, endorsed by, or operated by Moonshot AI.",
  },
];

export default function FaqPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "FAQ", url: `${site.url}/faq` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › FAQ
        </nav>

        <h1>Kimi K3 FAQ</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          The most-asked questions about Moonshot AI&apos;s Kimi K3 model —
          answered in plain language. Want to try it yourself?{" "}
          <Link href="/playground">Open the Kimi K3 playground →</Link>
        </p>

        <div className="callout">
          <strong>Quick links:</strong>{" "}
          <Link href="/kimi-k3/specs">Specs</Link> ·{" "}
          <Link href="/kimi-k3/benchmarks">Benchmarks</Link> ·{" "}
          <Link href="/kimi-k3/pricing">Pricing</Link> ·{" "}
          <Link href="/kimi-k3/api">API</Link> ·{" "}
          <Link href="/open-weights">Open Weights</Link> ·{" "}
          <Link href="/guides/how-to-use-kimi-k3">How-To Guide</Link>
        </div>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>

      <Faq items={faqs} />
    </div>
  );
}
