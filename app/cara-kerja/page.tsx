import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, PageHeader, Section, TextLink } from "@kahade/ui";
import { HelpCta } from "@/components/site/HelpCta";

export const metadata: Metadata = {
  title: {
    absolute: "Cara Kerja Kahade — Jual Beli Aman Seperti Media Sosial",
  },
  description:
    "Pelajari cara kerja jual beli di Kahade langkah demi langkah: dari feed, chat penjual, Beli via Kahade, hingga patungan dan jastip.",
  alternates: { canonical: "https://bantuan.kahade.id/cara-kerja" },
  openGraph: {
    title: "Cara Kerja Kahade — Jual Beli Aman Seperti Media Sosial",
    description:
      "Pelajari cara kerja jual beli di Kahade langkah demi langkah: dari feed, chat penjual, Beli via Kahade, hingga patungan dan jastip.",
    url: "https://bantuan.kahade.id/cara-kerja",
  },
};

const STEPS = [
  {
    label: "Temukan barang di feed",
    description:
      "Scroll feed dan temukan barang menarik dari orang yang kamu follow — seperti scroll media sosial.",
  },
  {
    label: "Kenali penjual",
    description:
      "Lihat profil, baca ulasan, dan cek riwayat transaksi penjual sebelum membeli.",
  },
  {
    label: "Beli via Kahade",
    description:
      "Tekan tombol \u201cBeli via Kahade\u201d, pilih metode pembayaran, dan selesaikan dalam hitungan detik.",
  },
  {
    label: "Penjual mengirim barang",
    description:
      "Penjual mengemas dan mengirim barang, atau menyerahkan jasa/produk digital.",
  },
  {
    label: "Konfirmasi penerimaan",
    description:
      "Lacak pengiriman dan konfirmasi saat barang sampai di tanganmu.",
  },
  {
    label: "Dana diteruskan ke penjual",
    description:
      "Setelah kamu konfirmasi, dana otomatis diteruskan ke penjual. Selesai.",
  },
];

const FEATURES = [
  {
    id: "patungan",
    title: "Patungan",
    description:
      "Pembelian bersama: buat grup patungan, undang teman, masing-masing membayar bagiannya via Kahade, dan barang dikirim ke koordinator.",
  },
  {
    id: "jastip",
    title: "Jastip",
    description:
      "Jasa titip-beli: penyedia membuat “trip”, kamu menitipkan barang beserta budget, dan barang dikirim setelah penyedia membeli dengan bukti pembelian.",
  },
];

/** Judul seksi di kolom kiri (pola indeks berkelompok). */
function SectionLead({
  index,
  id,
  title,
  description,
}: {
  index: string;
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className="lg:col-span-4">
      <div className="lg:sticky lg:top-28">
        <p className="text-small tabular-nums text-fg-subtle">{index}</p>
        <h2 id={id} className="mt-3 text-h3 text-fg">
          {title}
        </h2>
        <p className="mt-2 max-w-xs text-small text-fg-muted">{description}</p>
      </div>
    </div>
  );
}

export default function CaraKerjaPage() {
  return (
    <>
      <PageHeader
        size="h1"
        breadcrumb={
          <Breadcrumb
            items={[{ label: "Bantuan", href: "/" }, { label: "Cara kerja" }]}
          />
        }
        title="Cara kerja jual beli aman di Kahade"
        lede="Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Berikut alur jual-belinya."
      />

      <Section id="alur" spacing="sm" aria-labelledby="alur-judul">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <SectionLead
            index="01"
            id="alur-judul"
            title="Alur jual beli"
            description="Enam langkah, dari feed sampai dana diteruskan ke penjual."
          />
          <div className="lg:col-span-8">
            <ol className="border-t border-line">
              {STEPS.map((step, i) => (
                <li
                  key={step.label}
                  className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-line py-7 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-8 sm:py-9"
                >
                  <span className="text-h2 tabular-nums text-fg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:pt-1.5">
                    <h3 className="text-h3 text-fg">{step.label}</h3>
                    <p className="mt-2 max-w-[52ch] text-body text-fg-muted sm:text-body-lg">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-l-2 border-fg pl-5 sm:mt-12 sm:pl-6">
              <p className="text-h3 text-fg">
                Prinsipnya sederhana: &ldquo;Beli via Kahade&rdquo; berarti aman.
              </p>
              <p className="mt-2 text-body-lg text-fg-muted">
                Dana hanya diteruskan ke penjual setelah kamu mengonfirmasi
                penerimaan.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="fitur"
        spacing="sm"
        divider
        aria-labelledby="fitur-judul"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <SectionLead
            index="02"
            id="fitur-judul"
            title="Fitur unik"
            description="Cara bertransaksi bersama, tetap dengan pembayaran via Kahade."
          />
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:col-span-8">
            {FEATURES.map((f) => (
              <article key={f.id} id={f.id} className="border-t border-fg pt-6">
                <h3 className="text-h3 text-fg">{f.title}</h3>
                <p className="mt-3 text-body text-fg-muted">{f.description}</p>
                <TextLink as={Link} href="/faq#jual-beli" className="mt-4">
                  {`Tanya jawab ${f.title.toLowerCase()}`}
                </TextLink>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <HelpCta />
    </>
  );
}
