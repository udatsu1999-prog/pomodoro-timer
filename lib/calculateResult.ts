import { questions, type QuestionCategory } from "@/data/questions";
import type { ZoneId } from "@/data/results";

export interface CategoryScores {
  /** 心身負担・緊急度 */
  A: number;
  /** 現職ミスマッチ度 */
  B: number;
  /** 転職行動準備度 */
  C: number;
  /** キャリア方向明確度 */
  D: number;
}

const CATEGORY_ORDER: QuestionCategory[] = ["A", "B", "C", "D"];

/**
 * 各質問への回答（1〜5）を、質問と同じ並び順の配列で受け取り、
 * 4項目それぞれ0〜100点のスコアに変換する。
 * 1項目あたり5問・各1〜5点なので、合計は5〜25点になる。
 */
export function calculateCategoryScores(answers: number[]): CategoryScores {
  const sums: Record<QuestionCategory, number> = { A: 0, B: 0, C: 0, D: 0 };

  questions.forEach((question, index) => {
    const answer = answers[index];
    sums[question.category] += answer;
  });

  const scores = {} as CategoryScores;
  CATEGORY_ORDER.forEach((category) => {
    // 合計5〜25点 → 0〜100点に正規化
    scores[category] = Math.round(((sums[category] - 5) / 20) * 100);
  });

  return scores;
}

/**
 * ゾーン判定。
 * 上から順にチェックし、最初に条件を満たしたゾーンを採用する。
 * どの条件にも当てはまらない場合は、4項目のうち最も特徴が強いものを基準に
 * フォールバックで判定する（同点時の優先順位: A → C → B → D）。
 */
export function determineZone(scores: CategoryScores): ZoneId {
  const { A, B, C, D } = scores;

  if (A >= 80) return "danger";
  if (A >= 65 && B >= 65) return "danger";
  if (C >= 70) return "prep";
  if (B >= 70 && D >= 55) return "improve";
  if (D < 45) return "redesign";

  // フォールバック: 心身負担 → 転職行動準備度 → 現職ミスマッチ → 方向明確度(低いほど再設計寄り) の順で優先
  const candidates: { zone: ZoneId; value: number }[] = [
    { zone: "danger", value: A },
    { zone: "prep", value: C },
    { zone: "improve", value: B },
    { zone: "redesign", value: 100 - D },
  ];

  return candidates.reduce((best, current) =>
    current.value > best.value ? current : best
  ).zone;
}

function determineDangerStage(scores: CategoryScores): string {
  const { A, B, D } = scores;

  if (A === Math.max(scores.A, scores.B, scores.C, scores.D) && A >= 85) {
    return "genkai-sunzen";
  }
  if (B >= A) {
    return "gaman-shisugi";
  }
  if (D < 40) {
    return "jishin-soshitsu";
  }
  return "shomo-chu";
}

function determinePrepStage(scores: CategoryScores): string {
  const { C, D, B } = scores;

  if (C < 55) return "moyamoya-keizoku";
  if (C < 75) return "joho-shushu";
  if (D >= 60) return "ketsudan-chokuzen";
  if (B >= 60) return "shijo-kachi-kakunin";
  return "shijo-kachi-kakunin";
}

function determineImproveStage(scores: CategoryScores): string {
  const { A, B, C, D } = scores;

  if (B >= 85 && A >= 50) return "ningen-kankei-minaoshi";
  if (D <= 40) return "kankyo-mismatch";
  if (C >= 40) return "hyoka-fuicchi";
  return "seicho-teitai";
}

function determineRedesignStage(scores: CategoryScores): string {
  const { C, D } = scores;

  if (D < 20) return "career-saisekkei";
  if (D < 30) return "tsuyomi-mihakken";
  if (D < 38 && C >= 45) return "hoko-tenkan-kento";
  return "yaritai-koto-maigo";
}

/**
 * 16ステージへの振り分け。
 * ゾーンを決定した後、各ゾーン内の4ステージへ4項目の高低を組み合わせて割り当てる。
 * 調整する場合は、対応する determine*Stage 関数のしきい値を編集する。
 */
export function determineStageSlug(scores: CategoryScores): string {
  const zone = determineZone(scores);

  switch (zone) {
    case "danger":
      return determineDangerStage(scores);
    case "prep":
      return determinePrepStage(scores);
    case "improve":
      return determineImproveStage(scores);
    case "redesign":
      return determineRedesignStage(scores);
  }
}

export function calculateResult(answers: number[]): {
  scores: CategoryScores;
  zone: ZoneId;
  slug: string;
} {
  const scores = calculateCategoryScores(answers);
  const zone = determineZone(scores);
  const slug = determineStageSlug(scores);
  return { scores, zone, slug };
}
