import type { Metadata } from "next";
import DiagnosisFlow from "@/components/DiagnosisFlow";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "診断スタート",
  description: `全20問、約3分。${siteConfig.name}であなたのキャリアの現在地を診断します。`,
  alternates: { canonical: "/diagnosis" },
};

export default function DiagnosisPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <DiagnosisFlow />
    </div>
  );
}
