"use client";

/**
 * Lightbox — penampil gambar penuh layar untuk portofolio.
 * Overlay memakai warna SOLID (bukan gradasi). Bisa ditutup dengan Esc,
 * tombol silang, klik latar, dan navigasi dengan panah kiri/kanan.
 */
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import type { PortfolioItem } from "@/data/site";
import { EASE, useReducedMotionNow } from "@/components/motion-primitives";

type Props = {
  items: PortfolioItem[];
  /** Index item yang sedang dibuka, null = lightbox tertutup. */
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, activeIndex, onClose, onNavigate }: Props) {
  const reduce = useReducedMotionNow();
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = activeIndex !== null;
  const item = isOpen ? items[activeIndex] : null;

  const go = useCallback(
    (step: number) => {
      if (activeIndex === null) return;
      const next = (activeIndex + step + items.length) % items.length;
      onNavigate(next);
    },
    [activeIndex, items.length, onNavigate],
  );

  // Keyboard + kunci scroll selama lightbox terbuka.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, go]);

  return (
    <AnimatePresence>
      {isOpen && item ? (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} — pratinjau foto`}
          className="fixed inset-0 z-100 flex flex-col bg-[rgb(11_27_51_/_0.94)]"
          initial={reduce ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          onClick={onClose}
        >
          {/* Bar atas: judul + tombol tutup */}
          <div
            className="flex items-start justify-between gap-6 px-6 py-5 md:px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="min-w-0">
              <p className="truncate font-display text-xl text-white sm:text-2xl">{item.title}</p>
              <p className="mt-1 text-sm text-white/65">
                {item.client} · {item.year}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="hidden text-sm tabular-nums text-white/60 sm:block">
                {activeIndex + 1} / {items.length}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup pratinjau"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/25 text-white transition-colors duration-200 hover:bg-white hover:text-ink"
              >
                <X size={20} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          {/* Gambar */}
          <div
            className="flex flex-1 items-center justify-center px-4 pb-6 md:px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <motion.div
              key={item.id}
              initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative h-full max-h-[72vh] w-full max-w-5xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Navigasi */}
          <div
            className="flex items-center justify-center gap-4 border-t border-white/15 px-6 py-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto sebelumnya"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-white/25 px-4 text-sm text-white transition-colors duration-200 hover:bg-white hover:text-ink"
            >
              <ChevronLeft size={18} strokeWidth={1.6} />
              Sebelumnya
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto berikutnya"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-white/25 px-4 text-sm text-white transition-colors duration-200 hover:bg-white hover:text-ink"
            >
              Berikutnya
              <ChevronRight size={18} strokeWidth={1.6} />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
