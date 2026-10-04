import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Button, EmptyState, Logo } from "@kahade/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-neutral-100">
        <div className="mx-auto flex max-w-5xl items-center gap-2.5 px-4 py-4 sm:px-6">
          <Logo size={26} />
          <span className="text-base font-extrabold tracking-tight text-black">
            Bantuan Kahade
          </span>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-5">
        <EmptyState
          icon={MagnifyingGlass}
          title="Halaman tidak ditemukan"
          description="Alamat yang kamu tuju tidak ada atau sudah dipindahkan."
          action={
            <Link href="/">
              <Button>Kembali ke Bantuan</Button>
            </Link>
          }
        />
      </main>
    </div>
  );
}
