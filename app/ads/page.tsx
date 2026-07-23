import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "広告掲載について",
  description: `${siteConfig.name}における広告掲載についての説明です。`,
  alternates: { canonical: "/ads" },
};

export default function AdsPage() {
  return (
    <LegalPage title="広告掲載について">
      <p>
        {siteConfig.name}
        は、サイトの運営費用の一部を広告収入によってまかなっています。転職サービス比較ページ等に掲載しているサービス紹介には、アフィリエイトプログラムを含む広告を利用している場合があります。
      </p>

      <div>
        <h2>広告表記について</h2>
        <p>
          広告を含むリンクには「広告」と明記しています。広告経由でサービスに申し込みが行われた場合、当サイトが広告主から成果報酬を受け取ることがあります。ただし、これによって利用者が支払う料金が変動することはありません。
        </p>
      </div>

      <div>
        <h2>掲載サービスの選定について</h2>
        <p>
          掲載するサービスは、対象年代や得意分野などの情報をもとに紹介していますが、特定のサービスへの登録を強制するものではありません。診断結果やサービス内容を参考に、ご自身の判断でご検討ください。
        </p>
      </div>
    </LegalPage>
  );
}
