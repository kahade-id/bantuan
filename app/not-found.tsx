import type { Metadata } from "next";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, Container, EmptyState } from "@kahade/ui";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description:
    "Halaman yang kamu cari tidak ada atau sudah dipindahkan. Kembali ke pusat bantuan Kahade.",
};

/**
 * Dirender DI DALAM root layout (Header + <main> + Footer) oleh Next.js —
 * jangan render header/<main> sendiri (landmark ganda).
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
      <EmptyState
        headingLevel={1}
        icon={MagnifyingGlass}
        title="Halaman tidak ditemukan"
        description="Alamat yang kamu tuju tidak ada atau sudah dipindahkan."
        action={<ButtonLink href="/">Kembali ke Bantuan</ButtonLink>}
      />
    </Container>
  );
}
