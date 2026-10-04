import Link from "next/link";
import {
  UserCircle,
  Storefront,
  Wallet,
  ShieldCheck,
  Crown,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Icon, Card } from "@kahade/ui";
import { IconTile } from "@/components/site/IconTile";
import { FaqSearch } from "@/components/site/FaqSearch";
import { FAQ_CATEGORIES, POPULAR_FAQS } from "@/lib/faq-data";

const CATEGORY_ICONS = [
  UserCircle,
  Storefront,
  Wallet,
  ShieldCheck,
  Crown,
] as const;

const ORG_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Kawal Hak Dengan Aman",
  url: "https://bantuan.kahade.id",
  logo: "https://bantuan.kahade.id/favicon.svg",
  sameAs: [
    "https://kahade.id",
    "https://karir.kahade.id",
    "https://legal.kahade.id",
    "https://bantuan.kahade.id",
    "https://status.kahade.id",
    "https://investor.kahade.id",
    "https://artikel.kahade.id",
  ],
}).replace(/</g, "\\u003c");

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ORG_JSON_LD }}
      />
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Bantuan Jual Beli Aman di Kahade
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-500">
            Ada yang bisa kami bantu? Temukan jawaban seputar akun, jual-beli,
            pembayaran, keamanan, dan Kahade Plus.
          </p>
          <div className="relative mx-auto mt-8 max-w-xl text-left">
            <FaqSearch />
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h2 className="text-xl font-bold tracking-tight text-black">
          Jelajahi topik
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FAQ_CATEGORIES.map((cat, i) => (
            <Link key={cat.slug} href={`/faq#${cat.slug}`}>
              <Card interactive className="h-full p-5">
                <IconTile icon={CATEGORY_ICONS[i % CATEGORY_ICONS.length]} />
                <h3 className="mt-4 text-[15px] font-bold text-black">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {cat.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-black">
                  Lihat FAQ
                  <Icon icon={ArrowRight} size={15} />
                </span>
              </Card>
            </Link>
          ))}
          <Link href="/cara-kerja">
            <Card interactive className="h-full p-5">
              <IconTile icon={ArrowRight} dark />
              <h3 className="mt-4 text-[15px] font-bold text-black">
                Cara Kerja
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                Alur jual-beli langkah demi langkah, serta patungan dan jastip.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-black">
                Pelajari
                <Icon icon={ArrowRight} size={15} />
              </span>
            </Card>
          </Link>
        </div>

        {/* Populer */}
        <h2 className="mt-12 text-xl font-bold tracking-tight text-black">
          Sering dicari
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {POPULAR_FAQS.slice(0, 6).map((f) => (
            <Link
              key={f.q}
              href={f.href}
              className="inline-flex min-h-[44px] items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-black hover:text-black"
            >
              {f.q}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
