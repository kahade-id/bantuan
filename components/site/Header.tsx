import Link from "next/link";
import { Logo } from "@kahade/ui";

const NAV = [
  { href: "/", label: "Beranda" },
  { href: "/faq", label: "FAQ" },
  { href: "/cara-kerja", label: "Cara Kerja" },
  { href: "/kontak", label: "Kontak" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900">
          <Logo size={26} />
          <span className="text-[15px] font-bold tracking-tight text-black">
            Bantuan Kahade
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Navigasi utama">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-[44px] items-center rounded-full px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
