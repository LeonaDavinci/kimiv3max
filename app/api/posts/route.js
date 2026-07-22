import { savePost } from "@/lib/posts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

    const safeSlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!safeSlug) {
      return Response.json({ error: "slug is invalid" }, { status: 400 });
    }

    const post = {
      title,
      slug: safeSlug,
      category: body.category || "News",
      excerpt: body.excerpt || "",
      contentHtml,
      date: body.date || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await savePost(post);

    return Response.json({ ok: true, slug: safeSlug });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
