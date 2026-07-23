export type QuestionCategory = "A" | "B" | "C" | "D";

export interface Question {
  id: number;
  category: QuestionCategory;
  text: string;
}

/**
 * 診断で使用する4項目
 * A: 心身負担・緊急度
 * B: 現職ミスマッチ度
 * C: 転職行動準備度
 * D: キャリア方向明確度
 *
 * 質問文・並び順はここを編集するだけで診断ページに反映されます。
 */
export const questions: Question[] = [
  { id: 1, category: "A", text: "朝、仕事に行くことを考えると気分が重くなる" },
  { id: 2, category: "A", text: "休日でも仕事のことが頭から離れない" },
  { id: 3, category: "A", text: "以前より疲れが取れにくくなった" },
  { id: 4, category: "A", text: "今の仕事をこのまま続けることに強い不安がある" },
  { id: 5, category: "A", text: "仕事が原因で自信を失っていると感じる" },

  { id: 6, category: "B", text: "今の仕事内容は自分に合っていないと感じる" },
  { id: 7, category: "B", text: "職場の人間関係に大きなストレスを感じる" },
  { id: 8, category: "B", text: "自分の成果が正当に評価されていないと感じる" },
  { id: 9, category: "B", text: "会社の考え方や文化に違和感がある" },
  { id: 10, category: "B", text: "今の職場では成長できないと感じる" },

  { id: 11, category: "C", text: "転職サイトや求人情報を見ている" },
  { id: 12, category: "C", text: "他社の仕事内容や給与条件が気になっている" },
  { id: 13, category: "C", text: "自分の経歴やスキルを整理し始めている" },
  { id: 14, category: "C", text: "良い求人があれば応募してみたいと思う" },
  { id: 15, category: "C", text: "半年以内に今の職場を離れる可能性がある" },

  { id: 16, category: "D", text: "自分が仕事で大切にしたいことを説明できる" },
  { id: 17, category: "D", text: "自分の強みをある程度理解している" },
  { id: 18, category: "D", text: "次に挑戦したい仕事内容が見えている" },
  { id: 19, category: "D", text: "3年後の働き方をイメージできる" },
  { id: 20, category: "D", text: "転職する場合に譲れない条件が決まっている" },
];

export const ANSWER_OPTIONS = [
  { value: 1, label: "まったく当てはまらない" },
  { value: 2, label: "あまり当てはまらない" },
  { value: 3, label: "どちらともいえない" },
  { value: 4, label: "やや当てはまる" },
  { value: 5, label: "とても当てはまる" },
] as const;

export const TOTAL_QUESTIONS = questions.length;
