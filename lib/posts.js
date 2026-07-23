import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "content", "posts");

// On Vercel the serverless filesystem is read-only, so runtime-created posts
// must be persisted to Vercel Blob (or any writable store). When the Blob token
// is present we use it; otherwise we fall back to the local filesystem so
// `npm run dev` keeps working without any setup.
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const USE_BLOB = !!BLOB_TOKEN;

/* ---------- local (committed seed posts) ---------- */
function readLocalPosts() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json"));
  const posts = files.map((f) => {
    try {
      return JSON.parse(fs.readFileSync(path.join(postsDir, f), "utf8"));
    } catch (e) {
      return null;
    }
  });
  return posts.filter(Boolean);
}

/* ---------- blob (runtime-created posts) ---------- */
async function readBlobPosts() {
  if (!USE_BLOB) return [];
  const { list } = await import("@vercel/blob");
  const { blobs } = await list({
    prefix: "posts/",
    token: BLOB_TOKEN,
  });
  const posts = await Promise.all(
    blobs.map(async (b) => {
      try {
        const res = await fetch(b.downloadUrl || b.url);
        if (!res.ok) return null;
        return await res.json();
      } catch (e) {
        return null;
      }
    })
  );
  return posts.filter(Boolean);
}

export async function getAllPosts() {
  const [local, blob] = await Promise.all([readLocalPosts(), readBlobPosts()]);
  const all = [...local, ...blob];
  all.sort((a, b) => new Date(b.date) - new Date(a.date));
  return all;
}

export async function getPostBySlug(slug) {
  const local = readLocalPosts().find((p) => p.slug === slug);
  if (local) return local;

  if (!USE_BLOB) return null;
  const { list } = await import("@vercel/blob");
  const { blobs } = await list({
    prefix: `posts/${slug}.json`,
    token: BLOB_TOKEN,
  });
  if (blobs.length === 0) return null;
    try {
      const res = await fetch(blobs[0].downloadUrl || blobs[0].url);
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
    return null;
  }
}

export async function getLatestPosts(n = 6) {
  return (await getAllPosts()).slice(0, n);
}

export async function getAllSlugs() {
  return (await getAllPosts()).map((p) => p.slug);
}

/* ---------- write ---------- */
export async function savePost(post) {
  if (USE_BLOB) {
    const { put } = await import("@vercel/blob");
    await put(`posts/${post.slug}.json`, JSON.stringify(post, null, 2), {
      access: "private",
      token: BLOB_TOKEN,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return post.slug;
  }

  // Local fallback (development only). On Vercel this would throw EROFS.
  if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });
  fs.writeFileSync(
    path.join(postsDir, `${post.slug}.json`),
    JSON.stringify(post, null, 2),
    "utf8"
  );
  return post.slug;
}
