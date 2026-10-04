import type { Metadata } from "next";
import { EnvelopeSimple, Clock, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Icon, Card, Alert } from "@kahade/ui";
import { IconTile } from "@/components/site/IconTile";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi layanan pelanggan Kahade via email. Respons maksimal 1×24 jam kerja, Senin–Jumat 09.00–17.00 WIB.",
};

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-black">
        Hubungi Layanan Pelanggan Kahade
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
        Tim layanan pelanggan Kahade siap membantu pada jam operasional di
        bawah ini.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card className="p-5">
          <IconTile icon={EnvelopeSimple} />
          <h2 className="mt-4 text-[15px] font-bold text-black">Email</h2>
          <a
            href="mailto:halo@kahade.id"
            className="mt-1 inline-flex min-h-[44px] items-center text-sm font-semibold text-black underline"
          >
            halo@kahade.id
          </a>
          <p className="mt-1 text-sm text-neutral-500">
            Respons maksimal 1×24 jam kerja.
          </p>
        </Card>
        <Card className="p-5">
          <IconTile icon={Clock} />
          <h2 className="mt-4 text-[15px] font-bold text-black">
            Jam operasional
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            Senin–Jumat, 09.00–17.00 WIB
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            Laporan darurat (penipuan) diprioritaskan.
          </p>
        </Card>
      </div>

      <Alert variant="info" className="mt-6">
        <span className="flex items-center gap-2 font-semibold">
          <Icon icon={ChatCircleDots} size={18} />
          Live chat segera hadir
        </span>
        <span className="mt-1 block">
          Kami sedang menyiapkan live chat langsung di aplikasi. Sementara itu,
          silakan hubungi kami via email di atas.
        </span>
      </Alert>

      <Card className="mt-6 p-5">
        <h2 className="text-[15px] font-bold text-black">
          Agar laporanmu cepat diproses, sertakan:
        </h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-600">
          <li className="flex gap-2">
            <span className="font-bold text-black">1.</span>
            Username atau nomor HP terdaftar di akunmu.
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-black">2.</span>
            Waktu kejadian (tanggal dan jam, bila ingat).
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-black">3.</span>
            Screenshot chat, bukti pembayaran, atau foto barang terkait.
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-black">4.</span>
            ID transaksi (ada di detail transaksi di aplikasi).
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-black">5.</span>
            Kronologi singkat: apa yang terjadi, langkah demi langkah.
          </li>
        </ul>
      </Card>
    </div>
  );
}
