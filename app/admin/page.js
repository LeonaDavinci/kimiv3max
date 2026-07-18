"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RichTextEditor from "@/components/RichTextEditor";
import site from "@/lib/site";

function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AdminPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("News");
  const [excerpt, setExcerpt] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);

  const onTitleChange = (v) => {
    setTitle(v);
    if (!slug) setSlug(slugify(v));
  };

  async function publish(e) {
    e.preventDefault();
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slug || slugify(title),
          category,
          excerpt,
          contentHtml,
          date: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to publish");
      setStatus({ ok: true, slug: data.slug });
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContentHtml("");
      router.refresh();
    } catch (err) {
      setStatus({ ok: false, error: err.message });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="page admin-wrap">
      <div className="container" style={{ maxWidth: 820 }}>
        <h1 style={{ fontSize: 30 }}>New Article</h1>
        <p style={{ color: "var(--muted)" }}>
          Write with the rich editor, then publish. New posts appear on the
          homepage &quot;Latest articles&quot; list immediately (in dev / self-host).
          Add authentication before exposing this in production.
        </p>

        <form onSubmit={publish}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="e.g. Kimi K3 vs Claude Fable 5: Full Comparison"
            required
          />

          <label htmlFor="slug">Slug (URL)</label>
          <input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="kimi-k3-vs-claude-fable-5"
            required
          />

          <label htmlFor="category">Category</label>
          <input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label htmlFor="excerpt">Excerpt (meta description)</label>
          <textarea
            id="excerpt"
            rows="2"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="One or two sentences shown in the article list and search results."
          />

          <label>Content</label>
          <RichTextEditor value={contentHtml} onChange={setContentHtml} />

          <p style={{ marginTop: 18 }}>
            <button type="submit" className="btn" disabled={busy}>
              {busy ? "Publishing…" : "Publish article"}
            </button>{" "}
            <Link href="/news" className="btn secondary">
              View articles
            </Link>
          </p>

          {status?.ok && (
            <div className="callout">
              Published successfully →{" "}
              <Link href={`/news/${status.slug}`}>View post</Link>
            </div>
          )}
          {status && !status.ok && (
            <div className="disclaimer">Error: {status.error}</div>
          )}
        </form>

        <div className="disclaimer" style={{ marginTop: 24 }}>
          Note: on Vercel&apos;s serverless runtime, filesystem writes do not
          persist. For production daily publishing, swap <code>lib/posts.js</code>{" "}
          and <code>app/api/posts</code> to a database (e.g., Vercel Postgres /
          Neon / Supabase). {site.disclaimer}
        </div>
      </div>
    </div>
  );
}
