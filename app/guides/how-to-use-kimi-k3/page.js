import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "How to Use Kimi K3: Chat, API & Agents (Guide)",
  description:
    "Practical walkthroughs for using Kimi K3 — via the Kimi app and web, the API, and Kimi Code agents. Independent, non-affiliated guide.",
  alternates: { canonical: "/guides/how-to-use-kimi-k3" },
  openGraph: {
    title: "How to Use Kimi K3",
    description: "Chat, API, and agent walkthroughs for Kimi K3.",
    url: `${site.url}/guides/how-to-use-kimi-k3`,
    type: "article",
  },
};

const faqs = [
  {
    q: "How do I start using Kimi K3?",
    a: "Open the Kimi app or website and select Kimi K3, or use Kimi Code in your terminal with the /model command. No setup is required for chat.",
  },
  {
    q: "Can I use Kimi K3 for free?",
    a: "Kimi K3 is available through Moonshot's products and API. Free tiers and pricing depend on Moonshot's current plans — verify on the official site.",
  },
  {
    q: "How do I use Kimi K3 via API?",
    a: "Select kimi-k3 on the Kimi API Platform and send a chat-completions style request. See our API guide for details.",
  },
];

export default function HowToPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Kimi K3 Guide", url: `${site.url}/kimi-k3-guide` },
            { name: "How-To", url: `${site.url}/guides/how-to-use-kimi-k3` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › <Link href="/kimi-k3-guide">Kimi K3 Guide</Link> › How-To
        </nav>

        <h1>How to Use Kimi K3</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          Three practical entry points, from zero-setup chat to developer APIs.
        </p>

        <h2>1. Chat in the Kimi app or web</h2>
        <p>
          Open the Kimi app or website and choose Kimi K3. Type a clear prompt —
          summarize a document, draft an email, debug code, or plan a project.
          No prompt engineering required.
        </p>

        <h2>2. Use Kimi K3 via API</h2>
        <p>
          Developers select <code>kimi-k3</code> on the Kimi API Platform. See the{" "}
          <Link href="/kimi-k3/api">API guide</Link> for the request shape and{" "}
          <Link href="/kimi-k3/pricing">pricing</Link>.
        </p>

        <h2>3. Agents with Kimi Code</h2>
        <p>
          Run Kimi Code in your terminal and select Kimi K3 with the{" "}
          <code>/model</code> command for coding agents, scaffolding, and
          documentation. Kimi K3 also powers Kimi agents for site generation,
          slides, and deep research.
        </p>

        <h2>Prompt tips</h2>
        <ul>
          <li>State the goal, audience, format, and constraints.</li>
          <li>Upload files for meaning-based search across your library.</li>
          <li>Verify important facts, dates, and prices from primary sources.</li>
        </ul>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
      <Faq items={faqs} />
    </div>
  );
}
