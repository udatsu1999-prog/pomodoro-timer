import { Suspense } from "react";
import type { Metadata } from "next";
import { serviceCategories, getServicesByCategory } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import ServicesPageTracker from "@/components/ServicesPageTracker";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "転職サービス比較",
  description:
    "総合型・20代向け・ハイクラス・未経験転職・IT専門職など、カテゴリー別に転職サービスを比較できます。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Suspense fallback={null}>
        <ServicesPageTracker />
      </Suspense>

      <h1 className="text-2xl font-bold text-navy">転職サービス比較</h1>
      <p className="mt-3 text-sm leading-relaxed text-text-sub">
        {siteConfig.name}
        は特定のサービスへの登録を強制するものではありません。診断結果を一つの参考として、気になるカテゴリーから情報収集を始めてみてください。
      </p>
      <p className="mt-4 inline-block rounded-lg border border-orange/30 bg-orange/10 px-4 py-2 text-sm font-bold text-navy">
        本ページはプロモーションを含みます
      </p>

      <div className="mt-10 flex flex-col gap-14">
        {serviceCategories.map((category) => {
          const categoryServices = getServicesByCategory(category.id);
          return (
            <section key={category.id} id={category.id} className="scroll-mt-20">
              <h2 className="text-lg font-bold text-navy">{category.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-sub">
                {category.description}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
