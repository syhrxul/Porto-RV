"use client";

/**
 * Pricing — 3 kartu paket.
 * Paket "Paling Populer" ditandai blok biru solid dengan teks putih.
 */
import { Check } from "lucide-react";
import { packages, pricingNote } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/motion-primitives";

export function Pricing() {
  return (
    <section id="paket" className="border-y border-line bg-mist py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Paket & Harga"
            title="Pilih paket, atau susun sendiri"
            description="Semua paket sudah termasuk perencanaan, penyuntingan warna, dan galeri daring. Harga dapat menyesuaikan lokasi dan durasi."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
          {packages.map((pkg, i) => {
            const popular = pkg.popular;
            return (
              <Reveal key={pkg.name} delay={i * 0.08}>
                <article
                  className={`flex h-full flex-col rounded-md p-8 lg:p-10 ${
                    popular
                      ? "bg-primary text-white shadow-[var(--shadow-lift)] lg:-mt-4 lg:pb-14"
                      : "border border-line bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={`text-2xl ${popular ? "text-white" : "text-ink"}`}>
                      {pkg.name}
                    </h3>
                    {popular ? (
                      <span className="rounded-md border border-white/40 px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.16em] text-white uppercase">
                        Paling Populer
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={`mt-4 text-[0.9375rem] leading-relaxed ${
                      popular ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {pkg.summary}
                  </p>

                  <p className="mt-8 flex items-baseline gap-2">
                    <span
                      className={`font-display text-4xl leading-none ${
                        popular ? "text-white" : "text-ink"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span className={`text-sm ${popular ? "text-white/70" : "text-muted"}`}>
                      /{pkg.unit}
                    </span>
                  </p>

                  <ul
                    className={`mt-8 flex-1 space-y-3 border-t pt-8 ${
                      popular ? "border-white/25" : "border-line"
                    }`}
                  >
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[0.9375rem]">
                        <Check
                          size={17}
                          strokeWidth={2}
                          className={`mt-1 shrink-0 ${popular ? "text-white" : "text-primary"}`}
                          aria-hidden="true"
                        />
                        <span className={popular ? "text-white/90" : "text-ink/85"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#kontak"
                    className={`mt-10 inline-flex items-center justify-center rounded-md px-6 py-3.5 font-medium transition-colors duration-200 ${
                      popular
                        ? "bg-white text-primary hover:bg-mist"
                        : "border border-line text-ink hover:border-primary hover:text-primary"
                    }`}
                  >
                    Pilih {pkg.name}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-sm text-muted">{pricingNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
