import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bantuan.kahade.id";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/cara-kerja`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontak`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
