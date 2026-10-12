import Link from "next/link";
import { IndexList, PageHeader, Section, type IndexItem } from "@kahade/ui";
import { FaqSearch } from "@/components/site/FaqSearch";
import { HelpCta } from "@/components/site/HelpCta";
import { FAQ_CATEGORIES, POPULAR_FAQS } from "@/lib/faq-data";

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

const TOTAL_QUESTIONS = FAQ_CATEGORIES.reduce(
  (n, cat) => n + cat.items.length,
  0,
);

const CATEGORY_TITLE = new Map(FAQ_CATEGORIES.map((c) => [c.slug, c.title]));

interface Group {
  id: string;
  title: string;
  description: string;
  size: "md" | "lg";
  titleAs?: "h3" | "span";
  items: IndexItem[];
}

const GROUPS: Group[] = [
  {
    id: "topik",
    title: "Topik bantuan",
    description:
      "Jawaban seputar akun, jual beli, pembayaran, keamanan, dan Kahade Plus.",
    size: "lg",
    items: FAQ_CATEGORIES.map((cat) => ({
      key: cat.slug,
      href: `/faq#${cat.slug}`,
      title: cat.title,
      description: cat.description,
      meta: `${cat.items.length} pertanyaan`,
    })),
  },
  {
    id: "populer",
    title: "Pertanyaan populer",
    description: "Pertanyaan yang sering diajukan pengguna Kahade.",
    size: "md",
    titleAs: "span",
    items: POPULAR_FAQS.map((f) => ({
      key: f.q,
      href: f.href,
      title: f.q,
      meta: CATEGORY_TITLE.get(f.href.split("#")[1] ?? ""),
    })),
  },
  {
    id: "panduan",
    title: "Panduan",
    description: "Alur jual beli langkah demi langkah, serta patungan dan jastip.",
    size: "lg",
    items: [
      {
        key: "alur",
        href: "/cara-kerja#alur",
        title: "Cara kerja jual beli",
        description:
          "Dari menemukan barang di feed sampai dana diteruskan ke penjual.",
      },
      {
        key: "patungan",
        href: "/cara-kerja#patungan",
        title: "Patungan",
        description:
          "Pembelian bersama: buat grup, undang teman, dan masing-masing membayar bagiannya via Kahade.",
      },
      {
        key: "jastip",
        href: "/cara-kerja#jastip",
        title: "Jastip",
        description:
          "Jasa titip-beli: penyedia membuat “trip”, kamu menitipkan barang beserta budget.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ORG_JSON_LD }}
      />

      <PageHeader
        size="display"
        eyebrow="Pusat bantuan"
        title="Bantuan jual beli aman di Kahade."
        lede="Ada yang bisa kami bantu? Temukan jawaban seputar akun, jual beli, pembayaran, keamanan, dan Kahade Plus."
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
      >
        <div className="mt-8 max-w-reading sm:mt-10">
          <FaqSearch size="lg" suggestions={["Biaya", "OTP", "Sengketa", "Patungan", "Kahade Plus"]} />
        </div>
      </PageHeader>

      {GROUPS.map((group, gi) => (
        <Section
          key={group.id}
          id={group.id}
          divider={gi > 0}
          spacing="sm"
          aria-labelledby={`${group.id}-judul`}
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="text-small tabular-nums text-fg-subtle">
                  {String(gi + 1).padStart(2, "0")}
                </p>
                <h2 id={`${group.id}-judul`} className="mt-3 text-h3 text-fg">
                  {group.title}
                </h2>
                <p className="mt-2 max-w-xs text-small text-fg-muted">
                  {group.description}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <IndexList
                linkAs={Link}
                size={group.size}
                titleAs={group.titleAs}
                items={group.items}
              />
            </div>
          </div>
        </Section>
      ))}

      <HelpCta />
    </>
  );
}
