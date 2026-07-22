import site from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/kimi-k3-guide",
    "/kimi-k3/specs",
    "/kimi-k3/benchmarks",
    "/kimi-k3/pricing",
    "/kimi-k3/api",
    "/guides/how-to-use-kimi-k3",
    "/open-weights",
    "/news",
    "/faq",
    "/playground",
    "/tools/token-cost-calculator",
    "/about",
    "/editorial-policy",
    "/contact",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastmod: new Date().toISOString().split("T")[0],
    changeFreq: "daily",
    priority: route === "" ? 1 : 0.8,
  }));

  const postEntries = (await getAllPosts()).map((post) => ({
    url: `${site.url}/news/${post.slug}`,
    lastmod: (post.updatedAt || post.date).split("T")[0],
    changeFreq: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
