"use client";

/**
 * ClosingCta — section biru solid (#004095) dengan teks putih.
 * Ini satu-satunya blok warna penuh di halaman, jadi jadi titik fokus.
 */
import { ArrowRight } from "lucide-react";
import { closingCta } from "@/data/site";
import { Reveal } from "@/components/motion-primitives";

export function ClosingCta() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-white/70">{closingCta.eyebrow}</p>
              <h2 className="mt-5 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                {closingCta.title}
              </h2>
              <p className="measure mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                {closingCta.description}
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <a
                href={closingCta.button.href}
                className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 font-medium text-primary transition-colors duration-200 hover:bg-mist"
              >
                {closingCta.button.label}
                <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
