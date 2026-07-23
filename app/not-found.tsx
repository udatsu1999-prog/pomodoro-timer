import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-navy">ページが見つかりません</h1>
      <p className="mt-4 text-sm text-text-sub">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white hover:bg-orange-dark"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
