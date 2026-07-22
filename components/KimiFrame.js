"use client";

import { useState } from "react";

// Embeds the official kimi.ai chat. Because kimi.ai may send
// X-Frame-Options / frame-ancestors that block embedding in some browsers,
// we always expose a "Open in new tab" fallback and surface a notice if the
// frame fails to load.
export default function KimiFrame({
  src = "https://kimi.ai",
  label = "Kimi K3 on kimi.ai",
  full = false,
}) {
  const [status, setStatus] = useState("loading");

  return (
    <div className={`kimi-frame-wrap${full ? " full" : ""}`}>
      <div className="kimi-frame-bar">
        <span className="kimi-frame-status">
          {status === "loading" ? "Loading Kimi K3…" : "Embedded Kimi K3"}
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="btn small"
        >
          Open {label} ↗
        </a>
      </div>

      <iframe
        src={src}
        title="Try Kimi K3 (kimi.ai)"
        className="kimi-frame"
        loading="lazy"
        allow="clipboard-write; microphone"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("blocked")}
      />

      {status === "blocked" && (
        <p className="note">
          kimi.ai blocked the embedded frame in this browser.{" "}
          <a href={src} target="_blank" rel="noopener noreferrer">
            Open Kimi K3 in a new tab ↗
          </a>
        </p>
      )}

      <p className="note">
        You may need to sign in to kimi.ai to use the chat. If the frame does not
        appear, your browser or kimi.ai&apos;s security settings may prevent
        embedding — use the button above to open it directly.
      </p>
    </div>
  );
}
