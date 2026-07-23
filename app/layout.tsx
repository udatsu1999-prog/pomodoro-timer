import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}｜${siteConfig.catchcopy}`,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.name,
    title: `${siteConfig.name}｜${siteConfig.catchcopy}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}｜${siteConfig.catchcopy}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-text">
        {/*
          アクセス解析・広告タグの設置枠。
          GA4などを導入する際は、ここに next/script でタグを追加する。
          例:
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
        */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
