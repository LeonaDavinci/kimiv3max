import Link from "next/link";

export default function ArticleCard({ post }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Link href={`/news/${post.slug}`} className="article-card">
      <div className="body">
        <span className="cat">{post.category || "News"}</span>
        <h3>{post.title}</h3>
        <p className="excerpt">{post.excerpt}</p>
        <span className="meta">{date}</span>
      </div>
    </Link>
  );
}
