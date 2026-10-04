/**
 * Data FAQ Pusat Bantuan Kahade.
 * Sumber kebenaran: Whitepaper Kahade v1.0 (Oktober 2026).
 * Aturan bahasa: JANGAN pakai "escrow", "rekber", "ditahan", "penahanan".
 * Tombol beli: "Beli via Kahade". Bahasa: Indonesia.
 */

export interface FaqItem {
  q: string;
  a: string;
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
        a: "Pendaftaran hanya membutuhkan nomor HP. Masukkan nomor HP kamu, lalu kirim pesan ke nomor WhatsApp resmi Kahade untuk menerima kode OTP. Masukkan kode tersebut dan akunmu langsung aktif. Pastikan nomor WhatsApp yang kamu pakai aktif agar kode bisa diterima.",
      },
      {
        q: "Apakah pendaftaran Kahade berbayar?",
        a: "Tidak. Membuat akun dan mulai berjualan di Kahade gratis, tanpa biaya pendaftaran dan tanpa proses verifikasi berbelit.",
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
        a: "Karena pendaftaran memakai nomor HP, kamu bisa masuk kembali dengan meminta kode OTP baru via WhatsApp ke nomor HP terdaftar. Pastikan nomor tersebut masih aktif.",
      },
      {
        q: "Bagaimana cara menghapus akun saya?",
        a: "Kamu berhak meminta penghapusan akun dan datamu kapan saja. Hubungi layanan pelanggan melalui halaman Kontak — tim kami akan memverifikasi identitasmu lalu memproses penghapusan sesuai ketentuan yang berlaku.",
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
        a: "Semudah membuat postingan media sosial: buat etalase (nama, foto, deskripsi singkat), lalu posting barang atau jasamu dengan foto/video, harga, dan deskripsi. Tidak ada biaya pendaftaran dan tidak ada verifikasi berbelit untuk mulai berjualan. Verifikasi identitas baru diminta saat penarikan dana pertama — demi keamanan semua pihak.",
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
        a: "Penyedia jastip membuat \"trip\" — misalnya \"Jastip Jepang, 10–17 Desember\". Kamu menitipkan barang yang diinginkan beserta budget, penyedia membeli barang dan mengunggah bukti pembelian, lalu barang dikirim kepadamu setelah tiba.",
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
        a: "Pembayaran dilakukan via Kahade dengan DANA. Pilih metode pembayaranmu saat menekan \"Beli via Kahade\" dan selesaikan dalam hitungan detik.",
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
        a: "Buka menu penarikan di aplikasi dan ikuti langkahnya. Pada penarikan pertama, kamu akan diminta verifikasi identitas — ini wajib demi keamanan dan hanya dilakukan sekali.",
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
        a: "Ajukan sengketa dari detail transaksimu dan sertakan bukti: screenshot chat, foto barang, dan resi pengiriman. Tim Trust & Safety Kahade akan meninjau bukti kedua belah pihak dan memberikan keputusan yang adil dan transparan.",
      },
      {
        q: "Bagaimana cara mengenali penjual yang terpercaya?",
        a: "Perhatikan tiga hal: badge verifikasi di profil, ulasan dan rating dari pembeli sebelumnya, serta riwayat transaksinya. Penjual dengan riwayat baik mendapat penanda visual yang membuat etalasenya lebih menonjol.",
      },
      {
        q: "Bagaimana cara melaporkan penipuan atau akun mencurigakan?",
        a: "Laporkan langsung dari profil atau postingan yang bersangkutan lewat tombol lapor, atau hubungi layanan pelanggan melalui halaman Kontak dengan menyertakan bukti (screenshot chat, bukti pembayaran). Setiap laporan kami tindaklanjuti.",
      },
      {
        q: "Apakah data pribadi saya aman di Kahade?",
        a: "Data pribadimu dilindungi sesuai ketentuan yang berlaku. Kamu berhak mengakses, memperbaiki, dan meminta penghapusan datamu — lihat Kebijakan Privasi kami atau hubungi layanan pelanggan untuk permintaan terkait data.",
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
        a: "Kuota pembebasan biaya berlaku per periode langganan dan tidak diakumulasikan ke periode berikutnya. Gunakan sebaik-baiknya selama periode berjalan.",
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
