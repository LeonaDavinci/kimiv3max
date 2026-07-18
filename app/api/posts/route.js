import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const postsDir = path.join(process.cwd(), "content", "posts");

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, slug, contentHtml } = body;

    if (!title || !slug || !contentHtml) {
      return Response.json(
        { error: "title, slug and contentHtml are required" },
        { status: 400 }
      );
    }

    if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });

    const safeSlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const post = {
      title,
      slug: safeSlug,
      category: body.category || "News",
      excerpt: body.excerpt || "",
      contentHtml,
      date: body.date || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    fs.writeFileSync(
      path.join(postsDir, `${safeSlug}.json`),
      JSON.stringify(post, null, 2),
      "utf8"
    );

    return Response.json({ ok: true, slug: safeSlug });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
