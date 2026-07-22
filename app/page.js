import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getLatestPosts } from "@/lib/posts";
import site from "@/lib/site";

// Fresh on every request so newly published articles appear immediately.
export const dynamic = "force-dynamic";

const pillars = [
  { href: "/kimi-k3-guide", title: "Kimi K3 Guide", desc: "The complete independent overview of Moonshot's 2.8T model." },
  { href: "/kimi-k3/specs", title: "Specs & Architecture", desc: "Parameters, KDA attention, 1M-token context, multimodal input." },
  { href: "/kimi-k3/benchmarks", title: "Benchmarks", desc: "Coding, agentic, and intelligence-index results vs rivals." },
  { href: "/kimi-k3/pricing", title: "Pricing & API", desc: "Token costs, API access, and a live cost calculator." },
  { href: "/guides/how-to-use-kimi-k3", title: "How-To Guides", desc: "Practical walkthroughs for chat, API, and agents." },
  { href: "/open-weights", title: "Open Weights", desc: "Weights release, license, and self-hosting reality." },
];

export default async function Home() {
  const latest = await getLatestPosts(6);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>The independent hub for Kimi K3</h1>
          <p className="lead">
            Specs, benchmarks, pricing, API access, comparisons, and hands-on
            guides for Moonshot AI&apos;s 2.8-trillion-parameter Kimi K3 model —
            updated as the story develops.
          </p>
          <p>
            <Link href="/kimi-k3-guide" className="btn">
              Read the Kimi K3 guide
            </Link>{" "}
            <Link href="/tools/token-cost-calculator" className="btn secondary">
              Try the token calculator
            </Link>
          </p>
          <div className="callout" style={{ marginTop: 22, maxWidth: 720 }}>
            <strong>Independent &amp; non-affiliated.</strong> {site.disclaimer}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Explore by topic</h2>
          <p className="sub">Six clusters built around what people actually search for.</p>
          <div className="pillars-nav">
            {pillars.map((p) => (
              <Link key={p.href} href={p.href}>
                {p.title}
              </Link>
            ))}
          </div>
          <div className="grid cards" style={{ marginTop: 24 }}>
            {pillars.map((p) => (
              <Link key={p.href} href={p.href} className="card" style={{ display: "block" }}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <h2>Latest articles</h2>
          <p className="sub">
            New analysis, benchmarks, and news — published as the Kimi K3 story
            evolves.
          </p>
          {latest.length === 0 ? (
            <p>No articles published yet. Use the New Article page to publish your first post.</p>
          ) : (
            <div className="article-grid">
              {latest.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          )}
          <p style={{ marginTop: 24 }}>
            <Link href="/news" className="btn secondary">
              Browse all articles
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
