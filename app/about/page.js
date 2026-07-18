import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "About KimiK3 Max",
  description:
    "KimiK3 Max is an independent, non-affiliated reference site for Moonshot AI's Kimi K3 model. Our mission, scope, and editorial stance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "About", url: `${site.url}/about` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › About
        </nav>
        <h1>About KimiK3 Max</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          An independent reference for Moonshot AI&apos;s Kimi K3 model.
        </p>

        <h2>Our mission</h2>
        <p>
          KimiK3 Max exists to give developers, researchers, and curious users a
          clear, neutral, and continuously updated resource for Kimi K3 — specs,
          benchmarks, pricing, API access, comparisons, and hands-on guides —
          without the marketing spin.
        </p>

        <h2>Independence</h2>
        <p>
          We are not affiliated with, endorsed by, or operated by Moonshot AI. We
          cite official sources and independent evaluations, and we label our own
          analysis as such. All trademarks and model names belong to their
          respective owners.
        </p>

        <h2>How we work</h2>
        <ul>
          <li>We aggregate official announcements and third-party benchmarks.</li>
          <li>We publish original tools (like the token calculator) and analysis.</li>
          <li>We update quickly as the Kimi K3 story evolves.</li>
        </ul>

        <p>
          Read our <Link href="/editorial-policy">Editorial Policy</Link> or{" "}
          <Link href="/contact">get in touch</Link>.
        </p>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
    </div>
  );
}
