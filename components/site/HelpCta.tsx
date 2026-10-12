import { ButtonLink, Container } from "@kahade/ui";

interface HelpCtaProps {
  /** Tautan sekunder di samping "Hubungi kami". */
  secondary?: { href: string; label: string };
}

/**
 * Ajakan penutup halaman: strip hitam penuh menuju halaman kontak.
 * Teks mengikuti fakta layanan pelanggan di /kontak.
 */
export function HelpCta({
  secondary = { href: "/faq", label: "Lihat semua FAQ" },
}: HelpCtaProps) {
  return (
    <section
      aria-labelledby="bantuan-lanjutan"
      className="bg-surface-inverse text-fg-inverse"
    >
      <Container className="flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 id="bantuan-lanjutan" className="text-h3 text-fg-inverse">
            Masih butuh bantuan?
          </h2>
          <p className="mt-3 text-body-lg text-fg-inverse/70">
            Tim layanan pelanggan siap membantu Senin–Jumat,{" "}
            <span className="whitespace-nowrap">09.00–17.00 WIB</span>. Respons
            email maksimal <span className="whitespace-nowrap">1×24 jam</span>{" "}
            kerja.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/kontak" variant="inverse">
            Hubungi kami
          </ButtonLink>
          <ButtonLink href={secondary.href} variant="inverseSecondary">
            {secondary.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
