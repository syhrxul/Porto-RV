"use client";

/**
 * Primitif animasi bersama.
 * Semua section memakai <Reveal> agar ritme animasinya seragam,
 * dan otomatis dimatikan saat pengguna mengaktifkan "reduce motion".
 */
import { motion, type Variants } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

/* Durasi dan easing tunggal untuk seluruh situs. */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const DURATION = 0.7;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

/** Parent untuk animasi bertahap (staggered). */
export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ---------------------------------------------------------------------------
 * Hook "reduce motion" yang aman untuk hidrasi.
 *
 * Tidak memakai useReducedMotion() dari framer-motion karena hook itu membaca
 * nilai global yang hanya terisi di browser: render server dan render pertama
 * klien jadi berbeda, React melaporkan hydration mismatch, dan sebagian elemen
 * bisa tertinggal transparan.
 *
 * useSyncExternalStore adalah cara resmi React untuk membaca sistem eksternal:
 * saat hidrasi dipakai snapshot server (false), lalu nilainya diperbarui.
 * -------------------------------------------------------------------------*/
const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

function mediaQuery(): MediaQueryList | null {
  return typeof window === "undefined" ? null : window.matchMedia(REDUCE_QUERY);
}

function subscribeReducedMotion(onChange: () => void) {
  const query = mediaQuery();
  if (!query) return () => {};
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function readReducedMotion() {
  return mediaQuery()?.matches ?? false;
}

/** Snapshot server: selalu false supaya markup server = markup hidrasi. */
function readReducedMotionOnServer() {
  return false;
}

/** True kalau pengguna memilih "kurangi gerakan" di sistem operasinya. */
export function useReducedMotionNow() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    readReducedMotion,
    readReducedMotionOnServer,
  );
}

type RevealProps = {
  children: ReactNode;
  /** Jeda tambahan dalam detik. */
  delay?: number;
  className?: string;
  /** Pakai saat elemen sudah terlihat sejak awal (mis. hero). */
  immediate?: boolean;
};

/**
 * Fade-up saat elemen masuk viewport (sekali saja).
 * Kalau pengguna minta reduce motion, konten langsung tampil tanpa animasi.
 */
export function Reveal({ children, delay = 0, className, immediate = false }: RevealProps) {
  const reduce = useReducedMotionNow();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduce ? false : "hidden"}
      {...(immediate || reduce
        ? { animate: "show" as const }
        : { whileInView: "show" as const, viewport: { once: true, margin: "-90px" } })}
      transition={{ delay: reduce ? 0 : delay, duration: reduce ? 0 : DURATION, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Pembungkus judul section: nomor besar + eyebrow + judul + deskripsi.
 * Nomor besar (01, 02, ...) adalah penanda visual khas halaman ini.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span
          className={`font-display text-2xl leading-none ${isDark ? "text-white/45" : "text-primary/35"}`}
          aria-hidden="true"
        >
          {index}
        </span>
        <span className={`eyebrow ${isDark ? "text-white/70" : ""}`}>{eyebrow}</span>
      </div>
      <h2
        className={`mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          align === "center" ? "mx-auto" : ""
        } ${isDark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`measure mt-5 text-base leading-relaxed sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-white/75" : "text-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
