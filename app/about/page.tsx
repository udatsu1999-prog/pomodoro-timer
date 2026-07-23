import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${siteConfig.name}の運営者情報です。`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <LegalPage title="運営者情報">
      <div>
        <h2>サイト名</h2>
        <p>{siteConfig.name}</p>
      </div>

      <div>
        <h2>運営者</h2>
        <p>{siteConfig.operator}</p>
      </div>

      <div>
        <h2>お問い合わせ</h2>
        <p>
          お問い合わせは
          <a href="/contact" className="text-blue underline">
            こちら
          </a>
          のフォームよりご連絡ください。
        </p>
      </div>

      <div>
        <h2>サイトについて</h2>
        <p>
          {siteConfig.name}は、「{siteConfig.catchcopy}
          」をテーマに、今のキャリアの状態を整理するための無料診断サービスです。診断結果は参考情報であり、転職を強制するものではありません。
        </p>
      </div>
    </LegalPage>
  );
}
