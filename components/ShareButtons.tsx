"use client";

import { useState } from "react";
import { trackSnsShare } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";

interface ShareButtonsProps {
  slug: string;
  stageName: string;
}

export default function ShareButtons({ slug, stageName }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const resultUrl = `${siteConfig.url}/result/${slug}`;
  const shareText = `${siteConfig.name}で診断したら「${stageName}」でした。`;

  const handleShareX = () => {
    trackSnsShare("x", slug);
    const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(resultUrl)}`;
    window.open(intentUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    trackSnsShare("copy", slug);
    try {
      await navigator.clipboard.writeText(resultUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボードが利用できない環境では何もしない
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleShareX}
        className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90"
      >
        Xで結果をシェア
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-bg-soft"
      >
        {copied ? "コピーしました" : "リンクをコピー"}
      </button>
    </div>
  );
}
