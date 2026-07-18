"use client";

import { useState } from "react";

// Kimi K3 official API pricing (USD per 1M tokens)
const PRICE = {
  cacheHitInput: 0.3,
  cacheMissInput: 3.0,
  output: 15.0,
};

export default function TokenCalculator() {
  const [inputTokens, setInputTokens] = useState(1000000);
  const [outputTokens, setOutputTokens] = useState(500000);
  const [cacheHitPct, setCacheHitPct] = useState(90);

  const hit = Number(inputTokens) * (Number(cacheHitPct) / 100);
  const miss = Number(inputTokens) * (1 - Number(cacheHitPct) / 100);
  const costCacheHit = (hit / 1_000_000) * PRICE.cacheHitInput;
  const costCacheMiss = (miss / 1_000_000) * PRICE.cacheMissInput;
  const costOutput = (Number(outputTokens) / 1_000_000) * PRICE.output;
  const total = costCacheHit + costCacheMiss + costOutput;

  return (
    <div className="card" style={{ maxWidth: 560 }}>
      <h3>Kimi K3 Token Cost Calculator</h3>
      <p style={{ color: "var(--muted)", fontSize: 14 }}>
        Estimates cost using official pricing: $0.30 / $3.00 / $15.00 per 1M
        tokens (cache-hit input / cache-miss input / output).
      </p>

      <label htmlFor="in">Input tokens</label>
      <input
        id="in"
        type="number"
        min="0"
        value={inputTokens}
        onChange={(e) => setInputTokens(e.target.value)}
      />

      <label htmlFor="out">Output tokens</label>
      <input
        id="out"
        type="number"
        min="0"
        value={outputTokens}
        onChange={(e) => setOutputTokens(e.target.value)}
      />

      <label htmlFor="cache">Cache-hit ratio: {cacheHitPct}%</label>
      <input
        id="cache"
        type="range"
        min="0"
        max="100"
        value={cacheHitPct}
        onChange={(e) => setCacheHitPct(e.target.value)}
      />

      <table>
        <tbody>
          <tr>
            <td>Cache-hit input cost</td>
            <td>${costCacheHit.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Cache-miss input cost</td>
            <td>${costCacheMiss.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Output cost</td>
            <td>${costOutput.toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <strong>Total estimate</strong>
            </td>
            <td>
              <strong>${total.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: 13, color: "var(--muted)" }}>
        Indicative only. Reasoning tokens count toward output. Verify live rates
        on the official Kimi API platform.
      </p>
    </div>
  );
}
