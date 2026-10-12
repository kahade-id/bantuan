import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  Breadcrumb,
  Container,
  PageHeader,
  SectionHeader,
  TextLink,
  Toc,
  type TocItem,
} from "@kahade/ui";
import { FaqAnswer } from "@/components/site/FaqAnswer";
import { FaqSearch } from "@/components/site/FaqSearch";
import { HelpCta } from "@/components/site/HelpCta";
import { FAQ_CATEGORIES } from "@/lib/faq-data";
import { faqPageJsonLd } from "@/lib/faq-schema";

export const metadata: Metadata = {
  title: "FAQ Jual Beli Aman",
  description:
    "Jawaban pertanyaan seputar jual beli aman di Kahade: akun, biaya 2,5%, pembayaran, keamanan, patungan, jastip, dan Kahade Plus.",
  alternates: { canonical: "https://bantuan.kahade.id/faq" },
  openGraph: {
    title: "FAQ Jual Beli Aman",
    description:
      "Jawaban pertanyaan seputar jual beli aman di Kahade: akun, biaya 2,5%, pembayaran, keamanan, patungan, jastip, dan Kahade Plus.",
    url: "https://bantuan.kahade.id/faq",
  },
};

const TOC: TocItem[] = FAQ_CATEGORIES.map((cat) => ({
  id: cat.slug,
  label: cat.title,
}));

const TOTAL_QUESTIONS = FAQ_CATEGORIES.reduce(
  (n, cat) => n + cat.items.length,
  0,
);

export default function FaqPage() {
  const jsonLd = JSON.stringify(faqPageJsonLd()).replace(/</g, "\\u003c");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <PageHeader
        size="h1"
        breadcrumb={
          <Breadcrumb items={[{ label: "Bantuan", href: "/" }, { label: "FAQ" }]} />
        }
        title="FAQ jual beli aman"
        lede={
          <>
            Jawaban atas pertanyaan yang paling sering ditanyakan pengguna
            Kahade. Tidak menemukan jawabanmu?{" "}
            <Link
              href="/kontak"
              className="font-semibold text-fg underline decoration-line-control decoration-1 underline-offset-4 hover:decoration-fg"
            >
              Hubungi kami
            </Link>
            .
          </>
        }
        aside={<FaqSearch />}
        meta={[
          { label: "Topik", value: FAQ_CATEGORIES.length },
          { label: "Pertanyaan", value: TOTAL_QUESTIONS },
          {
            label: "Layanan pelanggan",
            value: (
              <>
                Senin–Jumat,{" "}
                <span className="whitespace-nowrap">09.00–17.00 WIB</span>
              </>
            ),
          },
        ]}
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto pb-4">
              <Toc items={TOC} title="Topik" />
              <div className="mt-10 border-t border-line pt-6">
                <p className="text-small text-fg-muted">
                  Tidak menemukan jawaban?
                </p>
                <TextLink as={Link} href="/kontak" className="mt-1">
                  Hubungi kami
                </TextLink>
              </div>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <Toc
              items={TOC}
              title="Topik"
              variant="disclosure"
              className="mb-12 lg:hidden"
            />

            {FAQ_CATEGORIES.map((cat, ci) => (
              <section
                key={cat.slug}
                id={cat.slug}
                className={ci > 0 ? "mt-16 sm:mt-20" : ""}
              >
                <SectionHeader
                  size="h3"
                  index={String(ci + 1).padStart(2, "0")}
                  eyebrow={`${cat.items.length} pertanyaan`}
                  title={cat.title}
                  description={cat.description}
                />
                <Accordion
                  size="lg"
                  headingLevel={3}
                  className="mt-6 sm:mt-8"
                  items={cat.items.map((item, i) => ({
                    id: `${cat.slug}-${i}`,
                    title: item.q,
                    content: <FaqAnswer answer={item.a} />,
                  }))}
                />
              </section>
            ))}
          </div>
        </div>
      </Container>

      <HelpCta secondary={{ href: "/cara-kerja", label: "Pelajari cara kerja" }} />
    </>
  );
}
