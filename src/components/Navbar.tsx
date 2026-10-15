"use client";

/**
 * Navbar sticky.
 * - Fade-down saat pertama muncul.
 * - Transparan di atas, berubah jadi putih + border tipis setelah di-scroll.
 * - Mobile: menu hamburger (panel solid putih).
 */
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navLinks } from "@/data/site";
import { EASE, useReducedMotionNow } from "@/components/motion-primitives";

export function Navbar() {
  const reduce = useReducedMotionNow();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll saat menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Selalu putih solid (tanpa blur, tanpa transparansi).
  // Saat di-scroll hanya garis tipis bawah yang muncul.
  const shellClass = scrolled
    ? "border-b border-line bg-white"
    : "border-b border-transparent bg-white";

  return (
    <motion.header
      initial={reduce ? undefined : { y: -72, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className={`transition-colors duration-300 ${shellClass}`}>
        <nav className="shell flex h-20 items-center justify-between" aria-label="Navigasi utama">
          {/* Logo + wordmark */}
          <a href="#beranda" className="flex items-center gap-3" aria-label={`${brand.name} — beranda`}>
            <Image
              src="/logo/logo-512.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="font-display text-xl leading-none text-ink">{brand.name}</span>
          </a>

          {/* Menu desktop */}
          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.9375rem] font-medium text-ink/80 transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#kontak"
              className="hidden rounded-md bg-primary px-5 py-2.5 text-[0.9375rem] font-medium text-white transition-colors duration-200 hover:bg-primary-dark lg:inline-flex"
            >
              Hubungi Kami
            </a>

            {/* Tombol hamburger — hanya mobile */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink transition-colors duration-200 hover:border-primary hover:text-primary lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Tutup menu" : "Buka menu"}
            >
              {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Panel menu mobile */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            key="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="border-b border-line bg-white lg:hidden"
          >
            <ul className="shell flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-line last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-2xl text-ink transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="shell pb-6">
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
