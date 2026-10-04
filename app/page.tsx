"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  UserCircle,
  Storefront,
  Wallet,
  ShieldCheck,
  Crown,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Icon, Card, SearchField } from "@kahade/ui";
import { FAQ_CATEGORIES, POPULAR_FAQS } from "@/lib/faq-data";

const CATEGORY_ICONS = [
  UserCircle,
  Storefront,
  Wallet,
  ShieldCheck,
  Crown,
] as const;

/** Indeks pencarian: semua FAQ di semua kategori. */
const SEARCH_INDEX = FAQ_CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({
    q: item.q,
    a: typeof item.a === "string" ? item.a : "",
    href: `/faq#${cat.slug}`,
  })),
);

export default function HomePage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return SEARCH_INDEX.filter(
      (f) =>
        f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q),
    ).slice(0, 6);
  }, [query]);

  const showResults = query.trim().length >= 2;

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Ada yang bisa kami bantu?
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-500">
            Temukan jawaban seputar akun, jual-beli, pembayaran, keamanan, dan
            Kahade Plus.
          </p>
          <div className="relative mx-auto mt-8 max-w-xl text-left">
            <SearchField
              placeholder="Cari jawaban… mis. biaya transaksi"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setQuery("");
              }}
              aria-label="Cari bantuan"
              aria-expanded={showResults}
              role="combobox"
              aria-controls="hasil-pencarian"
            />
            {showResults && (
              <div
                id="hasil-pencarian"
                role="listbox"
                className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lift"
              >                {results.length > 0 ? (
                  <ul>
                    {results.map((r) => (
                      <li key={`${r.href}-${r.q}`} role="option" aria-selected="false">
                        <Link
                          href={r.href}
                          className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-50"
                        >
                          {r.q}
                          <Icon
                            icon={ArrowRight}
                            size={16}
                            className="shrink-0 text-neutral-400"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-4 text-sm text-neutral-500">
                    Tidak ditemukan. Coba kata kunci lain atau{" "}
                    <Link href="/faq" className="font-semibold text-black underline">
                      lihat semua FAQ
                    </Link>
                    .
                  </p>
                )}
              </div>
            )}
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
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon
                    icon={CATEGORY_ICONS[i % CATEGORY_ICONS.length]}
                    size={20}
                    className="text-black"
                  />
                </span>
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
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black">
                <Icon icon={ArrowRight} size={20} className="text-white" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-black">
                Cara Kerja
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                Alur jual-beli langkah demi langkah, plus patungan dan jastip.
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
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-black hover:text-black"
            >
              {f.q}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
