import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Supaya dev server juga melayani aset ke http://127.0.0.1:3002
  // (bukan hanya localhost). Berguna kalau Anda menguji dari perangkat lain.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Semua gambar dummy ada di /public/images, jadi tidak wajib domain remote.
  // Kalau nanti Anda memakai gambar dari internet, tambahkan hostname-nya di sini.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
