import Link from "next/link";
import site from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container inner">
        <Link href="/" className="brand">
          <img src="/logo.svg" alt="KimiK3 Max logo" width="30" height="30" />
          {site.name}
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/kimi-k3-guide">Kimi K3 Guide</Link>
          <Link href="/kimi-k3/specs">Specs</Link>
          <Link href="/kimi-k3/benchmarks">Benchmarks</Link>
          <Link href="/kimi-k3/pricing">Pricing</Link>
          <Link href="/news">News</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/playground">Playground</Link>
          <Link href="/tools/token-cost-calculator" className="cta">
            Token Calculator
          </Link>
        </nav>
      </div>
    </header>
  );
}
