interface LegalPageProps {
  title: string;
  updatedAt?: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold text-navy">{title}</h1>
      {updatedAt && (
        <p className="mt-2 text-xs text-text-sub">最終更新日：{updatedAt}</p>
      )}
      <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-text [&_h2]:mt-4 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-navy [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
