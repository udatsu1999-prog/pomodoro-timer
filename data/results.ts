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
  /**
   * ステージビジュアル画像のパス。
   * 未設定の場合は共通プレースホルダー画像が使われる。
   * 将来、ステージ専用イラストが用意でき次第ここにパスを設定するだけで差し替えられる。
   */
  imageUrl?: string;
  state: string;
  /** こんな状態ではありませんか？（共感チェック4項目） */
  empathyChecks: string[];
  /** なぜその状態になっているのか */
  causeNarrative: string;
  /** このままだとどうなるか */
  consequence: string;
  avoidActions: string[];
  nextActions: string[];
  continueOrChangeComment: string;
  recommendedCategoryId: ServiceCategoryId;
  /** 診断サマリーカードに表示する4項目（1〜5） */
  summary: {
    /** キャリア方向性 */
    careerDirection: number;
    /** 転職準備度 */
    jobChangeReadiness: number;
    /** 現職適合度 */
    currentFit: number;
    /** 情報収集度 */
    infoGathering: number;
  };
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
    empathyChecks: [
      "朝、目覚まし時計を何度も止めてしまう",
      "休みの日なのに、疲れが全く抜けない",
      "ふとした瞬間に、涙が出そうになることがある",
      "「もう無理かもしれない」と頭をよぎることがある",
    ],
    causeNarrative:
      "何か一つの大きな出来事があったわけではなく、日々の業務・責任・我慢が少しずつ積み重なり、心と体の余力がほとんど残っていない状態になっています。頑張り屋であるほど「まだやれる」と自分に言い聞かせてしまい、限界のサインに気づきにくくなります。",
    consequence:
      "このまま無理を続けると、体調を崩したり、大きな決断を冷静に考えられない状態になってしまう可能性があります。仕事のことだけでなく、心身の回復そのものが後回しになりやすい時期です。",
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
    summary: { careerDirection: 2, jobChangeReadiness: 2, currentFit: 2, infoGathering: 3 },
  },
  {
    slug: "gaman-shisugi",
    order: 2,
    zoneId: "danger",
    name: "我慢しすぎステージ",
    catchcopy: "まだ頑張れるではなく、頑張りすぎていないかを確認しましょう。",
    state: "不満やストレスを抱えながら、周囲を優先して耐え続けている状態です。",
    empathyChecks: [
      "不満はあるのに、周りには「大丈夫です」と言ってしまう",
      "自分の気持ちより、その場の空気を優先してしまう",
      "相談しても「みんな我慢してるよ」と言われそうで話せない",
      "我慢することに、いつの間にか慣れてしまった",
    ],
    causeNarrative:
      "周囲との関係を大事にしたい気持ちや、迷惑をかけたくないという気持ちが強いほど、自分の本音を後回しにしやすくなります。我慢することが習慣になると、何にどれくらい無理をしているのか、自分でも分かりにくくなっていきます。",
    consequence:
      "我慢が続くと、限界を迎えるタイミングを自分で判断しづらくなり、ある日突然パンクしてしまうこともあります。早めに「何を我慢しているのか」を言葉にすることが、次の一歩につながります。",
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
    summary: { careerDirection: 2, jobChangeReadiness: 2, currentFit: 2, infoGathering: 3 },
  },
  {
    slug: "shomo-chu",
    order: 3,
    zoneId: "danger",
    name: "消耗中ステージ",
    catchcopy: "仕事によって、少しずつエネルギーを失っています。",
    state: "大きな決断には至っていませんが、日々の仕事で疲労が蓄積しています。",
    empathyChecks: [
      "以前は楽しめていたことに、あまり興味が持てなくなった",
      "週末になっても、疲れが取れた感じがしない",
      "仕事終わりに、何もする気力が残っていない",
      "「なんとなく」しんどい日が増えている",
    ],
    causeNarrative:
      "大きなトラブルや事件があるわけではないのに、日々の細かな業務・気疲れ・小さなストレスが積み重なり、少しずつエネルギーが削られています。分かりやすい原因がない分、自分でも「なぜしんどいのか」に気づきにくいのが特徴です。",
    consequence:
      "このペースで消耗が続くと、気力や集中力がさらに落ち込み、仕事にもプライベートにも影響が出てくる可能性があります。「まだ大丈夫」のうちに、回復する時間を意識的に確保することが大切です。",
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
    summary: { careerDirection: 2, jobChangeReadiness: 2, currentFit: 3, infoGathering: 4 },
  },
  {
    slug: "jishin-soshitsu",
    order: 4,
    zoneId: "danger",
    name: "自信喪失ステージ",
    catchcopy: "今の評価が、あなた自身の価値とは限りません。",
    state: "現在の環境で強みを発揮できず、自己評価が下がっている状態です。",
    empathyChecks: [
      "自分の仕事に、あまり自信が持てない",
      "他の人と比べて、落ち込むことが増えた",
      "褒められても「たまたま」だと思ってしまう",
      "「自分には向いていないかもしれない」と感じることがある",
    ],
    causeNarrative:
      "今の環境で強みが発揮しづらかったり、評価やフィードバックが少なかったりすると、自分の価値が正しく測れなくなり、必要以上に自己評価が下がってしまうことがあります。環境の影響であっても、多くの場合「自分の能力不足」だと感じてしまいがちです。",
    consequence:
      "自信が持てない状態が続くと、挑戦すること自体が怖くなり、本来の力を発揮する機会からも遠ざかってしまう可能性があります。今の評価がすべてではない、という視点を持つことが次の一歩です。",
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
    summary: { careerDirection: 2, jobChangeReadiness: 2, currentFit: 2, infoGathering: 3 },
  },
  {
    slug: "moyamoya-keizoku",
    order: 5,
    zoneId: "prep",
    name: "モヤモヤ継続ステージ",
    catchcopy: "違和感の正体を整理するところから始めましょう。",
    state: "今の職場に不満はありますが、まだ具体的な行動には移れていません。",
    empathyChecks: [
      "何が不満か分からないけど、なんとなくモヤモヤする",
      "転職サイトを見ても、なんとなく眺めるだけで終わる",
      "「このままでいいのかな」とふと思うことがある",
      "誰かに相談しても、うまく言葉にできない",
    ],
    causeNarrative:
      "不満そのものは感じているものの、その正体がまだ言葉になっていない状態です。原因が曖昧なままだと、行動に移すきっかけも掴みにくく、モヤモヤだけが長引いてしまいます。",
    consequence:
      "モヤモヤを放置したままにすると、同じ違和感を抱えたまま時間だけが過ぎてしまう可能性があります。まずは「何にモヤモヤしているのか」を書き出して整理することが、次に進む一番の近道です。",
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
    summary: { careerDirection: 2, jobChangeReadiness: 2, currentFit: 3, infoGathering: 3 },
  },
  {
    slug: "joho-shushu",
    order: 6,
    zoneId: "prep",
    name: "情報収集中ステージ",
    catchcopy: "今は、焦らず選択肢を増やす時期です。",
    state: "転職への興味が高まり、求人や他社の情報を集め始めています。",
    empathyChecks: [
      "求人サイトを、つい開いてしまう",
      "他の会社の話を聞くと、少し気になる",
      "「今の会社以外の可能性」を考える時間が増えた",
      "まだ誰にも転職のことを話していない",
    ],
    causeNarrative:
      "今の職場に対する期待と現実のギャップに気づき始め、自然と他の選択肢に目が向くようになっている状態です。まだ結論を出す段階ではなく、情報を集めて視野を広げている時期といえます。",
    consequence:
      "情報収集だけで止まってしまうと、いつまでも「気になっている」状態が続き、比較材料が増えないまま時間が過ぎてしまうこともあります。集めた情報を一度整理してみることで、次の判断がしやすくなります。",
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
    summary: { careerDirection: 3, jobChangeReadiness: 3, currentFit: 3, infoGathering: 4 },
  },
  {
    slug: "shijo-kachi-kakunin",
    order: 7,
    zoneId: "prep",
    name: "市場価値確認ステージ",
    catchcopy: "今の評価だけで、自分の可能性を決める必要はありません。",
    state: "自分の経験やスキルが、他社でどう評価されるのかを確認したい状態です。",
    empathyChecks: [
      "今の評価に、心のどこかで納得できていない",
      "「自分は他の会社でも通用するのか」が気になる",
      "スカウトメールを、つい確認してしまう",
      "今の給与や評価が「妥当なのか」分からない",
    ],
    causeNarrative:
      "今の環境での評価に納得しきれない部分があり、自分の実力を客観的に把握したい気持ちが強くなっている状態です。今の会社の物差しだけで、自分の価値を判断することに疑問を感じ始めています。",
    consequence:
      "市場価値を確認しないままだと、今の評価が「自分の実力のすべて」だと思い込んでしまう可能性があります。実際に確認してみることで、今の環境への見方が変わることもあります。",
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
    summary: { careerDirection: 3, jobChangeReadiness: 3, currentFit: 3, infoGathering: 5 },
  },
  {
    slug: "ketsudan-chokuzen",
    order: 8,
    zoneId: "prep",
    name: "決断直前ステージ",
    catchcopy: "動き出す準備は、ほぼ整っています。",
    state: "転職への意志が強く、条件が合えば具体的な行動に移れる状態です。",
    empathyChecks: [
      "良い求人があれば、いつでも動ける準備ができている",
      "転職の意志は、自分の中でほぼ固まっている",
      "あとは「タイミング」だけだと感じている",
      "退職を伝えることを、具体的に想像し始めている",
    ],
    causeNarrative:
      "情報収集や自己分析を重ねた結果、今の環境を見直す意志がはっきりしてきた状態です。あとは条件やタイミングが合うかどうかを見極める段階に来ています。",
    consequence:
      "この状態のまま動かずにいると、良いタイミングを逃してしまったり、迷いが再燃してしまうこともあります。焦る必要はありませんが、具体的な一歩を踏み出す準備をしておくと安心です。",
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
    summary: { careerDirection: 4, jobChangeReadiness: 5, currentFit: 2, infoGathering: 5 },
  },
  {
    slug: "ningen-kankei-minaoshi",
    order: 9,
    zoneId: "improve",
    name: "人間関係見直しステージ",
    catchcopy: "仕事そのものより、周囲との関係が負担になっています。",
    state: "仕事内容ではなく、上司や同僚との関係が主な悩みになっています。",
    empathyChecks: [
      "仕事内容よりも、特定の人との関係がしんどい",
      "その人がいる日といない日で、気分が全然違う",
      "仕事自体は嫌いじゃないのに、行きたくないと感じる",
      "人間関係さえ変われば、今の仕事を続けられる気がする",
    ],
    causeNarrative:
      "業務内容や会社そのものではなく、特定の人との関係性が大きなストレス源になっている状態です。相性や伝え方のズレなど、原因が「その人との関係」に集中しているのが特徴です。",
    consequence:
      "人間関係のストレスを我慢し続けると、本来問題のなかった仕事内容まで嫌いになってしまうことがあります。関係性の問題と仕事内容の問題を分けて考えることが大切です。",
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
    summary: { careerDirection: 3, jobChangeReadiness: 2, currentFit: 4, infoGathering: 2 },
  },
  {
    slug: "kankyo-mismatch",
    order: 10,
    zoneId: "improve",
    name: "環境ミスマッチステージ",
    catchcopy: "あなたが悪いのではなく、環境が合っていない可能性があります。",
    state: "会社文化、働き方、価値観など、職場環境とのズレが大きい状態です。",
    empathyChecks: [
      "会社の考え方や進め方に、しっくりこないことが多い",
      "「普通はこうするのに」と感じる場面がよくある",
      "周りは気にしていないことが、自分は気になってしまう",
      "自分が「浮いている」ように感じることがある",
    ],
    causeNarrative:
      "能力や努力の問題ではなく、会社の文化・価値観・働き方と自分の考え方にズレがあることが原因になっている状態です。合わない環境にいると、どれだけ頑張っても違和感が消えにくくなります。",
    consequence:
      "環境とのズレを「自分が悪い」と捉え続けると、本来の力を発揮できないまま自己評価だけが下がってしまうことがあります。合う・合わないは能力とは別の話だと理解しておくことが大切です。",
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
    summary: { careerDirection: 3, jobChangeReadiness: 3, currentFit: 2, infoGathering: 3 },
  },
  {
    slug: "hyoka-fuicchi",
    order: 11,
    zoneId: "improve",
    name: "評価不一致ステージ",
    catchcopy: "努力と評価が噛み合っているか、見直す時期です。",
    state: "成果や貢献に対して、給与や評価が十分でないと感じています。",
    empathyChecks: [
      "頑張っている自覚はあるのに、評価に反映されない",
      "同じくらいの成果でも、評価に差があるように感じる",
      "昇給や昇進の基準が、正直よく分からない",
      "「頑張っても仕方ない」と感じ始めている",
    ],
    causeNarrative:
      "成果や貢献の内容が、会社の評価制度にうまく反映されていない状態です。評価基準が不透明だったり、成果の見え方が伝わりにくかったりすることが、納得感のなさにつながっています。",
    consequence:
      "評価への不満を放置すると、頑張ること自体へのモチベーションが下がってしまう可能性があります。評価の基準を確認する、成果を可視化するなど、まず現状を把握することが次の一歩です。",
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
    summary: { careerDirection: 3, jobChangeReadiness: 3, currentFit: 3, infoGathering: 3 },
  },
  {
    slug: "seicho-teitai",
    order: 12,
    zoneId: "improve",
    name: "成長停滞ステージ",
    catchcopy: "今の環境で、これ以上成長できるかを考える時期です。",
    state: "仕事に慣れた一方で、新しい経験や成長実感が少なくなっています。",
    empathyChecks: [
      "仕事に慣れてしまい、新しい刺激があまりない",
      "最近、「できるようになったこと」が思い浮かばない",
      "同じ毎日の繰り返しに感じることが増えた",
      "このままで成長できるのか、漠然と不安がある",
    ],
    causeNarrative:
      "業務に慣れたこと自体は悪いことではありませんが、新しい経験や挑戦の機会が減ると、成長している実感を得にくくなります。安定と停滞は紙一重で、気づかないうちに後者に傾いていることがあります。",
    consequence:
      "成長実感のない状態が長く続くと、今のスキルが徐々に古くなったり、環境を変える自信そのものが持ちにくくなる可能性があります。小さな挑戦でも、意識的に機会を作ることが大切です。",
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
    summary: { careerDirection: 3, jobChangeReadiness: 2, currentFit: 3, infoGathering: 3 },
  },
  {
    slug: "yaritai-koto-maigo",
    order: 13,
    zoneId: "redesign",
    name: "やりたいこと迷子ステージ",
    catchcopy: "答えを急ぐより、自分の希望を整理しましょう。",
    state: "転職への興味はありますが、次に何をしたいのかが定まっていません。",
    empathyChecks: [
      "転職に興味はあるけど、何をしたいか分からない",
      "求人サイトを見ても、ピンとくるものがない",
      "「向いていること」と「やりたいこと」の違いが分からない",
      "今の不満は分かるのに、理想の姿が思い浮かばない",
    ],
    causeNarrative:
      "「今の不満」は感じているものの、それを解消した先にある「理想の状態」がまだ描けていない状態です。不満からのスタートだと、次に何を選べばいいのか分かりにくくなります。",
    consequence:
      "やりたいことが曖昧なまま動き出すと、「なんとなく」で選んだ環境で同じモヤモヤを繰り返してしまうことがあります。焦って決めるより、自分の希望を整理する時間を取ることが近道です。",
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
    summary: { careerDirection: 2, jobChangeReadiness: 2, currentFit: 3, infoGathering: 3 },
  },
  {
    slug: "tsuyomi-mihakken",
    order: 14,
    zoneId: "redesign",
    name: "強み未発見ステージ",
    catchcopy: "まだ言葉にできていない強みがあるかもしれません。",
    state: "自分の経験や得意なことを、仕事の強みとして認識できていません。",
    empathyChecks: [
      "自分の強みを聞かれても、うまく答えられない",
      "「得意なこと」と「普通にできること」の違いが分からない",
      "周りと比べて、自分に自信が持てない",
      "職務経歴書に書けることが少ない気がしている",
    ],
    causeNarrative:
      "強みがないのではなく、自分の経験を「強み」として言語化する機会がこれまで少なかった状態です。当たり前にできていることほど、本人にとっては強みだと気づきにくいものです。",
    consequence:
      "強みが分からないまま転職活動を始めると、自己PRに自信が持てず、選択肢を狭めてしまうことがあります。まずは自分の経験を棚卸しして、言葉にしてみることが大切です。",
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
    summary: { careerDirection: 2, jobChangeReadiness: 2, currentFit: 3, infoGathering: 3 },
  },
  {
    slug: "career-saisekkei",
    order: 15,
    zoneId: "redesign",
    name: "キャリア再設計ステージ",
    catchcopy: "一度立ち止まり、働き方全体を組み直す時期です。",
    state: "転職するかどうか以前に、価値観や人生設計から考え直す必要があります。",
    empathyChecks: [
      "転職するかどうか以前に、働き方そのものに疑問がある",
      "「このままの人生でいいのか」と考えることが増えた",
      "仕事だけでなく、生活全体を見直したい気持ちがある",
      "一つの答えを急いで出したくないと感じている",
    ],
    causeNarrative:
      "転職先を変えるだけでは解決しない、価値観や人生設計そのものへの疑問が大きくなっている状態です。目の前の仕事の話だけでなく、これからの働き方・生き方全体を見直すタイミングに来ています。",
    consequence:
      "焦って目先の転職だけで解決しようとすると、同じ違和感を別の場所で繰り返してしまう可能性があります。時間をかけてでも、自分にとっての働き方を整理する価値がある時期です。",
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
    summary: { careerDirection: 2, jobChangeReadiness: 2, currentFit: 2, infoGathering: 4 },
  },
  {
    slug: "hoko-tenkan-kento",
    order: 16,
    zoneId: "redesign",
    name: "方向転換検討ステージ",
    catchcopy: "これまでとは違う選択肢も、現実的になり始めています。",
    state: "異業種、異職種、働き方の変更など、新しい方向を検討している状態です。",
    empathyChecks: [
      "今までとは違う仕事に、興味が湧き始めている",
      "異業種や異職種の話を、つい調べてしまう",
      "今の経験がどこまで通用するのか気になっている",
      "「新しいことを始めるなら今かもしれない」と感じている",
    ],
    causeNarrative:
      "これまでの延長線上のキャリアに違和感を持ち始め、新しい方向性への興味が具体的になってきている状態です。今の経験を活かせる部分と、新しく学ぶべき部分の両方が見えてきているタイミングです。",
    consequence:
      "興味だけで終わらせてしまうと、新しい可能性に気づかないまま今の環境を続けることになります。情報収集をしながら、今の経験がどう活かせるかを具体的に確認してみることが次の一歩です。",
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
    summary: { careerDirection: 3, jobChangeReadiness: 3, currentFit: 2, infoGathering: 4 },
  },
];

export function getResultBySlug(slug: string): ResultStage | undefined {
  return results.find((result) => result.slug === slug);
}

/**
 * 現在の結果以外から、ゾーンが偏らないように何件かピックアップする。
 * 「他の診断結果も見てみる」セクション用。
 */
export function getOtherResults(currentSlug: string, count = 3): ResultStage[] {
  const currentIndex = results.findIndex((result) => result.slug === currentSlug);
  const startIndex = currentIndex === -1 ? 0 : currentIndex;
  const picks: ResultStage[] = [];

  for (let offset = 1; picks.length < count && offset < results.length; offset++) {
    const candidate = results[(startIndex + offset * 4) % results.length];
    if (candidate.slug !== currentSlug && !picks.includes(candidate)) {
      picks.push(candidate);
    }
  }

  return picks;
}
