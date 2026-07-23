"use client";

import type { Service } from "@/data/services";
import { trackServiceLinkClick } from "@/lib/analytics";

export default function ServiceCard({ service }: { service: Service }) {
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
