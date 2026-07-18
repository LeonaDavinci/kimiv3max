import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPosts() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json"));
  const posts = files.map((f) => {
    try {
      return JSON.parse(fs.readFileSync(path.join(postsDir, f), "utf8"));
    } catch (e) {
      return null;
    }
  });
  const clean = posts.filter(Boolean);
  clean.sort((a, b) => new Date(b.date) - new Date(a.date));
  return clean;
}

export function getPostBySlug(slug) {
  const p = path.join(postsDir, `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    return null;
  }
}

export function getLatestPosts(n = 6) {
  return getAllPosts().slice(0, n);
}

export function getAllSlugs() {
  return getAllPosts().map((p) => p.slug);
}
