import type { Metadata } from "next";
import {
  Badge,
  Breadcrumb,
  Card,
  Container,
  CopyButton,
  DescriptionList,
  PageHeader,
} from "@kahade/ui";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi layanan pelanggan Kahade via email. Respons maksimal 1×24 jam kerja, Senin–Jumat 09.00–17.00 WIB.",
  alternates: { canonical: "https://bantuan.kahade.id/kontak" },
  openGraph: {
    title: "Hubungi Kami — Bantuan Kahade",
    description:
      "Hubungi layanan pelanggan Kahade via email. Respons maksimal 1×24 jam kerja, Senin–Jumat 09.00–17.00 WIB.",
    url: "https://bantuan.kahade.id/kontak",
  },
};

const SUPPORT_EMAIL = "halo@kahade.id";

const REPORT_CHECKLIST = [
  "Username atau nomor HP terdaftar di akunmu.",
  "Waktu kejadian (tanggal dan jam, bila ingat).",
  "Screenshot chat, bukti pembayaran, atau foto barang terkait.",
  "ID transaksi (ada di detail transaksi di aplikasi).",
  "Kronologi singkat: apa yang terjadi, langkah demi langkah.",
];

export default function KontakPage() {
  return (
    <>
      <PageHeader
        size="h1"
        breadcrumb={
          <Breadcrumb items={[{ label: "Bantuan", href: "/" }, { label: "Kontak" }]} />
        }
        title="Hubungi layanan pelanggan Kahade"
        lede="Tim layanan pelanggan Kahade siap membantu pada jam operasional di bawah ini."
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-16">
          {/* Kanal kontak */}
          <section
            aria-labelledby="kanal-judul"
            className="lg:col-span-5 lg:col-start-1 lg:row-start-1"
          >
            <h2 id="kanal-judul" className="text-h3 text-fg">
              Kanal kontak
            </h2>
            <DescriptionList
              layout="stacked"
              className="mt-6"
              items={[
                {
                  key: "email",
                  term: "Email",
                  detail: (
                    <>
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="inline-flex min-h-11 items-center text-h4 text-fg underline decoration-line-control decoration-1 underline-offset-4 hover:decoration-fg"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                      <span className="block">Respons maksimal 1×24 jam kerja.</span>
                      <CopyButton
                        text={SUPPORT_EMAIL}
                        label="Salin email"
                        className="mt-4 min-h-11"
                      />
                    </>
                  ),
                },
                {
                  key: "jam",
                  term: "Jam operasional",
                  detail: "Senin–Jumat, 09.00–17.00 WIB",
                },
                {
                  key: "darurat",
                  term: "Laporan penipuan",
                  detail: "Diprioritaskan sebagai laporan darurat.",
                },
                {
                  key: "chat",
                  term: (
                    <span className="flex flex-wrap items-center gap-2">
                      Live chat
                      <Badge variant="outline">Segera hadir</Badge>
                    </span>
                  ),
                  detail:
                    "Kami sedang menyiapkan live chat langsung di aplikasi. Sementara itu, silakan hubungi kami via email di atas.",
                },
              ]}
            />
          </section>

          {/* Formulir */}
          <div className="lg:sticky lg:top-24 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:self-start">
            <Card className="p-6 sm:p-8">
              <h2 className="text-h3 text-fg">Kirim pesan</h2>
              <p className="mt-2 text-small text-fg-muted sm:text-body">
                Isi formulir di bawah — pesanmu akan diteruskan ke email layanan
                pelanggan.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </div>

          {/* Kelengkapan laporan */}
          <section
            aria-labelledby="sertakan-judul"
            className="lg:col-span-5 lg:col-start-1 lg:row-start-2"
          >
            <h2 id="sertakan-judul" className="text-h3 text-fg">
              Agar laporanmu cepat diproses
            </h2>
            <p className="mt-2 text-small text-fg-muted sm:text-body">
              Sertakan informasi berikut di pesanmu:
            </p>
            <ol className="mt-6 border-t border-line">
              {REPORT_CHECKLIST.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-line py-4 text-small text-fg-muted sm:text-body"
                >
                  <span className="w-6 shrink-0 font-semibold tabular-nums text-fg">
                    {i + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </Container>
    </>
  );
}
