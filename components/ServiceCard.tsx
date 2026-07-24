"use client";

import type { Service } from "@/data/services";
import { trackServiceLinkClick } from "@/lib/analytics";

function ComingSoonCard() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
      <span className="inline-block rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
        近日公開
      </span>
      <p className="mt-4 text-lg font-bold text-navy">厳選中 近日公開！</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-sub">
        あなたに合うサービスを厳選しています。準備が整い次第、こちらに公開します。
      </p>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="mt-5 block w-full cursor-not-allowed rounded-full bg-slate-200 px-5 py-3 text-center text-sm font-bold text-slate-400"
      >
        近日公開
      </button>
    </div>
  );
}

export default function ServiceCard({ service }: { service: Service }) {
  if (service.comingSoon || !service.name) {
    return <ComingSoonCard />;
  }

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <h3 className="text-lg font-bold text-navy">{service.name}</h3>

      <dl className="mt-4 space-y-2 text-sm text-text">
        <div className="flex gap-2">
          <dt className="w-20 shrink-0 text-text-sub">対象年代</dt>
          <dd>{service.ageRange}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-20 shrink-0 text-text-sub">得意職種</dt>
          <dd>{service.strengths}</dd>
        </div>
      </dl>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
        {service.features}
      </p>

      <p className="mt-4 rounded-lg bg-bg-soft p-3 text-sm text-text-sub">
        <span className="font-semibold text-navy">こんな人におすすめ：</span>
        {service.recommendedFor}
      </p>

      <a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={() => trackServiceLinkClick(service.id)}
        className="mt-5 block rounded-full bg-orange px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-orange-dark"
      >
        公式サイトを見る
      </a>
      <p className="mt-2 text-center text-xs text-text-sub">広告</p>
    </div>
  );
}
