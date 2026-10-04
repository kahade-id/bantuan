import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@kahade/ui"],
  async headers() {
    return [
      // Ikon statis brand: cache lama immutable (file jarang berubah).
      {
        source:
          "/:icon(favicon.svg|apple-touch-icon.png|icon-32x32.png|icon-16x16.png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
