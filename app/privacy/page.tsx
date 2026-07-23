import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}におけるプライバシーポリシーです。`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="プライバシーポリシー" updatedAt="2026年7月23日">
      <p>
        {siteConfig.name}
        （以下「当サイト」）は、利用者の皆さまに安心してご利用いただけるよう、以下のとおりプライバシーポリシーを定めます。
      </p>

      <div>
        <h2>1. 診断結果の取り扱いについて</h2>
        <p>
          当サイトの診断機能はログイン不要で利用でき、診断の回答はブラウザのlocalStorage内に一時的に保存されるのみで、当サイトのサーバーやデータベースに送信・保存されることはありません。診断結果を再表示するための会員情報等も保有していません。
        </p>
      </div>

      <div>
        <h2>2. アクセス解析について</h2>
        <p>
          当サイトでは、サービス改善のためにアクセス解析ツール（Google
          Analyticsなど）を導入する場合があります。これらのツールはCookieを利用して匿名の利用状況データを収集することがありますが、個人を特定する情報は含まれません。収集されたデータは各ツール提供事業者のプライバシーポリシーに基づいて管理されます。
        </p>
      </div>

      <div>
        <h2>3. 広告について</h2>
        <p>
          当サイトは、転職サービス等の紹介にあたり広告（アフィリエイトプログラム等）を利用する場合があります。広告配信事業者がCookie等を利用して利用者の興味に応じた広告を表示することがあります。
        </p>
      </div>

      <div>
        <h2>4. お問い合わせフォームについて</h2>
        <p>
          お問い合わせの際にご提供いただいた情報は、お問い合わせへの対応以外の目的では利用しません。
        </p>
      </div>

      <div>
        <h2>5. プライバシーポリシーの変更</h2>
        <p>
          当サイトは、必要に応じて本ポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点から効力を生じるものとします。
        </p>
      </div>

      <div>
        <h2>6. お問い合わせ窓口</h2>
        <p>
          本ポリシーに関するお問い合わせは、
          <a href="/contact" className="text-blue underline">
            お問い合わせページ
          </a>
          よりご連絡ください。
        </p>
      </div>
    </LegalPage>
  );
}
