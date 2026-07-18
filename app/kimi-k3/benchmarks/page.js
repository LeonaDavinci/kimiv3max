import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { breadcrumbJsonLd } from "@/lib/seo";
import site from "@/lib/site";

export const metadata = {
  title: "Kimi K3 Benchmarks: vs GPT-5.6 & Claude Fable 5",
  description:
    "Kimi K3 benchmark results: Artificial Analysis Intelligence Index, Arena Code WebDev, coding and agentic scores, compared with GPT-5.6 Sol and Claude Fable 5.",
  alternates: { canonical: "/kimi-k3/benchmarks" },
  openGraph: {
    title: "Kimi K3 Benchmarks & Comparisons",
    description:
      "How Kimi K3 scores on coding, agentic, and intelligence benchmarks vs GPT-5.6 and Claude Fable 5.",
    url: `${site.url}/kimi-k3/benchmarks`,
    type: "article",
  },
};

const faqs = [
  {
    q: "Is Kimi K3 better than GPT-5.6 Sol?",
    a: "On some tests K3 leads, but Moonshot states it still trails GPT-5.6 Sol overall. Results depend on task, tools, and reasoning effort.",
  },
  {
    q: "Is Kimi K3 better than Claude Fable 5?",
    a: "K3 leads Arena's preliminary WebDev ranking, but Fable 5 remains stronger overall per Moonshot and independent indexes.",
  },
  {
    q: "What is Kimi K3's Intelligence Index score?",
    a: "Artificial Analysis places Kimi K3 at about 57 on its Intelligence Index v4.1, ranking fourth among 189 models — on par with Claude Opus 4.8 and GPT-5.5.",
  },
];

export default function BenchmarksPage() {
  return (
    <div className="page">
      <div className="container prose">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Kimi K3 Guide", url: `${site.url}/kimi-k3-guide` },
            { name: "Benchmarks", url: `${site.url}/kimi-k3/benchmarks` },
          ])}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › <Link href="/kimi-k3-guide">Kimi K3 Guide</Link> › Benchmarks
        </nav>

        <h1>Kimi K3 Benchmarks</h1>
        <p style={{ fontSize: 19, color: "var(--muted)" }}>
          Where K3 lands against the frontier — and where it still trails.
        </p>

        <h2>Headline scores</h2>
        <table>
          <thead>
            <tr>
              <th>Benchmark</th>
              <th>Kimi K3</th>
              <th>Nearest competitor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AA Intelligence Index (v4.1)</td>
              <td>57.1 (#4 of 189)</td>
              <td>Claude Fable 5 (#1)</td>
            </tr>
            <tr>
              <td>arena.ai Code WebDev</td>
              <td>1,679 (#1)</td>
              <td>Claude Fable 5 (#2)</td>
            </tr>
            <tr>
              <td>BrowseComp</td>
              <td>91.2</td>
              <td>Claude Fable 5 (88.6)</td>
            </tr>
            <tr>
              <td>DeepSWE</td>
              <td>67.5</td>
              <td>FrontierSWE 81.2 (Fable 5)</td>
            </tr>
          </tbody>
        </table>

        <h2>Kimi K3 vs GPT-5.6 Sol</h2>
        <p>
          K3 performs better in some reported tests, but Moonshot states it still
          trails GPT-5.6 Sol overall. The gap depends on task, harness, and
          reasoning effort. On Arena&apos;s frontend WebDev leaderboard, K3 ranks
          first — ahead of both Fable 5 and GPT-5.6 Sol.
        </p>

        <h2>Kimi K3 vs Claude Fable 5</h2>
        <p>
          K3 leads Fable 5 in Arena&apos;s preliminary WebDev ranking, but Fable 5
          remains stronger overall on the broader Intelligence Index. No single
          benchmark establishes universal superiority.
        </p>

        <div className="callout">
          <strong>Reasoning-effort caveat:</strong> K3 reasons at maximum effort
          by default, and reasoning tokens count toward output. Real per-task cost
          can run higher than the headline rate suggests.
        </div>

        <p>
          Related: <Link href="/kimi-k3/pricing">Kimi K3 pricing</Link>,{" "}
          <Link href="/kimi-k3/specs">specs &amp; architecture</Link>.
        </p>

        <div className="disclaimer">{site.disclaimer}</div>
      </div>
      <Faq items={faqs} />
    </div>
  );
}
