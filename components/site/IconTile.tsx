import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { Icon } from "@kahade/ui";

interface IconTileProps {
  icon: PhosphorIcon;
  /** Varian gelap (hitam) untuk kartu penekanan/CTA. Default terang. */
  dark?: boolean;
}

/** Kotak ikon 40px standar untuk kartu bantuan (dipakai di banyak halaman). */
export function IconTile({ icon, dark = false }: IconTileProps) {
  return (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
        dark ? "bg-black" : "bg-neutral-100"
      }`}
    >
      <Icon icon={icon} size={20} className={dark ? "text-white" : "text-black"} />
    </span>
  );
}
