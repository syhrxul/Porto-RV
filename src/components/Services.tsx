"use client";

/**
 * Services — grid kartu layanan dengan ikon.
 * Kartu: latar putih, garis tipis, sudut rounded-md, tanpa gradasi.
 */
import { Check } from "lucide-react";
import { services } from "@/data/site";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Reveal, SectionHeading } from "@/components/motion-primitives";

export function Services() {
  return (
    <section id="layanan" className="border-y border-line bg-mist py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Layanan"
            title="Enam cara kami membantu Anda bercerita"
            description="Setiap layanan dikerjakan dengan alur yang sama: perencanaan rapi, produksi tenang, dan hasil yang konsisten."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06} className="bg-white">
              <article className="flex h-full flex-col p-8 transition-colors duration-300 hover:bg-white lg:p-10">
                <ServiceIcon name={service.icon} className="h-8 w-8 text-primary" />

                <h3 className="mt-7 text-2xl text-ink">{service.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink/80">
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="mt-1 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
