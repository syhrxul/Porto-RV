"use client";

/**
 * IntroLoader — layar putih dengan logo di tengah.
 * Muncul sekali per sesi (sessionStorage), lalu fade-out.
 * Kalau "reduce motion" aktif, intro langsung dilewati.
 *
 * Catatan hidrasi: intro sengaja TIDAK dirender di server. Kalau dirender,
 * kunjungan ulang dalam sesi yang sama akan sempat menampilkan layar putih
 * satu frame sebelum sessionStorage terbaca (berkedip). Jadi server
 * menganggap "sudah pernah tampil", lalu klien memutuskan sebenarnya.
 */
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useReducedMotionNow } from "@/components/motion-primitives";

const KEY = "rasavisual:intro-shown";

/* sessionStorage dibaca sebagai sistem eksternal, bukan state React. */
function subscribeNoop() {
  return () => {};
}

function readAlreadyShown() {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    // sessionStorage diblokir: anggap sudah tampil supaya tidak mengganggu.
    return true;
  }
}

/** Snapshot server & hidrasi: true = jangan render apa-apa dulu. */
function readAlreadyShownOnServer() {
  return true;
}

export function IntroLoader() {
  const reduce = useReducedMotionNow();
  const alreadyShown = useSyncExternalStore(
    subscribeNoop,
    readAlreadyShown,
    readAlreadyShownOnServer,
  );
  const [finished, setFinished] = useState(false);

  const show = !reduce && !alreadyShown && !finished;

  // Tandai sudah tampil di sesi ini, lalu tutup setelah 1,9 detik
  // (1,2 detik animasi masuk + jeda tahan).
  useEffect(() => {
    if (!show) return;
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* diabaikan: intro tetap tampil sekali di render ini */
    }
    const timer = window.setTimeout(() => setFinished(true), 1900);
    return () => window.clearTimeout(timer);
  }, [show]);

  // Kunci scroll selama intro berjalan.
  useEffect(() => {
    if (!show) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-100 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <Image
              src="/logo/logo-512.png"
              alt=""
              width={96}
              height={96}
              priority
              className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
            <span className="font-display text-xl tracking-tight text-ink sm:text-2xl">
              RasaVisual
            </span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
