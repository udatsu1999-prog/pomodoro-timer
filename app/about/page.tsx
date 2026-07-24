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
        <h2>運営者</h2>
        <p>{siteConfig.operator}</p>
      </div>

      <div>
        <h2>運営目的</h2>
        <p>
          20代〜30代の会社員の方が、今のキャリアについて立ち止まって考えるきっかけを提供することを目的として、本サイトを運営しています。
        </p>
      </div>

      <div>
        <h2>お問い合わせ</h2>
        <p>
          本サイトに関するお問い合わせは、下記メールアドレスまでご連絡ください。
          <br />
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue underline">
            {siteConfig.contactEmail}
          </a>
        </p>
      </div>

      <div>
        <h2>アフィリエイトプログラムについて</h2>
        <p>
          本サイトは、転職サービス各社のアフィリエイトプログラムに参加しており、紹介するサービスへの登録等によって、運営者が報酬を得ることがあります。紹介する情報は、実際の診断結果や一般的な情報をもとに構成しており、特定のサービスへの登録を強制するものではありません。
        </p>
      </div>

      <div>
        <h2>免責事項</h2>
        <p>
          本サイトの診断結果は、医学的・専門的な診断を目的としたものではなく、参考情報としてご活用いただくものです。転職や退職に関する最終的なご判断は、ご自身の責任において行っていただきますようお願いいたします。
        </p>
      </div>
    </LegalPage>
  );
}
