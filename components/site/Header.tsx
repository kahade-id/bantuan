"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@kahade/ui";

const NAV = [
  { href: "/faq", label: "FAQ" },
  { href: "/cara-kerja", label: "Cara kerja" },
  { href: "/kontak", label: "Kontak" },
];

export function Header() {
  const pathname = usePathname();
  return <SiteHeader site="bantuan" nav={NAV} pathname={pathname} linkAs={Link} />;
}
