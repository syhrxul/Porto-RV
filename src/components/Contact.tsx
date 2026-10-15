"use client";

/**
 * Contact — formulir + info kontak + tombol WhatsApp.
 *
 * Formulir ini TIDAK memakai backend. Saat dikirim, isian dirangkai menjadi
 * pesan WhatsApp lalu membuka wa.me di tab baru.
 *
 * GANTI KE BACKEND (opsional): kalau nanti ingin tersimpan di database,
 * ganti isi `handleSubmit` dengan fetch() ke API route Anda, misalnya:
 *   await fetch("/api/kontak", { method: "POST", body: JSON.stringify(form) })
 */
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contact, whatsappLink } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { WhatsappIcon } from "@/components/icons";
import { SocialIcon } from "@/components/SocialIcon";

const inputClass =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors duration-200 hover:border-primary/50 focus:border-primary focus:outline-none";

const labelClass = "mb-2 block text-sm font-medium text-ink";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Halo RasaVisual, saya ingin bertanya tentang layanan dokumentasi.",
      "",
      `Nama: ${data.get("nama")}`,
      `Email: ${data.get("email")}`,
      `WhatsApp: ${data.get("whatsapp")}`,
      `Jenis layanan: ${data.get("layanan")}`,
      `Pesan: ${data.get("pesan")}`,
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="kontak" className="border-t border-line py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Formulir */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className={labelClass} htmlFor="nama">
                  Nama
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Nama lengkap Anda"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-1">
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="nama@email.com"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-1">
                <label className={labelClass} htmlFor="whatsapp">
                  Nomor WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="0812xxxxxxx"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-1">
                <label className={labelClass} htmlFor="layanan">
                  Jenis Layanan
                </label>
                <select id="layanan" name="layanan" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Pilih layanan
                  </option>
                  {contact.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="pesan">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  required
                  rows={5}
                  placeholder="Ceritakan tanggal, lokasi, dan kebutuhan Anda"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
                >
                  Kirim via WhatsApp
                  <Send size={17} strokeWidth={1.8} aria-hidden="true" />
                </button>
                <p className="text-sm text-muted" role="status">
                  {sent ? "WhatsApp dibuka di tab baru. Sampai jumpa di sana." : ""}
                </p>
              </div>
            </form>
          </Reveal>

          {/* Info kontak */}
          <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-md border border-line bg-mist p-8">
              <h3 className="text-xl text-ink">Informasi kontak</h3>

              <dl className="mt-7 space-y-6">
                <div className="flex gap-3.5">
                  <Phone size={18} strokeWidth={1.6} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-muted">Telepon / WhatsApp</dt>
                    <dd className="mt-1 text-ink">{contact.whatsappDisplay}</dd>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Mail size={18} strokeWidth={1.6} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-muted">Email</dt>
                    <dd className="mt-1 break-all text-ink">{contact.email}</dd>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <MapPin size={18} strokeWidth={1.6} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-muted">Studio</dt>
                    <dd className="mt-1 text-ink">{contact.address}</dd>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Clock size={18} strokeWidth={1.6} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-muted">Jam operasional</dt>
                    <dd className="mt-1 text-ink">{contact.hours}</dd>
                  </div>
                </div>
              </dl>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
              >
                <WhatsappIcon className="h-5 w-5" />
                Chat WhatsApp
              </a>

              <div className="mt-8 border-t border-line pt-6">
                <p className="text-sm text-muted">Ikuti karya terbaru kami</p>
                <div className="mt-4 flex gap-3">
                  {contact.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
                    >
                      <SocialIcon name={social.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
