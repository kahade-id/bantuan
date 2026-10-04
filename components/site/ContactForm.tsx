"use client";

import { useState } from "react";
import { Input, Textarea, Select, Button, Alert } from "@kahade/ui";

const SUPPORT_EMAIL = "halo@kahade.id";

const CATEGORIES = [
  { value: "", label: "Pilih kategori", disabled: true },
  { value: "umum", label: "Pertanyaan umum" },
  { value: "akun", label: "Akun" },
  { value: "jual-beli", label: "Jual-beli" },
  { value: "pembayaran", label: "Pembayaran" },
  { value: "keamanan", label: "Keamanan & laporan penipuan" },
  { value: "plus", label: "Kahade Plus" },
  { value: "lainnya", label: "Lainnya" },
];

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Formulir kontak: validasi inline Bahasa Indonesia, cegah double-submit,
 * dan merangkai email via mailto (belum ada backend formulir).
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = "Nama wajib diisi.";
    if (!email.trim()) {
      next.email = "Email wajib diisi.";
    } else if (!EMAIL_RE.test(email.trim())) {
      next.email = "Masukkan email yang valid, mis. nama@email.com.";
    }
    if (!category) next.category = "Pilih salah satu kategori.";
    const msg = message.trim();
    if (!msg) {
      next.message = "Pesan wajib diisi.";
    } else if (msg.length < 20) {
      next.message = "Ceritakan sedikit lebih detail (minimal 20 karakter).";
    }
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    // Simulasi pengiriman singkat agar tombol loading terlihat & double-submit tertahan.
    window.setTimeout(() => {
      const categoryLabel =
        CATEGORIES.find((c) => c.value === category)?.label ?? category;
      const subject = `[${categoryLabel}] ${name.trim()}`;
      const body = `Nama: ${name.trim()}\nEmail: ${email.trim()}\nKategori: ${categoryLabel}\n\n${message.trim()}`;
      window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setSubmitting(false);
      setSent(true);
    }, 600);
  };

  if (sent) {
    return (
      <Alert variant="success" title="Pesanmu siap dikirim">
        Aplikasi email di perangkatmu akan terbuka dengan pesan yang sudah
        terisi — tinggal tekan kirim. Kalau tidak terbuka otomatis, kirim
        manual ke{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="font-semibold underline"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </Alert>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Formulir kontak">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Nama lengkap"
          required
          autoComplete="name"
          placeholder="Nama kamu"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        <Input
          label="Email"
          required
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="nama@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
      </div>
      <div className="mt-4">
        <Select
          label="Kategori"
          required
          options={CATEGORIES}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          error={errors.category}
        />
      </div>
      <div className="mt-4">
        <Textarea
          label="Pesan"
          required
          rows={5}
          placeholder="Ceritakan masalah atau pertanyaanmu sedetail mungkin…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={errors.message}
        />
      </div>
      <Button
        type="submit"
        loading={submitting}
        className="mt-5 w-full sm:w-auto"
      >
        {submitting ? "Mengirim…" : "Kirim Pesan"}
      </Button>
      <p className="mt-3 text-xs text-neutral-500">
        Pesan dikirim via aplikasi email ke {SUPPORT_EMAIL}. Respons maksimal
        1×24 jam kerja.
      </p>
    </form>
  );
}
