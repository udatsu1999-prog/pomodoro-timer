import Link from "next/link";
import Image from "next/image";
import type { ResultStage } from "@/data/results";
import { zones, getOtherResults } from "@/data/results";
import { serviceCategories } from "@/data/services";
import ShareButtons from "./ShareButtons";

/**
 * ステージ専用イラストが未設定の場合に使う共通プレースホルダー。
 * 16種類のイラストが用意でき次第、各ステージの imageUrl を設定すれば自動的に差し替わる。
 */
const DEFAULT_STAGE_IMAGE = "/stage-placeholder.png";

function StageVisual({ result }: { result: ResultStage }) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-[24px] shadow-lg shadow-navy/10">
      <Image
        src={result.imageUrl ?? DEFAULT_STAGE_IMAGE}
        alt={`${result.name}のイメージイラスト`}
        fill
        priority
        sizes="(min-width: 672px) 640px, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-text-sub">
        <span>{label}</span>
        <span>{value} / 5</span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`h-2 flex-1 rounded-full ${
              n <= value ? "bg-navy" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SummaryCard({ summary }: { summary: ResultStage["summary"] }) {
  return (
    <div className="rounded-2xl bg-bg-soft p-5 sm:p-6">
      <h2 className="text-sm font-bold text-navy">診断サマリー</h2>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
        <MetricBar label="キャリア方向性" value={summary.careerDirection} />
        <MetricBar label="転職準備度" value={summary.jobChangeReadiness} />
        <MetricBar label="現職適合度" value={summary.currentFit} />
        <MetricBar label="情報収集度" value={summary.infoGathering} />
      </div>
    </div>
  );
}

function EmpathyChecklist({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-blue/20 bg-blue/5 p-5 sm:p-6">
      <h2 className="text-base font-bold text-navy">
        こんな状態ではありませんか？
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-text">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">
              ✓
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
      <h2 className="mb-3 text-base font-bold text-navy">{title}</h2>
      {children}
    </section>
  );
}

function ActionsHeroCard({ actions }: { actions: string[] }) {
  return (
    <section className="rounded-2xl border border-orange/20 bg-orange/5 p-6 shadow-md shadow-orange/5 sm:p-8">
      <h2 className="text-lg font-bold text-navy">今やるべきこと3つ</h2>
      <ol className="mt-5 flex flex-col gap-4">
        {actions.map((action, index) => (
          <li key={action} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">
              {index + 1}
            </span>
            <span className="text-base font-medium leading-relaxed text-text">
              {action}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function OtherResults({ currentSlug }: { currentSlug: string }) {
  const others = getOtherResults(currentSlug);
  if (others.length === 0) return null;

  return (
    <section>
      <h2 className="text-base font-bold text-navy">
        他の診断結果も見てみる
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {others.map((other) => (
          <Link
            key={other.slug}
            href={`/result/${other.slug}`}
            className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-colors hover:bg-bg-soft"
          >
            <p className="text-xs font-semibold text-blue">
              {zones[other.zoneId].name}
            </p>
            <p className="mt-1 text-sm font-bold text-navy">{other.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-text-sub">
              {other.catchcopy}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ResultCard({ result }: { result: ResultStage }) {
  const zone = zones[result.zoneId];
  const category = serviceCategories.find(
    (c) => c.id === result.recommendedCategoryId
  );
  const servicesHref = `/services?from=${result.slug}${category ? `#${category.id}` : ""}`;

  return (
    <div className="flex flex-col gap-6">
      <StageVisual result={result} />

      <div>
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
      </div>

      <SummaryCard summary={result.summary} />

      <Link
        href={servicesHref}
        className="flex h-14 items-center justify-center rounded-full bg-orange px-8 text-center text-base font-bold text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark active:scale-[0.98]"
      >
        あなたに合う転職サービスを見る
      </Link>

      <EmpathyChecklist items={result.empathyChecks} />

      <InfoCard title="現在の状態">
        <p className="leading-relaxed text-text">{result.state}</p>
      </InfoCard>

      <InfoCard title="なぜその状態になっているのか">
        <p className="leading-relaxed text-text">{result.causeNarrative}</p>
      </InfoCard>

      <InfoCard title="このままだとどうなるか">
        <p className="leading-relaxed text-text">{result.consequence}</p>
      </InfoCard>

      <InfoCard title="今すぐ避けたい行動">
        <ul className="list-disc space-y-1 pl-5 text-text">
          {result.avoidActions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </InfoCard>

      <ActionsHeroCard actions={result.nextActions} />

      <InfoCard title="続ける？ 見直す？ 参考コメント">
        <p className="leading-relaxed text-text">
          {result.continueOrChangeComment}
        </p>
      </InfoCard>

      {category && (
        <InfoCard title="おすすめの転職サービスカテゴリー">
          <p className="mb-4 leading-relaxed text-text">
            あなたの状態には「{category.name}」が参考になりやすい傾向があります。
          </p>
          <Link
            href={servicesHref}
            className="inline-block rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-dark"
          >
            転職サービスを比較する
          </Link>
        </InfoCard>
      )}

      <InfoCard title="この結果をシェアする">
        <ShareButtons slug={result.slug} stageName={result.name} />
      </InfoCard>

      <OtherResults currentSlug={result.slug} />

      <div className="flex flex-col gap-3 sm:flex-row">
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

      <p className="text-xs leading-relaxed text-text-sub">
        この診断結果は、回答内容をもとにキャリアの状態を整理するための参考情報です。転職・退職・就職その他の意思決定を保証するものではありません。
      </p>
    </div>
  );
}
