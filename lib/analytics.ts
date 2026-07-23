/**
 * アクセス解析イベントの仮実装。
 * 現時点では console.log のみで、外部サービスには接続していない。
 * GA4などを導入する際は、この関数の中身を差し替えるだけで全画面に反映される。
 */

type AnalyticsEventName =
  | "diagnosis_start"
  | "question_answer"
  | "diagnosis_complete"
  | "result_view"
  | "services_page_view"
  | "service_link_click"
  | "diagnosis_restart"
  | "sns_share";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  // TODO: GA4などを導入する場合はここで window.gtag(...) 等を呼び出す
  console.log(`[analytics] ${name}`, payload);
}

export const trackDiagnosisStart = () => trackEvent("diagnosis_start");

export const trackQuestionAnswer = (questionId: number, value: number) =>
  trackEvent("question_answer", { questionId, value });

export const trackDiagnosisComplete = (slug: string) =>
  trackEvent("diagnosis_complete", { slug });

export const trackResultView = (slug: string) => trackEvent("result_view", { slug });

export const trackServicesPageView = (fromSlug?: string) =>
  trackEvent("services_page_view", { fromSlug });

export const trackServiceLinkClick = (serviceId: string) =>
  trackEvent("service_link_click", { serviceId });

export const trackDiagnosisRestart = () => trackEvent("diagnosis_restart");

export const trackSnsShare = (channel: "x" | "instagram" | "copy", slug: string) =>
  trackEvent("sns_share", { channel, slug });
