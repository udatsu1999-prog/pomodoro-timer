import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのお問い合わせ方法です。`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage title="お問い合わせ">
      <p>
        {siteConfig.name}
        に関するご質問・ご意見・広告掲載に関するお問い合わせは、以下のメールアドレスまでご連絡ください。
      </p>

      <p className="rounded-lg bg-bg-soft px-4 py-3 font-semibold text-navy">
        {siteConfig.contactEmail}
      </p>

      <p className="text-xs text-text-sub">
        内容の確認までにお時間をいただく場合があります。あらかじめご了承ください。
      </p>
    </LegalPage>
  );
}
