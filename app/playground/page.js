import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import KimiFrame from "@/components/KimiFrame";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 Playground — Try Kimi K3 Free in Your Browser",
  description:
    "Try Moonshot AI's Kimi K3 right here: an embedded chat powered by the official kimi.ai. Ask questions, paste long documents, or test coding and reasoning — no install required.",
  alternates: { canonical: "/playground" },
  openGraph: {
    title: "Kimi K3 Playground",
    description:
      "Try Kimi K3 in your browser via the official kimi.ai chat. Long context, coding, and reasoning.",
    url: `${site.url}/playground`,
    type: "website",
  },
};

export default function PlaygroundPage() {
  return (
    <div className="page">
      <div className="container">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Playground", url: `${site.url}/playground` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › Playground
        </nav>

        <h1>Kimi K3 Playground</h1>
        <p style={{ fontSize: 19, color: "var(--muted)", maxWidth: 720 }}>
          Try Kimi K3 instantly. The chat below is the official{" "}
          <a href="https://kimi.ai" target="_blank" rel="noopener noreferrer">
            kimi.ai
          </a>{" "}
          experience, embedded for convenience. It supports long documents,
          images, video, coding, and deep research.
        </p>

        <KimiFrame src="https://kimi.ai" label="Kimi K3" />

        <div className="grid cards" style={{ marginTop: 28 }}>
          <div className="card">
            <span className="tag">1M context</span>
            <h3>Paste a long document</h3>
            <p>
              Drop in a whole research paper, contract, or book chapter and ask
              Kimi K3 to summarize, compare, or extract.
            </p>
          </div>
          <div className="card">
            <span className="tag">Multimodal</span>
            <h3>Image &amp; video</h3>
            <p>
              Upload screenshots or short clips and ask questions about what they
              show.
            </p>
          </div>
          <div className="card">
            <span className="tag">Build</span>
            <h3>Go beyond chat</h3>
            <p>
              Want to integrate it? See the{" "}
              <Link href="/kimi-k3/api">API docs</Link> and{" "}
              <Link href="/tools/token-cost-calculator">token calculator</Link>.
            </p>
          </div>
        </div>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
    </div>
  );
}
