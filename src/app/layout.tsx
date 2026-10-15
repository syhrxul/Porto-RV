import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IntroLoader } from "@/components/IntroLoader";
import { brand } from "@/data/site";

/* Tipografi: serif untuk judul, sans untuk isi. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  // GANTI: alamat domain asli setelah situs diunggah.
  metadataBase: new URL("https://rasavisual.id"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "jasa dokumentasi",
    "fotografer event",
    "videografer wedding",
    "company profile",
    "foto produk",
    "Yogyakarta",
  ],
  authors: [{ name: brand.name }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    images: ["/images/og.jpg"],
  },
  // Favicon & ikon Apple memakai konvensi berkas Next.js:
  // src/app/icon.png dan src/app/apple-icon.png (keduanya dari logo RasaVisual).
  // Ganti kedua berkas itu kalau logo berubah.
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="flex min-h-full flex-col bg-white">
        <IntroLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
