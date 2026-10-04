import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap";

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
    icon: "/favicon.svg",
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
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={GOOGLE_FONTS_URL} rel="stylesheet" />
      </head>
      <body>
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <Header />
        <main id="konten-utama" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
