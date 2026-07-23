import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const links = [
  { href: "/about", label: "運営者情報" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/disclaimer", label: "免責事項" },
  { href: "/ads", label: "広告掲載について" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-bg-soft">
      <div className="mx-auto max-w-3xl px-4 py-10 text-sm text-text-sub">
        <nav className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-navy">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-center text-xs text-text-sub">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
