import type { Metadata } from "next";
import Link from "next/link";
import { Accordion, Card } from "@kahade/ui";
import { FAQ_CATEGORIES } from "@/lib/faq-data";
import { faqPageJsonLd } from "@/lib/faq-schema";

export const metadata: Metadata = {
  title: "FAQ Jual Beli Aman",
  description:
    "Jawaban pertanyaan seputar jual beli aman di Kahade: akun, biaya 2,5%, pembayaran, keamanan, patungan, jastip, dan Kahade Plus.",
  alternates: { canonical: "https://bantuan.kahade.id/faq" },
};

export default function FaqPage() {
  const jsonLd = JSON.stringify(faqPageJsonLd()).replace(/</g, "\\u003c");
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <h1 className="text-3xl font-extrabold tracking-tight text-black">
        FAQ Jual Beli Aman
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
          <Card className="mt-4 px-5 py-2">
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
            >
            </Accordion>
          </Card>
        </section>
      ))}
    </div>
  );
}
