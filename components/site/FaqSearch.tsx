"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Icon, SearchField } from "@kahade/ui";
import { FAQ_CATEGORIES } from "@/lib/faq-data";

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

/**
 * Kolom pencarian FAQ (combobox + hasil). Satu-satunya bagian interaktif
 * homepage — dipisah agar halaman tetap Server Component.
 */
export function FaqSearch() {
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
    <>
      <SearchField
        placeholder="Cari jawaban… mis. biaya transaksi"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActiveIndex(-1);
        }}
        onClear={() => {
          setQuery("");
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
        >
          {results.length > 0 ? (
            <ul ref={listRef} className="max-h-[60vh] overflow-y-auto">
              {results.map((r, idx) => (
                <li key={`${r.href}-${r.q}`}>
                  <Link
                    href={r.href}
                    id={`hasil-${idx}`}
                    role="option"
                    aria-selected={idx === activeIndex}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`flex min-h-[44px] items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-50 ${
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
            <div role="status" className="px-4 py-4 text-sm text-neutral-500">
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
    </>
  );
}
