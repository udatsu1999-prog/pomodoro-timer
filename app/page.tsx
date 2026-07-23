import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name}｜${siteConfig.catchcopy}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const learnItems = [
  {
    title: "今のキャリア状態",
    text: "心身の負担・現職とのミスマッチ・転職への準備度・キャリアの方向性から、今の状態を整理します。",
  },
  {
    title: "モヤモヤの原因",
    text: "漠然とした不安や不満の背景にある原因を言葉にして確認できます。",
  },
  {
    title: "次に取るべき行動",
    text: "続けるか見直すかを決める前に、今できる具体的な次の一歩が分かります。",
  },
];

const notices = [
  "この診断結果は、回答内容をもとにキャリアの状態を整理するための参考情報です。",
  "転職を強制したり、特定の行動を推奨したりするものではありません。",
  "心身の不調を感じている場合は、医療機関や公的相談窓口への相談もあわせてご検討ください。",
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-bg-soft to-white px-4 pb-14 pt-14 sm:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-sm font-bold tracking-wide text-blue">
            {siteConfig.name}
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-snug text-navy sm:text-4xl">
            {siteConfig.catchcopy}
          </h1>
          <p className="mt-5 text-base font-medium text-text-sub sm:text-lg">
            3分で、あなたのキャリアの現在地がわかります
          </p>
          <Link
            href="/diagnosis"
            className="mt-8 inline-block w-full max-w-xs rounded-full bg-orange px-8 py-4 text-center text-base font-bold text-white shadow-sm transition-colors hover:bg-orange-dark sm:w-auto"
          >
            無料で診断を始める
          </Link>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl font-bold text-navy sm:text-2xl">
            この診断で分かること
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {learnItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <h3 className="text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-sub">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft px-4 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-navy sm:text-2xl">
            16のステージであなたの現在地を診断
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-sub sm:text-base">
            「危険ゾーン」「転職準備ゾーン」「現職改善ゾーン」「再設計ゾーン」の4つのゾーン、
            合計16のステージの中から、あなたの回答傾向に最も近い状態を診断します。
            同じ「転職を考えている」状態でも、原因や進み具合は人によって異なります。
            自分の状態を言葉にして整理することが、次の一歩を考えるための最初のステップになります。
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-100 bg-white p-6 sm:p-8">
          <h2 className="text-base font-bold text-navy">ご利用にあたって</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-sub">
            {notices.map((notice) => (
              <li key={notice} className="flex gap-2">
                <span className="text-blue">・</span>
                <span>{notice}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto flex max-w-3xl justify-center">
          <Link
            href="/diagnosis"
            className="inline-block w-full max-w-xs rounded-full bg-orange px-8 py-4 text-center text-base font-bold text-white shadow-sm transition-colors hover:bg-orange-dark sm:w-auto"
          >
            無料で診断を始める
          </Link>
        </div>
      </section>
    </div>
  );
}
