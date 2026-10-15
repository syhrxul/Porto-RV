"use client";

/**
 * Process — 4 langkah dalam timeline.
 * Mobile: garis vertikal di kiri. Desktop: 4 kolom dengan garis horizontal.
 */
import { processSteps } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/motion-primitives";

export function Process() {
  return (
    <section id="proses" className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Proses Kerja"
            title="Empat langkah, tanpa kejutan di tengah jalan"
            description="Alur ini kami pakai untuk semua jenis proyek, dari liputan satu jam sampai produksi perusahaan."
          />
        </Reveal>

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Garis penghubung — solid, tipis */}
          <span
            aria-hidden="true"
            className="absolute top-5 left-[7px] h-[calc(100%-2.5rem)] w-px bg-line lg:top-[7px] lg:left-0 lg:h-px lg:w-full"
          />

          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative pl-9 lg:pt-10 lg:pl-0">
                {/* Titik penanda langkah */}
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-0 h-3.5 w-3.5 rounded-full border-2 border-primary bg-white lg:top-0"
                />
                <span className="eyebrow">Langkah {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
