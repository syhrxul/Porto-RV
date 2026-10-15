"use client";

/**
 * About — foto + cerita + statistik dengan animasi count-up.
 * Count-up hanya berjalan sekali, saat angka masuk viewport.
 */
import { animate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { about } from "@/data/site";
import { Reveal, SectionHeading, useReducedMotionNow } from "@/components/motion-primitives";

/** Angka yang naik dari 0 ke `value` saat terlihat di layar. */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const reduce = useReducedMotionNow();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="tentang" className="border-y border-line bg-mist py-24 lg:py-32">
      <div className="shell grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Foto */}
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-md border border-line bg-white">
            {/* GANTI: /public/images/about.jpg dengan foto tim Anda. */}
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Teks + statistik */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionHeading index="03" eyebrow={about.eyebrow} title={about.title} />
          </Reveal>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="measure text-base leading-relaxed text-muted sm:text-[1.0625rem]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl leading-none text-primary sm:text-5xl">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="mt-3 block text-sm leading-snug text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
