/* ============================================================================
 * RasaVisual — PUSAT DATA KONTEN
 * ----------------------------------------------------------------------------
 * SEMUA teks, daftar portofolio, paket, testimoni, dan kontak ada di file ini.
 * Anda tidak perlu menyentuh file komponen untuk mengubah isi website.
 *
 * Cari komentar bertanda  // GANTI:  untuk tahu bagian mana yang wajib diganti
 * dengan data asli (nomor WhatsApp, alamat, sosial media, harga).
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. IDENTITAS BRAND
 * -------------------------------------------------------------------------*/
export const brand = {
  name: "RasaVisual",
  tagline: "Studio Dokumentasi Foto & Video",
  // GANTI: deskripsi singkat ini dipakai di SEO/Open Graph.
  description:
    "RasaVisual adalah studio dokumentasi foto dan video di Yogyakarta untuk event, wedding, company profile, dan foto produk.",
  city: "Yogyakarta",
};

/* ---------------------------------------------------------------------------
 * 2. NAVIGASI
 * -------------------------------------------------------------------------*/
export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tentang", href: "#tentang" },
  { label: "Paket", href: "#paket" },
  { label: "Kontak", href: "#kontak" },
] as const;

/* ---------------------------------------------------------------------------
 * 3. HERO
 * -------------------------------------------------------------------------*/
export const hero = {
  eyebrow: "Sejak 2023 · Yogyakarta",
  headline: ["Mengabadikan Momen,", "Menyampaikan Cerita"],
  // GANTI: subjudul ini yang paling pertama dibaca calon klien.
  subheadline:
    "Studio dokumentasi foto dan video yang mengubah momen berharga menjadi cerita visual yang utuh — dari pernikahan intim hingga profil perusahaan.",
  primaryCta: { label: "Lihat Portofolio", href: "#portofolio" },
  secondaryCta: { label: "Hubungi Kami", href: "#kontak" },
  // GANTI: ganti /public/images/hero.jpg dengan foto karya terbaik Anda.
  image: { src: "/images/landing.jpg", alt: "Dokumentasi suasana acara oleh RasaVisual" },
  // Angka kecil di bawah hero.
  highlights: [
    { value: "200+", label: "Proyek selesai" },
    { value: "200+", label: "Klien" },
    { value: "8", label: "Tahun berkarya" },
  ],
};

/* ---------------------------------------------------------------------------
 * 4. LAYANAN
 * `icon` harus salah satu nama dari daftar di src/components/ServiceIcon.tsx.
 * -------------------------------------------------------------------------*/
export type Service = {
  icon: "camera" | "video" | "wedding" | "corporate" | "product" | "drone";
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "camera",
    title: "Foto Event",
    description:
      "Liputan foto seminar, konser, pameran, dan acara kampus dengan hasil yang jernih dan terarah.",
    points: ["Liputan satu hari penuh", "Editing warna konsisten", "Galeri daring"],
  },
  {
    icon: "video",
    title: "Video Dokumentasi",
    description:
      "Video dokumenter acara, aftermovie, dan company profile yang rapi secara alur maupun suara.",
    points: ["Aftermovie 2–5 menit", "Versi vertikal siap sosial media", "Audio bersih"],
  },
  {
    icon: "wedding",
    title: "Wedding",
    description:
      "Dokumentasi akad, resepsi, dan sesi pre-wedding dengan pendekatan tenang dan tidak mengganggu.",
    points: ["Tim foto dan video", "Sesi pre-wedding", "Album cetak opsional"],
  },
  {
    icon: "corporate",
    title: "Company Profile",
    description:
      "Profil perusahaan, profil tim, dan konten korporat yang menonjolkan kredibilitas bisnis Anda.",
    points: ["Naskah dan storyboard", "Wawancara karyawan", "Aset siap tayang"],
  },
  {
    icon: "product",
    title: "Foto Produk",
    description:
      "Foto katalog dan konten produk untuk e-commerce, katalog, maupun kebutuhan periklanan.",
    points: ["Latar studio", "Sesuai standar marketplace", "Retouching bersih"],
  },
  {
    icon: "drone",
    title: "Drone & Aerial",
    description:
      "Pengambilan gambar udara untuk memperlihatkan skala lokasi, venue, dan area perusahaan.",
    points: ["Operator berpengalaman", "Resolusi 4K", "Perizinan dibantu"],
  },
];

/* ---------------------------------------------------------------------------
 * 5. PORTOFOLIO
 * `category` harus sama persis dengan `id` di portfolioCategories.
 * GANTI: ganti src tiap item dengan foto asli Anda (rasio bebas, kolom masonry).
 * -------------------------------------------------------------------------*/
export const portfolioCategories = [
  { id: "semua", label: "Semua" },
  { id: "event", label: "Event" },
  { id: "wedding", label: "Wedding" },
  { id: "corporate", label: "Corporate" },
  { id: "produk", label: "Produk" },
] as const;

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  year: string;
  category: "event" | "wedding" | "corporate" | "produk";
  src: string;
  alt: string;
};

export const portfolioItems: PortfolioItem[] = [
  { id: "p01", title: "Dokumentasi Panggung Event Sekolah", client: "SMA Negeri 1 Purbalingga", year: "2024", category: "corporate", src: "/images/smansa.png", alt: "Dokumentasi panggung event sekolah" },
  { id: "p02", title: "Wedding", client: "Pasangan", year: "2026", category: "wedding", src: "/images/wedding.jpg", alt: "Dokumentasi akad pernikahan di rumah pengantin" },
  { id: "p03", title: "Jasa Edit pembuatan aplikasi", client: "Mahasiswa Universitas", year: "2026", category: "produk", src: "/images/jasa edit.png", alt: "Sesi foto korporat laporan tahunan" },
  { id: "p04", title: "Film Cermin Retak", client: "-", year: "2024", category: "produk", src: "/images/film.webp", alt: "Pembuatan film cermin retak" },
  { id: "p12", title: "Event bersama Garuda, Mitsubishi, OJK, dan Pemerintah Purbalingga", client: "corporate", year: "2025", category: "corporate", src: "/images/portfolio-12.png", alt: "Event besar yang kami tangkap" },
];

/* ---------------------------------------------------------------------------
 * 6. TENTANG KAMI
 * -------------------------------------------------------------------------*/
export const about = {
  eyebrow: "Tentang Kami",
  title: "Studio kecil dengan standar kerja yang tinggi",
  // GANTI: cerita singkat studio Anda. Tiap string = satu paragraf.
  paragraphs: [
    "RasaVisual lahir dari kebiasaan sederhana: merekam momen yang orang lain lewatkan. Berawal dari satu kamera dan lingkaran pertemanan di Yogyakarta, kami tumbuh menjadi tim kecil yang menangani dokumentasi acara, pernikahan, dan kebutuhan visual perusahaan.",
    "Kami bekerja dengan pendekatan yang tenang. Sebelum hari-H, kami duduk bersama klien untuk memahami alur acara, orang-orang penting, dan momen yang tidak boleh terlewat. Saat produksi, kami hadir tanpa mengganggu jalannya acara.",
    "Setiap hasil melewati proses seleksi dan penyuntingan warna yang konsisten, sehingga foto dan video terasa satu cerita — bukan kumpulan gambar yang berdiri sendiri.",
  ],
  // GANTI: ganti dengan foto tim / suasana kerja Anda.
  image: { src: "/images/about.png", alt: "Tim RasaVisual sedang bekerja di lokasi" },
  // Angka statistik — animasi count-up otomatis dari nilai ini.
  stats: [
    { value: 200, suffix: "+", label: "Proyek selesai" },
    { value: 200, suffix: "+", label: "Klien & institusi" },
    { value: 3, suffix: "", label: "Tahun pengalaman" },
    { value: 12, suffix: "", label: "Kota terjangkau" },
  ],
};

/* ---------------------------------------------------------------------------
 * 7. PROSES KERJA
 * -------------------------------------------------------------------------*/
export const processSteps = [
  {
    title: "Konsultasi",
    description:
      "Kami mendengar kebutuhan Anda: jenis acara, jumlah tamu, suasana yang diinginkan, dan hasil seperti apa yang dibayangkan.",
  },
  {
    title: "Perencanaan",
    description:
      "Kami menyusun rundown liputan, daftar momen wajib, kebutuhan alat, dan jadwal tim agar hari-H berjalan tanpa kejutan.",
  },
  {
    title: "Produksi",
    description:
      "Hari pengambilan gambar. Tim hadir lebih awal, bekerja senyap, dan memastikan setiap momen penting terliput dari sudut terbaik.",
  },
  {
    title: "Hasil Akhir",
    description:
      "Seleksi, penyuntingan warna, dan penyusunan alur. Anda menerima galeri daring serta berkas siap unggah dalam hitungan hari kerja.",
  },
];

/* ---------------------------------------------------------------------------
 * 8. PAKET / HARGA
 * GANTI: harga dummy di bawah dengan harga asli Anda.
 * `popular: true` menandai satu paket sebagai "Paling Populer".
 * -------------------------------------------------------------------------*/
export const packages = [
  {
    name: "Paket Mini",
    price: "Rp 1.500.000",
    unit: "per hari",
    summary: "Untuk kebutuhan dokumentasi singkat dan konten sosial media.",
    features: [
      "unlimited foto + 50 foto edit",
      "vidio dokumentasi teaser dan after movie",
      "2 personil",
      "vidio content creator",
    ],
    popular: false,
  },
  {
    name: "Paket Premium",
    price: "Rp 4.200.000",
    unit: "per hari",
    summary: "Pilihan paling banyak dipakai untuk acara dan pernikahan.",
    features: [
      "Unlimitied dokumentasi foto dan edit 300 foto",
      "vidio dokumentasi berupa teaser dan after movie",
      "content creator untuk sosial media",
      "mini studio unlimited foto + edit",
      "5 Personil",
      "Drone mavic 3 air",
    ],
    popular: true,
  },
  {
    name: "Paket Standar",
    price: "Rp 2.100.000",
    unit: "per hari",
    summary: "Untuk liputan besar dengan kebutuhan visual menyeluruh.",
    features: [
      "unlimited foto + 80 foto edit",
      "vidio dokumentasi : teaser dan aftermovie",
      "drone 1 baterai",
      "content creator",
      "3 personil",
    ],
    popular: false,
  },
];

export const pricingNote =
  "Harga di atas adalah kisaran awal. Kebutuhan di luar daftar dapat didiskusikan.";

/* ---------------------------------------------------------------------------
 * 9. TESTIMONI
 * GANTI: ganti dengan testimoni asli dari klien Anda.
 * -------------------------------------------------------------------------*/
export const testimonials = [
  {
    quote:
      "Timnya datang lebih awal dan hampir tidak terasa keberadaannya. Hasil fotonya membuat acara kami terlihat seperti yang kami bayangkan selama ini.",
    name: "Nabil",
    role: "Klien Event, Yogyakarta",
  },
  {
    quote:
      "Video profil perusahaan kami dipakai untuk presentasi ke mitra. Alurnya jelas dan suaranya bersih, tanpa perlu banyak revisi.",
    name: "Bayu Nugroho",
    role: "Marketing Manager, PT Sinar Logam",
  },
  {
    quote:
      "Kami memakai RasaVisual untuk tiga acara berturut-turut. Konsistensi warna dan kerapian hasilnya yang membuat kami terus kembali.",
    name: "Rahma Fitriani",
    role: "Panitia Event, Sleman",
  },
];

/* ---------------------------------------------------------------------------
 * 10. CTA PENUTUP
 * -------------------------------------------------------------------------*/
export const closingCta = {
  eyebrow: "Jadwalkan Sesi",
  title: "Punya momen yang layak dikenang?",
  description:
    "Ceritakan tanggal dan rencana acara Anda. Kami akan bantu susun rencana liputan yang paling sesuai dengan kebutuhan dan anggaran.",
  button: { label: "Booking Sekarang", href: "#kontak" },
};

/* ---------------------------------------------------------------------------
 * 11. KONTAK
 * GANTI SEMUA nilai di bawah dengan data asli Anda.
 * whatsappNumber = format internasional TANPA tanda plus/spasi/strip.
 * -------------------------------------------------------------------------*/
export const contact = {
  eyebrow: "Kontak",
  title: "Mari bicarakan proyek Anda",
  description:
    "Isi formulir berikut atau hubungi kami langsung melalui WhatsApp. Kami membalas pada hari kerja yang sama.",
  whatsappNumber: "6285974314543", // GANTI: nomor WhatsApp asli, contoh 628112223334
  whatsappDisplay: "+62 859-7431-4543", // GANTI: nomor untuk ditampilkan
  whatsappMessage: "Halo RasaVisual, saya ingin bertanya tentang layanan dokumentasi.",
  email: "halo@rasavisual.id", // GANTI
  phoneDisplay: "+62 859-7431-4543", // GANTI
  address: "Jl. Kaliurang Km 13, Sleman, Yogyakarta 55581", // GANTI
  hours: "Senin–Sabtu, 08.00–20.00 WIB",
  // GANTI: tautan sosial media asli.
  socials: [
    { label: "Instagram", href: "https://instagram.com/rasa.visuall", icon: "instagram" as const },
  ],
  // Pilihan pada dropdown "Jenis Layanan" di formulir.
  serviceOptions: [
    "Foto Event",
    "Video Dokumentasi",
    "Wedding",
    "Company Profile",
    "Foto Produk",
    "Drone / Aerial",
    "Lainnya",
  ],
};

/* ---------------------------------------------------------------------------
 * 12. FOOTER
 * -------------------------------------------------------------------------*/
export const footer = {
  blurb:
    "Studio dokumentasi foto dan video di Yogyakarta. Merekam momen, menyusun cerita.",
  copyright: "© 2026 RasaVisual.",
};

/* Helper: susun tautan WhatsApp lengkap dari data di atas. */
export function whatsappLink(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
