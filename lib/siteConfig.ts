export const siteConfig = {
  name: "キャリア迷子診断",
  catchcopy: "今の仕事を続けるべきか、見直すべきか。",
  description:
    "3分であなたのキャリアの現在地を診断。今の仕事を続けるべきか、転職を考えるべきかを16ステージで整理します。",
  // Vercelへのデプロイ後、実際の公開URLに書き換えてください。
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://career-maigo-shindan.vercel.app",
  instagram: "https://www.instagram.com/",
  instagramName: "仕事辞めたい…と思ったら",
  operator: "キャリア迷子診断 運営事務局",
  contactEmail: "contact@example.com",
};

export type SiteConfig = typeof siteConfig;
