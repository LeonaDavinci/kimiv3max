import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/posts";
import site from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Kimi K3 News & Analysis",
  description:
    "The latest news, benchmarks, and analysis on Moonshot AI's Kimi K3 model — published as the story evolves.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "Kimi K3 News & Analysis",
    description: "Latest Kimi K3 news, benchmarks, and analysis.",
    url: `${site.url}/news`,
    type: "website",
  },
};

export default async function NewsPage() {
  const posts = await getAllPosts();
  return (
    <div className="page">
      <div className="container">
        <h1 style={{ fontSize: 34, margin: "0 0 8px" }}>Kimi K3 News &amp; Analysis</h1>
        <p style={{ color: "var(--muted)", maxWidth: 680 }}>
          New articles publish as the Kimi K3 story develops — releases,
          benchmarks, pricing changes, and hands-on analysis.
        </p>
        {posts.length === 0 ? (
          <p>No articles yet. Publish your first post from the New Article page.</p>
        ) : (
          <div className="article-grid" style={{ marginTop: 24 }}>
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
        <p style={{ marginTop: 24 }}>
          <Link href="/admin" className="btn secondary">
            + New Article
          </Link>
        </p>
      </div>
    </div>
  );
}
