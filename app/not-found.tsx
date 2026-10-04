import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, EmptyState } from "@kahade/ui";

/**
 * Dirender DI DALAM root layout (Header + <main> + Footer) oleh Next.js —
 * jangan render header/<main> sendiri (landmark ganda).
 */
export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5">
      <EmptyState
        icon={MagnifyingGlass}
        title="Halaman tidak ditemukan"
        description="Alamat yang kamu tuju tidak ada atau sudah dipindahkan."
        action={<ButtonLink href="/">Kembali ke Bantuan</ButtonLink>}
      />
    </div>
  );
}
