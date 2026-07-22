# KimiK3Max — Independent Kimi K3 Resource Hub

An SEO-optimized, Next.js (App Router) site covering Moonshot AI's **Kimi K3** model:
specs, benchmarks, pricing, API, self-hosting open weights, tutorials, and news.

> Independent, non-official fan/resource site. Not affiliated with Moonshot AI.

## Stack
- Next.js 14 (App Router, SSR / dynamic rendering)
- TipTap rich-text editor for the `/admin` article writer
- Durable content layer: **Vercel Blob** in production (`BLOB_READ_WRITE_TOKEN` set),
  local filesystem in dev — no DB required
- Zero CSS framework (hand-written design system) for strong Core Web Vitals

## Local dev
```bash
npm install
npm run dev      # http://localhost:3000
```
Articles published from `/admin` are written to `content/posts/*.json` locally.

## Deploy
Push to GitHub and import into Vercel (auto-detects Next.js).

### Publishing articles on Vercel (required)
Vercel's serverless filesystem is **read-only**, so runtime article writes must go to
Vercel Blob, not the local disk. Two steps:

1. In the Vercel dashboard: **Storage → Create / Connect a Blob store** (creates a
   `BLOB_READ_WRITE_TOKEN`).
2. Add that token as an **Environment Variable** named `BLOB_READ_WRITE_TOKEN`
   (Production scope; add Preview too if you want it on preview deploys).

With the token present, `lib/posts.js` reads/writes posts via Blob and new articles
appear on the homepage and `/news` immediately (those pages render dynamically).
Without it, the site still builds and reads the committed seed post, but publishing
from `/admin` would fail with `EROFS: read-only file system`.

## SEO highlights
- `app/robots.js` + `app/sitemap.js` (live `lastmod`)
- Per-page metadata, canonical, OpenGraph, Twitter
- JSON-LD: Organization, WebSite, Breadcrumb, Article, FAQPage
- Pillar + topic-cluster internal linking architecture
