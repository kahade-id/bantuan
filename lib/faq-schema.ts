/**
 * Schema.org FAQPage JSON-LD untuk halaman /faq.
 * Server-only module (diimpor oleh Server Component /faq).
 * Satu jawaban memakai JSX (berisi link) — diubah ke teks polos manual
 * tanpa react-dom/server agar tidak menambah dependensi.
 * Google mensyaratkan "text" bebas tag HTML.
 */

import type { ReactNode } from "react";
import { FAQ_CATEGORIES } from "./faq-data";

/** Ubah ReactNode menjadi teks polos (tanpa tag HTML, whitespace rapi). */
function toPlainText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number")
    return String(node);
  if (node === null || node === undefined || typeof node === "boolean")
    return "";
  if (Array.isArray(node)) return node.map(toPlainText).join("");
  if (typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return toPlainText(props?.children);
  }
  return "";
}

function cleanText(node: ReactNode): string {
  return toPlainText(node).replace(/\s+/g, " ").trim();
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: cleanText(item.a),
        },
      }))
    ),
  };
}
