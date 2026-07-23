import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResultBySlug, results, zones } from "@/data/results";
import ResultCard from "@/components/ResultCard";
import { siteConfig } from "@/lib/siteConfig";

interface ResultPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return results.map((result) => ({ slug: result.slug }));
}

export async function generateMetadata({
  params,
}: ResultPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getResultBySlug(slug);
  if (!result) return {};

  const zone = zones[result.zoneId];
  const title = `診断結果：${result.name}`;
  const description = `${result.catchcopy}（${zone.name}）${result.state}`;

  return {
    title,
    description,
    alternates: { canonical: `/result/${slug}` },
    openGraph: {
      title: `${title}｜${siteConfig.name}`,
      description,
      url: `/result/${slug}`,
    },
    twitter: {
      title: `${title}｜${siteConfig.name}`,
      description,
    },
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { slug } = await params;
  const result = getResultBySlug(slug);

  if (!result) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <ResultCard result={result} />
    </div>
  );
}
