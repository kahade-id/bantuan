import type { Metadata } from "next";
import { UsersThree, AirplaneTilt } from "@phosphor-icons/react/dist/ssr";
import { Card, Steps, Alert } from "@kahade/ui";
import { IconTile } from "@/components/site/IconTile";

export const metadata: Metadata = {
  title: {
    absolute: "Cara Kerja Kahade — Jual Beli Aman Seperti Media Sosial",
  },
  description:
    "Pelajari cara kerja jual beli di Kahade langkah demi langkah: dari feed, chat penjual, Beli via Kahade, hingga patungan dan jastip.",
  alternates: { canonical: "https://bantuan.kahade.id/cara-kerja" },
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
      "Tekan tombol \"Beli via Kahade\", pilih metode pembayaran, dan selesaikan dalam hitungan detik.",
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

export default function CaraKerjaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-black">
        Cara Kerja Jual Beli Aman di Kahade
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
        Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya
        seperti media sosial. Berikut alur jual-belinya:
      </p>

      <Card className="mt-8">
        <Steps steps={STEPS} current={STEPS.length} />
      </Card>

      <Alert variant="info" className="mt-6">
        Prinsipnya sederhana: &ldquo;Beli via Kahade&rdquo; berarti aman. Dana
        hanya diteruskan ke penjual setelah kamu mengonfirmasi penerimaan.
      </Alert>

      <h2 className="mt-12 text-xl font-bold tracking-tight text-black">
        Fitur unik
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Card className="p-5">
          <IconTile icon={UsersThree} />
          <h3 className="mt-4 text-[15px] font-bold text-black">Patungan</h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-500">
            Pembelian bersama: buat grup patungan, undang teman, masing-masing
            membayar bagiannya via Kahade, dan barang dikirim ke koordinator.
          </p>
        </Card>
        <Card className="p-5">
          <IconTile icon={AirplaneTilt} />
          <h3 className="mt-4 text-[15px] font-bold text-black">Jastip</h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-500">
            Jasa titip-beli: penyedia membuat &ldquo;trip&rdquo;, kamu menitipkan
            barang beserta budget, dan barang dikirim setelah penyedia membeli
            dengan bukti pembelian.
          </p>
        </Card>
      </div>
    </div>
  );
}
