"use client";

/**
 * Portfolio — filter kategori + galeri masonry (CSS columns).
 * Klik gambar membuka Lightbox. Overlay hover memakai warna solid semi-transparan.
 */
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolioCategories, portfolioItems } from "@/data/site";
import { EASE, Reveal, SectionHeading, useReducedMotionNow } from "@/components/motion-primitives";
import { Lightbox } from "@/components/Lightbox";

export function Portfolio() {
  const reduce = useReducedMotionNow();
  const [filter, setFilter] = useState<string>("semua");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      filter === "semua"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <section id="portofolio" className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Portofolio"
            title="Sebagian pekerjaan yang kami kerjakan"
            description="Pilih kategori untuk menyaring. Klik salah satu gambar untuk melihatnya lebih besar."
          />
        </Reveal>

        {/* Filter kategori */}
        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter kategori portofolio">
            {portfolioCategories.map((category) => {
              const isActive = filter === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setFilter(category.id);
                    setActiveIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={`rounded-md border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "border-primary bg-primary text-white"
                      : "border-line bg-white text-ink/75 hover:border-primary hover:text-primary"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Galeri masonry */}
        <div key={filter} className="mt-10 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: Math.min(index * 0.05, 0.4) }}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-md border border-line bg-mist text-left"
              aria-label={`Buka pratinjau ${item.title}`}
            >
              <div className="relative aspect-4/5 w-full overflow-hidden">
                {/* GANTI: ganti src di src/data/site.ts dengan foto asli. */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
                {/* Overlay solid semi-transparan — bukan gradasi */}
                <div className="absolute inset-0 flex flex-col justify-end bg-[rgb(11_27_51_/_0.72)] p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <p className="font-display text-xl leading-snug text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-white/70">
                    {item.client} · {item.year}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        items={visible}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
