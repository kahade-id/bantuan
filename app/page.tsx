"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

/** Tandai kecocokan kata kunci dengan <mark>. */
function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded-sm bg-yellow-200 px-0.5 text-inherit">
        {text.slice(i, i + q.length)}
      </mark>
      {text.slice(i + q.length)}
    </>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    // Skor: cocok di judul pertanyaan (2) lebih relevan dari cocok di isi jawaban (1).
    return SEARCH_INDEX.map((f) => ({
      ...f,
      score:
        (f.q.toLowerCase().includes(q) ? 2 : 0) +
        (f.a.toLowerCase().includes(q) ? 1 : 0),
    }))
      .filter((f) => f.score > 0)
      .sort((x, y) => y.score - x.score || x.q.localeCompare(y.q))
      .slice(0, 6);
  }, [query]);

  const showResults = query.trim().length >= 2;

  // Scroll opsi aktif ke dalam tampilan saat navigasi panah.
  useEffect(() => {
    if (activeIndex < 0) return;
    listRef.current
      ?.querySelector(`#hasil-${activeIndex}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const onSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setQuery("");
      setActiveIndex(-1);
    } else if (e.key === "ArrowDown" && results.length > 0) {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp" && results.length > 0) {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      router.push(results[activeIndex].href);
    }
  };

  return (
    <div>
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
            <SearchField
              placeholder="Cari jawaban… mis. biaya transaksi"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(-1);
              }}
              onKeyDown={onSearchKeyDown}
              aria-label="Cari bantuan"
              aria-expanded={showResults}
              role="combobox"
              aria-controls="hasil-pencarian"
              aria-activedescendant={
                activeIndex >= 0 ? `hasil-${activeIndex}` : undefined
              }
            />
            {showResults && (
              <div
                id="hasil-pencarian"
                role="listbox"
                aria-label="Hasil pencarian"
                className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lift"
              >                {results.length > 0 ? (
                  <ul ref={listRef}>
                    {results.map((r, idx) => (
                      <li
                        key={`${r.href}-${r.q}`}
                        id={`hasil-${idx}`}
                        role="option"
                        aria-selected={idx === activeIndex}
                      >
                        <Link
                          href={r.href}
                          onMouseEnter={() => setActiveIndex(idx)}
                          className={`flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-50 ${
                            idx === activeIndex ? "bg-neutral-100" : ""
                          }`}
                        >
                          <span>{highlight(r.q, query)}</span>
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
                  <div className="px-4 py-4 text-sm text-neutral-500">
                    <p className="font-medium text-black">
                      Tidak ada hasil untuk &ldquo;{query.trim()}&rdquo;.
                    </p>
                    <p className="mt-1">
                      Coba kata kunci lain,{" "}
                      <Link href="/faq" className="font-semibold text-black underline">
                        lihat semua FAQ
                      </Link>
                      , atau{" "}
                      <Link href="/kontak" className="font-semibold text-black underline">
                        hubungi kami
                      </Link>
                      .
                    </p>
                  </div>
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
