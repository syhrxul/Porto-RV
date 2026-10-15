"use client";

/**
 * Testimonials — carousel sederhana (satu kartu per layar di mobile,
 * tiga kolom di desktop). Panah navigasi + indikator titik.
 * Versi desktop menampilkan semua kartu; carousel dipakai saat layar sempit.
 */
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/site";
import { EASE, Reveal, SectionHeading, useReducedMotionNow } from "@/components/motion-primitives";

export function Testimonials() {
  const reduce = useReducedMotionNow();
  const [index, setIndex] = useState(0);

  const go = (step: number) =>
    setIndex((current) => (current + step + testimonials.length) % testimonials.length);

  // Rotasi otomatis, hanya kalau pengguna tidak minta reduce motion.
  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <section id="testimoni" className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Testimoni"
            title="Kata mereka setelah acara selesai"
          />
        </Reveal>

        {/* Desktop: tiga kartu berdampingan */}
        <div className="mt-16 hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-md border border-line bg-white p-8">
                <Quote size={26} strokeWidth={1.4} className="text-primary" aria-hidden="true" />
                <blockquote className="mt-6 flex-1 text-[1.0625rem] leading-relaxed text-ink/85">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-6">
                  <span className="block font-medium text-ink">{item.name}</span>
                  <span className="mt-1 block text-sm text-muted">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Mobile: carousel satu kartu */}
        <div className="mt-14 lg:hidden">
          <div className="relative min-h-72">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={testimonials[index].name}
                initial={reduce ? undefined : { opacity: 0, x: 24 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex h-full flex-col rounded-md border border-line bg-white p-8"
              >
                <Quote size={26} strokeWidth={1.4} className="text-primary" aria-hidden="true" />
                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-ink/85">
                  {testimonials[index].quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-6">
                  <span className="block font-medium text-ink">{testimonials[index].name}</span>
                  <span className="mt-1 block text-sm text-muted">{testimonials[index].role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2" aria-hidden="true">
              {testimonials.map((item, i) => (
                <span
                  key={item.name}
                  className={`h-1.5 w-6 rounded-full transition-colors duration-200 ${
                    i === index ? "bg-primary" : "bg-line"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Testimoni sebelumnya"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <ChevronLeft size={18} strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Testimoni berikutnya"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <ChevronRight size={18} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
