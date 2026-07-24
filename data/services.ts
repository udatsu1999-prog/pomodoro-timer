export type ServiceCategoryId =
  | "general"
  | "second-shinsotsu"
  | "high-class"
  | "mikeiken"
  | "it-senmon";

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  categoryId: ServiceCategoryId;
  /**
   * true の間は、名称・詳細を表示せず「厳選中 近日公開！」のプレースホルダー表示になり、
   * 公式サイトへのリンクも無効化される。
   * 実際の提携先が決まったら false にし、以下の項目を入力する。
   */
  comingSoon: boolean;
  name?: string;
  ageRange?: string;
  strengths?: string;
  features?: string;
  recommendedFor?: string;
  /** 実際のアフィリエイトリンクが決まったら設定する。 */
  url?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "general",
    name: "総合型転職エージェント",
    description: "求人数が多く、幅広い業界・職種をカバーする総合型のエージェントです。",
  },
  {
    id: "second-shinsotsu",
    name: "20代・第二新卒向け",
    description: "社会人経験が浅い方や、20代の転職に強みを持つサービスです。",
  },
  {
    id: "high-class",
    name: "ハイクラス・スカウト型",
    description: "経歴やスキルを登録し、企業からのスカウトを待つタイプのサービスです。",
  },
  {
    id: "mikeiken",
    name: "未経験転職向け",
    description: "異業種・異職種への未経験転職を支援するサービスです。",
  },
  {
    id: "it-senmon",
    name: "IT・専門職向け",
    description: "IT・エンジニアなど専門職の転職に特化したサービスです。",
  },
];

/**
 * 現在すべて comingSoon: true（提携準備中）のプレースホルダーです。
 * 実際の提携先が決まったら、該当サービスを comingSoon: false にし、
 * name / ageRange / strengths / features / recommendedFor / url を入力してください。
 */
export const services: Service[] = [
  { id: "general-a", categoryId: "general", comingSoon: true },
  { id: "general-b", categoryId: "general", comingSoon: true },
  { id: "second-a", categoryId: "second-shinsotsu", comingSoon: true },
  { id: "second-b", categoryId: "second-shinsotsu", comingSoon: true },
  { id: "high-a", categoryId: "high-class", comingSoon: true },
  { id: "mikeiken-a", categoryId: "mikeiken", comingSoon: true },
  { id: "it-a", categoryId: "it-senmon", comingSoon: true },
];

export function getServicesByCategory(categoryId: ServiceCategoryId): Service[] {
  return services.filter((service) => service.categoryId === categoryId);
}
