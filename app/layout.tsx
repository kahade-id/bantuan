import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SiteFooter } from "@kahade/ui";
import { Header } from "@/components/site/Header";

// Plus Jakarta Sans self-hosted via next/font: tanpa CSS pihak ketiga yang
// memblokir render. Variabel dipasang di <html> agar token --font-sans di
// :root ikut terisi (memasangnya di <body> membuat font jatuh ke fallback).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Bantuan Kahade — Panduan Jual Beli Aman",
    template: "%s — Bantuan Kahade",
  },
  description:
    "Panduan jual beli aman di Kahade: FAQ, cara kerja, biaya transaksi 2,5%, keamanan, Kahade Plus, dan kontak layanan pelanggan.",
  metadataBase: new URL("https://bantuan.kahade.id"),
  alternates: { canonical: "https://bantuan.kahade.id/" },
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Bantuan Kahade",
    title: "Bantuan Kahade — Panduan Jual Beli Aman",
    description:
      "Panduan jual beli aman di Kahade: FAQ, cara kerja, biaya transaksi 2,5%, keamanan, Kahade Plus, dan kontak layanan pelanggan.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <a href="#konten-utama" className="kh-skip-link">
          Lewati ke konten utama
        </a>
        <Header />
        <main id="konten-utama" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter site="bantuan" linkAs={Link} />
      </body>
    </html>
  );
}
