# KimiK3Max — Independent Kimi K3 Resource Hub

An SEO-optimized, Next.js (App Router) site covering Moonshot AI's **Kimi K3** model:
specs, benchmarks, pricing, API, self-hosting open weights, tutorials, and news.

> Independent, non-official fan/resource site. Not affiliated with Moonshot AI.

## Stack
- Next.js 14 (App Router, SSR / dynamic rendering)
- TipTap rich-text editor for the `/admin` article writer
- File-based content layer (`content/posts/*.json`) — swap for a DB on Vercel
- Zero CSS framework (hand-written design system) for strong Core Web Vitals

## Local dev
```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy
Push to GitHub and import into Vercel (auto-detects Next.js). For persistent article
publishing on Vercel, move `lib/posts.js` + `app/api/posts` to a server DB
(Neon / Supabase / Vercel Postgres).

## SEO highlights
- `app/robots.js` + `app/sitemap.js` (live `lastmod`)
- Per-page metadata, canonical, OpenGraph, Twitter
- JSON-LD: Organization, WebSite, Breadcrumb, Article, FAQPage
- Pillar + topic-cluster internal linking architecture
