import type { ServiceCategoryId } from "./services";

export type ZoneId = "danger" | "prep" | "improve" | "redesign";

export interface Zone {
  id: ZoneId;
  name: string;
}

export const zones: Record<ZoneId, Zone> = {
  danger: { id: "danger", name: "危険ゾーン" },
  prep: { id: "prep", name: "転職準備ゾーン" },
  improve: { id: "improve", name: "現職改善ゾーン" },
  redesign: { id: "redesign", name: "再設計ゾーン" },
};

export interface ResultStage {
  slug: string;
  order: number;
  zoneId: ZoneId;
  name: string;
  catchcopy: string;
  state: string;
  causes: string[];
  avoidActions: string[];
  nextActions: string[];
  continueOrChangeComment: string;
  recommendedCategoryId: ServiceCategoryId;
  /** 転職緊急度 1〜5 */
  urgency: number;
  /** 現職継続推奨度 1〜5 */
  stayScore: number;
  /** 情報収集推奨度 1〜5 */
  researchScore: number;
}

/**
 * 16ステージの結果データ。
 * 文章やおすすめカテゴリーはここを編集するだけで結果ページに反映されます。
 */
export const results: ResultStage[] = [
  {
    slug: "genkai-sunzen",
    order: 1,
    zoneId: "danger",
    name: "限界寸前ステージ",
    catchcopy: "頑張り続けるより、まず自分を守ることが必要な状態です。",
    state: "心身負担が非常に高く、現在の環境を早めに見直す必要があります。",
    causes: [
      "心身の負担が長期間積み重なっている",
      "休んでも回復しきれない状態が続いている",
    ],
    avoidActions: [
      "無理をして今のペースを続けること",
      "一人だけで抱え込んで判断すること",
    ],
    nextActions: [
      "まずは心身を休める時間を確保する",
      "信頼できる人や専門機関に今の状態を話してみる",
      "働き方を変える選択肢があることを知っておく",
    ],
    continueOrChangeComment:
      "今の環境を続けるかどうかを急いで決める前に、心身を回復させることを優先しましょう。心身の不調を感じている場合は、医療機関や公的相談窓口への相談も検討してください。",
    recommendedCategoryId: "general",
    urgency: 5,
    stayScore: 1,
    researchScore: 3,
  },
  {
    slug: "gaman-shisugi",
    order: 2,
    zoneId: "danger",
    name: "我慢しすぎステージ",
    catchcopy: "まだ頑張れるではなく、頑張りすぎていないかを確認しましょう。",
    state: "不満やストレスを抱えながら、周囲を優先して耐え続けている状態です。",
    causes: [
      "自分の気持ちより周囲の状況を優先してしまっている",
      "我慢することが習慣になり、負担に気づきにくくなっている",
    ],
    avoidActions: [
      "「自分さえ我慢すれば」と抱え込み続けること",
      "つらさを我慢し、後回しにし続けること",
    ],
    nextActions: [
      "今の状況で我慢していることを紙やメモに書き出してみる",
      "小さな負担でも周囲に相談してみる",
      "自分の状態を客観的に確認する時間を作る",
    ],
    continueOrChangeComment:
      "今の職場を続けるにしても、まずは我慢の限界に近づいていないかを確認する時期です。一つの判断材料として、自分の状態を整理してみましょう。",
    recommendedCategoryId: "general",
    urgency: 4,
    stayScore: 2,
    researchScore: 3,
  },
  {
    slug: "shomo-chu",
    order: 3,
    zoneId: "danger",
    name: "消耗中ステージ",
    catchcopy: "仕事によって、少しずつエネルギーを失っています。",
    state: "大きな決断には至っていませんが、日々の仕事で疲労が蓄積しています。",
    causes: [
      "日々の業務による小さな負担が積み重なっている",
      "気づかないうちにエネルギーを消耗している",
    ],
    avoidActions: [
      "疲れを「そのうち慣れる」と放置すること",
      "回復の時間を後回しにし続けること",
    ],
    nextActions: [
      "睡眠や休養など、回復にあてる時間を意識的に作る",
      "何が特に負担になっているのかを整理する",
      "求人サイトなどで世の中の選択肢を軽く見てみる",
    ],
    continueOrChangeComment:
      "続けるか見直すかを決める前に、まずは消耗のペースを緩めることを考えてみましょう。情報収集から始めるのがおすすめです。",
    recommendedCategoryId: "second-shinsotsu",
    urgency: 4,
    stayScore: 2,
    researchScore: 4,
  },
  {
    slug: "jishin-soshitsu",
    order: 4,
    zoneId: "danger",
    name: "自信喪失ステージ",
    catchcopy: "今の評価が、あなた自身の価値とは限りません。",
    state: "現在の環境で強みを発揮できず、自己評価が下がっている状態です。",
    causes: [
      "今の環境で強みが発揮しづらい状況が続いている",
      "評価や反応が少なく、自分の価値を見失いやすくなっている",
    ],
    avoidActions: [
      "今の評価だけで自分の可能性を決めつけること",
      "「自分には無理」と行動を止めてしまうこと",
    ],
    nextActions: [
      "これまでの経験の中でできたことを振り返る",
      "小さな成功体験を意識的に見つける",
      "第三者に自分の強みを聞いてみる",
    ],
    continueOrChangeComment:
      "今の職場を続けるか見直すかの前に、まずは自分自身の状態を客観的に見つめ直すことをおすすめします。一つの判断材料として活用してください。",
    recommendedCategoryId: "second-shinsotsu",
    urgency: 3,
    stayScore: 2,
    researchScore: 3,
  },
  {
    slug: "moyamoya-keizoku",
    order: 5,
    zoneId: "prep",
    name: "モヤモヤ継続ステージ",
    catchcopy: "違和感の正体を整理するところから始めましょう。",
    state: "今の職場に不満はありますが、まだ具体的な行動には移れていません。",
    causes: [
      "不満はあるが、何が原因か言葉にできていない",
      "行動に移すきっかけがつかめていない",
    ],
    avoidActions: [
      "モヤモヤを我慢して放置し続けること",
      "はっきりしないまま結論だけを急ぐこと",
    ],
    nextActions: [
      "今のモヤモヤを箇条書きで書き出してみる",
      "何が理想と違うのかを整理する",
      "気になる求人や企業情報を軽く眺めてみる",
    ],
    continueOrChangeComment:
      "続けるか見直すかを決めるのはまだ先で構いません。まずはモヤモヤの正体を整理することから始めるのがおすすめです。",
    recommendedCategoryId: "general",
    urgency: 3,
    stayScore: 3,
    researchScore: 3,
  },
  {
    slug: "joho-shushu",
    order: 6,
    zoneId: "prep",
    name: "情報収集中ステージ",
    catchcopy: "今は、焦らず選択肢を増やす時期です。",
    state: "転職への興味が高まり、求人や他社の情報を集め始めています。",
    causes: [
      "今の職場に対する期待と現実のギャップが見えてきた",
      "他の選択肢が気になり始めている",
    ],
    avoidActions: [
      "情報が集まる前に結論を急ぐこと",
      "一つの情報だけで判断してしまうこと",
    ],
    nextActions: [
      "複数の求人サイトや転職サービスに登録して情報を比較する",
      "気になる業界・職種の情報を継続的にチェックする",
      "自分の希望条件を言語化しておく",
    ],
    continueOrChangeComment:
      "続けるか見直すかを決める判断材料を増やす時期です。情報収集から始めるのがおすすめです。",
    recommendedCategoryId: "second-shinsotsu",
    urgency: 3,
    stayScore: 3,
    researchScore: 4,
  },
  {
    slug: "shijo-kachi-kakunin",
    order: 7,
    zoneId: "prep",
    name: "市場価値確認ステージ",
    catchcopy: "今の評価だけで、自分の可能性を決める必要はありません。",
    state: "自分の経験やスキルが、他社でどう評価されるのかを確認したい状態です。",
    causes: [
      "今の会社での評価に納得できていない部分がある",
      "自分の市場価値を客観的に把握できていない",
    ],
    avoidActions: [
      "今の評価だけで自分の価値を判断してしまうこと",
      "確認せずに「きっと通用しない」と思い込むこと",
    ],
    nextActions: [
      "スカウト型サービスに経歴を登録し反応を見る",
      "転職エージェントに市場価値の見立てを聞いてみる",
      "職務経歴を棚卸しして整理する",
    ],
    continueOrChangeComment:
      "続けるか見直すかを判断する前に、まずは自分の市場価値を確認してみることを検討する時期です。一つの判断材料として活用してください。",
    recommendedCategoryId: "high-class",
    urgency: 3,
    stayScore: 2,
    researchScore: 5,
  },
  {
    slug: "ketsudan-chokuzen",
    order: 8,
    zoneId: "prep",
    name: "決断直前ステージ",
    catchcopy: "動き出す準備は、ほぼ整っています。",
    state: "転職への意志が強く、条件が合えば具体的な行動に移れる状態です。",
    causes: [
      "現職に対する見直しの意志が明確になっている",
      "行動に移すための条件整理が進んでいる",
    ],
    avoidActions: [
      "勢いだけで条件を確認せずに決めてしまうこと",
      "退職の手続きを情報収集より先に進めてしまうこと",
    ],
    nextActions: [
      "希望条件に合う求人へ実際に応募してみる",
      "転職エージェントと具体的な選考スケジュールを相談する",
      "退職の進め方や引き継ぎ方法を確認しておく",
    ],
    continueOrChangeComment:
      "見直しを検討する時期に来ていますが、最終判断は条件や選考結果を確認してからでも遅くありません。一つの判断材料として活用してください。",
    recommendedCategoryId: "high-class",
    urgency: 4,
    stayScore: 2,
    researchScore: 5,
  },
  {
    slug: "ningen-kankei-minaoshi",
    order: 9,
    zoneId: "improve",
    name: "人間関係見直しステージ",
    catchcopy: "仕事そのものより、周囲との関係が負担になっています。",
    state: "仕事内容ではなく、上司や同僚との関係が主な悩みになっています。",
    causes: [
      "特定の相手や関係性に強いストレスを感じている",
      "仕事内容そのものへの不満は比較的少ない",
    ],
    avoidActions: [
      "関係性の問題を一人だけで抱え込むこと",
      "我慢して関わりを避け続けること",
    ],
    nextActions: [
      "信頼できる第三者や人事に相談してみる",
      "部署異動など、環境を変える社内の選択肢を確認する",
      "関係性以外の環境（部署・チーム）で働く可能性を調べる",
    ],
    continueOrChangeComment:
      "仕事内容自体への不満が少ない場合は、関係性の見直しから検討するのがおすすめです。それでも改善が難しい場合は、他の選択肢も判断材料に加えてみましょう。",
    recommendedCategoryId: "general",
    urgency: 2,
    stayScore: 4,
    researchScore: 2,
  },
  {
    slug: "kankyo-mismatch",
    order: 10,
    zoneId: "improve",
    name: "環境ミスマッチステージ",
    catchcopy: "あなたが悪いのではなく、環境が合っていない可能性があります。",
    state: "会社文化、働き方、価値観など、職場環境とのズレが大きい状態です。",
    causes: [
      "会社の文化や価値観と自分の考え方にズレがある",
      "働き方の仕組みが自分に合っていない",
    ],
    avoidActions: [
      "環境の問題を自分の能力不足だと思い込むこと",
      "合わない環境に無理に合わせ続けること",
    ],
    nextActions: [
      "どのような環境なら働きやすいかを言語化する",
      "他社の社風や働き方の事例を調べてみる",
      "社内で働き方を調整できる余地がないか確認する",
    ],
    continueOrChangeComment:
      "環境とのズレが大きい場合、見直しを検討する時期かもしれません。まずは自分に合う環境の条件を整理することから始めてみましょう。",
    recommendedCategoryId: "second-shinsotsu",
    urgency: 3,
    stayScore: 3,
    researchScore: 3,
  },
  {
    slug: "hyoka-fuicchi",
    order: 11,
    zoneId: "improve",
    name: "評価不一致ステージ",
    catchcopy: "努力と評価が噛み合っているか、見直す時期です。",
    state: "成果や貢献に対して、給与や評価が十分でないと感じています。",
    causes: [
      "成果や貢献の内容が評価制度にうまく反映されていない",
      "評価基準や昇給の仕組みに納得感が持てていない",
    ],
    avoidActions: [
      "評価に対する不満を我慢し続けること",
      "確認しないまま「評価されない会社」と決めつけること",
    ],
    nextActions: [
      "評価基準について上司や人事に確認してみる",
      "自分の成果を客観的な数字や事実で整理しておく",
      "他社での評価水準を求人情報などで比較してみる",
    ],
    continueOrChangeComment:
      "評価制度の見直しを社内で相談しても改善が難しい場合は、他社の評価軸も判断材料として比較してみることをおすすめします。",
    recommendedCategoryId: "high-class",
    urgency: 3,
    stayScore: 3,
    researchScore: 3,
  },
  {
    slug: "seicho-teitai",
    order: 12,
    zoneId: "improve",
    name: "成長停滞ステージ",
    catchcopy: "今の環境で、これ以上成長できるかを考える時期です。",
    state: "仕事に慣れた一方で、新しい経験や成長実感が少なくなっています。",
    causes: [
      "業務に慣れたことで新しい刺激が減っている",
      "今のポジションでの成長機会が限られている",
    ],
    avoidActions: [
      "成長機会がないまま同じ業務を続けること",
      "「そのうち変わるはず」と現状維持を続けること",
    ],
    nextActions: [
      "社内で新しい業務や役割に挑戦できないか相談する",
      "自分が次に身につけたいスキルを整理する",
      "専門職向けの求人などで必要なスキル水準を確認する",
    ],
    continueOrChangeComment:
      "社内での成長機会を確認しつつ、難しい場合は環境を変えることも一つの判断材料として検討してみましょう。",
    recommendedCategoryId: "it-senmon",
    urgency: 2,
    stayScore: 3,
    researchScore: 3,
  },
  {
    slug: "yaritai-koto-maigo",
    order: 13,
    zoneId: "redesign",
    name: "やりたいこと迷子ステージ",
    catchcopy: "答えを急ぐより、自分の希望を整理しましょう。",
    state: "転職への興味はありますが、次に何をしたいのかが定まっていません。",
    causes: [
      "やりたいことよりも「今の不満」が先に立っている",
      "自分の希望条件を整理する機会が少なかった",
    ],
    avoidActions: [
      "やりたいことが分からないまま焦って決めること",
      "「とりあえず」で転職活動を始めてしまうこと",
    ],
    nextActions: [
      "これまで楽しかった・充実していた経験を振り返る",
      "興味のある業界・職種を幅広く調べてみる",
      "キャリアの棚卸しをサポートしてくれる相談先を探す",
    ],
    continueOrChangeComment:
      "続けるか見直すかを決める前に、まずは自分の希望を整理することを優先しましょう。一つの判断材料として活用してください。",
    recommendedCategoryId: "mikeiken",
    urgency: 2,
    stayScore: 3,
    researchScore: 3,
  },
  {
    slug: "tsuyomi-mihakken",
    order: 14,
    zoneId: "redesign",
    name: "強み未発見ステージ",
    catchcopy: "まだ言葉にできていない強みがあるかもしれません。",
    state: "自分の経験や得意なことを、仕事の強みとして認識できていません。",
    causes: [
      "自分の経験を強みとして言語化できていない",
      "強みを客観的に確認する機会が少なかった",
    ],
    avoidActions: [
      "「自分には強みがない」と決めつけること",
      "強みを整理しないまま転職活動を進めること",
    ],
    nextActions: [
      "これまでの経験を書き出し、共通点を探してみる",
      "周囲の人に自分の得意なことを聞いてみる",
      "キャリア相談などで第三者視点の意見をもらう",
    ],
    continueOrChangeComment:
      "強みが整理できていない段階での判断は急がず、まずは自己理解を深めることから始めるのがおすすめです。",
    recommendedCategoryId: "mikeiken",
    urgency: 2,
    stayScore: 3,
    researchScore: 3,
  },
  {
    slug: "career-saisekkei",
    order: 15,
    zoneId: "redesign",
    name: "キャリア再設計ステージ",
    catchcopy: "一度立ち止まり、働き方全体を組み直す時期です。",
    state: "転職するかどうか以前に、価値観や人生設計から考え直す必要があります。",
    causes: [
      "働き方や人生設計そのものに見直しが必要になっている",
      "転職だけでは解決しない根本的な違和感がある",
    ],
    avoidActions: [
      "深く考えずに転職や退職だけを結論にすること",
      "焦って次の職場を決めてしまうこと",
    ],
    nextActions: [
      "仕事以外も含めた自分の価値観を整理する",
      "働き方の選択肢（雇用形態・働く時間など）を広く調べる",
      "キャリアの専門家に相談し、時間をかけて方向性を考える",
    ],
    continueOrChangeComment:
      "続ける・見直すという二択ではなく、働き方そのものを考え直す時期かもしれません。一つの判断材料として、時間をかけて検討してください。",
    recommendedCategoryId: "mikeiken",
    urgency: 2,
    stayScore: 2,
    researchScore: 4,
  },
  {
    slug: "hoko-tenkan-kento",
    order: 16,
    zoneId: "redesign",
    name: "方向転換検討ステージ",
    catchcopy: "これまでとは違う選択肢も、現実的になり始めています。",
    state: "異業種、異職種、働き方の変更など、新しい方向を検討している状態です。",
    causes: [
      "これまでの延長線上のキャリアに違和感を持ち始めている",
      "新しい方向性への興味が具体的になってきている",
    ],
    avoidActions: [
      "情報を集めずに未経験分野へ飛び込むこと",
      "今までの経験を活かす道を検討せずに手放すこと",
    ],
    nextActions: [
      "興味のある業界・職種の求人や必要スキルを調べる",
      "未経験からの転職事例や支援サービスを確認する",
      "今の経験の中で新しい分野に活かせる部分を整理する",
    ],
    continueOrChangeComment:
      "見直しを検討する時期ではありますが、新しい方向に進む場合も情報収集から始めるのがおすすめです。",
    recommendedCategoryId: "mikeiken",
    urgency: 3,
    stayScore: 2,
    researchScore: 4,
  },
];

export function getResultBySlug(slug: string): ResultStage | undefined {
  return results.find((result) => result.slug === slug);
}
