"use client";

/**
 * Hero — teks masuk bertahap (staggered fade-up), gambar besar di kanan.
 * Angka-angka kecil di bawah memperkuat kesan sudah berpengalaman.
 */
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero } from "@/data/site";
import { EASE, fadeUp, staggerParent, useReducedMotionNow } from "@/components/motion-primitives";

export function Hero() {
  const reduce = useReducedMotionNow();

  return (
    <section id="beranda" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Garis aksen tipis di belakang judul — solid, bukan gradasi. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 hidden h-px bg-line lg:block"
      />

      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Kolom teks */}
        <motion.div
          className="lg:col-span-6 xl:col-span-5"
          variants={reduce ? undefined : staggerParent}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
        >
          <motion.p variants={reduce ? undefined : fadeUp} className="eyebrow">
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-6 text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            {hero.headline.map((line, i) => (
              <motion.span
                key={line}
                variants={reduce ? undefined : fadeUp}
                className="block"
                /* Baris kedua diberi warna biru supaya ada penekanan tanpa gradasi. */
                {...(i === 1 ? { style: { color: "var(--color-primary)" } } : {})}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="measure mt-7 text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div variants={reduce ? undefined : fadeUp} className="mt-10 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
            >
              {hero.primaryCta.label}
              <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3.5 font-medium text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          {/* Statistik ringkas */}
          <motion.dl
            variants={reduce ? undefined : fadeUp}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {hero.highlights.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block font-display text-3xl text-ink sm:text-4xl">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{item.label}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Kolom gambar */}
        <motion.div
          className="lg:col-span-6 lg:col-start-7 xl:col-span-7"
          initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
        >
          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-md bg-mist shadow-[var(--shadow-lift)] sm:aspect-16/12 lg:aspect-4/5">
              {/* GANTI: /public/images/hero.jpg dengan foto karya terbaik Anda. */}
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            {/* Kartu kecil penanda, solid putih + garis tipis */}
            <div className="absolute -bottom-6 left-6 hidden rounded-md border border-line bg-white px-5 py-4 shadow-[var(--shadow-soft)] sm:block">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                Sedang menerima
              </p>
              <p className="mt-1 font-display text-lg text-ink">Jadwal 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
