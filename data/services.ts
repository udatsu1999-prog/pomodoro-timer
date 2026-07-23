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
  name: string;
  ageRange: string;
  strengths: string;
  features: string;
  recommendedFor: string;
  /**
   * 仮リンク。実際のアフィリエイトリンクが決まり次第、ここを書き換えるだけで反映されます。
   */
  url: string;
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
 * 初期段階では仮リンク（#）です。
 * 実際のアフィリエイトリンクが決まったら、各サービスの url を書き換えてください。
 */
export const services: Service[] = [
  {
    id: "general-a",
    categoryId: "general",
    name: "キャリアナビ総合エージェント",
    ageRange: "20代〜50代",
    strengths: "全業界・全職種",
    features: "求人数が豊富で、専任アドバイザーが書類作成から面接対策まで幅広くサポート。",
    recommendedFor: "何から始めればいいか分からない人、まずは選択肢を広く見たい人",
    url: "#",
  },
  {
    id: "general-b",
    categoryId: "general",
    name: "ワークシフトエージェント",
    ageRange: "20代〜40代",
    strengths: "全国の求人・地方転職",
    features: "全国各地の求人に対応し、地方への転職やUターン・Iターンにも強い。",
    recommendedFor: "働く地域から見直したい人、選択肢を比較しながら進めたい人",
    url: "#",
  },
  {
    id: "second-a",
    categoryId: "second-shinsotsu",
    name: "ネクストキャリア20s",
    ageRange: "20代",
    strengths: "第二新卒・社会人3年目まで",
    features: "社会人経験の浅い20代に特化し、ポテンシャル採用の求人を多数保有。",
    recommendedFor: "初めての転職で不安が大きい人、社会人経験が浅い人",
    url: "#",
  },
  {
    id: "second-b",
    categoryId: "second-shinsotsu",
    name: "ファーストキャリアエージェント",
    ageRange: "20代前半〜中盤",
    strengths: "第二新卒向け丁寧サポート",
    features: "面談時間を長めに取り、キャリアの方向性整理から一緒に伴走するスタイル。",
    recommendedFor: "自分の強みや方向性からじっくり相談したい人",
    url: "#",
  },
  {
    id: "high-a",
    categoryId: "high-class",
    name: "スカウトキャリア",
    ageRange: "20代後半〜40代",
    strengths: "管理職・専門職のハイクラス求人",
    features: "経歴を登録すると企業やヘッドハンターから直接スカウトが届く。",
    recommendedFor: "今の市場価値を確認したい人、じっくり良い条件を待ちたい人",
    url: "#",
  },
  {
    id: "mikeiken-a",
    categoryId: "mikeiken",
    name: "ミライシフト未経験転職",
    ageRange: "20代〜30代",
    strengths: "異業種・異職種の未経験求人",
    features: "未経験者を積極採用する求人に特化し、研修制度がある企業を多数紹介。",
    recommendedFor: "全く違う仕事に挑戦したい人、やりたいことを模索中の人",
    url: "#",
  },
  {
    id: "it-a",
    categoryId: "it-senmon",
    name: "テックキャリアエージェント",
    ageRange: "20代〜40代",
    strengths: "IT・エンジニア・専門職",
    features: "IT業界に精通したアドバイザーが技術志向のキャリア相談に対応。",
    recommendedFor: "専門性を活かしたい人、IT業界でのキャリアを検討している人",
    url: "#",
  },
];

export function getServicesByCategory(categoryId: ServiceCategoryId): Service[] {
  return services.filter((service) => service.categoryId === categoryId);
}
