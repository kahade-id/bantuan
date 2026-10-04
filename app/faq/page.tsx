"use client";

import Link from "next/link";
import { Accordion } from "@kahade/ui";
import { FAQ_CATEGORIES } from "@/lib/faq-data";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-black">
        Pertanyaan Umum
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
        Jawaban atas pertanyaan yang paling sering ditanyakan pengguna Kahade.
        Tidak menemukan jawabanmu?{" "}
        <Link href="/kontak" className="font-semibold text-black underline">
          Hubungi kami
        </Link>
        .
      </p>

      {FAQ_CATEGORIES.map((cat) => (
        <section key={cat.slug} id={cat.slug} className="mt-10 scroll-mt-24">
          <h2 className="text-xl font-bold tracking-tight text-black">
            {cat.title}
          </h2>
          <p className="mt-1 text-sm text-neutral-500">{cat.description}</p>
          <div className="mt-4 rounded-2xl border border-neutral-200 bg-white px-5">
            <Accordion
              items={cat.items.map((item, i) => ({
                id: `${cat.slug}-${i}`,
                title: item.q,
                content: (
                  <p className="pb-5 text-[15px] leading-relaxed text-neutral-600">
                    {item.a}
                  </p>
                ),
              }))}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
