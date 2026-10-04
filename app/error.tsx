"use client";

import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Button, EmptyState } from "@kahade/ui";

/**
 * Error boundary global: pesan ramah Bahasa Indonesia + tombol coba lagi.
 */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-16">
      <EmptyState
        headingLevel={1}
        icon={WarningCircle}
        title="Terjadi kesalahan"
        description="Maaf, halaman ini gagal dimuat. Coba muat ulang — kalau masih gagal, hubungi kami via halaman Kontak."
        action={
          <Button onClick={() => reset()}>Coba Lagi</Button>
        }
      />
    </div>
  );
}
