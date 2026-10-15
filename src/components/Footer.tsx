/**
 * Footer — logo, navigasi singkat, layanan, sosial media, copyright.
 * Bisa dipakai di server component karena tanpa state.
 */
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { brand, contact, footer, navLinks, services } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#beranda" className="flex items-center gap-3" aria-label={`${brand.name} — beranda`}>
              <Image
                src="/logo/logo-512.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-xl leading-none text-ink">{brand.name}</span>
            </a>
            <p className="measure mt-5 text-[0.9375rem] leading-relaxed text-muted">
              {footer.blurb}
            </p>
            <div className="mt-6 flex gap-3">
              {contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  <SocialIcon name={social.icon} className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <nav className="lg:col-span-3 lg:col-start-6" aria-label="Navigasi footer">
            <h2 className="eyebrow">Navigasi</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-ink/80 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Layanan */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="eyebrow">Layanan</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title} className="text-[0.9375rem] text-ink/80">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Baris bawah */}
        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{footer.copyright}</p>
          <a
            href="#beranda"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-primary"
          >
            Kembali ke atas
            <ArrowUp size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
