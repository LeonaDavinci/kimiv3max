import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import JsonLd from "@/components/JsonLd";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  // Pre-render any posts present at build; dynamic rendering covers new ones.
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/news/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
    },
  };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const clean = DOMPurify.sanitize(post.contentHtml || "");

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="page">
      <div className="container prose">
        <JsonLd data={articleJsonLd(post)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "News", url: `${site.url}/news` },
            { name: post.title, url: `${site.url}/news/${post.slug}` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › <Link href="/news">News</Link> › {post.title}
        </nav>

        <span className="cat" style={{ fontWeight: 700, color: "var(--blue-dark)", textTransform: "uppercase", fontSize: 13 }}>
          {post.category || "News"}
        </span>
        <h1>{post.title}</h1>
        <p style={{ color: "var(--muted)" }}>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: clean }} />

        <div className="disclaimer">{site.disclaimer}</div>

        <p style={{ marginTop: 24 }}>
          <Link href="/news" className="btn secondary">
            ← All articles
          </Link>
        </p>
      </div>
    </div>
  );
}
