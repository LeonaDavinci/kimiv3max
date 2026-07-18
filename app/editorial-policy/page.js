import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Editorial Policy",
  description:
    "How KimiK3 Max sources, verifies, and presents information about Moonshot AI's Kimi K3 model.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Editorial Policy", url: `${site.url}/editorial-policy` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › Editorial Policy
        </nav>
        <h1>Editorial Policy</h1>

        <h2>Sourcing</h2>
        <p>
          We rely on primary sources (Moonshot AI official communications,
          technical blogs, API documentation) and reputable independent
          evaluations (e.g., Artificial Analysis, arena.ai). We link to sources
          so readers can verify.
        </p>

        <h2>Accuracy &amp; corrections</h2>
        <p>
          Figures such as benchmark scores and pricing change. We date our
          content and correct errors promptly. Where data is pending (e.g., the
          open-weight release), we say so explicitly rather than implying
          certainty.
        </p>

        <h2>Independence</h2>
        <p>
          KimiK3 Max is independent and non-affiliated. We do not accept payment
          to alter rankings, benchmarks, or recommendations. Our analysis is our
          own and clearly distinguished from official statements.
        </p>

        <h2>Transparency</h2>
        <p>
          This site is a fan/reference project. &quot;Kimi&quot; is a trademark of
          Moonshot AI. When in doubt, defer to official Moonshot channels for
          account, billing, and support matters.
        </p>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
    </div>
  );
}
