"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
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
    category: cat.title,
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
      <mark className="rounded-tag bg-surface-3 px-0.5 text-fg">
        {text.slice(i, i + q.length)}
      </mark>
      {text.slice(i + q.length)}
    </>
  );
}

interface FaqSearchProps {
  /** `lg` untuk pencarian utama beranda. */
  size?: "md" | "lg";
  /** Kata kunci populer di bawah kolom — klik mengisi pencarian. */
  suggestions?: string[];
}

/**
 * Kolom pencarian FAQ (combobox + daftar hasil). Dipisah sebagai client
 * component agar halaman tetap Server Component.
 */
export function FaqSearch({ size = "md", suggestions = [] }: FaqSearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const uid = useId();
  const listId = `${uid}-hasil`;
  const optionId = (idx: number) => `${uid}-hasil-${idx}`;

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

  const showPanel = open && query.trim().length >= 2;
  const hasResults = showPanel && results.length > 0;

  // Scroll opsi aktif ke dalam tampilan saat navigasi panah.
  useEffect(() => {
    if (activeIndex < 0) return;
    document
      .getElementById(`${uid}-hasil-${activeIndex}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, uid]);

  const reset = () => {
    setQuery("");
    setActiveIndex(-1);
  };

  const onSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      reset();
    } else if (e.key === "ArrowDown" && results.length > 0) {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp" && results.length > 0) {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      router.push(results[activeIndex >= 0 ? activeIndex : 0].href);
    }
  };

  const pickSuggestion = (term: string) => {
    setQuery(term);
    setActiveIndex(-1);
    setOpen(true);
    inputRef.current?.focus();
  };

  return (
    <>
      <div
        className="relative"
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setOpen(false);
          }
        }}
      >
        <SearchField
          ref={inputRef}
          size={size}
          spellCheck={false}
          placeholder="Cari: biaya, OTP, sengketa…"
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
            setOpen(true);
          }}
          onClear={reset}
          onKeyDown={onSearchKeyDown}
          aria-label="Cari bantuan"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={hasResults}
          aria-controls={hasResults ? listId : undefined}
          aria-activedescendant={
            hasResults && activeIndex >= 0 ? optionId(activeIndex) : undefined
          }
        />

        {showPanel && (
          <div
            // Cegah blur kolom pencarian saat hasil diklik (Safari tidak
            // memfokuskan tautan saat diklik).
            onMouseDown={(e) => e.preventDefault()}
            className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-control border border-line bg-surface shadow-lift"
          >
            {results.length > 0 ? (
              <ul
                id={listId}
                role="listbox"
                aria-label="Hasil pencarian"
                className="max-h-[60vh] overflow-y-auto py-2"
              >
                {results.map((r, idx) => (
                  <li key={`${r.href}-${r.q}`} role="presentation">
                    <Link
                      href={r.href}
                      id={optionId(idx)}
                      role="option"
                      aria-selected={idx === activeIndex}
                      tabIndex={-1}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`flex min-h-12 items-start justify-between gap-4 px-4 py-3 transition-colors sm:px-5 ${
                        idx === activeIndex ? "bg-surface-2" : ""
                      }`}
                    >
                      <span className="min-w-0">
                        <span className="block text-body font-medium text-fg">
                          {highlight(r.q, query)}
                        </span>
                        <span className="mt-0.5 block text-caption text-fg-subtle">
                          {r.category}
                        </span>
                      </span>
                      <Icon
                        icon={ArrowRight}
                        size={18}
                        className="mt-0.5 shrink-0 text-fg-muted"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-4 text-small text-fg-muted sm:px-5">
                <p className="font-semibold text-fg">
                  Tidak ada hasil untuk &ldquo;{query.trim()}&rdquo;.
                </p>
                <p className="mt-1">
                  Coba kata kunci lain,{" "}
                  <Link
                    href="/faq"
                    className="font-semibold text-fg underline decoration-line-control underline-offset-4 hover:decoration-fg"
                  >
                    lihat semua FAQ
                  </Link>
                  , atau{" "}
                  <Link
                    href="/kontak"
                    className="font-semibold text-fg underline decoration-line-control underline-offset-4 hover:decoration-fg"
                  >
                    hubungi kami
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        )}

        <p role="status" aria-live="polite" className="sr-only">
          {showPanel
            ? results.length > 0
              ? `${results.length} hasil ditemukan. Gunakan panah atas dan bawah untuk memilih.`
              : `Tidak ada hasil untuk ${query.trim()}.`
            : ""}
        </p>
      </div>

      {suggestions.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="mr-1 text-small text-fg-subtle">Populer:</span>
          {suggestions.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => pickSuggestion(term)}
              className="inline-flex min-h-11 items-center rounded-full px-1 text-small font-medium text-fg underline decoration-line-control underline-offset-4 transition-colors hover:decoration-fg focus-visible:ring-2 focus-visible:ring-fg focus-visible:outline-none"
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
