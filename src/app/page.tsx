import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { ClosingCta } from "@/components/ClosingCta";
import { Contact } from "@/components/Contact";

/**
 * Halaman utama RasaVisual — satu halaman, navigasi smooth scroll.
 * Urutan section mengikuti struktur di dokumen brief:
 * Hero → Layanan → Portofolio → Tentang → Proses → Paket → Testimoni
 * → CTA penutup → Kontak. (Navbar & Footer ada di layout.tsx)
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Pricing />
      <Testimonials />
      <ClosingCta />
      <Contact />
    </>
  );
}
