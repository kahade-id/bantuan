import type { Metadata } from "next";
import { EnvelopeSimple, Clock, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Icon, Card, Alert } from "@kahade/ui";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi layanan pelanggan Kahade.",
};

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-black">
        Hubungi Kami
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
        Tim layanan pelanggan Kahade siap membantu setiap hari.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card className="p-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
            <Icon icon={EnvelopeSimple} size={20} className="text-black" />
          </span>
          <h2 className="mt-4 text-[15px] font-bold text-black">Email</h2>
          <a
            href="mailto:halo@kahade.id"
            className="mt-1 block text-sm font-semibold text-black underline"
          >
            halo@kahade.id
          </a>
          <p className="mt-1 text-sm text-neutral-500">
            Respons maksimal 1×24 jam kerja.
          </p>
        </Card>
        <Card className="p-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
            <Icon icon={Clock} size={20} className="text-black" />
          </span>
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
    </div>
  );
}
