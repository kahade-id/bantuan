/**
 * Data FAQ Bantuan Kahade.
 * Sumber kebenaran: Whitepaper Kahade v1.0 (Oktober 2026).
 * Aturan bahasa: JANGAN pakai "escrow", "rekber", "ditahan", "penahanan".
 * Tombol beli: "Beli via Kahade". Bahasa: Indonesia.
 */

import type { ReactNode } from "react";

export interface FaqItem {
  q: string;
  /** String atau ReactNode (untuk jawaban yang butuh link). */
  a: ReactNode;
}

export interface FaqCategory {
  slug: string;
  title: string;
  description: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    slug: "akun",
    title: "Akun",
    description: "Pendaftaran, OTP, pengaturan, dan hapus akun.",
    items: [
      {
        q: "Bagaimana cara mendaftar akun Kahade?",
        a: "Ikuti langkah ini: 1) Masukkan nomor HP aktifmu di halaman pendaftaran, 2) Kirim pesan ke nomor WhatsApp resmi Kahade seperti petunjuk di layar, 3) Masukkan kode OTP yang kamu terima via WhatsApp, 4) Akunmu langsung aktif dan siap dipakai. Seluruh proses hanya butuh waktu sekitar satu menit.",
      },
      {
        q: "Apakah pendaftaran Kahade berbayar?",
        a: "Tidak. Membuat akun dan mulai berjualan di Kahade gratis selamanya — tanpa biaya pendaftaran, tanpa biaya langganan wajib, dan tanpa proses verifikasi berbelit. Kamu baru dikenai biaya layanan 2,5% saat terjadi transaksi penjualan.",
      },
      {
        q: "Saya tidak menerima kode OTP, apa yang harus dilakukan?",
        a: "Pastikan nomor HP yang dimasukkan benar dan WhatsApp-mu aktif. Tunggu beberapa saat lalu minta kirim ulang kode. Jika masih belum masuk, pastikan kamu sudah mengirim pesan ke nomor WhatsApp resmi Kahade terlebih dahulu, lalu hubungi layanan pelanggan.",
      },
      {
        q: "Bagaimana cara mengamankan akun saya?",
        a: "Jangan pernah membagikan kode OTP ke siapa pun — termasuk yang mengaku dari Kahade. Aktifkan verifikasi dua langkah (2FA) dan buat PIN yang kuat serta berbeda dari PIN lainnya. Keluar dari akunmu jika memakai perangkat bersama.",
      },
      {
        q: "Saya lupa password, bagaimana cara masuk kembali?",
        a: "Kahade memakai nomor HP sebagai identitas utama, jadi tidak ada password yang perlu diingat. Untuk masuk kembali: 1) Buka halaman masuk dan masukkan nomor HP terdaftarmu, 2) Kirim pesan ke nomor WhatsApp resmi Kahade, 3) Masukkan kode OTP baru yang diterima. Pastikan nomor tersebut masih aktif — jika nomor sudah tidak aktif, hubungi layanan pelanggan untuk verifikasi identitas manual.",
      },
      {
        q: "Bagaimana cara menghapus akun saya?",
        a: "Kamu berhak meminta penghapusan akun dan datamu kapan saja. Caranya: 1) Hubungi layanan pelanggan melalui halaman Kontak, 2) Sebutkan bahwa kamu ingin menghapus akun beserta nomor HP terdaftar, 3) Tim kami memverifikasi identitasmu, 4) Data dihapus sesuai ketentuan yang berlaku. Saldo atau transaksi yang masih berjalan harus diselesaikan dulu sebelum akun dihapus.",
      },
    ],
  },
  {
    slug: "jual-beli",
    title: "Jual Beli",
    description: "Cara membeli, berjualan, patungan, dan jastip.",
    items: [
      {
        q: "Bagaimana cara membeli barang di Kahade?",
        a: "Lima langkah mudah: 1) Temukan barang menarik di feed, 2) Kenali penjual lewat profil, ulasan, dan riwayat transaksinya, 3) Chat langsung dengan penjual untuk tanya detail atau nego, 4) Tekan tombol \"Beli via Kahade\" dan selesaikan pembayaran, 5) Lacak pengiriman dan konfirmasi saat barang sampai. Dana diteruskan ke penjual setelah kamu konfirmasi.",
      },
      {
        q: "Bagaimana cara mulai berjualan di Kahade?",
        a: "Semudah membuat postingan media sosial: 1) Buat etalase tokomu (nama, foto, deskripsi singkat), 2) Posting barang atau jasamu lengkap dengan foto/video, harga, dan deskripsi jujur, 3) Tanggapi chat calon pembeli dengan cepat, 4) Kemas dan kirim barang setelah ada pesanan berbayar. Tidak ada biaya pendaftaran dan tidak ada verifikasi berbelit untuk mulai berjualan. Verifikasi identitas baru diminta saat penarikan dana pertama — demi keamanan semua pihak.",
      },
      {
        q: "Apa saja yang bisa dijual di Kahade?",
        a: "Hampir apa saja: barang fisik baru maupun preloved, jasa (desain, penulisan, les, konsultasi), dan produk digital (preset, template, e-book). Untuk jasa, transaksi berjalan berbasis milestone — bayar per tahap penyelesaian. Produk digital dikirim otomatis lewat link unduhan setelah pembayaran.",
      },
      {
        q: "Bagaimana cara kerja Patungan?",
        a: "Patungan adalah pembelian bersama. Buat grup patungan dan undang teman, masing-masing membayar bagiannya via Kahade, lalu barang dikirim ke koordinator. Contohnya: patungan membeli paket skincare bundling demi harga grosir, atau patungan menyewa fotografer untuk acara bersama.",
      },
      {
        q: "Bagaimana cara kerja Jastip (Jasa Titip)?",
        a: "Langkahnya: 1) Penyedia jastip membuat \"trip\" — misalnya \"Jastip Jepang, 10–17 Desember\" lengkap dengan fee jasanya, 2) Kamu menitipkan barang yang diinginkan beserta budget maksimal, 3) Penyedia membeli barang dan mengunggah bukti pembelian (nota/foto), 4) Barang dikirim kepadamu setelah tiba, 5) Konfirmasi penerimaan agar dana diteruskan ke penyedia. Semua pembayaran tetap via Kahade, bukan transfer langsung.",
      },
      {
        q: "Bagaimana sistem ulasan dan reputasi bekerja?",
        a: "Setiap transaksi yang selesai bisa diulas oleh kedua belah pihak. Skor reputasi terlihat di profil dan di setiap postingan jualan. Ulasan tidak bisa dihapus atau dimanipulasi penjual — penjual yang jujur dan responsif otomatis mendapat lebih banyak pembeli.",
      },
    ],
  },
  {
    slug: "pembayaran",
    title: "Pembayaran",
    description: "Biaya transaksi, metode bayar, dan penarikan dana.",
    items: [
      {
        q: "Berapa biaya transaksi di Kahade?",
        a: "Biaya layanan 2,5% per transaksi, dengan batas minimum Rp2.500 dan maksimum Rp250.000. Biaya dibayar pembeli di atas harga barang dan terlihat jelas sejak awal — tidak ada kejutan di halaman pembayaran. Contoh: transaksi Rp1.000.000 dikenai Rp25.000; transaksi Rp20.000.000 hanya kena Rp250.000 (batas atas).",
      },
      {
        q: "Metode pembayaran apa saja yang tersedia?",
        a: "Pembayaran dilakukan via Kahade dengan DANA. Caranya: 1) Tekan tombol \"Beli via Kahade\" di barang yang kamu mau, 2) Periksa rincian harga + biaya layanan 2,5% yang tampil transparan, 3) Pilih DANA sebagai metode pembayaran, 4) Selesaikan pembayaran dalam hitungan detik. Kamu tidak perlu transfer manual ke penjual — semua tercatat otomatis di aplikasi.",
      },
      {
        q: "Kapan penjual menerima dana?",
        a: "Dana diteruskan ke penjual setelah pembeli mengonfirmasi bahwa barang atau jasa sudah diterima. Sistem ini melindungi kedua belah pihak: pembeli tidak membayar untuk barang yang tidak datang, penjual tidak perlu khawatir soal bukti transfer palsu.",
      },
      {
        q: "Bagaimana jika barang tidak sampai atau tidak sesuai?",
        a: "Jangan konfirmasi penerimaan. Dana tidak akan diteruskan ke penjual, dan kamu bisa mengajukan sengketa. Tim Kahade akan menengahi berdasarkan bukti dari kedua belah pihak — chat, foto, dan resi pengiriman. Jika terbukti barang tidak dikirim, dana kembali ke pembeli.",
      },
      {
        q: "Bagaimana cara menarik dana ke rekening saya?",
        a: "Langkahnya: 1) Buka menu penarikan/saldo di aplikasi, 2) Masukkan nominal dan pilih rekening tujuan, 3) Pada penarikan pertama, selesaikan verifikasi identitas (KTP + swafoto) — wajib demi keamanan dan hanya dilakukan sekali, 4) Konfirmasi dengan PIN. Dana diproses sesuai estimasi waktu yang tampil di aplikasi.",
      },
      {
        q: "Apakah ada biaya untuk menarik dana?",
        a: "Penarikan dana mengikuti ketentuan yang tampil di aplikasi saat kamu menarik. Biaya transaksi 2,5% sendiri sudah termasuk dalam pembayaran pembeli, bukan dipotong dari penjual.",
      },
    ],
  },
  {
    slug: "keamanan",
    title: "Keamanan",
    description: "Perlindungan transaksi, sengketa, dan akun.",
    items: [
      {
        q: "Apakah transaksi di Kahade aman?",
        a: "Ya. Setiap pembayaran via Kahade dilindungi sistem yang memastikan tiga hal: pembeli — dana hanya diteruskan ke penjual setelah barang/jasa diterima dan dikonfirmasi; penjual — pesanan yang sudah dibayar adalah pesanan yang pasti, tanpa bukti transfer palsu; dan sengketa — tim Kahade menengahi bila terjadi perselisihan. Prinsipnya sederhana: \"Beli via Kahade\" berarti aman.",
      },
      {
        q: "Apa yang harus dilakukan jika terjadi sengketa?",
        a: "Jangan konfirmasi penerimaan barang dulu. Lalu: 1) Buka detail transaksi dan pilih \"Ajukan Sengketa\", 2) Pilih alasan (barang tidak sampai / tidak sesuai deskripsi / rusak), 3) Lampirkan bukti: screenshot chat, foto barang yang diterima, dan resi pengiriman, 4) Tim Trust & Safety Kahade meninjau bukti kedua belah pihak dan memberikan keputusan yang adil dan transparan. Selama sengketa berjalan, dana tidak diteruskan ke siapa pun.",
      },
      {
        q: "Bagaimana cara mengenali penjual yang terpercaya?",
        a: "Perhatikan tiga hal: badge verifikasi di profil, ulasan dan rating dari pembeli sebelumnya, serta riwayat transaksinya. Penjual dengan riwayat baik mendapat penanda visual yang membuat etalasenya lebih menonjol.",
      },
      {
        q: "Bagaimana cara melaporkan penipuan atau akun mencurigakan?",
        a: "Dua cara: 1) Langsung dari aplikasi — buka profil atau postingan yang bersangkutan lalu tekan tombol lapor, 2) Via halaman Kontak — sertakan username/nomor HP terlapor, kronologi kejadian, screenshot chat, dan bukti pembayaran. Setiap laporan kami tindaklanjuti; laporan penipuan diprioritaskan. Jangan pernah membalas pesan pelaku atau mengirim uang tambahan setelah melapor.",
      },
      {
        q: "Apakah data pribadi saya aman di Kahade?",
        a: (
          <>
            Data pribadimu dilindungi sesuai ketentuan yang berlaku. Kamu
            berhak mengakses, memperbaiki, dan meminta penghapusan datamu —
            lihat{" "}
            <a
              href="https://legal.kahade.id/privasi"
              className="font-semibold text-black underline"
            >
              Kebijakan Privasi
            </a>{" "}
            kami atau hubungi layanan pelanggan untuk permintaan terkait data.
          </>
        ),
      },
    ],
  },
  {
    slug: "plus",
    title: "Kahade Plus",
    description: "Langganan, benefit, dan kuota pembebasan biaya.",
    items: [
      {
        q: "Apa itu Kahade Plus?",
        a: "Kahade Plus adalah program langganan untuk pengguna paling aktif — penjual rutin dan pembeli langganan. Harganya Rp99.000/bulan atau Rp899.000/tahun (hemat ~24% dibanding bulanan).",
      },
      {
        q: "Apa saja benefit Kahade Plus?",
        a: "Empat benefit utama: 1) Potongan 50% biaya transaksi, 2) Kuota pembebasan biaya Rp990.000 per periode langganan — akumulasi biayamu digratiskan sampai batas itu, 3) Prioritas layanan pelanggan dengan antrean khusus dan respons lebih cepat, 4) Badge Plus di profil yang bikin calon pembeli lebih percaya.",
      },
      {
        q: "Kapan Kahade Plus balik modal?",
        a: "Plus dirancang agar balik modal untuk penjual aktif. Contoh: penjual dengan transaksi Rp8 juta per bulan sudah menghemat lebih dari biaya langganan hanya dari potongan 50% biaya transaksi.",
      },
      {
        q: "Bagaimana cara berlangganan atau berhenti?",
        a: "Berlangganan dari menu Kahade Plus di aplikasi dan pilih paket bulanan atau tahunan. Kamu bisa berhenti kapan saja — benefit tetap berlaku sampai akhir periode berjalan.",
      },
      {
        q: "Apakah kuota Rp990.000 hangus jika tidak terpakai?",
        a: "Kuota pembebasan biaya Rp990.000 berlaku per periode langganan — akumulasi biaya transaksimu digratiskan sampai batas itu dalam satu periode. Gunakan sebaik-baiknya selama periode berjalan.",
      },
    ],
  },
];

/** Pertanyaan populer untuk pencarian di homepage. */
export const POPULAR_FAQS: { q: string; href: string }[] = [
  { q: "Berapa biaya transaksi di Kahade?", href: "/faq#pembayaran" },
  { q: "Bagaimana cara membeli barang?", href: "/faq#jual-beli" },
  { q: "Bagaimana cara mulai berjualan?", href: "/faq#jual-beli" },
  { q: "Apa itu Kahade Plus?", href: "/faq#plus" },
  { q: "Bagaimana cara kerja Patungan?", href: "/faq#jual-beli" },
  { q: "Kapan penjual menerima dana?", href: "/faq#pembayaran" },
  { q: "Bagaimana jika barang tidak sampai?", href: "/faq#pembayaran" },
  { q: "Bagaimana cara mendaftar akun?", href: "/faq#akun" },
];
