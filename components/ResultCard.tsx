import Link from "next/link";
import type { ResultStage } from "@/data/results";
import { zones } from "@/data/results";
import { serviceCategories } from "@/data/services";
import ShareButtons from "./ShareButtons";

interface ScoreGaugeProps {
  label: string;
  value: number;
}

function ScoreGauge({ label, value }: ScoreGaugeProps) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm text-text-sub">
        <span>{label}</span>
        <span>{value} / 5</span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`h-2 flex-1 rounded-full ${
              n <= value ? "bg-blue" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-100 pt-6">
      <h2 className="mb-3 text-base font-bold text-navy">{title}</h2>
      {children}
    </section>
  );
}

export default function ResultCard({ result }: { result: ResultStage }) {
  const zone = zones[result.zoneId];
  const category = serviceCategories.find(
    (c) => c.id === result.recommendedCategoryId
  );

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
      <p className="text-sm font-semibold text-blue">あなたの現在地は</p>
      <p className="mt-1 inline-block rounded-full bg-bg-soft px-3 py-1 text-xs font-semibold text-navy">
        {zone.name}
      </p>
      <h1 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
        {result.name}
      </h1>
      <p className="mt-2 text-base font-medium text-text-sub">
        {result.catchcopy}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-bg-soft p-4 sm:grid-cols-3">
        <ScoreGauge label="転職緊急度" value={result.urgency} />
        <ScoreGauge label="現職継続推奨度" value={result.stayScore} />
        <ScoreGauge label="情報収集推奨度" value={result.researchScore} />
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <Section title="現在の状態">
          <p className="leading-relaxed text-text">{result.state}</p>
        </Section>

        <Section title="モヤモヤの主な原因">
          <ul className="list-disc space-y-1 pl-5 text-text">
            {result.causes.map((cause) => (
              <li key={cause}>{cause}</li>
            ))}
          </ul>
        </Section>

        <Section title="今すぐ避けたい行動">
          <ul className="list-disc space-y-1 pl-5 text-text">
            {result.avoidActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </Section>

        <Section title="次に取るべき3つの行動">
          <ol className="list-decimal space-y-1 pl-5 text-text">
            {result.nextActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ol>
        </Section>

        <Section title="続ける？ 見直す？ 参考コメント">
          <p className="leading-relaxed text-text">
            {result.continueOrChangeComment}
          </p>
        </Section>

        {category && (
          <Section title="おすすめの転職サービスカテゴリー">
            <p className="mb-4 leading-relaxed text-text">
              あなたの状態には「{category.name}」が参考になりやすい傾向があります。
            </p>
            <Link
              href={`/services?from=${result.slug}#${category.id}`}
              className="inline-block rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-dark"
            >
              転職サービスを比較する
            </Link>
          </Section>
        )}

        <Section title="この結果をシェアする">
          <ShareButtons slug={result.slug} stageName={result.name} />
        </Section>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
        <Link
          href="/diagnosis"
          className="flex-1 rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-text transition-colors hover:bg-bg-soft"
        >
          もう一度診断する
        </Link>
        <Link
          href="/services"
          className="flex-1 rounded-full bg-navy px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-navy/90"
        >
          転職サービス比較を見る
        </Link>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-text-sub">
        この診断結果は、回答内容をもとにキャリアの状態を整理するための参考情報です。転職・退職・就職その他の意思決定を保証するものではありません。
      </p>
    </div>
  );
}
