import Link from "next/link";
import { Logo } from "@kahade/ui";

const SIBLINGS = [
  { label: "kahade.id", href: "https://kahade.id" },
  { label: "Karir", href: "https://karir.kahade.id" },
  { label: "Legalitas", href: "https://legal.kahade.id" },
  { label: "Status Layanan", href: "https://status.kahade.id" },
  { label: "Investor", href: "https://investor.kahade.id" },
  { label: "Artikel", href: "https://artikel.kahade.id" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Logo size={24} />
            <div>
              <p className="text-sm font-bold text-black">Kahade</p>
              <p className="text-xs text-neutral-500">
                Jual-beli semudah scroll medsos.
              </p>
            </div>
          </div>
          <nav
            className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm"
            aria-label="Navigasi footer"
          >
            <Link href="/faq" className="text-neutral-600 hover:text-black">
              FAQ
            </Link>
            <Link href="/cara-kerja" className="text-neutral-600 hover:text-black">
              Cara Kerja
            </Link>
            <Link href="/kontak" className="text-neutral-600 hover:text-black">
              Kontak
            </Link>
            {SIBLINGS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-neutral-600 hover:text-black"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-neutral-100 pt-6">
          <p className="text-xs text-neutral-400">
            © {year} PT Kawal Hak Dengan Aman. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
