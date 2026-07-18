import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 Open Weights: Release, Licence & Self-Hosting",
  description:
    "Kimi K3 open-weight release: expected July 27, 2026 under a Modified MIT licence, plus the realistic self-hosting requirements (64+ accelerators).",
  alternates: { canonical: "/open-weights" },
  openGraph: {
    title: "Kimi K3 Open Weights",
    description: "Weights release, licence, and self-hosting reality for Kimi K3.",
    url: `${site.url}/open-weights`,
    type: "article",
  },
};

const faqs = [
  {
    q: "When are the Kimi K3 weights released?",
    a: "Moonshot scheduled the full model weights for release by July 27, 2026. Verify the actual publication date and final licence on the official channels.",
  },
  {
    q: "Under what licence are the Kimi K3 weights released?",
    a: "Moonshot described the release as a Modified MIT licence. The final licence terms should be confirmed when weights publish.",
  },
  {
    q: "Can I run Kimi K3 on a PC?",
    a: "No. Moonshot recommends deployment with at least 64 accelerators. Self-hosting the full model is far beyond ordinary consumer hardware.",
  },
];

export default function OpenWeightsPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Kimi K3 Guide", url: `${site.url}/kimi-k3-guide` },
            { name: "Open Weights", url: `${site.url}/open-weights` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › <Link href="/kimi-k3-guide">Kimi K3 Guide</Link> › Open Weights
        </nav>

        <h1>Kimi K3 Open Weights</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          What the open-weight release means — and the honest self-hosting
          reality.
        </p>

        <h2>Release &amp; licence</h2>
        <p>
          Moonshot plans to publish the full Kimi K3 weights by July 27, 2026 under
          a Modified MIT licence. Until the weights and final licence are
          published, K3 should be treated as &quot;open-weight pending,&quot; not
          a downloadable open model.
        </p>

        <h2>Self-hosting reality</h2>
        <p>
          The full model recommends deployment configurations with at least 64
          accelerators. For most individuals and small teams, the practical path
          is the hosted API rather than local inference.
        </p>

        <h2>Limitations to watch</h2>
        <ul>
          <li>Weights and final licence were pending at launch.</li>
          <li>No K3-specific safety report was published at launch.</li>
          <li>Long-context reliability at 1M tokens is not automatically guaranteed.</li>
          <li>Independent testing noted slower output and higher verbosity than average.</li>
        </ul>

        <p>
          Related: <Link href="/kimi-k3/specs">specs &amp; architecture</Link>,{" "}
          <Link href="/kimi-k3/pricing">pricing</Link>.
        </p>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
      <Faq items={faqs} />
    </div>
  );
}
