import Link from "next/link";
import site from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div>
            <h4>{site.name}</h4>
            <p style={{ maxWidth: 360 }}>{site.tagline}</p>
            <div className="disclaimer" style={{ marginTop: 12 }}>
              {site.disclaimer}
            </div>
          </div>
          <div>
            <h4>Topics</h4>
            <Link href="/kimi-k3-guide">Kimi K3 Guide</Link>
            <Link href="/kimi-k3/specs">Specs &amp; Architecture</Link>
            <Link href="/kimi-k3/benchmarks">Benchmarks</Link>
            <Link href="/kimi-k3/pricing">Pricing &amp; API</Link>
            <Link href="/open-weights">Open Weights</Link>
          </div>
          <div>
            <h4>Site</h4>
            <Link href="/about">About</Link>
            <Link href="/editorial-policy">Editorial Policy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin">New Article</Link>
          </div>
        </div>
        <div className="bottom">
          © {new Date().getFullYear()} {site.name}. Independent reference site. Not
          affiliated with Moonshot AI.
        </div>
      </div>
    </footer>
  );
}
