# キャリア迷子診断

「今の仕事を続けるべきか、見直すべきか。」をテーマにした、スマートフォン向けの無料キャリア診断サイトです。約3分・全20問の質問に回答すると、現在のキャリア状態を16ステージの中から診断します。

- Next.js（App Router）/ TypeScript / Tailwind CSS
- データベース・ログイン機能なし（診断中の回答はブラウザのlocalStorageに一時保存）
- Vercelへ無料でデプロイ可能な構成

## ローカルでの起動方法

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くと確認できます。

本番相当のビルド確認は以下で行えます。

```bash
npm run build
npm run start
```

## Vercelへの公開方法

1. このリポジトリをGitHubにpushする（すでにpush済みの場合は不要）
2. [Vercel](https://vercel.com/new) にログインし、「Add New... → Project」からこのリポジトリを選択する
3. Framework Presetは自動的に「Next.js」が検出されるので、そのまま「Deploy」をクリックする
4. デプロイ完了後に発行されるURLが本番URLになる
5. 必要に応じて `Project Settings > Environment Variables` に `NEXT_PUBLIC_SITE_URL` を実際の公開URL（例: `https://your-project.vercel.app`）で設定し、再デプロイする（`lib/siteConfig.ts` のOGP・サイトマップ用URLに反映される）

## ディレクトリ構成（抜粋）

```
app/
  page.tsx                 トップページ
  diagnosis/page.tsx       診断画面（20問・進捗バー・前へ/次へ）
  result/[slug]/page.tsx   診断結果ページ（16ステージ分を静的生成）
  services/page.tsx        転職サービス比較ページ
  privacy/page.tsx          プライバシーポリシー
  disclaimer/page.tsx       免責事項
  about/page.tsx            運営者情報
  ads/page.tsx               広告掲載について
  contact/page.tsx           お問い合わせ
  sitemap.ts / robots.ts     SEO用ファイル
  opengraph-image.tsx        OGP画像（トップ用・結果ページ用は result/[slug] 配下）
data/
  questions.ts    診断20問の質問文・カテゴリー
  results.ts      16ステージの結果データ（文章・スコア表示・おすすめカテゴリー）
  services.ts     転職サービス情報（サービス名・URLは仮データ。カテゴリー・仮リンク）
lib/
  calculateResult.ts  回答から4項目のスコアを算出し、16ステージへ振り分ける判定ロジック
  analytics.ts        アクセス解析イベントの仮実装（console.logで確認可能）
  siteConfig.ts        サイト名・URLなど共通設定
components/
  QuestionCard.tsx / ProgressBar.tsx / DiagnosisFlow.tsx  診断画面のUI・状態管理
  ResultCard.tsx / ShareButtons.tsx                        結果ページのUI・SNS共有
  ServiceCard.tsx / ServicesPageTracker.tsx                比較ページのUI
```

## 診断ロジックの概要

20の質問はそれぞれ以下4項目のいずれかに対応し（各5問）、回答（1〜5点）の合計を0〜100点に正規化します。

- A: 心身負担・緊急度
- B: 現職ミスマッチ度
- C: 転職行動準備度
- D: キャリア方向明確度

`lib/calculateResult.ts` の `determineZone` が4項目のスコアから「危険/転職準備/現職改善/再設計」の4ゾーンを判定し、続く `determine*Stage` 関数群がゾーン内の4ステージ（計16ステージ）へ振り分けます。しきい値はすべて定数として書かれているため、調整したい場合はこのファイルの数値を変更するだけで反映されます。

## 内容を編集したい場合

| 変更したい内容 | 編集するファイル |
| --- | --- |
| 診断の質問文・選択肢 | `data/questions.ts` |
| 16ステージの文章（状態・原因・行動提案・おすすめカテゴリーなど） | `data/results.ts` |
| 転職サービスの情報・広告リンク（仮リンクからアフィリエイトリンクへの差し替え含む） | `data/services.ts` |
| 判定ロジック・しきい値 | `lib/calculateResult.ts` |
| サイト名・URL・お問い合わせ先などの共通設定 | `lib/siteConfig.ts` |
| アクセス解析イベント（GA4等への差し替え） | `lib/analytics.ts` |

## 補足

- ⚠️ **`data/services.ts` に掲載しているサービス名・対象年代・特徴・URLはすべて仮データ（ダミー）です。実在の転職サービスではありません。** 公開前に、実際に提携する転職サービスの正しい名称・情報・アフィリエイトリンクへすべて差し替えてください。`url` は現在すべて仮リンク（`#`）になっています。
- アクセス解析・広告タグは `app/layout.tsx` 内にコメントで設置枠を用意しています。GA4等を導入する際はここに `next/script` を追加してください。
