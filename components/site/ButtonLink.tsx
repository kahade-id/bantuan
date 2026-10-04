import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Link dengan visual tombol DS primary md.
 * (Button DS hanya me-render <button>; <button> di dalam <a> itu
 * HTML invalid, jadi link-yang-tampil-sebagai-tombol pakai komponen ini.)
 */
export default function ButtonLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold",
        "transition-all duration-150 select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
        "active:scale-[0.97]",
        "bg-black text-white hover:bg-neutral-800 active:bg-black",
        "h-11 px-6 text-sm gap-2",
        className,
      ].join(" ")}
    >
      <span>{children}</span>
    </Link>
  );
}
